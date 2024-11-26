let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let colorCode = document.querySelector('.colorCode');
let code = "0123456789abcdef"
let rgb1;
let rgb2;
function codeGenerator(){
    let sum ="";
    let val;
    for(let i=1; i<=6; i++){
        let num = Math.floor(Math.random()*16)
        sum+=code[num];
        val = `#${sum}`
    }
    return val;
}
function handleBtn1(){
 rgb1 = codeGenerator();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.style.backgroundColor = rgb1;
    btn1.innerText = rgb1;
    colorCode.innerHTML= `background-color: linear-gradient(${rgb1}, ${rgb2})`
    
}
function handleBtn2(){
    rgb2 = codeGenerator();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    btn2.style.backgroundColor = rgb2;
    btn2.innerText = rgb2
    colorCode.innerHTML= `background-color: linear-gradient(${rgb1}, ${rgb2})`
}
btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);
colorCode.addEventListener('click', ()=>{
    navigator.clipboard.writeText(colorCode.innerText)
})