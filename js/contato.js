// Validação de formulário
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('exampleInputEmail1').value;
    const senha = document.getElementById('exampleInputPassword1').value;

    if (!email.includes('@')) {
        alert('Por favor, insira um email válido');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres');
        return;
    }

    // Envio para o servidor (simulação)
    console.log('Formulário válido!', { email, senha });
});