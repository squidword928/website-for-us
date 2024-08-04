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

// Route for Daily Verse page
app.get('/daily-verse', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/daily-verse.html'));
});

// Route for Gallery page
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/gallery.html'));
});

// Route for Dates to Remember page
app.get('/dates-to-remember', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dates-to-remember.html'));
});

// Catch-all route to handle 404 errors
app.use((req, res) => {
    res.status(404).send('404: NOT_FOUND\nCode: NOT_FOUND\nID: sin1::cpsfm-1722792123200-16fc2c16aa63');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
