const router = require('express').Router();
const FridgeItem = require('../models/fridgeItem');

router.post('/', async(req, res) => {
    const { name } = req.body;
    const userId = req.user.id;
    const fridgeItem = new FridgeItem({ name, userId });
    await fridgeItem.save();0

    res.status(201).json(fridgeItem);
})

router.get('/', async (req, res) => {
    const items = await FridgeItem.find({ userId: req.user.id });
    res.json(items);
})

module.exports = router;

