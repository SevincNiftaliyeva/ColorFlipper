const  colorsArray=["red","blue","purple","yellow","pink","green","orange"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
btn.addEventListener("click",function(){
    const randomNumber=getrandomnumber();
    document.body.style.backgroundColor=colorsArray[
        randomNumber];
        color.textContent=colorsArray[randomNumber];
});
function getrandomnumber(){
    return Math.floor(Math.random()*colorsArray.length);
}