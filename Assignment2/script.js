const input = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const display = document.getElementById('display-name');

window.onload = () => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        display.textContent = `Welcome back, ${savedName}!`;
    }
};

saveBtn.onclick = () => {
    const name = input.value.trim();
    if (name) {
        localStorage.setItem('name', name);
        display.textContent = `Welcome, ${name}!`;
        input.value = '';
    }
};

clearBtn.onclick = () => {
    localStorage.removeItem('name');
    display.textContent = '';
};
