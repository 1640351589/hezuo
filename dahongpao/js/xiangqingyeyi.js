window.onload = function() {
	var as = document.querySelectorAll(".one-one a");
	var wu = document.getElementsByClassName("wu")[0];
	var liu = document.getElementById("liu");
	liu.onmouseover = function() {
		move(wu, {
			top: -20,
			opacity: 0
		}, 100, 'linear', function() {
			wu.style.top = 20 + 'px';
			move(wu, {
				top: 0,
				opacity: 1
			}, 100, 'linear');
		})
	}
	liu.onmouseout = function() {
		move(wu, {
			top: 20,
			opacity: 0
		}, 100, 'linear', function() {
			wu.style.top = -20 + 'px';
			move(wu, {
				top: 0,
				opacity: 1
			}, 100, 'linear');
		})
	}
	var oneFour = document.getElementsByClassName("one-four")[0];
	as[2].onmouseover = function() {
		oneFour.style.display = "block";
	}
	as[2].onmouseout = function() {
		oneFour.style.display = "none";
	}

	var ins = document.querySelector(".three-two input");
	var but = document.querySelector(".three-two button");
	var bu = document.getElementsByClassName("bu")[0];
	var icon=document.querySelectorAll(".k-one .iconfont")
	ins.onfocus = function() {
		this.style.outline = "none";
		this.style.border = "1px solid #ff3600";
		but.style.border = "1px solid #ff3600";
	}
	ins.onblur = function() {
		this.style.border = "1px solid #c7c7c7";
		but.style.border = "1px solid #c7c7c7";
	}

	but.onmouseover = function() {
		ins.style.border = "1px solid #ff3600";
		this.style.border = "1px solid #ff3600";
		this.style.background = "#ff3600";
		bu.style.color = "#fff"
	}
	but.onmouseout = function() {
		ins.style.border = "1px solid #c7c7c7";
		this.style.border = "1px solid #c7c7c7";
		this.style.background = "#fff";
		bu.style.color = "#3c3c3c"
	}
	var k = document.getElementById("k");
	var dao=document.getElementsByClassName("k-one");
	var hia=document.getElementsByClassName("hia");
	window.onscroll = function() {
		var height=document.body.scrollTop||document.documentElement.scrollTop;
		height>=1400?k.style.display="block":k.style.display="none";
		var dao=document.getElementsByClassName("k-one");
		
		dao[0].onclick=function(){
			window.scrollTo(0,1450);
		}
		dao[1].onclick=function(){
			window.scrollTo(0,1950);
		}
		dao[2].onclick=function(){
			window.scrollTo(0,3470);
		}
		dao[3].onclick=function(){
			window.scrollTo(0,4270);
		}
		dao[4].onclick=function(){
			window.scrollTo(0,5600);
		}
		dao[5].onclick=function(){
			window.scrollTo(0,6150);
		}
		dao[6].onclick=function(){
			window.scrollTo(0,6616);
		}
		
	}
	console.log(icon);
	for(var p=0;p<dao.length;p++){
		hia[p].jie=p;
		hia[p].onclick=function(){
			for(var r=0;r<dao.length;r++){
				hia[r].style.color="white";
				icon[r].style.color="white";
			}
			this.style.color="red";
			icon[this.jie].style.color="red";
		}
	}
		 





//轮播图
var spans=document.getElementsByClassName("round");
var spanss=document.getElementsByClassName("bit");
var imgs=document.querySelectorAll(".l2 ul li img");
var lis=document.querySelectorAll(".l2 ul li");
var num=0;
var timer;

for(var j=0;j<spans.length;j++){
	spans[j].mei=j;
	spans[j].onclick=function(){
		removeStyle(num);
		addStyle(this.mei);
		num=this.mei;
	}
}
for(var h=0;h<spans.length;h++){
	spanss[h].jia=h;
	spanss[h].onclick=function(){
		removeStyle(num);
		addStyle(this.jia);
		num=this.jia;
	}
}
function removeStyle(x){
	spans[x].style.background="transparent";
	imgs[x].style.display="none";
	spanss[x].style.background="transparent";
}
function addStyle(n){
	spans[n].style.background="white";	
	imgs[n].style.display="block";
	spanss[n].style.background="white";	
}

function max(){
	removeStyle(num);
	num++;//0 1 2 3 
	if(num==spans.length){
		num=0;
	}
	addStyle(num);
}

timer=setInterval(max,2000);

for(var g=0;g<lis.length;g++){
	lis[g].onmouseenter=function(){
		clearInterval(timer);
	}
	lis[g].onmouseleave=function(){
		timer=setInterval(max,2000);
	}
}


var btn1=document.getElementsByClassName("bit1");
var imgj=document.querySelectorAll("#t2 ul li img");
var imgba=document.querySelectorAll("#t2 ul li");
var min=0;
var shijian;

function jia(){
	removeS(min);
	min++;//0 1 2 3 
	if(min==imgj.length){
		min=0;
	}
	addS(min);
}

shijian=setInterval(jia,2000);

for(var e=0;e<lis.length;e++){
	imgba[e].onmouseenter=function(){
		clearInterval(shijian);
	}
	imgba[e].onmouseleave=function(){
		shijian=setInterval(jia,2000);
	}
}


function removeS(n){
	btn1[n].style.background="white";
	imgj[n].style.display="none";
}

function addS(n){
	btn1[n].style.background="#f04f25";
    imgj[n].style.display="block";
	
}


	 
};