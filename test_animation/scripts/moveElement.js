function moveElement(elementID,final_X,final_Y,interval)
{
	//alert("id:"+elementID+"final_X:"+final_X);
   if(!document.getElementById) return false;
   if(!document.getElementById(elementID)) return false;


   var moveelement = document.getElementById(elementID);
   
   if(moveelement.movement)
   {
   	clearTimeout(moveelement.movement);
   }
   if(!moveelement.style.left)
   {
   	 moveelement.style.left = "0px";
   }
   if(!moveelement.style.top)
   {
   	 moveelement.style.top = "0px";
   }
   
   var xpos = parseInt(moveelement.style.left);
   var ypos = parseInt(moveelement.style.top);
   var dist = 0;
   if(xpos == final_X && ypos == final_Y)
   {
   	if(moveelement.movement)
     {
   	  clearTimeout(moveelement.movement);
     }
   	 return true;
   }

    if(xpos < final_X)
    {
    	dist = Math.ceil((final_X-xpos)/10);
    	xpos += dist;
    }

    if(xpos > final_X)
    {
    	dist = Math.ceil((xpos - final_X)/10);
    	xpos -= dist;
    }

    if(ypos < final_Y)
    {
    	dist = Math.ceil((final_Y-ypos)/10);
    	ypos += dist;
    }

    if(ypos > final_Y)
    {
    	dist = Math.ceil((ypos - final_Y)/10);
    	ypos -= dist;
    }

    moveelement.style.left = xpos+"px";
    moveelement.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+final_X+","+final_Y+","+interval+")";
    moveelement.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
//确保浏览器支持 DOM 方法
if(!document.getElementById) return false;
if(!document.getElementsByTagName) return false;
//确保元素存在
if(!document.getElementById("linklist")) return false;

// 创建 div 元素
var slideshow = document.createElement("div");
slideshow.setAttribute("id","slideshow");

//创建 img 元素
var preview = document.createElement("img");
preview.setAttribute("src","images/girl.jpg");
preview.setAttribute("alt","girl");
preview.setAttribute("id","preview");
slideshow.appendChild(preview);

var list = document.getElementById("linklist");
insertAfter(slideshow,list);
var links = list.getElementsByTagName("a");
	links[0].onmouseover = function()
	 {
		moveElement("preview",0,0,10);
	 }
	links[1].onmouseover = function()
	 {
	 	moveElement("preview",0,-410,10);
	 }
	links[2].onmouseover = function()
	 {
		moveElement("preview",0,-820,10);
	 }
	links[3].onmouseover = function()
	 {
		moveElement("preview",0,-1230,10);
	 }
}

addLoadEvent(prepareSlideshow);