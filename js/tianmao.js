window.onload=function(){
function xiala(){
  /*顶导航的下拉*/
var  a=$(".tpr-1")[1]
var  b=$(".tpr11",a)[0]



hover(a,function(){

animate(b,{height:70},500)
},function(){
  animate(b,{height:0},500)
})
var tb=$(".tb4")[0];
var tb1=getclass("tpr11",tb)[0];


hover(tb,function(){

animate(tb1,{height:70},500)
},function(){
  animate(tb1,{height:0},500)
})
var tb5=$(".tb5")[0];
var x=getclass("tpr11",tb5)[0]
hover(tb5,function(){
 animate(x,{height:120},500) 
},function(){
  animate(x,{height:0},500)  
})
var tc=$(".tb6")[0];

var tc1=getclass("tpr13",tc)[0];

hover(tc,function(){
 animate(tc1,{height:250},500) 
},function(){
  animate(tc1,{height:0},500)  
})

}
xiala()

/*右侧导航*/
function ycd(){
var a=$(".sidebar")[0];
var tb=$(".xtb")
var sb=$(".sb-1")

for(var i=0;i<sb.length;i++){
  sb[i].index=i;


hover(sb[i],function(){
  tb[this.index].style.display="block"

  animate(tb[this.index],{left:-100})
},function(){
  animate(tb[this.index],{left:-130})
  tb[this.index].style.display="none"
})

}
var y=document.documentElement.clientHeight;
 
   a.style.height=y+"px";
var b=$(".sb-1")
for(var i=0;i<b.length;i++){
  b[i].style.marginTop=10+"px"
}

}
ycd();



/*banner部分*/


function banner(){
   var a=$(".lsb11")[0];
   var b=$(".menu")[0];
   hover(a,function(){
    animate(b,{width:70},500)
   
   ;
   },function(){
 animate(b,{width:0},500)
  })


   var lsb12=$(".lsb12")[0];
   var lsb13=$(".lsb13")[0];

   var damenu=$(".damenu")[0]
   var damenu1=$(".damenu1")[0]

 hover(lsb12,function(){
  animate(damenu,{width:800},500)
 },function(){
  animate(damenu,{width:0},200)

 })
  hover(lsb13,function(){
  animate(damenu1,{width:800},500)
 },function(){
  animate(damenu1,{width:0},200)

 })



}banner();
function ban(){
var a=$(".lsb14");
for(var i=0;i<a.length;i++){
  a[i].index=i;

  hover(a[i],function(){
    var b=$(".damenu",a[this.index])[0]
   
    animate(b,{width:800})
  },function(){
     var b=$(".damenu",a[this.index])[0]
    animate(b,{width:0},200)
  })
}
}ban();

   /*左移*/



	/*左下轮播*/
function bb(s){	
	function lunbo(){ 


	var col11=getclass("lun")[s];
   animate(col11,{left:-190},600,Tween.Linear,function(){
   var first=getfirst(col11);
    col11.appendChild(first);
         col11.style.left=0;
    	})
    	
    }
     var anniu4=getclass("anniu4")[s]
     var col11=getclass("lun")[s];
     var anniu5=getclass("anniu5")[s]
  	
  anniu4.onmouseover=anniu5.onmouseover=function(){
     	clearInterval(n);
  }
     
 anniu4.onmouseout=anniu5.onmouseout=function(){
     	n=setInterval(lunbo,2000)
     }
 anniu5.onclick=anniu4.onclick=function (){
   
  var first=getfirst(col11);
  var last=getlast(col11) 
    col11.insertBefore(last,first);
        col11.style.left=-190;
   animate(col11,{left:0},600,Tween.Linear)
   	
    
    }
    
   var n=setInterval(lunbo,2000)} 
   var col11=getclass("lun")
   for(var i=0;i<col11.length;i++){
   	bb(i);
   } 

/*楼层跳转*/

	var aa=getclass("aa")[0];
	var flag=true;
	var flag2=false;
	var loucheng=getclass("loucheng")[0];
	var con=getclass("content3")
   var lce=getclass("lce")
   for(var i=0;i<lce.length;i++){
   	lce[i].index=i;
   	lce[i].onclick=function(){
     var obj=document.documentElement.scrollTop?document.documentElement:document.body 
     
     animate(obj,{scrollTop:con[this.index].offsetTop})
   	}
   }

	window.onscroll=function(){
    
  var a=document.documentElement.scrollTop||document.body.scrollTop;
    for(var i=0;i<con.length;i++){
    	if(con[i].offsetTop<=(a+300)){
    		for(var j=0;j<lce.length;j++){lce[j].style.color="black"}
          lce[i].style.color="red"
    	}
    }
     



      if(a>1000){
       
      	if(flag){
      loucheng.style.display="block";	
     animate(aa,{top:0},500,Tween.Linear)
       flag=false;
       flag2=true}
      
      }else{if(flag2){
      	aa.style.top=-50+"px";
        flag2=false;
        flag=true;
      loucheng.style.display="none";	
        }
       
      	}}

var shuru2=getclass("shuru2")[0];

shuru2.onfocus=function(){
	if(shuru2.value=="狂购物"){
		shuru2.value=""
	}
   
}
shuru2.onblur=function(){
	if(shuru2.value){}else if(shuru2.value==""){
		shuru2.value="狂购物"
	}
}
	var shuru=getclass("shuru")[0];
    
	shuru.onfocus=function(){
		if(shuru.value==""){
			shuru.value="鐚尗鐙楃嫍璐墿鐙傛锛岀粰瀹冩渶濂界殑";
		}else{}
	}
	shuru.onblur=function(){
		if(shuru.value){}else{
shuru.value="鐚尗鐙楃嫍璐墿鐙傛锛岀粰瀹冩渶濂界殑"}
			
		
	}

var tx=getclass("taoxin")

var td=document.getElementsByTagName('td')


for(var i=0;i<tx.length;i++){
	td[i].index=i;
   td[i].onmouseover=function(){
    tx[this.index].style.display="block";}
    td[i].onmouseout=function(){
    tx[this.index].style.display="none";}

    }

function lunbo(){
  var box=getclass("bb")
  var ab=getclass("circle1")
  var banner=$(".banner")[0]
  var num=1;
  var bgc=["#b90af9","#ce2043","#f96908","#b90af9","#ce2043"];
  function move(){
    if(num==5){
      num=0;}
  for(var i=0;i<box.length;i++){
          box[i].style.zIndex=3;
          ab[i].style.background="black"
         }
        box[num].style.zIndex=4;
        banner.style.background=bgc[num];
        ab[num].style.background="#c40000";
    num++;
    
  }
  var t=setInterval(move,1000)
  for(var i=0;i<ab.length;i++){
    ab[i].index=i;
    ab[i].onmouseover=function(){
      clearInterval(t);
      for(var j=0;j<ab.length;j++){
              box[j].style.zIndex=3;
        ab[j].style.background="black"
         }

      box[this.index].style.zIndex=4;
      ab[this.index].style.background="#c40000";

    }
    ab[i].onmouseout=function(){
         
        t=setInterval(move,1000);
        num=this.index+1; 
           
    }
    
  }} lunbo();

/********************************左移事件委托*/

function zuoyi(){
  var a=$(".tu");
  var b=$(".tu1")
  
  for(var i=0;i<a.length;i++){
    a[i].index=i;
    b[i].onmouseover=a[i].onmouseover=function(e){
      var ev=e||window.event;
      var obj=ev.target||ev.srcElement;
      obj.style.cssText="position:relative;left:-10px;top:0px"
    }
   b[i].onmouseout=a[i].onmouseout=function(e){
    var ev=e||window.event;
      var obj=ev.target||ev.srcElement;
      obj.style.cssText="position:relative;left:0px;top:0px"
   }
   /* a[i].onmouseover=function(){
      a[this.index].style.cssText="position:relative;left:10px;top:10px"
    }
      a[i].onmouseout=function(){
      a[this.index].style.cssText="position:relative;left:0px;top:0px"
    }*/
  }


 
 

}
zuoyi();

  



var a=getclass("ct-1");
var b=getclass("pinpai");
for(var i=0;i<a.length;i++){
	a[i].index=i;

	a[i].onclick=function(){

	for(var j=0;j<b.length;j++){
	b[j].style.display="none";
	a[j].style.fontWeight="normal";
	a[j].style.textDecoration="none";
}	
	b[this.index].style.display="block";
	a[this.index].style.fontWeight="bold";
	a[this.index].style.textDecoration="underline";
}
}	
}