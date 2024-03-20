const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    orderHistory: [{
        restorent:{type:mongoose.Schema.Types.ObjectId,ref: 'User' } , 
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
    }],
});

mongoose.models = {};
export default mongoose.model('clientInfo', clientSchema);