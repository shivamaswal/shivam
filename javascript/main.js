function randomNumber(){
    var number = Math.floor(Math.random()*7)+1;
    console.log(number);
    return number;
}
// console.log(Math.floor(Math.random()*7+1));
document.querySelector(".title-img").setAttribute("src","../images/hello"+randomNumber()+".png");