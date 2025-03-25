// Fetch de jogos populares
async function fetchPopularGames() {
    try {
        const response = await fetch('https://api.rawg.io/api/games?key=SUA_CHAVE_API');
        const data = await response.json();
        renderGames(data.results);
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
    }
}

function renderGames(games) {
    const container = document.getElementById('games-container');
    games.forEach(game => {
        container.innerHTML += `
            <div class="game-card">
                <img src="${game.background_image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>Rating: ${game.rating}</p>
            </div>
        `;
    });
}

// Chamada inicial
fetchPopularGames();