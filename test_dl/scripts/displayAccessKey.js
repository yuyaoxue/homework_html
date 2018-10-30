function displayAccessKey()
{
   if(!document.getElementsByTagName) return false;
   if(!document.createElement) return false;
   if(!document.createTextNode) return false;

//取得 links
	var links = document.getElementsByTagName("a");
	if(links.length < 1) return false;
	var akeys = new Array();
//遍历link 数据
	for(var i = 0; i < links.length; i++)
	{
       var accesskey = links[i].getAttribute("accesskey");
       if(!accesskey) continue;
       var value = links[i].lastChild.nodeValue;
       akeys[accesskey] = value;
	}
	if(akeys.length < 1) return false;
    var ul_accesskey = document.createElement("ul");

	for(key in akeys)
	{
	  var text = akeys[key];
	  var str = key +":" + text;
      var li = document.createElement("li");
      var li_text = document.createTextNode(str);
      li.appendChild(li_text);
      ul_accesskey.appendChild(li);
	}

	//创建标题
	 var header = document.createElement("h3");
	 header_text = document.createTextNode("AcccessKey");
	 header.appendChild(header_text);
	 document.body.appendChild(header);
	 document.body.appendChild(ul_accesskey);
}
addLoadEvent(displayAccessKey);