window.onload = function() {
    loadTheme();
};

const toggleBtn = document.querySelector(".img-pp");

toggleBtn.addEventListener('click', e => {
    changeTheme();
});

function changeTheme() {
    let theme = localStorage.getItem('theme');
    console.log('old theme: ' + theme);

    if (theme === 'day') {
        document.documentElement.setAttribute('class', 'theme-dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('class', 'theme-day');
        localStorage.setItem('theme', 'day');
    }
    console.log('new theme: ' + localStorage.getItem('theme'));
}

function loadTheme() {
    let theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('class', 'theme-dark');
    } else {
        document.documentElement.setAttribute('class', 'theme-day');
    }
    console.log('theme: ' + theme);
}