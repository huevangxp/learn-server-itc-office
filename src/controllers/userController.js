const db = require('../configs/db')

exports.create = async (req, res) => {
    try {
        res.status(200).json({message:"create success"})
    } catch (error) {
        return res.status(500).json({message:'server error...!'})
    }
}