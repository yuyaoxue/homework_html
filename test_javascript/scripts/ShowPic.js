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

function countBodyChildren()
{
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
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
