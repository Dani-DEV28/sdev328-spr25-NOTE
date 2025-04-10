import express from 'express';

const router = express.Router();

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
<<<<<<< HEAD
    const yourName =req.params.you;
=======
    const yourName = req.params.you;
>>>>>>> 4c2122d238550465b9849edcb1368f85d62241ca

    res.status(200).json({
        msg: `Hello, ${yourName}`
    })
})

router.get("/multiply/:a/:b", (req, res) => {
<<<<<<< HEAD
    const {a, b} = req.params;

=======
    let { a, b } = req.params;

    //convert string to number
>>>>>>> 4c2122d238550465b9849edcb1368f85d62241ca
    a = Number(a);
    b = Number(b);

    const result = a * b;

    res.status(200).json({
        result
    })
})

router.get("/name/first/:first/middle/:middle/last/:last", (req, res) => {
<<<<<<< HEAD
    const {first, middle, last} = req.params;

    res.status(200).json({
        first,
        middle, 
=======
    const { first, last, middle } = req.params;

    res.status(200).json({
        first,
        middle,
>>>>>>> 4c2122d238550465b9849edcb1368f85d62241ca
        last
    })
})

export default router;