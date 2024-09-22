var dockItem_1 = document.querySelector(".dock-item:nth-child(1)")
var dockItem_2 = document.querySelector(".dock-item:nth-child(2)")
var dockItem_3 = document.querySelector(".dock-item:nth-child(3)")
var dockItem_4 = document.querySelector(".dock-item:nth-child(4)")
var dockItem_5 = document.querySelector(".dock-item:nth-child(5)")
var dockItem_6 = document.querySelector(".dock-item:nth-child(6)")
var dockItem_7 = document.querySelector(".dock-item:nth-child(7)")
var dockItem_8 = document.querySelector(".dock-item:nth-child(8)")

function openUrlOnClick(dockItem, url) {
    dockItem.addEventListener("click", function() {
      window.open(url,"_blank" ); // Opens in a new tab
    });
  }

openUrlOnClick(dockItem_1, "https://www.apple.com/in/app-store/")

