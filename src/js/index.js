const botoes = document.querySelectorAll(".botao");
const livros = document.querySelectorAll(".livro")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarLivro();

        botao.classList.add("selecionado");
        livros[indice].classList.add("selecionado");
    });
});
function desselecionarLivro() {
    const livroSelecionado = document.querySelector(".livro.selecionado");
    livroSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}