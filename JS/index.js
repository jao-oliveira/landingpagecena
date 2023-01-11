const form   = document.getElementById ('form')
const campos = document.querySelectorAll ('.required')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const spans = document.querySelectorAll ('.span-required')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nomeValidate();
    emailValidate();
    telValidate();

})


function setError(index){
    campos[index].style.border = '2px solid #e63639'
    spans[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
    
}


function nomeValidate(){
    if(campos [0].value.length  < 3)
    {
        setError(0);
        spans(0);
    
    }else{
        removeError(0)
        console.log ('NOME VLIDADO');
}
}

function emailValidate(){
    if (emailRegex.test(campos[1].value)){
        console.log('EMAIL VALIDADO')
        removeError(1)
    }else{
        console.log ('EMAIL INVALIDO')
        setError(1);
        spans(1);
    }
}

function telValidate(){
    if(campos[2].value.length < 11){
        setError(2)
    }else{
        console.log('TELEFONE VALIDADO')
        removeError(2)
    }
}
