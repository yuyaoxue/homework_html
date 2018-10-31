function addLoadEvent(func)
{
  var oldOnload = window.onload;
  if(typeof currentFun == 'function')
  {
  	window.onload = function()
  	{
  		currentFun();
  	     func();
  	}
  }
  else
  {
  	window.onload = func;
  }
}