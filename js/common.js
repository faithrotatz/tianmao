/*兼容函数获取指定类名*/
	function getclass(canshu,box){
		var box=box||document;
		if(box.getElementsByClassName){
			return box.getElementsByClassName(canshu);
		}else{
			var b=[];
			var arr=box.getElementsByTagName("*");
			for(var i=0;i<arr.length;i++){
				if(panduan(arr[i].className,canshu)){/*panduan(arr[i].className,canshu)传入实参为下边的判断函数*/
					b.push(arr[i])
				}
			}return b;
		}

	} 
    function panduan(str,val){
/*strh是一个标签的类名是字符串是集合*/
    	var b=str.split(" ");
    	for(var i=0;i<b.length;i++){
    		if(b[i]==val){
    			return true;

    		}
    	}
    	return false;
    }
 function $(select,box){
  var box=box||document;
if(typeof select=="string" ){
	select=select.replace(/^\s*|\s$/g,"")/*/^\s*|\s$/g去掉字符串前面和后面的空格*/
	if(select.charAt(0)=="."){
		return getclass(select.slice(1),box)
	}else if(select.charAt(0)=="#"){
		return box.getElementById(select.slice(1))
	}else if(/^[a-z|1-6]{1,10}$/g.test(select))/*/^[a-z|1-6]{1,10}$/正则表示范围中括号表示字母及标签名是字母构成包含h1到h6后边的大括号表示长度最多有10 gbiaoshishiquanju*/
	{
		return box.getElementsByTagName(select);
	}
   }else if(typeof select=="function"){
    window.onload=function(){
    select();
    }
	}
}




function getText(obj,val){
   if(val==undefined){//如果val为underfined，表示只有一个参数，这个函数实现的功能是获取文本
    if(obj.innerText){//如果为真是ie8浏览器
      return obj.innerText;
    }else{//是ff浏览器
      return obj.textContent;
    }
   }else{
    if(obj.innerText||obj.innerText==""){//如果为真是ie8浏览器，当对象的内容为空时，都可以设置
      obj.innerText=val;
    }else{//是ff浏览器
      obj.textContent=val;
    }
   }
}

/*兼容函数获取指定类名*/
	function getclass(canshu,box){
		var box=box||document;
		if(box.getElementsByClassName){
			return box.getElementsByClassName(canshu);
		}else{
			var b=[];
			var arr=box.getElementsByTagName("*");
			for(var i=0;i<arr.length;i++){
				if(panduan(arr[i].className,canshu)){/*panduan(arr[i].className,canshu)传入实参为下边的判断函数*/
					b.push(arr[i])
				}
			}return b;
		}

	} 
    function panduan(str,val){
/*strh是一个标签的类名是字符串是集合*/
    	var b=str.split(" ");
    	for(var i=0;i<b.length;i++){
    		if(b[i]==val){
    			return true;

    		}
    	}
    	return false;
    }
  /*99999999999999999999999999999*/
    /*获取元素子节点的兼容函数*/
    /*传参数的时候不加引号*/
    function getchilds(father,type){
/*father是父节点的类名*/
       var childs=father.childNodes;/*是个集合*/
       var arr=[];
       for(var i=0;i<childs.length;i++){
        if(childs[i].nodeType==1){
          arr.push(childs[i])
        }
       }
       return arr;
    }

      function getChilds(parent,type){//parent是父节点的类名
       var type=type||"a";//不写type时默认为文本，写type时为节点
       
       var childs=parent.childNodes;//所有儿子
       var arr=[];
       for(var i=0;i<childs.length;i++){
        if(type=='a'){
          if(childs[i].nodeType==1){
          arr.push(childs[i]);
        }        
        }else if(type=='b'){
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,''))){
             arr.push(childs[i]);
          }
        }
        
       }  return arr;     
  }
  /*获取第一个*/
    function getfirst (father){

    return getchilds(father)[0]
  }
  /*获取最后一个*/
  function getlast(father){
    return getchilds(father)[getchilds(father).length-1]
  }
  /*获取指定的一个*/
  function zhiding(father,num){
    return getchilds(father)[num]
  } 
  /*获得下一个*/
  function getnext(a){
    var b=a.nextSibling
    if(b==null){return false}
   while(b.nodeType!=1
    ){
  b=b.nextSibling;
   if(b==null)
    {return false}
    
     }
   return b; 
  } 
  /*得到上一个*/
  function getup(a){
    var b=a.previousSibling;
      if(b==null){return false}
    while(b.nodeType!=1){
    b=b.previousSibling;
  }
 return b;
}
/*追加在节点的后面*/
Object.prototype.insertAfter=function(obj1,obj2){
  var newobj=getNext(obj2);
  if(newobj){
    this.insertBefore(obj1,newobj);
  }else{
    this.appendChild(obj1);
  }
}

//3.获取样式
//obj:哪个对象   attr:哪个属性
//对象.属性    对象["属性"]
function getStyle(obj,attr){
  if(obj.currentStyle){//IE8
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}
/*///////获取滑动条的距离*/
function getscrollt(){
  var a=document.documentElement.scrollTop||document.body.scrollTop;
   
  return a;

}
/********给函数添加事件的兼容函数*/
  function addevent(obj,ev,fun){ 
    if(obj.addEventListener){
     obj.addEventListener(ev,fun,false)
  }else{
    obj.attachEvent("on"+ev,function(){
      fun.call(obj);
    })
  }
}
///////滚轮函数兼容////////////////////////
//obj是谁具有滚轮事件，upfun滚轮向上是执行的函数
function mousewheel(obj,upfun,downfun){
if(obj.attachEvent){
obj.attachEvent("onmousewheel",scrollFn);  //IE、 opera
}else if(obj.addEventListener){
obj.addEventListener("mousewheel",scrollFn,false);  
//chrome,safari    -webkit-
obj.addEventListener("DOMMouseScroll",scrollFn,false); 
//firefox     -moz-
}

  function  scrollFn(e){

    var ev=e||window.event;
if (ev.preventDefault ){ev.preventDefault() ;} //阻止默认浏览器动作(W3C) 

else{ev.returnValue=false;}//IE中阻}止函数器默认动作的方式
var num=ev.detail||ev.wheelDelta;
    if(num==-3||num==120){
      if(upfun){
        upfun();
      }
    }
       if(num==3||num==-120){
      if(downfun){
        downfun();
      }
    }
  }}
  //////////////////////////////
  //15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
    