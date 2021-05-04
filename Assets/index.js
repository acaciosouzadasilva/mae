const imagens = [
"1.jpg",
"blog-dia-das-maes-2019-1280x720.jpg",
"d5c9a79-dia-das-maes-imagem-1024x575.jpg",
"Dia-das-maes-2-750x452.jpg",
"dia-das-maes-f.png",
"63cf50ae21a3511c9c58525ae315340e.jpg",
"download1.jpg",
"download2.jpg",
"download.jpg",
"feliz-dia-das-maes-de-fundo-com-a-familia_23-2147796625.jpg",
"fundo_fotografico_dia_das_maes_em_tecido_591_1_20201213230024.jpg"
]


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

let img = Math.floor((Math.random(1)*(imagens.length-1)));
//console.log(imagens.length)
//console.log(imagens[img])
const fundo = (img)=>{
    
    document.body.style.backgroundImage=`url(./Assets/${imagens[img]})` ;
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize= "100% 100%"; /* Resize the background image to cover the entire container */

}
fundo(img);
