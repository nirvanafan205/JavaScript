//Introducing 'callback functions', and web browser APIs

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000); //web broswer feature used is timer
//on completion printhello is called in javascript

console.log("Me first!");

//callback queue and event loop

//printHello function is defined
function printHello() {
  console.log("Hello");
}

//blockFor1Sec is function is defined
function blockFor1Sec() {
  //blocks  in the javascript thread for 1 sec
}

setTimeout(printHello, 0);

blockFor1Sec();

console.log("Me First!");

//weatures used are timer       on complition print hello function passes into the web browser reference
