function addClass(element,value)
{
	if(!element.className)
	{
	    element.oldClassName = "";
		element.className = value;
		
	}else{
	    element.oldClassName = element.className;
		newclassName = element.className;
		newclassName+=" ";
		newclassName+=value;
		element.className = newclassName;
	}
}

function removeClass(element,value)
{
	if(!element.className) return false;
	if(element.className.indexOf(value) != -1)
	{
		element.className = element.oldClassName;
	}
}
