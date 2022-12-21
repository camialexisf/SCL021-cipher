const cipher = {
  /*CIFRADO*/
  encode: (offset, text) => {
    let result = "";
    let toEncrypt = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
      const letter = toEncrypt[i].charCodeAt();

      if (toEncrypt[i] == " ") {
        result = result + " ";
      } else {
        let encyptedLetter = String.fromCharCode(
          ((letter - 65 + parseInt(offset)) % 26) + 65
        );
        result = result + encyptedLetter;
      }
    }
    return result;
  },
  decode: (offset, text) => {
    let result = "";
    let toEncrypt = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
      const letter = toEncrypt[i].charCodeAt();

      if (toEncrypt[i] == " ") {
        result = result + " ";
      } else {
        let encyptedLetter = String.fromCharCode(
          ((letter + 65 - parseInt(offset)) % 26) + 65
        );
        result = result + encyptedLetter;
      }
    }
    return result;
  },
};

export default cipher;
