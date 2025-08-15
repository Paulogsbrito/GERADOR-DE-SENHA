
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let NovaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(pass)
    
   containerpassword.classList.remove("hide");
   password.innerHTML = pass;
   NovaSenha = pass;


}


function CopyPassword(){
    alert("Senha Copiada com Sucesso");
    navigator.clipboard.writeText(NovaSenha);
}


