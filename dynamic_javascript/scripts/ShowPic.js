function showPic(whichPic)
{
  if(!document.getElementById("placeHolder")) return false;
  var source = whichPic.getAttribute("href");
  var placeHolder = document.getElementById("placeHolder");
  if(placeHolder.nodeName != "IMG") return false;
  placeHolder.setAttribute("src",source);// DOM Core 语句 
  //placeHolder.src = source;//HTML DOM 语句 等同上一行语句

if(document.getElementById("description"))
{
	var text = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  if(description.firstChild.nodeType == 3)
     {
     	description.firstChild.nodeValue = text;
     }
}
  return true;
}

/*               功能测试函数 分界线             */
function countBodyChildren()
{
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}

//----------------------------------------//

function preparePlaceholder()
{
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;

   var imgTag = document.createElement("img");
   imgTag.setAttribute("id","placeHolder");
   imgTag.setAttribute("src","images/girl3.jpg");
   imgTag.setAttribute("width","50%");
   imgTag.setAttribute("alt","My Image Gallery");

   var pTag = document.createElement("p");
   pTag.setAttribute("id","description");
   var pText = document.createTextNode("Choose an image");
   pTag.appendChild(pText);

   var gallery = document.getElementById("imagegallery");

/* 第一种添加方式 添加到元素子节点末尾
    var bodys = document.getElementsByTagName("body"); 
    bodys[0].appendChild(imgTag);
    bodys[0].appendChild(pTag);
*/
    

/*   将元素插入目标元素前面
    gallery.parentNode.insertBefore(imgTag,gallery);
    gallery.parentNode.insertBefore(pTag,gallery);
*/

insertAfter(imgTag,gallery);
insertAfter(pTag,imgTag);
}

function prepareGallery()
{
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery"))return false;

  var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName('a');
   // alert("gallery.length:"+links.length);
  for(var i = 0;i<links.length;i++)
  {
         links[i].onclick = function()
         {
          return !showPic(this);
         }
  }
}
//---------------通用函数 util  的分界线------------------//

function insertAfter(newElement,targetElement)
{
   var parentNode = targetElement.parentNode;

   if(parentNode.LastChild == targetElement)
   {
    parentNode.appendChild(newElement);
   }else{
    parentNode.insertBefore(newElement,targetElement.nextSibling);
   }
}

function addLoadEvent(func)
{
       var oldonload = window.onload;
       if(typeof window.onload != 'function')
       {
        window.onload = func;
       }else
       {
        window.onload = function(){
            oldonload();
            func();
        }
       }
}
/*  函数调用区  */
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);