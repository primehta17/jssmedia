const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line
const bcrypt = require('bcrypt');
const app = express();
const crypto = require('crypto');
const axios = require('axios');
const paypal = require('paypal-rest-sdk')

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
let salt_key = '96434309-7796-489d-8924-ab56988a6076';
let merchant_id = 'PGTESTPAYUAT86';

// let salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
// let merchant_id = 'PGTESTPAYUAT'


paypal.configure({
    "mode": 'sandbox',
    "client_id": "",
    "client_secret": '',
});
// MongoDB setup
mongoose.connect('mongodb://localhost:27017/adidatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    tag: String,
    username: String,
    product: String,
    email: String,
    number: String,
    numcode: String,
});
const FormModel = mongoose.model('Form', FormSchema);
const ComplaintSchema = new Schema({
    tag: String,
    querymsg: String,
    username: String,
    email: String,
    number: String,
    numcode: String,
});
const ComplaintModel = mongoose.model('Complaint', ComplaintSchema);

const ModalSchema = new Schema({
    tag: String,
    product: String,
    username: String,
    email: String,
    number: String,
    numcode: String,
});
const ModalModel = mongoose.model('Modal', ModalSchema);

const ProductSchema = new Schema({
    tag: String,
    username: String,
    email: String,
    number: String,
    numcode: String,
});
const ProductModel = mongoose.model('Product', ProductSchema);
// Routes


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of email
    },
    number: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of number
    },
    numcode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Number,
        default: 0 // Set default value to 0
    }
});
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ number: 1 }, { unique: true });
// Create User model
const User = mongoose.model('User', userSchema);


const PaymentSchema = new Schema({
    tag: String,
    product: String,
    username: String,
    email: String,
    number: Number,
    numcode: String,
    account: Number,
    MID: String,
    transactionId: String
});
const PaymentModel = mongoose.model('Payment', PaymentSchema);



