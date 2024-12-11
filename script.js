var body = document.querySelector("body")
var btn_darkmode = document.querySelector("#dark-mode")

function darkmode (){
    body.classList.toggle("dark-mode")
    if(btn_darkmode.textContent == "Ativar"){
        btn_darkmode.textContent = "Desativar"
    }else{
        btn_darkmode.textContent = "Ativar"
    }

}
addEventListener("click", darkmode)