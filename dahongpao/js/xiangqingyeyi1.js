window.onload=function(){
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
var lis=document.querySelectorAll(".sx li img");
var datu=document.querySelectorAll(".datu img");
for(var i=0;i<lis.length;i++){
	lis[i].indexs=i;
    lis[i].onclick=function(){
    	for(var m=0;m<lis.length;m++){
    		lis[m].style.border="1px solid transparent";
    		datu[m].style.display="none";
    	}
		this.style.border="1px solid red";
		datu[this.indexs].style.display="block";
	}
    
}

var jianyi=document.getElementsByClassName("jianyi");
var ling=document.getElementById("ling");
var arr=1;
jianyi[1].onclick=function(){
	arr++;
	ling.innerHTML=arr;
}

jianyi[0].onclick=function(){
	arr--;
	if(arr<=0){
		arr=1;
	}
	ling.innerHTML=arr;
}

var gu=document.getElementsByClassName("gu");
var xiangSpan=document.querySelectorAll(".xiang span");
var zhengti=document.getElementsByClassName("zhengti");
var ceOne=document.getElementsByClassName("ce-one");
var gun=document.getElementsByClassName("gun");


xiangSpan[0].style.color="red";
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop;
		if(scrollT>=950){
			gu[0].style.display="block";
		}else{
			gu[0].style.display="none";
		}
	
	xiangSpan[1].onclick=gun[1].onclick=function(){
		xiangSpan[0].style.color=gun[0].style.color="#666697";
		xiangSpan[1].style.color=gun[1].style.color="red";
		zhengti[0].style.display="none";
		ceOne[0].style.display="block";
		window.scrollTo(0,900)
	}
	xiangSpan[0].onclick=gun[0].onclick=function(){
		xiangSpan[1].style.color=gun[1].style.color="#666697";
		xiangSpan[0].style.color=gun[0].style.color="red";
		xiangSpan[0].style.color="red";
		zhengti[0].style.display="block";
		ceOne[0].style.display="none";
		window.scrollTo(0,900)
	}
}


var shu=document.querySelectorAll(".shuzi span");
var ceOne=document.getElementsByClassName("ce-one");
for(var b=0;b<ceOne.length;b++){
	shu[b].ka=b;
	shu[b].onclick=function(ev){
		ev.cancelBubble=true;
		for(var t=0;t<ceOne.length;t++){
			ceOne[t].style.display="none";
			shu[t].style.color="#66647e";
			shu[t].style.border="1px solid #d7d7d7"
		}
		ceOne[this.ka].style.display="block";
		this.style.color="#e55051";
		this.style.border="1px solid transparent";
	}
}




};