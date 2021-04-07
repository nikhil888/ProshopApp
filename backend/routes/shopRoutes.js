import express from 'express';
import asyncHandler from 'express-async-handler'
import Shop from '../models/shopModel.js'
const router = express.Router();

//get all Shop
//PUBLIC
router.get('/',asyncHandler(async (req,res) => {
    const shops = await Shop.find({})
    res.json(shops)
}))

//get single Shop
//PUBLIC
router.get('/:id',asyncHandler(async (req,res) => {
    const shop = await Shop.findById(req.params.id)
    if(shop){
        res.json(shop)
    }else{
        res.status(404)
        throw new Error('Shop not found')
    }

}))

export default router