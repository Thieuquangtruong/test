const inventoryModel = require("../models/inventory.model")


const getProduct = async (req, res) => {
    try {
        const inventory = await inventoryModel.find(); 

        return res.status(200).json({message: "Get product success", inventory})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getProduct100 = async (req, res) => {
    try {
        const inventory = await inventoryModel.find({
            instock: {
              $lt: 100
            }
          }); 
        return res.status(200).json({message: "Get product success", inventory})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

module.exports = {
    getProduct,
    getProduct100,
}