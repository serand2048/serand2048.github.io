(function () {
    const path = window.location.pathname;
    const switcher = document.getElementById('lang-switch');
    if (!switcher) return;

    let targetPath = null;

    if (path.includes('/ru/')) {
        targetPath = path.replace('/ru/', '/en/');
        switcher.textContent = 'EN';
    } else if (path.includes('/en/')) {
        targetPath = path.replace('/en/', '/ru/');
        switcher.textContent = 'RU';
    } else {
        // главная страница вне /ru/ или /en/ — прячем кнопку
        switcher.style.display = 'none';
        return;
    }

    switcher.href = targetPath;
})();