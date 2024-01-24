function iniciaSom (seletorSom) {
    const elemento = document.querySelector(seletorSom);

     if (elemento != null && elemento.localName === 'audio') { 
          elemento.play(); 
      }
     else {
         console.log ('Elemento não encontrado ou inexistente.') 
     }

}


const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idSom = `#som_${instrumento}`


    tecla.onclick = function () { 
        iniciaSom(idSom)
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


    /*logs
    console.log(idSom)
    console.log(contador);
    */
}

