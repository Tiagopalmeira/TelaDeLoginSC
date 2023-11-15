function registrarUsuario() {
    // Aqui você pode enviar os dados para o servidor ou fazer o que precisar

    // Exibe uma mensagem
    window.alert('Usuário registrado com sucesso!');

    // Limpa os campos do formulário
    clearForm();
}

function clearForm() {
    // Limpa os campos do formulário
    document.getElementById("userForm").reset();
}