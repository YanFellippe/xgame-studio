// Fechar menu ao clicar em um item (mobile)
document.querySelectorAll('#cabecalho a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('cabecalho');
        navbar.classList.remove('active'); // Se estiver usando classe para menu mobile
    });
});

// Barra de pesquisa dinâmica
document.getElementById('pesquisa').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    // Filtragem de conteúdo em tempo real
});