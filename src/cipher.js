
const cipher = {
  encode: (text, offset) => {
      if (!text)
      {
      return '';}
      else{
      let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      offset = (offset % 26 + 26) % 26;
      return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) + offset)% 26]);}
  },
  decode: (text, offset) => {
    if (!text)
    {
    return '';}
    else{
    let abc= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = (offset % 26 + 26) % 26;
    return text.replace(/[A-Z]/ig, c => abc[(abc.indexOf(c) - offset)% 26]);}
},

};



export default cipher;
