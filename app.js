// Get the modal
// var modal = document.getElementById("input-show");
// var modal1 = document.getElementById("show-search");


// When the user clicks the button, open the modal 
function toggle_visibility() {
    document.getElementById("show-search").style.color = "#FC6514";
    // document.getElementById("input").style.borderBottom = "1px solid #FC6514";
    document.getElementById("input-show").style.display="flex";
    // document.getElementById("placeholder").style.fontSize="0.8rem";
    // document.getElementById("placeholder").style.position="static";
    document.getElementById("placeholder").style.color="#FC6514";
    document.getElementById("placeholder").style.fontSize="0.8rem";
    document.getElementById("placeholder").style.transform="translateY(.3rem)";
    document.getElementById("search").style.border="none";
    document.getElementById("search__icon").style.color="#FC6514";
    document.getElementById("line").style.display="block";
    // document.getElementById("search").style.outline="none";
    document.getElementById("search").style.borderRadius="2px";
    document.getElementById("search").style.boxShadow="0 0px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)";
    // modal1.style.color="#B2BEC3";
    // document.getElementById("search").style.border="none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById("input-show");
    if (event.target == modal) {
        modal.style.display = "none";
        // modal1.style.display = "none";
        document.getElementById("show-search").style.color = "#B2BEC3";
        // document.getElementById("input").style.borderBottom = "1px solid rgba(255, 255, 255, 0)";
        // document.getElementById("placeholder").style.fontSize="1rem";
        document.getElementById("placeholder").style.color="#B2BEC3";
        
        // document.getElementById("placeholder").style.position="absolute";
        
        // document.getElementById("search").style.outlineStyle="solid";
        document.getElementById("search").style.borderRadius="5px";        
        document.getElementById("search").style.boxShadow="none";
        document.getElementById("search").style.border="solid 1px #B2BEC3";
        document.getElementById("line").style.display="none";
        if(document.getElementById("input").value != ''){
            // document.getElementById("placeholder").style.color="#FC6514";
            document.getElementById("placeholder").style.fontSize="0.8rem";
            

            // document.getElementById("placeholder").style.transform="translateY(+.05rem)";
        }
        else{
        document.getElementById("placeholder").style.transform="translateY(+.75rem)";
        document.getElementById("placeholder").style.fontSize="1rem";
        }
        
    }
    
    
}
