function focusLabels()
{
	if(!document.getElementsByTagName) return false;
	var labels = document.getElementsByTagName("label");
	if(!labels || labels.length == 0) return false;
	
	for(var i = 0;<labels.length;i++)
	{
		if(!labels[i].getAttribute("for")) return false;
		labels[i].onclick = function()
		{
			var id = this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var element = document.getElementById(id);
			element.focus();
		}
	}
}
addLoadEvent();  
