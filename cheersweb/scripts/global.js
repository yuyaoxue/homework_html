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
	if(!document.getElementById("intro")) return false;
	
	// 创建 div 元素
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	
	//创建 img 元素
	var preview = document.createElement("img");
	preview.setAttribute("src","images/slideshow.jpg");
	preview.setAttribute("alt","a glimpse of what awaits you");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	
	var list = document.getElementById("intro");
	insertAfter(slideshow,list);
	var links = list.getElementsByTagName("a");
 	var destination;
	for(var i = 0;i<links.length;i++)
	{
	 	links[i].onmouseover = function(){
		 	destination = this.getAttribute("href");
			if(destination.indexOf("index.html") != -1){
				moveElement("preview",0,0,5);
			}
			if(destination.indexOf("about.html") != -1)
			{
				moveElement("preview",-600,0,5);
			}
			if(destination.indexOf("photos.html") != -1)
			{
				moveElement("preview",-1200,0,5);
			}
			if(destination.indexOf("live.html") != -1)
			{
				moveElement("preview",-1800,0,5);
			}
			if(destination.indexOf("contact.html") != -1)
			{
				moveElement("preview",-2400,0,5);
			}
		}
  }
}

function hightlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var headers = document.getElementsByTagName('header');
		console.log("headers length:"+headers.length);

	if(headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
		console.log("navs length:"+navs.length);

	if(navs.length == 0) return false;
	
	//取得导航链接，然后循环遍历
	var links = navs[0].getElementsByTagName("a");
	var linkurl;
	console.log("link length:"+links.length);
	for(var i = 0;i<links.length;i++)
	{
		linkurl = links[i].getAttribute("href");
		console.log("linkurl:"+linkurl+"window.location.href:"+window.location.href);
		if(window.location.href.indexOf(linkurl) !=-1)
		{
			links[i].className = "here";
			var linktext = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
		}
	}
}
function showSection(id)
{
	var sections = document.getElementsByTagName("section");
	for(var i = 0;i < sections.length;i++)
	{
		if(sections[i].getAttribute("id") != id)
		{
			sections[i].style.display = "none";
		}else{
			sections[i].style.display = "block";
		}
	} 
}

function prepareInternalnav()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	
	var articles = document.getElementsByTagName("article");
	if(articles.length == 0) return false;
	
	var navs = articles[0].getElementsByTagName("nav");
	
	if(navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	for(var i = 0;i<links.length;i++){
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function()
		{
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareSlideshow);
addLoadEvent(hightlightPage);
addLoadEvent(prepareInternalnav);

