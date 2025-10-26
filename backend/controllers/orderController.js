import orderModel from "../models/orderModel.js";

//placing orders using cash on delivery
const placeOrder = async (req, res) => {
    try {

        const { userId,items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            PaymentMethod : 'COD',
            payment : false,
            date : Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartDara:{}});
        res.json({ success: true, message: 'Order placed successfully' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//placing order using stripe
const placeOrderStripe = async (req, res) => {
    
}

//placing order using razorpay
const placeOrderRazorpay = async (req, res) => {
    
}

//all orders data for admin panel
const allOrders = async (req, res) => {
    
}

//user order data for frontend
const userOrders = async (req, res) => {
    
}

//update order status
const updateStatus = async (req, res) => {
    
}

export { placeOrder, allOrders, userOrders, updateStatus, placeOrderStripe, placeOrderRazorpay };