window.addEventListener('load', inicio, true);

document.getElementById('copyText').addEventListener('click', function copy(){
    var copyText= document.getElementById('decode-msg');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value)
    alert('Se ha copiado el texto: '+ copyText.value)

});


              /*TRANSFORMA LETRAS A MAYUS
/*function inicio(){
    document.getElementById('msg').addEventListener('keyup', function(){
        this.value = this.value.toUpperCase();
    }, true);     

      /* FUNCION Q HACE LINK AL BOTON QUE CODIFICA */
/*document.getElementById('code').addEventListener('click', function(){
      let text = document.getElementById('msg').value;
      let offset = document.getElementById('offset').value;
    document.getElementById('decode-msg').value= cipher.encode;
     }, true);

       /*FUNCION QUE  HACE EL LINK A BOTON Q DECODIFICA */
 /*document.getElementById('decode').addEventListener('click', function(){
    let text = document.getElementById('msg').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('decode-msg').value = cipher.decode;
}, true);
};
      /*FUNCION QUE CODIFICA
/*function cifrar(text, offset){
    if (!text)
    {
    return '';}
    else{
    let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = (offset % 26 + 26) % 26;
    return text.replace(/[a-zA-Z]/ig, c => abc[(abc.indexOf(c) + offset)% 26]);}
}
            /*FUNCION QUE DECODIFICA
function descifrar(text, offset){
    if (!text)
    return '';
    let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = (offset % 26 - 26) % 26;
    return text.replace(/[a-zA-Z]/ig, c => abc[(abc.indexOf(c) - offset)% 26]);
}
*/

import cipher from './cipher.js';

console.log(cipher);
