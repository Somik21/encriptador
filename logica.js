
document.getElementById('copiarContenido').style.display = 'none';
document.getElementById('texto').style.display = 'none';

//*
function encriptar(){
    let mensaje = document.getElementById('contenido__mensaje').value;
    let mensajeEncriptado = mensaje.replace(/e/gi,"enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let texto = document.getElementById('texto')
    texto.innerHTML = `${mensajeEncriptado}`
    document.querySelector('#copiarContenido').removeAttribute('disabled')
    document.getElementById('imagen__buscar').style.display = 'none';
    document.getElementById('copiarContenido').style.display = 'block';
    document.getElementById('texto').style.display = 'block';
    document.getElementById('subtitulo').style.display = 'none';
    document.getElementById('texto__busqueda').style.display = 'none';
}

const copiarContenido = async () => {
    let texto = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al clipboard');
    } catch (err) {
        console.error('Falló al copiar: ', err);
    }
}

//*


function desencriptar(){
    let mensajeEncriptado2 = document.querySelector('#contenido__mensaje').value;
    let mensajeDesencriptado2 = mensajeEncriptado2.replace(/enter/img,"e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u");
    console.log(mensajeDesencriptado2);
    let texto = document.getElementById('texto');
    texto.innerHTML = `${mensajeDesencriptado2}`;

    document.querySelector('#copiarContenido').removeAttribute('disabled')
    document.getElementById('imagen__buscar').style.display = 'none';
    document.getElementById('copiarContenido').style.display = 'block';
    document.getElementById('texto').style.display = 'block';
    document.getElementById('subtitulo').style.display = 'none';
    document.getElementById('texto__busqueda').style.display = 'none';

 
}