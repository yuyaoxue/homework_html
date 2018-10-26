window.onload = function()
{
	//sample_dynamic();
	complex_dynamic();
}

function complex_dynamic()
{
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	var text1 = document.createTextNode("This is");
	var emElement = document.createElement("em");
	var emtext = document.createTextNode("my");
	emElement.appendChild(emtext);
	var text2 = document.createTextNode("content.");
	para.appendChild(text1);
	para.appendChild(emElement);
	para.appendChild(text2);
	testdiv.appendChild(para);
}

function sample_dynamic()
{
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var text = document.createTextNode("hello world!");
	para.appendChild(text);
}