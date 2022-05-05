const btnmenu = document.querySelector(".fa-bars");
const header = document.querySelector(".Header");
const menuItems = document.querySelectorAll(".nav li a[href*='#']");
const headerHeight = header.clientHeight;

btnmenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;

    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
};

for (const index in menuItems) {
    var item = menuItems[index];
    console.log(item.nextElementSibling);
    item.onclick = function(e) {
        var isParent = this.nextElementSibling;
        if (isParent) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    };
}