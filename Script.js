const moodSelector = document.getElementById('moodSelector');
const generateBtn = document.getElementById('generateBtn');
const emojiEl = document.getElementById('emoji');
const quoteEl = document.getElementById('quote');

const moods = {
    happy: {
        color: 'linear-gradient(120deg, #f6d365, #fda085)',
        emoji: '😊',
        quotes: [
            "Happiness is a journey, not a destination.",
            "Smile, it’s contagious!",
            "Choose to be happy today."
        ]
    },
    sad: {
        color: 'linear-gradient(120deg, #89f7fe, #66a6ff)',
        emoji: '😢',
        quotes: [
            "Tough times never last, but tough people do.",
            "Every storm runs out of rain.",
            "It's okay to not be okay."
        ]
    },
    angry: {
        color: 'linear-gradient(120deg, #ff758c, #ff7eb3)',
        emoji: '😡',
        quotes: [
            "Control your anger, it’s just one letter away from danger.",
            "Breathe. Count to ten.",
            "Respond with patience, not rage."
        ]
    },
    calm: {
        color: 'linear-gradient(120deg, #cfd9df, #e2ebf0)',
        emoji: '😌',
        quotes: [
            "Peace begins with a smile.",
            "Inhale calm, exhale stress.",
            "Silence is sometimes the best answer."
        ]
    },
    excited: {
        color: 'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
        emoji: '🤩',
        quotes: [
            "Dream big, work hard, stay excited.",
            "Adventure awaits!",
            "Life is too short to be anything but excited."
        ]
    }
};

generateBtn.addEventListener('click', () => {
    const mood = moods[moodSelector.value];
    document.body.style.background = mood.color;
    emojiEl.textContent = mood.emoji;
    const randomQuote = mood.quotes[Math.floor(Math.random() * mood.quotes.length)];
    quoteEl.textContent = randomQuote;
});