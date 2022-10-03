var menu=document.getElementById('menu');
var phone=document.getElementById('phone');
var i=0;
menu.onclick=()=>{
    if(!i){
        phone.style.height="100px";
        i=1;
    }
    else{
        phone.style.height="0px";
        i=0;
    }

}