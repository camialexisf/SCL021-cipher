/*const cipher = {
   encode: (text, offset) => {
var lowerCaseText = text.toLowerCase();
var abc= 'abcdefghijklmnopqrstuvwxyz'.split('');
var newText= '';
for (var i=0; i< lowerCaseText.lenght; i++){
   var letraInicial = lowerCaseText[i];
   if(letraInicial === ''){
      newText += letraInicial;
      continue;
   }
   var currentIndex = abc.indexOf(letraInicial);
   var newIndex = currentIndex + offset;
   if(newIndex > 25)newIndex= newIndex - 26;
   if (newIndex < 0) newIndex =newIndex + 26;
   if (text[i] === text[i].toUppercase()){
      newText += abc[newIndex].toUpperCase();
   }
   else newText + abc[newIndex]
}
return newText;
   },
   decode: (text, offset) => {
      var lowerCaseText = text.toLowerCase();
      var abc= 'abcdefghijklmnopqrstuvwxyz'.split('');
      var newText= '';
      for (var i=0; i< lowerCaseText.lenght; i++){
         var letraInicial = lowerCaseText[i];
         if(letraInicial === ''){
            newText += letraInicial;
            continue;
         }
         var currentIndex = abc.indexOf(letraInicial);
         var newIndex = currentIndex + offset;
         if(newIndex > 25)newIndex= newIndex + 26;
         if (newIndex < 0) newIndex = newIndex - 26;
         if (text[i] === text[i].toUppercase()){
            newText += abc[newIndex].toUpperCase();
         }
         else newText + abc[newIndex]
      }
      return newText; }};*/



const cipher = {
   encode: (text, offset) => {
      if(text,offset){
         let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
         offset = (offset % 26 + 26) % 26;
         return text.replace(/[A-Za-z]/g, c => abc[(abc.indexOf(c) + offset) % 52]);}
      else if (typeof (text) != 'string' || typeof (offset) != 'number') {
         throw new TypeError('Wrong argument types');
      }


   },
   decode: (text, offset) => {
         if(text, offset){
         let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
         offset = (offset % 26 + 26) % 26;
         return text.replace(/[A-Za-z]/g, c => abc[(abc.indexOf(c) - offset) % 52]);}
         else if (typeof (text) != 'string' || typeof (offset) != 'number') {
         throw new TypeError('Wrong argument types');
      }
}};




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
