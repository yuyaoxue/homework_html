
function displayAbbreviation()
{
    //检查兼容性
   if(!document.getElementsByTagName) return false;
   if(!document.createElement) return false;
   if(!document.createTextNode) return false;

	//取得缩略图
	var abbrList = document.getElementsByTagName("abbr");

   if(abbrList.length < 1) return false;
	var abbrDics = new Array();
	var currentAbbr;
  
    	//alert("abbrList length："+abbrList.length);
   //遍历 缩略图
	for(var i = 0;i < abbrList.length;i++)
	{
         currentAbbr = abbrList[i];
         // 不支持 abbr 的浏览器（IE 7之前） 的兼容性检查，
         if(currentAbbr.childNodes.length < 1) continue;
         var value = currentAbbr.getAttribute("title");
          if(!value) continue;
         var key = currentAbbr.lastChild.nodeValue;
         abbrDics[key] = value;
	}
	//创建 定义列表

	var dl = document.createElement("dl");

	for(key in abbrDics)
	{
         var dt = document.createElement("dt");
         var dt_text = document.createTextNode(key);
         dt.appendChild(dt_text);

         var dd = document.createElement("dd");
         var dd_text = document.createTextNode(abbrDics[key]);
         dd.appendChild(dd_text);

         dl.appendChild(dt);
         dl.appendChild(dd);
	}
	//alert("length："+dl.childNodes.length);

    if(dl.childNodes.length < 1) return false;

    var header = document.createElement("h2");
    var headertext = document.createTextNode("Abbreviations");
    header.appendChild(headertext);

    document.body.appendChild(header);
    document.body.appendChild(dl);
}
addLoadEvent(displayAbbreviation);