function palindrome(str) {
   var re = /[\W_]/g;
   str = str.toLowerCase().replace(re, '');
   var len = str.length;
   for (var i = 0; i < len/2; i++) {
       if (str[i] !== str[len - 1 - i]){
           return false;
       }
   }
   return true;
}
console.log(palindrome("Hannah"))
