function shopcheck()
{
	if(!document.getElementsByClassName)return false;
	

	var shopItems = document.getElementsByClassName("list_item");
	
	if(shopItems == null) return false;
	var count = shopItems.length;
	
	if(count == 0) return false;

	for(var i = 0; i < count;i++)
	{
		var shopcheck = shopItems[i].getElementsByClassName("shopcheck");
		
        addClass(shopcheck[0],"shopcheck_hide")
        shopcheck[0].oldClassName = shopcheck[0].className;
		shopItems[i].onmouseover = function(){
			var shopcheck1 = this.getElementsByClassName("shopcheck");
			 addClass(shopcheck1[0],"shopcheck_show");  
		}
		shopItems[i].onmouseout = function(){
			var shopcheck2 = this.getElementsByClassName("shopcheck");
			shopcheck2[0].className = shopcheck2[0].oldClassName;
		}
		
		var shopimg = shopItems[i].getElementsByClassName("shopimg");
        shopimg[0].oldClassName = shopimg[0].className;
        
        shopimg[0].onmouseover = function(){
        	 addClass(this,"shopimg_over")
        }
        shopimg[0].onmouseout = function(){
             this.className = this.oldClassName;	
        }
	}
}

addLoadEvent(shopcheck());
