"use strict";var code;function createCode(){code="";for(var e=document.getElementById("code"),o=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),d=0;d<4;d++){var a=Math.floor(36*Math.random());code+=o[a]}e.value=code}window.onload=function(){createCode()};