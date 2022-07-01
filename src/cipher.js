
const cipher = {
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
};

export default cipher;

