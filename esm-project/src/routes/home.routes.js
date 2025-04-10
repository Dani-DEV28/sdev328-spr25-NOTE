import { Router } from 'express';

const router = Router();

router.get("/name", (req, res) => {
    res.status(200).json({
        fname: "Josh",
        lname: "Archer",
        middle: "B",
        title: "Mr.",
        nickname: "Pounce"
    })
})

router.get("/name/:you", (req, res) => {
    const yourName =req.params.you;

    res.status(200).json({
        msg: `Hello, ${yourName}`
    })
})

router.get("/multiply/:a/:b", (req, res) => {
    const {a, b} = req.params;

    a = Number(a);
    b = Number(b);

    const result = a * b;

    res.status(200).json({
        result
    })
})

router.get("/name/first/:first/middle/:middle/last/:last", (req, res) => {
    const {first, middle, last} = req.params;

    res.status(200).json({
        first,
        middle, 
        last
    })
})

export default router;