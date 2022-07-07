const cipher = {
  encode: (text, offset) => {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (!text) {
      return '';
    }
    else if (abc == abc.toUpperCase()) {
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        offset = (offset % 26 + 26) % 26;
      return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) + offset) % 26]);
    }
    else if (abc == abc.toLowerCase()) {
      let abc = 'abcdefghijklmnopqrstuvwxyz';
      offset = (offset % 26 + 26) % 26;
      return text.replace(/[a-z]/ig, c => abc[(abc.indexOf(c) + offset) % 26]);

    }
  },

  decode: (text, offset) => {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!text) {
      return '';
    }
    else if (abc == abc.toUpperCase()) {
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        offset = (offset % 26 + 26) % 26;
      return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) - offset) % 26]);
    } 
    else if (abc == abc.toLowerCase()) {
      let abc = 'abcdefghijklmnopqrstuvwxyz';
      offset = (offset % 26 + 26) % 26;
      return text.replace(/[a-z]/ig, c => abc[(abc.indexOf(c) - offset) % 26]);
    }}
    }



    export default cipher;
