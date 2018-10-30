function displaycitations()
{
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;

	var quotes = document.getElementsByTagName("blockquote");
	if(quotes.length < 1) return false;
    
    for(var i = 0;i < quotes.length;i++)
    {
        var url = quotes[i].getAttribute("cite");
        if(!url) return false;
        var quotechildren = quotes[i].getElementsByTagName("*");

        if(quotechildren.length < 1) return false;
        var elem = quotechildren[quotechildren.length-1];
        
        var link = document.createElement("a");
        link.setAttribute("href",url);
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);

        /* 使用直接方式添加到最后一个元素后面 */
       // elem.appendChild(link);

        /* 使用另外一个方式 sup，包装它，使它在浏览器里呈现出上标色效果 */

        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}
addLoadEvent(displaycitations);