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




//全选功能
	var selecAll=document.getElementById("selecAll");//全选
	var inputs=document.querySelectorAll(".main input");//除了全选以外的checkbox
	var trs=document.querySelectorAll(".main tr");//获取tbody行
	var selected=document.getElementById("selected");//获取已选数
	var selectedNum=0;
	//给全选添加点击事件
	selecAll.onclick=function(){
		for(var i=0;i<inputs.length;i++){
			inputs[i].checked=this.checked;
			trs[i].className=this.checked?'active':'';
			selectedNum=this.checked?inputs.length:0;
			selected.innerHTML="已选("+selectedNum+")";
		}
	}
	for(var i=0;i<inputs.length;i++){
		inputs[i].index=i;
		inputs[i].onclick=function(){
			trs[this.index].className=this.checked?'active':'';//设置背景
			this.checked?selectedNum++:selectedNum--;//设置已选数量
			selected.innerHTML="已选("+selectedNum+")";
			selecAll.checked=selectedNum==inputs.length?true:false;//设置的是全选选中或者不选中的状态
		}
	}
	for(var i=0;i<trs.length;i++){
		count(i);
	}
	
	//商品的具体的功能
	function count(n){
		var spans=trs[n].querySelectorAll("td:nth-of-type(4) span");//+ - spans[0]-  spans[1]+
		var strong=trs[n].querySelector("td:nth-of-type(4) strong");//数量
		var price=trs[n].querySelector('td:nth-of-type(3)');//单价
		var subTotal=trs[n].querySelector('td:nth-of-type(5)');//小计
		var num=0;
		//加号功能+
		spans[1].onclick=function(){
			num++;
			strong.innerHTML=num;
			subTotal.innerHTML=parseFloat(price.innerHTML)*num+".00元";
			sum();//保留的改变tfoot总计功能
		}
		spans[0].onclick=function(){
			num--;
			if(num<=0){
				num=0;
			}
			strong.innerHTML=num;
			subTotal.innerHTML=parseFloat(price.innerHTML)*num+".00元";
			sum();//保留的改变tfoot总计功能
		}
		
		
		//求总计 功能
		function sum(){
			var td=document.querySelectorAll("tfoot td")[1];
			var tatal=0;//综合
			var expensive=0;//最贵
			for(var i=0;i<trs.length;i++){
				var subTotal=trs[i].querySelector("td:nth-of-type(5)").innerHTML;
				tatal+=parseFloat(subTotal);
				//价格最贵   数量的内容   商品单价 内容
				var selectNum=trs[i].querySelector("td:nth-of-type(4) strong").innerHTML;//shuliang
				var price=trs[i].querySelector("td:nth-of-type(3)").innerHTML;
				
				if(selectNum>0){
					if(expensive<parseFloat(price)){
					   expensive=parseFloat(price);
					}
				}
			}
			td.innerHTML='<p>应付总额：<srong>'+tatal+'.00元</srong></p><p>最贵的商品为：'+expensive+'元</p>'
		}
		
	}
//------------------------确认要删除该商品吗
var shanChu=document.getElementsByClassName("manx");//错号
var queQ=document.getElementsByClassName("quequ");
for(var i=0;i<queQ.length;i++){
	shanChu[i].pap=i;
	shanChu[i].onclick=function(){
		queQ[this.pap].style.display="block"
	}
}
//------------确定
var paOne=document.getElementsByClassName("pa-one");
var shOne=document.querySelectorAll(".main tr");
var shopping=document.getElementById("shopping");
var noshop=document.getElementById("noshop");
for(var o=0;o<paOne.length;o++){
	paOne[o].tuy=o;
	a=0;
	paOne[o].onclick=function(){
		shOne[this.tuy].style.display="none";
		a++;
	if(a==paOne.length){
		shopping.style.display="none";
		noshop.style.display="block";
	}
	}
}
//-------------取消
var paTwo=document.querySelectorAll(".pa-two");
for(var m=0;m<paTwo.length;m++){
	paTwo[m].ins=m;
	paTwo[m].onclick=function(ev){
		queQ[this.ins].style.display="none";
		ev.cancelBubble=true;
	}
		
}


function btnshowAll(){
var storag=localStorage.length;
var jiaru=document.getElementsByClassName("jiaru")[0];
for(var i=0;i<storag;i++){
var key=localStorage.key(i);
var val=localStorage.getItem(key);
}
if(val==6){
  	jiaru.style.display="block";
}
}
btnshowAll();





};