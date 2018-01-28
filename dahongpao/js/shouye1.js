window.onload = function() {
	var tian = document.getElementById("tian");
	var shi = document.getElementById("shi");
	var fen = document.getElementById("fen");
	var miao = document.getElementById("miao");

	function cutDown(target) {
		var currentDate = new Date();
		var v = Math.abs(target - currentDate);
		return {
			d: parseInt(v / (24 * 3600000)),
			h: parseInt(v % (24 * 3600000) / 3600000),
			m: parseInt(v % (24 * 3600000) % 3600000 / 60000),
			s: parseInt(v % (24 * 3600000) % 3600000 % 60000 / 1000)

		}
	}
	var target1 = new Date(2018, 0, 31);
	setInterval(function() {
		tian.innerHTML = cutDown(target1).d;
		shi.innerHTML = cutDown(target1).h;
		fen.innerHTML = cutDown(target1).m;
		miao.innerHTML = cutDown(target1).s;
	}, 1000)
	var lun1 = document.getElementsByClassName('lun1')[0];
	var lun2 = document.getElementsByClassName('lun2')[0];
	var on = true;
	var jiantou = document.getElementsByClassName('jiantou')[0];
	var jiantou1 = document.getElementsByClassName('jiantou1')[0];
	var jiantou3 = document.getElementsByClassName('jiantou')[1];
	var jiantou4 = document.getElementsByClassName('jiantou1')[1];
	var ee1=document.getElementsByClassName("ee1");
	var ee4=document.getElementsByClassName("ee4")[0];
	var ee5=document.getElementsByClassName("ee4")[1];
	var a=0;
	var b=0;
	jiantou3.onclick=function(){//左
		a++;
		b++;
		hed();
	}
	function hed(){
		move(ee4,{left:-1200*a},500,'linear',function(){
			if(a==1){
				ee4.style.left=1200+'px';
				a=-1;
			}
			
			if(a==2){
				a=0;
			}
		});
		move(ee5,{left:-1200*(b-1)},500,'linear',function(){
			if(b==2){
				ee5.style.left=1200+'px';
				b=0;
			}
			
		});
				
	}
	jiantou4.onclick=function(){//右
		move(ee5,{marginLeft:1200},500,'linear');
	}
	jiantou.onclick = function() {
		if(on) {
			lun2.style.display = "block";
			lun1.style.display = "none";
			on = false;
		} else {
			lun2.style.display = "none";
			lun1.style.display = "block";
			on = true;
		}
	}
	jiantou1.onclick = function() {
		if(on) {
			lun2.style.display = "block";
			lun1.style.display = "none";
			on = false;
		} else {
			lun2.style.display = "none";
			lun1.style.display = "block";
			on = true;
		}
	}
	var td = document.getElementById("td1");
	td.onclick = function() {
		window.location = "xiangqingyeyi.html";
	}

	var as = document.querySelectorAll(".one-one a");
	var wu = document.getElementsByClassName("wu")[0];
	var gou = document.getElementById("gou");
	gou.onmouseover = function() {
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
	gou.onmouseout = function() {
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
	var lis = document.querySelectorAll(".lis");
	var uls = document.querySelectorAll(".lis ul");
	for(var i = 0; i < lis.length; i++) {
		lis[i].ind = i;
		lis[i].onmouseover = function() {
			uls[this.ind].style.display = "block";
		}
		lis[i].onmouseout = function() {
			uls[this.ind].style.display = "none";
		}
	}

	var blockm = document.querySelectorAll(".blockm");
	var con = document.querySelector(".con_one");
	var redio = document.getElementById("radio");
	var nav = document.querySelectorAll("#radio span");
	var num = 0;
	var timer;
	for(var i = 0; i < nav.length; i++) {
		nav[i].index = i;
		nav[i].onmouseover = function() {
			removeStyle(num);
			addStyle(this.index);
			num = this.index;
		}
	}

	function removeStyle(n) {
		nav[n].removeAttribute("class");
		blockm[n].style.display = "none";
	}

	function addStyle(n) {
		nav[n].className = "active";
		blockm[n].style.display = "block";
	}

	function max() {
		removeStyle(num);
		num++; //0 1 2 3 
		if(num == nav.length) {
			num = 0;
		}
		addStyle(num);
	}

	timer = setInterval(max, 2000);

	con.onmouseenter = function() {
		clearInterval(timer);
	}

	con.onmouseleave = function() {
		timer = setInterval(max, 2000);
	}

	var gun = document.getElementsByClassName("gun");
	var zheng = document.getElementById("zheng");
	gun[1].onmouseover = function() {
		zheng.style.display = "block";
	}

	gun[1].onmouseout = function() {
		zheng.style.display = "none";
	}

	var zhi = document.getElementById("zhi");
	gun[2].onmouseover = function() {
		zhi.style.display = "block";
	}

	gun[2].onmouseout = function() {
		zhi.style.display = "none";
	}

	var cong = document.getElementById("cong");
	gun[3].onmouseover = function() {
		cong.style.display = "block";
	}

	gun[3].onmouseout = function() {
		cong.style.display = "none";
	}

	var shangDing = document.getElementsByClassName("shangding");
	var fan = document.getElementsByClassName("fan");
	window.onscroll = function(ev) {
		var arr = document.documentElement.scrollTop;
		if(arr >= 600) {
			shangDing[0].style.display = "block";
			fan[0].style.display = "block";
		} else {
			shangDing[0].style.display = "none";
			fan[0].style.display = "none";
		}
		ev.cancelBubble=true;
	}
	fan[0].onclick = function(ev) {
		var timer = setInterval(function() {
			var scTop = document.documentElement.scrollTop || document.body.scrollTop;
			scTop -= 10;
			window.scrollTo(0, scTop);
			if(scTop <= 0) {
				clearInterval(timer);
			}
		}, 5)
		ev.cancelBubble=true;
	}

	var guangOne = document.getElementById("guang-one");
	var guang = document.getElementsByClassName("guang");
	var guangTwo = document.getElementsByClassName("guang-two");
	guangOne.onclick = guangTwo[0].onclick = function(ev) {
		guang[0].style.display = "none";
		ev.cancelBubble=true;
	}


var aa5=document.getElementsByClassName("aa5");
aa5[0].onclick=function(){
   window.location="xiangqingyeyi1.html";
}

var xiaoshi=document.getElementById("xiaoshi"); 
var denglu=document.getElementById("denglu"); 
function btnshowAll(){
var storag=localStorage.length;
for(var i=0;i<storag;i++){
var key=localStorage.key(i);
var val=localStorage.getItem(key);
}
if(storag!=0){
  	xiaoshi.innerHTML="已登录";
  	denglu.innerHTML="个人账户";
}
}
btnshowAll(); 
  
  
  
  
};