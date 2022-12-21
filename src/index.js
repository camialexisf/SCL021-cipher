import cipher from "./cipher.js";

/* BOTON QUE CODIFICA */
document.getElementById("code").addEventListener(
  "click",
  () => {
    let text = document.getElementById("msg").value;
    let offset = parseInt(document.getElementById("offset").value);
    document.getElementById("decode-msg").value = cipher.encode(offset, text);
  },
  true
);

/*BOTON QUE DECODIFICA */
document.getElementById("decode").addEventListener(
  "click",
  function () {
    let text = document.getElementById("msg").value;
    let offset = parseInt(document.getElementById("offset").value);
    document.getElementById("decode-msg").value = cipher.decode(offset, text);
  },
  true
);

/*BOTON QUE COPIA*/

document.getElementById("copyText").addEventListener("click", function copy() {
  var copyText = document.getElementById("decode-msg");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Se ha copiado el texto: " + copyText.value);
});

/*TRANSFORMA LETRAS A MAYUS*/

document.getElementById("msg").addEventListener(
  "keyup",
  function () {
    this.value = this.value.toUpperCase();
  },
  true
);
//
