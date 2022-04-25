function pare (){
document.querySelector('#vermelho').classList.remove('opacidade')
document.querySelector('#laranja').classList.add('opacidade')
document.querySelector('#verde').classList.add('opacidade')

}

function atençao (){

document.querySelector('#vermelho').classList.add('opacidade')
document.querySelector('#laranja').classList.remove('opacidade')
document.querySelector('#verde').classList.add('opacidade')

}

function siga (){
document.querySelector('#vermelho').classList.add('opacidade')
document.querySelector('#laranja').classList.add('opacidade')
document.querySelector('#verde').classList.remove('opacidade')
}