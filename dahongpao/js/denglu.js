var ps=document.querySelectorAll(".two-four p");
var zuo=document.getElementsByClassName("zhong-zuo");
var you=document.getElementsByClassName("zhong-you");
ps[0].className="meifu";
ps[1].onclick=function(){
	zuo[0].style.display="none";
	you[0].style.display="block";
	ps[0].removeAttribute("class");
	this.className="meifu";
}
ps[0].onclick=function(){
	zuo[0].style.display="block";
	you[0].style.display="none";
	ps[1].removeAttribute("class");
	this.className="meifu";
}
var zuoOne=document.getElementsByClassName("zuo-one");
var youTwo=document.getElementsByClassName("you-two");
var spanO=document.getElementsByClassName("spanO");
var zuoTwo=document.getElementsByClassName("zuo-two");
var youOne=document.getElementsByClassName("you-one")[0];
var huoqu=document.getElementsByClassName("huoqu")[0];
zuoOne[0].onblur=function(){
	var zhengze=/^\d{11}$/;
	if(zuoOne[0].value==""||zuoOne[0].value==null){
		spanO[0].innerHTML="手机号不能为空";
		spanO[0].style.color="red";
	}else if(!zhengze.test(zuoOne[0].value)){
		spanO[0].innerHTML="请输入正确手机号"
		spanO[0].style.color="red";
	}else{
		spanO[0].innerHTML="正确"
		spanO[0].style.color="green";
	}
}

youOne.onblur=function(){
	var zhengze=/^\d{11}$/;
	if(youOne.value==""||youOne.value==null){
		spanO[2].innerHTML="手机号不能为空";
		spanO[2].style.color="red";
	}else if(!zhengze.test(youOne.value)){
		spanO[2].innerHTML="请输入正确手机号"
		spanO[2].style.color="red";
	}else{
		spanO[2].innerHTML="正确"
		spanO[2].style.color="green";
	}
}

zuoOne[1].onblur=function(){
	var miss=/^[a-zA-Z]{1,6}\d{1,9}$/;
	if(zuoOne[1].value==""||zuoOne[1].value==null){
		spanO[1].innerHTML="密码不能为空";
		spanO[1].style.color="red";
	}else if(!miss.test(zuoOne[1].value)){
		spanO[1].innerHTML="输入密码有误"
		spanO[1].style.color="red";
	}else{
		spanO[1].innerHTML="正确"
		spanO[1].style.color="green";
	}
}
youTwo[0].onblur=function(){
	if(youTwo[0].value==""||youTwo[0].value==null){
		spanO[3].innerHTML="图形验证码不能为空";
		spanO[3].style.color="red";
	}else if(youTwo[0].value!="bigi4"){
		spanO[3].innerHTML="图形验证码有误";
		spanO[3].style.color="red";
	}else{
		spanO[3].innerHTML="正确";
		spanO[3].style.color="green";
	}
}
var aler;
huoqu.onclick=function(){
	aler=Math.floor(Math.random()*1000000);
	alert('您此次的验证码为'+aler);
}
youTwo[1].onblur=function(){
	if(youTwo[1].value==""||youTwo[1].value==null){
		spanO[4].innerHTML="验证码不能为空";
		spanO[4].style.color="red";
	}else if(youTwo[1].value!=aler){
		spanO[4].innerHTML="验证码不能为空";
		spanO[4].style.color="验证码输入有误";
	}else{
		spanO[4].innerHTML="正确";
		spanO[4].style.color="green";
	}
}


var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
function btnshowAll(){
var storag=localStorage.length;
for(var i=0;i<storag;i++){
var key=localStorage.key(i);
var val=localStorage.getItem(key);
}
if(zuoOne[0].value==key&&zuoOne[1].value==val){
  	alert("登录成功");
  	window.location="shouye.html";
}else{
  	alert("您还没有注册，请先注册吧！")
}

}
d1.addEventListener('click',btnshowAll,false);