const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route for daily verse
app.get('/api/daily-verse', (req, res) => {
    const verses = [
        "Verse 1: Lorem ipsum dolor sit amet.",
        "Verse 2: Consectetur adipiscing elit.",
        "Verse 3: Sed do eiusmod tempor incididunt.",
        "Verse 4: Ut labore et dolore magna aliqua."
    ];
    const today = new Date();
    const index = today.getDate() % verses.length;
    res.json({ verse: verses[index] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
