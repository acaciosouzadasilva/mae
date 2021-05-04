const imagens = ["1.jpg","1.png","blog-dia-das-maes-2019-1280x720.jpg","d5c9a79-dia-das-maes-imagem-1024x575.jpg","Dia-das-maes-2-750x452.jpg","dia-das-maes-f.png"]


function typeWrite(elemento){
    const textoArray = elemento.innerText.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

let img = Math.floor((Math.random(1)*imagens.length));
const fundo = (img)=>{
    
    document.body.style.backgroundImage=`url(./Assets/${imagens[img]})` ;
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize= "100% 100%"; /* Resize the background image to cover the entire container */

}
fundo(img);