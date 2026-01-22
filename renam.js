function fun(){
   console.log(this); //gloablObject in node.js and window on browser
   //this is execution context
}
fun(); //calling function fun
