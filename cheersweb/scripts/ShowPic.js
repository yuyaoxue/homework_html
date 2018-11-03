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
//----------------------------------------//

function preparePlaceholder()
{
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;

   var placeholder = document.createElement("img");
   placeholder.setAttribute("id","placeHolder");
   placeholder.setAttribute("src","images/photos/choseImage.jpg");
   //imgTag.setAttribute("width","50%");
   placeholder.setAttribute("alt","My Image Gallery");

   var description = document.createElement("p");
   description.setAttribute("id","description");
   var pText = document.createTextNode("Choose an image");
   description.appendChild(pText);

   var gallery = document.getElementById("imagegallery");

insertAfter(description,gallery);
insertAfter(placeholder,description);
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

/*  函数调用区  */
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);