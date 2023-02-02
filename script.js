let buttons = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
let theme = 1;

function sum(e){
 scr = screen.innerHTML;
 console.log(scr);
 screen.innerHTML = scr + e;

}
function equal(){
  screen.innerHTML = eval(screen.innerHTML);
}

function del(){
  let del = screen.innerHTML;
 let val= del.length;
console.log(screen.innerHTML.length)
  screen.innerHTML=del.slice(0,val-1);
}

function reset() {
    document.querySelector("#screen").innerHTML="";
  }
document.getElementById("scroll").addEventListener("click", function () {
  if (theme == 1){


    let e = document.getElementById("target");
  document.querySelector('#scroll').classList.remove('ml-0');
  document.querySelector('#scroll').classList.add('ml-5');
  e.classList.add("theme-2");
  e.classList.remove("theme-1");
  e.classList.remove("theme-3");
  theme=2;
  }

  else if (theme == 2){
    let e = document.getElementById("target");
 
  e.classList.add("justify-center")
  e.classList.add("theme-3");
  e.classList.remove("theme-1");
  e.classList.remove("theme-2");
  document.querySelector('#scroll').classList.add('ml-10');
  document.querySelector('#scroll').classList.remove('ml-5');


  theme =3;
  }
  else if(theme==3){
    let e = document.getElementById("target");
  e.classList.remove("justify-center")
  e.classList.add("justify-end")
  e.classList.add("theme-1");
  e.classList.remove("theme-3");
  e.classList.remove("theme-2");
  document.querySelector('#scroll').classList.add('ml-0');
  document.querySelector('#scroll').classList.remove('ml-10');

  theme=1;
  }

});
document.querySelector("html").addEventListener('keydown', (e)=>{
  let a= e.key
  if(a>=0 && a<=9){
    sum(a);
  }
  if(a=='-' || a=='+' || a=='/'|| a=='.' || a=='*'){
    sum(a)
  }
  if(a=='Enter'){
    equal()
  }
  if(a=='Backspace'){
    del()
  }
  if(a=='Delete'){
    reset()
  }
})
