
const userAgentInfo = navigator.userAgent;
localStorage.setItem('userBrowserInfo', userAgentInfo);

const savedInfo = localStorage.getItem('userBrowserInfo');
const footerInfoElement = document.getElementById('browser-info');

if (footerInfoElement) {
    footerInfoElement.textContent = `Ваша система/браузер: ${savedInfo}`;
}


const variantNumber = 28; 
const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;
const commentsContainer = document.getElementById('comments-container');

fetch(commentsUrl)
    .then(response => response.json())
    .then(comments => {
        commentsContainer.innerHTML = ''; // Очищаємо текст завантаження
        
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.style.borderBottom = '1px solid var(--border-color, #eee)';
            commentBlock.style.paddingBottom = '10px';
            commentBlock.style.marginBottom = '10px';

            commentBlock.innerHTML = `
                <strong>${comment.name}</strong> (<a href="mailto:${comment.email}">${comment.email}</a>)
                <p style="margin-top: 5px; font-style: italic;">"${comment.body}"</p>
            `;
            commentsContainer.appendChild(commentBlock);
        });
    })
    .catch(error => {
        console.error('Помилка завантаження:', error);
        commentsContainer.innerHTML = '<p style="color: red;">Не вдалося завантажити відгуки.</p>';
    });


const modal = document.getElementById('contact-modal');
const closeModalBtn = document.getElementById('close-modal');

// Функція показу модального вікна
function showModal() {
    modal.style.display = 'flex';
}


setTimeout(showModal, 60000);

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Автоматичне перемикання (Денна від 07:00 до 21:00)
function applyAutomaticTheme() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
        bodyElement.classList.remove('dark-theme');
        themeToggleBtn.textContent = '🌙 Нічний режим';
    } else {
        bodyElement.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️ Денний режим';
    }
}

applyAutomaticTheme();

// Ручне перемикання по кнопці
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️ Денний режим';
    } else {
        themeToggleBtn.textContent = '🌙 Нічний режим';
    }
});