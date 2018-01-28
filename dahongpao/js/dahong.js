var as=document.querySelectorAll(".one-one a");
var wu=document.getElementsByClassName("wu")[0];
var gou=document.getElementById("gou");
gou.onmouseover=function(){
	move(wu,{top:-20,opacity:0},100,'linear',function(){
		wu.style.top=20+'px';
		move(wu,{top:0,opacity:1},100,'linear');
	})
}
gou.onmouseout=function(){
	move(wu,{top:20,opacity:0},100,'linear',function(){
		wu.style.top=-20+'px';
		move(wu,{top:0,opacity:1},100,'linear');
	})
}

var oneFour=document.getElementsByClassName("one-four")[0];
as[2].onmouseover=function(){
	oneFour.style.display="block";
}
as[2].onmouseout=function(){
	oneFour.style.display="none";
}

var ins=document.querySelector(".three-two input");
var but=document.querySelector(".three-two button");
var bu=document.getElementsByClassName("bu")[0];
ins.onfocus=function(){
	this.style.outline="none";
	this.style.border="1px solid #ff3600";
	but.style.border="1px solid #ff3600";
}
ins.onblur=function(){
	this.style.border="1px solid #c7c7c7";
	but.style.border="1px solid #c7c7c7";
}

but.onmouseover=function(){
	ins.style.border="1px solid #ff3600";
	this.style.border="1px solid #ff3600";
	this.style.background="#ff3600";
	bu.style.color="#fff"
}
but.onmouseout=function(){
	ins.style.border="1px solid #c7c7c7";
	this.style.border="1px solid #c7c7c7";
	this.style.background="#fff";
	bu.style.color="#3c3c3c"
}

var lis=document.querySelectorAll(".lis");
var uls=document.querySelectorAll(".lis ul");
for(var i=0;i<lis.length;i++){
	lis[i].ind=i;
	lis[i].onmouseover=function(){
		uls[this.ind].style.display="block";
	}
	lis[i].onmouseout=function(){
		uls[this.ind].style.display="none";
	}
}

var blockm=document.querySelectorAll(".blockm");
var con=document.querySelector(".con_one");
var redio=document.getElementById("radio");
var nav=document.querySelectorAll("#radio span");
var num=0;
var timer;
for(var i=0;i<nav.length;i++){
	nav[i].index=i;
	nav[i].onmouseover=function(){
		removeStyle(num);
		addStyle(this.index);
		num=this.index;
	}
}

function removeStyle(n){
	nav[n].removeAttribute("class");
    blockm[n].style.display="none";
}

function addStyle(n){
	nav[n].className="active";
	blockm[n].style.display="block";
}

function max(){
	removeStyle(num);
	num++;//0 1 2 3 
	if(num==nav.length){
		num=0;
	}
	addStyle(num);
}

timer=setInterval(max,2000);

con.onmouseenter=function(){
	clearInterval(timer);
}

con.onmouseleave=function(){
	timer=setInterval(max,2000);
}

var gun=document.getElementsByClassName("gun");
var zheng=document.getElementById("zheng");
gun[1].onmouseover=function(){
	zheng.style.display="block";
}

gun[1].onmouseout=function(){
	zheng.style.display="none";
}

var zhi=document.getElementById("zhi");
gun[2].onmouseover=function(){
	zhi.style.display="block";
}

gun[2].onmouseout=function(){
	zhi.style.display="none";
}

var cong=document.getElementById("cong");
gun[3].onmouseover=function(){
	cong.style.display="block";
}

gun[3].onmouseout=function(){
	cong.style.display="none";
}

var shangDing=document.getElementsByClassName("shangding");
var fan=document.getElementsByClassName("fan");
window.onscroll=function(){
	var arr=document.documentElement.scrollTop;
	if(arr>=600){
		shangDing[0].style.display="block";
		fan[0].style.display="block";
	}else{
		shangDing[0].style.display="none";
		fan[0].style.display="none";
	}
}
fan[0].onclick=function(){
	var timer=setInterval(function(){
		var scTop=document.documentElement.scrollTop||document.body.scrollTop;
		scTop-=10;
		window.scrollTo(0,scTop);
		if(scTop<=0){
			clearInterval(timer);
		}
	},5)
}

var guangOne=document.getElementById("guang-one");
var guang=document.getElementsByClassName("guang");
var guangTwo=document.getElementsByClassName("guang-two");
guangOne.onclick=guangTwo[0].onclick=function(){
	guang[0].style.display="none";
}


