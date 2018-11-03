function addClass(element,value)
{
	if(!element.classname)
	{
		element.className = value;
	}else{
		newclassName = element.className;
		newclassName+=" ";
		newclassName+=value;
		element.className = newclassName;
	}
}