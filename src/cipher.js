const cipher = {
   encode: (text, offset) => {
      let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
      offset = (offset % 27 + 27) % 27;
      return text.replace(/[A-Za-zÑñ]/g, c => abc[(abc.indexOf(c) + offset) % 54]);

   },
   decode: (text, offset) => {
      let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
      offset = (offset % 27 + 27) % 27;
      return text.replace(/[A-Za-zÑñ]/g, c => abc[(abc.indexOf(c) - offset) % 54]);
   }
}





/*const cipher = {
  shift: (offset % 26 + 26) % 26,

  encode: (text, shift) => { 
    let abc= "";
    if (abc == abc.toUpperCase()) {
       let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) + shift) % 26]);
    }
    else if (abc == abc.toLowerCase()) {
       let abc = 'abcdefghijklmnopqrstuvwxyz';
    return text.replace(/[a-z]/ig, c => abc[(abc.indexOf(c) + shift) % 26]);

    }
  },

  decode: (text, shift) => {
     let abc = "";
    if (abc == abc.toUpperCase()) {
       let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return text.replace(/[A-Z]/g, c => abc[(abc.indexOf(c) - shift) % 26]);
    }
    else if (abc == abc.toLowerCase()) {
       let abc = 'abcdefghijklmnopqrstuvwxyz';
    return text.replace(/[a-z]/g, c => abc[(abc.indexOf(c) - shift) % 26]);
    }
  }
}
*/


export default cipher;
