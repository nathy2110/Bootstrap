let email = document.querySelector('#email')
let assunto = document.querySelector("#assunto")
let comentario = document.querySelector("#comentario")
let emailOk = false
let assuntoOk = false
let comentarioOk = false


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'

    } else{
       txtEmail.innerHTML = 'Email Válido'
       txtEmail.style.color = 'green'
       emailOk = true


    }
}
function validaAssunto()
{
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100)
    {
        txtAssunto.innerHTML="Digite no máximo 100 caracteres"
        txtAssunto.style.color= "red"
        txtAssunto.style.display = 'block'
    }
    else 
    {
        txtAssunto.innerHTML="Ok"
        txtAssunto.style.color= "green"
        txtAssunto = true
        assuntoOk = true
    }
}
function validaComentario()
{
    let txtComentario = document.querySelector("#txtComentario")

    if (comentario.value.length >= 300)
    {
        txtComentario.innerHTML="Digite no máximo 300 caracteres"
        txtComentario.style.color= "red"
        txtComentario.style.display = 'block'
    }
    else 
    {
        txtComentario.innerHTML="Ok"
        txtComentario.style.color= "green"
        txtComentario = true
        comentarioOk = true
    }
}
function enviar() {
    if (emailOk == true && assuntoOk == true && comentarioOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar!')
    }
 }
