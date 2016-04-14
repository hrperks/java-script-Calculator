var current='';
var clear = true;
$(document).ready(function(){
  $("#zero").click(function(){
    if(clear){
      $("#screen").val(0);
      clear=false;
    }
    else{
    current= $("#screen").val();
    current+=0;
    $("#screen").val(current);
    }
    });
  $("#1").click(function(){
    if(clear){
      $("#screen").val(1);
      clear=false;
    }
    else{
    current= $("#screen").val();
    current+=1;
    $("#screen").val(current);
    }
    });
  $("#2").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(2);
    }
    else{
    current= $("#screen").val();
    current+=2;
    $("#screen").val(current);
    }
    });
  $("#3").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(3);
    }
    else{
    current= $("#screen").val();
    current+=3;
    $("#screen").val(current);
    }
    });
  $("#4").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(4);
    }
    else{
    current= $("#screen").val();
    current+=4;
    $("#screen").val(current);
    }
    });
  $("#5").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(5);
    }
    else{
    current= $("#screen").val();
    current+=5;
    $("#screen").val(current);
    }
    });
  $("#6").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(6);
    }
    else{
    current= $("#screen").val();
    current+=6;
    $("#screen").val(current);
    }
    });
  $("#7").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(7);
    }
    else{
    current= $("#screen").val();
    current+=7;
    $("#screen").val(current);
    }
    });
  $("#8").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(8);
    }
    else{
    current= $("#screen").val();
    current+=8;
    $("#screen").val(current);
    }
    });
  $("#9").click(function(){
    if(clear){
      clear=false;
      $("#screen").val(9);
    }
    else{
    current= $("#screen").val();
    current+=9;
    $("#screen").val(current);
    }
    });
  $("#clear").click(function(){
    $("#screen").val("");
  });
  $("#plus").click(function(){
    current= $("#screen").val();
    if(!hasSymb(current)){
      current+=" + ";
      $("#screen").val(current);
    }
    else{
      current=
      $("#screen").val(determine(current)+" + ");
    }
});
  $("#minus").click(function(){
    current= $("#screen").val();
    if(!hasSymb(current)){
      current+=" - ";
      $("#screen").val(current);
    }
    else{
      $("#screen").val(determine(current)+" - ");
    }
});
   $("#multiply").click(function(){
    current= $("#screen").val();
    if(!hasSymb(current)){
      current+=" * ";
      $("#screen").val(current);
    }
    else{
      $("#screen").val(determine(current)+" * ");
    }
});
   $("#divide").click(function(){
    current= $("#screen").val();
    if(!hasSymb(current)){
      current+=" / ";
      $("#screen").val(current);
    }
    else{
      $("#screen").val(determine(current)+" / ");
    }
});
  $("#equals").click(function(){
    current = $("#screen").val();
      if(!isNaN(determine(current))){
        clear=true;
 $('#screen').val(determine(current));
      }
      else{
        clear=true;
        console.log(current);
        current=current.split(" ");
        $("#screen").val(current[0]);
      }
  });
})
var hasSymb = function(str){
  if(str.indexOf(" + ")!==-1){
    return true;
  } else if(str.indexOf(" - ")!==-1){
    return true;
  } else if(str.indexOf(" * ")!==-1){
    return true;
  } else if(str.indexOf(" / ")!==-1){
    return true;
  }
  return false;
}
var determine = function(str){
  if(str.indexOf(" + ")!==-1){
    str=str.split(" +");
    if(str.length==1){return null;}
    str=add(str[0],str[1]);
    return str;
  }
  else if(str.indexOf(" - ")!==-1){
    str=str.split(" - ");
    if(str.length==1){return null;}
    str=subtract(str[0],str[1]);
    return str;
  }
  else if(str.indexOf(" * ")!==-1){
    str=str.split(" * ");
    if(str.length==1){return null;}
    str=multiply(str[0],str[1]);
    return str;
  }
  else if(str.indexOf(" / ")!==-1){
    str=str.split(" / ");
    if(str.length==1){return null;}
    str=divide(str[0],str[1]);
    return str;
  }
};
var add= function(a, b){
  return parseInt(a)+parseInt(b);
};
var subtract=function(a,b){
  return parseInt(a)-parseInt(b);
};
var multiply = function(a,b){
  return parseInt(a)*parseInt(b);
};
var divide=function(a,b){
  return parseInt(a)/parseInt(b);
};
