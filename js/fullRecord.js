$(document).ready(function(){
    var dropdownSearch = "hidden";

    $("a#navbarDropdown").click(function(){
        if (dropdownSearch == "hidden"){
            $("div.search-dropdown-input").css("visibility", "visible");
            dropdownSearch = "visible";
        } else if (dropdownSearch == "visible"){
            $("div.search-dropdown-input").css("visibility", "hidden");
            dropdownSearch = "hidden";
        }
    });

    document.onmousedown = function(){
        var dropdownVisibility = $("div.search-dropdown-input").css("visibility");
        if (dropdownVisibility == "visible"){
            $("div.search-dropdown-input").css("visibility", "hidden");
            dropdownSearch = "hidden";
        }
    }


    
})