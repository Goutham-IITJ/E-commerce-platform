import userModel from "../models/userModel.js";


//addd products to user cart
const addToCart = async (req, res) => {
    try {
        
        const { userId , itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        let cartData= await userData.cartData;

        if (cartData[itemId]) {
            if( cartData[itemId][size] ) {
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};//create object for item
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData});//update user cart data
        res.json({success: true, message: 'Item added to cart'});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//update cart item quantity
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;// get userId, itemId, size and quantity from request body
        const userData = await userModel.findById(userId);// find user by userId
        let cartData = await userData.cartData;// get user cart data

        cartData[itemId][size] = quantity;// update item quantity in cart

        await userModel.findByIdAndUpdate(userId, { cartData });// update user cart data
        res.json({ success: true, message: 'Cart updated successfully' });// return success message

    } catch (error) {
        console.log(error);// log error to console
        res.json({ success: false, message: error.message });// return error message
    }
}

//get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;// get userId from request body
        const userData = await userModel.findById(userId);// find user by userId
        let cartData = await userData.cartData;// get user cart data

        res.json({ success: true, cartData });// return user cart data

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addToCart, updateCart, getUserCart};// export functions to be used in routes
// These functions handle adding items to the cart, updating item quantities, and retrieving the user's cart