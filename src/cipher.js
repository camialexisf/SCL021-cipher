const cipher = {
  /*CIFRADO*/
  encode: (offset, text) => {
    if (typeof offset == "number" || typeof text == "string") {
      let result = "";
      let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      offset = ((offset % 26) + 26) % 26;
      //FUNCION QUE HACE EL CIFRADO, SE AGREGA SUMA DE 26 PARA QUE PUEDA OPERAR CON OFFSET ALTOS O NEGATIVOS //
      // return text.replace(/[A-Z]/g, c => abc[(abc.indexOf(c) + offset + 26) % 26]);//
      //FUNCION UTILIZANDO FOR//
      for (let i = 0; i < text.length; i++) {
        if (abc.indexOf(text[i] != -1)) {
          let position = (abc.indexOf(text[i]) + offset) % 26;
          result += abc[position];
        } else result += text[i];
      }
      return result;
    } else {
    /*TIRAR ERROR DE TIPO SI EL TIPO DE DATO INGRESADO NO CORRESPONDE*/
      throw new TypeError("Wrong argument types");
    }
  },
  /*DESCIFRADO // LO MISMO DE ARRIBA PERO RESTANDO*/
  decode: (offset, text) => {
    if (typeof offset == "number" || typeof text == "string") {
      let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      offset = ((offset % 26) + 26) % 26;
      return text.replace(
        /[A-Z]/g,
        (c) => abc[(abc.indexOf(c) - offset + 26) % 26]
      );
    } else {
      throw new TypeError("Wrong argument types");
    }
  },
};

export default cipher;
