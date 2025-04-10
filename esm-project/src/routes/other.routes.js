import {Router} from 'express';

const router = Router();

router.get("/books/search", (req, res) => {
    const author = req.query.author;

    res.status(200).json({
        found: true,
        author
    })
})

export default router;