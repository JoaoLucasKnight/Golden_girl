const btnCarrinho = document.querySelector(".cabecalho__carrinho")
const btnExit = document.querySelector(".menulateral__button")
const menu = document.querySelector(".menulateral--desativado")


btnExit.addEventListener("click", () =>{
    menu.classList.replace('menulateral', 'menulateral--desativado')
})

btnCarrinho.addEventListener("click", ()=> {
    menu.classList.replace('menulateral--desativado' ,'menulateral')
})