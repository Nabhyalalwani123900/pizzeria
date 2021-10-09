menu_list_array = ["Margherita Pizza",
                   "Veg pizza",
                   "sausage pizza",
                   "Non-veg pizza",
                   "Golden corn pizza",
                   "Mushroom pizza"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata; 
}

function add_item(){
var htmldata;
 item=document.getElementById("add_item").value;
        menu_list_array.sort() 
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">' + '<img src="pizzaImg.png" style="width:100px; height:80px;"/>' + menu_list_array[i] + '</div>'+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
