window.addEventListener('load', inicio, true);

function myFunction() {
    let copyText = document.getElementById("decodeMsg");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }


function inicio(){
    document.getElementById('msg').addEventListener('keyup', function(){
        this.value = this.value.toUpperCase();
    }, true);
document.getElementById('code').addEventListener('click', function(){
      let text = document.getElementById('msg').value;
      let offset = document.getElementById('offset').value;
    document.getElementById('decode-msg').value= cifrar(text, offset);
     }, true);



document.getElementById('decode').addEventListener('click', function(){
    let text = document.getElementById('msg').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('decode-msg').value = descifrar(text, offset);
}, true);
}

function cifrar(text, offset){
    if (!text)
    {
    return '';}
    else{
    let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = (offset % 26 + 26) % 26;
    return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) + offset)% 26]);}
}
function descifrar(text, offset){
    if (!text)
    return '';
    let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = (offset % 26 - 26) % 26;
    return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) - offset)% 26]);
}



import cipher from './cipher.js';

console.log(cipher);
