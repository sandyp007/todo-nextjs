(function initTheme() {
    var theme = localStorage.getItem('theme') || 'false'
    if (theme === 'true') {
        document.querySelector('html').classList.add('dark')
    }
})()