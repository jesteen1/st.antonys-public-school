var changer=document.getElementById('changer');
var moveing=document.getElementById('moveing');
var text_conent=document.getElementById('text-conent');
var box=document.getElementById('box');
var i=0;
box.onclick=()=>{
   
    if(!i){
  
       moveing.classList.add('moved');
        i=1;
        changer.style.background="black";
        text_conent.classList.replace('text-gray-600','text-white');
    }
    else{
       
        moveing.classList.remove('moved');
        changer.style.background="white";
        text_conent.classList.replace('text-white','text-gray-600');


        i=0;
    }

}