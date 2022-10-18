var count=0;
var val=0;
$(document).ready(function(){$("#cart-btn").hide();$("#checkout-btn").hide();


$(".botton").click(function(){$("#cart-btn").show();$("#checkout-btn").show();
$(this).html("Added");
var a=document.getElementById("cart_value");
var b=this.name;
var cc=this.value;

if(this.value!=0){++count;}
val+=Number(cc);
window["gameObject"+count] ={ name: b, price: cc}; 
//a.innerHTML= gameObject1.name;
sessionStorage.setItem("game"+count,b);
sessionStorage.setItem("price"+count,cc);
a.innerHTML="rs "+val+"("+count+")";
//{ name: "Peter", age: 18, married: false };
sessionStorage.number=count;
sessionStorage.total=val;
this.value=0;


//if(this.id=="b2"){
//a.innerHTML=this.value;}

//else{a.innerHTML=count;}

});



$("#bo2").click(function(){
$.fn.but2();if(bo1_click==1){$("#tab1").collapse('toggle');$.fn.but1();}
});



var bo2_click=0;
$.fn.but2=function(){
if(bo2_click==0){$("#bo2").html("-");bo2_click++;$("#bo2").mouseenter(function(){$("#bo2").css("background-color","red");});
$("#bo2").mouseleave(function(){$("#bo2").css("background-color","white");});}
else{$("#bo2").html("+");bo2_click--;$("#bo2").mouseenter(function(){$("#bo2").css("background-color","#3aeb34");});
$("#bo2").mouseleave(function(){$("#bo2").css("background-color","white");});}
}



$("#bo1").click(function(){$.fn.but1();if(bo2_click==1){$("#tab2").collapse('toggle');$.fn.but2();}
});

var bo1_click=0;
$.fn.but1=function(){
if(bo1_click==0){$("#bo1").html("-");bo1_click++;$("#bo1").mouseenter(function(){$("#bo1").css("background-color","red");});
$("#bo1").mouseleave(function(){$("#bo1").css("background-color","white");});}
else{$("#bo1").html("+");bo1_click--;$("#bo1").mouseenter(function(){$("#bo1").css("background-color","#3aeb34");});
$("#bo1").mouseleave(function(){$("#bo1").css("background-color","white");});};

}


function passdata() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("1").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}



});








