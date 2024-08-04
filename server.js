document.addEventListener('DOMContentLoaded', () => {
    const verseElement = document.getElementById('daily-verse');
    if (verseElement) {
        fetch('/api/daily-verse')
            .then(response => response.json())
            .then(data => {
                verseElement.textContent = data.verse;
            });
    }
});
