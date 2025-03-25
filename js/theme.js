// Alternar tema
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Salvar preferência
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('lightTheme', isLight);
});

// Carregar tema salvo
if (localStorage.getItem('lightTheme') === 'true') {
    document.body.classList.add('light-theme');
}