
const cipher = {
text : document.getElementById('msg').value,
offset : document.getElementById('offset').value,
abc: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
offset: (offset % 26 + 26) % 26,
encode(text, offset){
  if (!text)
  {
  return '';}
  else{
  return text.replace(/[a-zA-Z]/ig, c => abc[(abc.indexOf(c) + offset)% 26]);}
},
decode(text, offset){
  if (!text)
  return '';
  return text.replace(/[a-zA-Z]/ig, c => abc[(abc.indexOf(c) - offset)% 26]);
},
};



export default cipher;
