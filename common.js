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
    