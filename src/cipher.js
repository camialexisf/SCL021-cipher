
const cipher = {
   /*CIFRADO*/
   encode: (offset,text) => {
      if (typeof (offset) == 'number' || typeof (text) == 'string')  {
         let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          offset = (offset % 26 + 26) % 26;
         /*FUNCION QUE HACE EL CIFRADO, SE AGREGA SUMA DE 26 PARA QUE PUEDA OPERAR CON OFFSET ALTOS O NEGATIVOS */
         return text.replace(/[A-Z]/g, c => abc[(abc.indexOf(c) + offset + 26) % 26]);
      }
      /*TIRAR ERROR DE TIPO SI EL TIPO DE DATO INGRESADO NO CORRESPONDE*/
      else if (typeof (offset) != 'number' || typeof (text) != 'string') {
         throw new TypeError('Wrong argument types');
      }



   },
   /*DESCIFRADO // LO MISMO DE ARRIBA PERO RESTANDO*/
   decode: (offset, text) => {
      if (typeof (offset) == 'number' ||typeof (text) == 'string') {
         let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          offset = (offset % 26 + 26) % 26;
         return text.replace(/[A-Z]/g, c => abc[(abc.indexOf(c) - offset + 26) % 26]);

      }
      else if (typeof (offset) != 'number' || typeof (text) != 'string') {
         throw new TypeError('Wrong argument types');
      }



   }
};

/*
const cipher = {
   /*CIFRADO
   encode: (offset,text) => {
      if (offset, text)  {
         let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          offset = (offset % 26 + 26) % 26;
         /*FUNCION QUE HACE EL CIFRADO, SE AGREGA SUMA DE 26 PARA QUE PUEDA OPERAR CON OFFSET ALTOS O NEGATIVOS 
         return text.replace(/[A-Za-z]/g, c => ABC[(ABC.indexOf(c) + offset) % 52]);
      }
      TIRAR ERROR DE TIPO SI EL TIPO DE DATO INGRESADO NO CORRESPONDE
      else if (typeof (offset) != 'number' || typeof (text) != 'string') {
         throw new TypeError('Wrong argument types');
      }
      DESCIFRADO  LO MISMO DE ARRIBA PERO RESTANDO
   decode: (offset, text) => {
      if (typeof (text) == 'string' || typeof (offset) == 'number') {
         let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          offset = (offset % 26 + 26) % 26;
         return text.replace(/[A-Za-z]/g, c => abc[(abc.indexOf(c) - offset) % 52]);

      }
      else if (typeof (offset) != 'number' || typeof (text) != 'string') {
         throw new TypeError('Wrong argument types');
      }



   }
};*/





export default cipher;
