function moveElement(elementID,final_X,final_Y,interval)
{
   if(!document.getElementById) return false;
   if(!document.getElementById(elementID)) return false;


   var moveelement = document.getElementById(elementID);
   var xpos = parseInt(moveelement.style.left);
   var ypos = parseInt(moveelement.style.top);

   if(xpos == final_X && ypos == final_Y)
   {
   	return true;
   }

    if(xpos < final_X)
    {
    	xpos++;
    }

    if(xpos > final_X)
    {
    	xpos--;
    }

    if(ypos < final_Y)
    {
    	ypos++;
    }

    if(ypos > final_Y)
    {
    	ypos--;
    }

    moveelement.style.left = xpos+"px";
    moveelement.style.right = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+final_X+","+final_Y+","+interval+")";
    movement = setTimeout(repeat,interval);
}

function positionMessage()
{
	 if(!document.getElementById) return false;
   if(!document.getElementById("message")) return false;

   var elem = document.getElementById("message");
   elem.style.position = "absolute";
   elem.style.left = "50px";
   elem.style.top = "100px";
   moveElement("message",200,100,10);

    var elem2 = document.getElementById("message2");
   elem2.style.position = "absolute";
   elem2.style.left = "150px";
   elem2.style.top = "200px";
   moveElement("message2",300,100,10);
}
addLoadEvent(positionMessage);