app.post('/api/submit-form', async (req, res) => {

    console.log(req.body)
    try {
        const { tag, username, product, email, number, numcode } = req.body;
        const formEntry = new FormModel({ tag, username, product, email, number, numcode });
        await formEntry.save();
        res.status(200).json({ success: true, message: 'Form submitted in server' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.post('/api/submit-complaint', async (req, res) => {
    try {
        const { tag, querymsg, username, email, number, numcode } = req.body;
        const complaintEntry = new ComplaintModel({ tag, querymsg, username, email, number, numcode });
        await complaintEntry.save();
        res.status(200).json({ success: true, message: 'Complaint submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.post('/api/submit-modal', async (req, res) => {
    try {
        const { tag, product, username, email, number, numcode } = req.body;
        const modalEntry = new ModalModel({ tag, product, username, email, number, numcode });
        await modalEntry.save();
        res.status(200).json({ success: true, message: 'Data submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.post('/api/submit-products', async (req, res) => {
    try {
        const { tag, username, email, number, numcode } = req.body;
        const productEntry = new ProductModel({ tag, username, email, number, numcode });
        await productEntry.save();
        res.status(200).json({ success: true, message: 'Product data submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
app.post('/api/submit-signup', async (req, res) => {
    try {
        // Extract form data from request body
        const { username, email, number, numcode, password } = req.body;

        // Check if email or number already exists in the database
        const existingUser = await User.findOne({ $or: [{ email }, { number }] });
        if (existingUser) {
            // If email or number already exists, respond with appropriate error message
            return res.status(400).json({ message: 'Email or number already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create new user instance with hashed password
        const newUser = new User({
            username,
            email,
            number,
            numcode,
            password: hashedPassword // Store hashed password
        });

        // Save user to the database
        await newUser.save();

        // Respond with success message
        res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
        // If an error occurs, respond with error message
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

// app.post('/api/submit-signup', async (req, res) => {
//     try {
//         // Extract form data from request body
//         const { username, email, number, numcode, password } = req.body;

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//         // Create new user instance with hashed password
//         const newUser = new User({
//             username,
//             email,
//             number,
//             numcode,
//             password: hashedPassword // Store hashed password
//         });

//         // Save user to the database
//         await newUser.save();

//         // Respond with success message
//         res.status(200).json({ message: 'User signed up successfully' });
//     } catch (error) {
//         // If an error occurs, respond with error message
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred' });
//     }
// });

app.post('/api/submit-login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // If email and password match, return success
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.get('/api/user-profile/:email', async (req, res) => {
    try {
        const userEmail = req.params.email;

        // Fetch user data from database based on email
        const user = await User.findOne({ email: userEmail });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Extract relevant user information
        const userData = {
            name: user.username,
            email: user.email,
            number: user.number,
            numcode: user.numcode
        };

        // Send user data as response
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // Validate input data
        if (!email || !newPassword) {
            return res.status(400).json({ error: "Email and newPassword are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password in the database
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error updating password:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});



// app.post('/api/submit-signup', async (req, res) => {
//     try {
//         // Extract form data from request body
//         const { username, email, number, numcode, password } = req.body;

//         // Create new user instance
//         const newUser = new User({
//             username,
//             email,
//             number,
//             numcode,
//             password
//         });

//         // Save user to the database
//         await newUser.save();

//         // Respond with success message
//         res.status(200).json({ message: 'User signed up successfully' });
//     } catch (error) {
//         // If an error occurs, respond with error message
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred' });
//     }
// });
// app.post('/api/submit-login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Check if the provided password matches the one stored in the database
//         if (user.password !== password) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // If email and password match, return success
//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred' });
//     }
// });




app.post('/api/order', async (req, res) => {

    try {
        let merchantTransactionId = req.body.transactionId
        const { tag, account, amount, product, MID, transactionId, username, email, number, numcode } = req.body;
        const paymentEntry = new PaymentModel({ tag, account, amount, product, MID, transactionId, username, email, number, numcode });
        await paymentEntry.save();
        res.status(200).json({ success: true, message: 'Payment submitted successfully' });
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            username: req.body.username,
            account: req.body.account * 100,
            redirectUrl: `http://localhost:7000/status?id=${merchantTransactionId}`,
            redirectMode: "POST",
            number: req.body.number,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        }


        const payload = JSON.stringify(data)
        const payloadMain = Buffer.from(payload).toString('base64')
        const keyIndex = 1
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;


        // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        }

        await axios(options).then(function (response) {
            console.log(response.data)
            return res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' });
    }


})


app.post('/status', async (req, res) => {

    const merchantTransactionId = req.query.id
    const merchantId = merchant_id


    const keyIndex = 1
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;


    const options = {
        method: 'GET',
        url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }


    }


    axios.request(options).then(function (response) {
        if (response.data.success === true) {
            const url = 'http://localhost:3000/thankyou'
            return res.redirect(url)
        } else {
            const url = 'http://localhost:3000/fail'
            return res.redirect(url)
        }

    }).catch(function (error) {
        console.log(error)
    })


})

////paypal
app.post('/api/orderpaypal', async (req, res) => {

    try {
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:7000/success",
                "cancel_url": "http://localhost:7000/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };



        await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(payment);

                let data = payment
                res.json(data);
            }

        })


    } catch (error) {
        console.log(error);
    }
})


app.get('/success', async (req, res) => {
    try {
        console.log(req.query);

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const express_checkout_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        }

        paypal.payment.execute(paymentId, express_checkout_json, function (error, payment) {
            if (error) {
                console.log(error);
                return res.redirect("http://localhost:3000/failed")
            } else {

                const response = JSON.stringify(payment);
                const ParsedResponse = JSON.parse(response);

                console.log(ParsedResponse);

                return res.redirect("http://localhost:3000/success")

            }
        })




    } catch (error) {
        console.log(error);
    }
})


app.get('/failed', async (req, res) => {

    return res.redirect("http://localhost:5173/failed")
})

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// npx nodemon index.js
//https://globisor.com/api/backend/api/complaint.php