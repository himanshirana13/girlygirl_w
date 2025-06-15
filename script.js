// Global variables
let likeCount = 0;
let viewCount = 0;

// Function to add sparkles to elements
function addSparkles() {
    const sparkleEmojis = ['✨', '💖', '🌟', '💫'];
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('span');
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 20 + 20) + 'px';
        sparkle.style.opacity = '0';
        sparkle.style.transition = 'all 1s ease';
        sparkle.classList.add('sparkle');
        
        hero.appendChild(sparkle);
        
        // Animate sparkle
        setTimeout(() => {
            sparkle.style.opacity = '1';
            setTimeout(() => {
                sparkle.style.opacity = '0';
                setTimeout(() => sparkle.remove(), 1000);
            }, 1000);
        }, i * 100);
    }
}

// Function to change theme color
function changeThemeColor(color) {
    document.documentElement.style.setProperty('--primary-pink', color);
    document.documentElement.style.setProperty('--dark-pink', adjustColor(color, -20));
    document.documentElement.style.setProperty('--light-pink', adjustColor(color, 20));
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert(`Welcome to our girly community, ${username}! 💖✨`);
    event.target.reset();
}

// Function to handle newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Thank you for subscribing to our girly newsletter! 💌✨');
        document.getElementById('email').value = '';
    } else {
        alert('Please enter your email address! 💖');
    }
}

// Gallery functions
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-controls button');
    
    // Update active button
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to handle liking items
function likeItem(button) {
    likeCount++;
    updateLikeCounter();
    button.textContent = '💖 Liked!';
    button.disabled = true;
    
    // Add heart animation
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    heart.style.fontSize = '50px';
    heart.style.opacity = '0';
    heart.style.transition = 'all 1s ease';
    
    button.parentElement.appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '1';
        heart.style.transform = 'translate(-50%, -100%)';
        setTimeout(() => heart.remove(), 1000);
    }, 0);
}

// Function to update like counter
function updateLikeCounter() {
    const counter = document.getElementById('likeCounter');
    if (counter) {
        counter.textContent = `Total Likes: ${likeCount}`;
    }
}

// Function to update view counter
function updateViewCounter() {
    viewCount++;
    const counter = document.getElementById('viewCounter');
    if (counter) {
        counter.textContent = `Total Views: ${viewCount}`;
    }
}

// Initialize view counter when gallery page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.gallery-container')) {
        updateViewCounter();
    }
    
    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            updateViewCounter();
        });
    });
});

// About Page Functions
function showMissionAnimation() {
    const missionBtn = document.querySelector('.mission-btn');
    if (missionBtn) {
        missionBtn.innerHTML = '✨ Spreading Joy & Style! ✨';
        missionBtn.style.animation = 'sparkle 1s infinite';
        setTimeout(() => {
            missionBtn.innerHTML = 'See Our Mission in Action!';
            missionBtn.style.animation = 'none';
        }, 3000);
    }
}

function handleCommunityJoin(event) {
    event.preventDefault();
    const name = document.getElementById('communityName').value;
    const email = document.getElementById('communityEmail').value;
    const interests = document.getElementById('interests').value;
    
    alert(`Welcome to our community, ${name}! 💖\nWe'll send updates about ${interests} to ${email}`);
    event.target.reset();
}

// Style Tips Page Functions
function showTipDetails(tipId) {
    const tipDetails = {
        fashion1: 'Pink Power Dressing Tips:\n1. Start with a base of soft pink\n2. Add darker pink accents\n3. Accessorize with sparkles\n4. Complete with pink makeup!',
        fashion2: 'Accessorizing Tips:\n1. Match metals with your outfit\n2. Layer delicate necklaces\n3. Mix and match bracelets\n4. Choose bags that complement your style',
        beauty1: 'Girly Makeup Steps:\n1. Start with a glowing base\n2. Add pink blush\n3. Create a soft eye look\n4. Finish with pink lips',
        beauty2: 'Skincare Routine:\n1. Cleanse with gentle products\n2. Use pink-toned serums\n3. Moisturize with light creams\n4. Protect with SPF'
    };
    
    alert(tipDetails[tipId] || 'Tip details coming soon! 💖');
}

function submitChallenge() {
    const name = document.getElementById('challengeName').value;
    const photo = document.getElementById('challengePhoto').files[0];
    
    if (name && photo) {
        alert(`Thank you for your submission, ${name}! 💖\nWe'll review your style challenge soon!`);
        document.getElementById('challengeName').value = '';
        document.getElementById('challengePhoto').value = '';
    } else {
        alert('Please provide both your name and a photo! 💖');
    }
}

function startQuiz() {
    const questions = [
        {
            question: 'What's your favorite color?',
            options: ['Pink', 'Purple', 'Blue', 'Yellow']
        },
        {
            question: 'How do you like to accessorize?',
            options: ['Sparkly jewelry', 'Delicate pieces', 'Bold statement pieces', 'Minimal style']
        },
        {
            question: 'What's your ideal outfit?',
            options: ['Cute dress', 'Casual chic', 'Glamorous', 'Comfortable']
        }
    ];
    
    let currentQuestion = 0;
    let answers = [];
    
    function showQuestion() {
        const quizContainer = document.getElementById('quizQuestion');
        if (currentQuestion < questions.length) {
            const q = questions[currentQuestion];
            quizContainer.innerHTML = `
                <h3>${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <button onclick="selectAnswer(${i})">${opt}</button>
                    `).join('')}
                </div>
            `;
        } else {
            showResults();
        }
    }
    
    window.selectAnswer = function(index) {
        answers.push(index);
        currentQuestion++;
        showQuestion();
    };
    
    function showResults() {
        const quizContainer = document.getElementById('quizQuestion');
        const styleTypes = [
            'Classic Girly Girl 💖',
            'Modern Fashionista 👗',
            'Glamorous Diva ✨',
            'Casual Chic Queen 👑'
        ];
        
        const result = styleTypes[Math.floor(Math.random() * styleTypes.length)];
        quizContainer.innerHTML = `
            <h3>Your Style Type</h3>
            <p class="result">${result}</p>
            <button onclick="startQuiz()">Take Quiz Again! 💖</button>
        `;
    }
    
    showQuestion();
}

function subscribeStyleTips(event) {
    event.preventDefault();
    const email = document.getElementById('styleTipsEmail').value;
    const preferences = document.getElementById('stylePreferences').value;
    
    alert(`Thank you for subscribing! 💖\nWe'll send ${preferences} tips to ${email}`);
    event.target.reset();
}

// Contact Page Functions
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    alert(`Thank you for your message, ${name}! 💖\nWe'll get back to you soon about ${subject}.${newsletter ? '\nYou're subscribed to our newsletter!' : ''}`);
    event.target.reset();
}

function toggleFAQ(item) {
    item.classList.toggle('active');
}

// Mobile Menu Functions
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// Close menu when clicking a link (mobile)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when window is resized to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.menu-overlay');
            
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 