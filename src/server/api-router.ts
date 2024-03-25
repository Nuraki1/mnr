import express from "express";
import testData from "../test-data-filter.json"

const router = express.Router();

router.get("/contest", (req, res)=>{
    res.send(testData)

});

export default router;