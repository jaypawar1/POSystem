const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    busnessPassword:{type:String},
    BusnessId:{type:String},
    project_ids:[
        {type:String},
    ],
    createdAt: { type: Date, default: Date.now },
    validity: { type: Date, default: Date.now },
    status: { type: String, default: "Active" },
    Order: [{
        client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
        table: {
            tableCatagery: { type: String },
            number: { type: Number },
        },
        Orders: [{
            catagory:{type:String , required:true},
            MenuItem: { type: String , required:true},
            quantity: { type: Number, default: 1 },
            amount: { type: Number, required: true }
        },
        ],
        orderAs: { type: String, default: "Dine-in" },
        orderBy: { type: String , default:"POS"},
        status: { type: String, default: "KOT" },
        createdAt: { type: Date, default: Date.now },
        payment: { type: String, default: "Pending" },
        paidBy:{type:String, default:"Cash"},
        totalAmount: { type: Number, required: true },
        discount: { type: Number},
        tax: { type: Number, required: true },
        grandTotal: { type: Number, required: true },
    }],
    menu: [{
        catagory: { type: String, required: true },
        menuItems: [{
            menuItem: { type: String, required: true },
            desc: { type: String },
            image: { data: Buffer, contentType: String },
            tax:{
                SGST :{ type: Number },
                CGST :{ type: Number }
            },
            price: { type: Number, required: true },
        }]
    }],
    tables: [{
        catagory: { type: String, default: "default" },
        table: [{
            number: { type: Number, required: true },
            status: { type: String, default: "Available" }
        }],

    }],
});
mongoose.models = {}
export default mongoose.model('User', userSchema);
