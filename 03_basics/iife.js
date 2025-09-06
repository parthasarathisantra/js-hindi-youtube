// immediately invoked function expressions 

(function chai (){
    console.log(`DB CONNECTED`);
    
})();

(() => {
   console.log(`DB CONNECTED TWO`);
   
})  ();
((name) => {
   console.log(`DB CONNECTED TWO ${name}`);
   
})  (`hitesh`)
// chai()