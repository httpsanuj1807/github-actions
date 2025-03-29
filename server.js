import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.json("Backend in running.");
})

app.get('/api/getName', (req, res) => {
    res.status(200).json({
        name: "Anuj Kumar"
    });
} )

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

