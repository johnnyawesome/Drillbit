(function(){
    //Changes the cursor to crosshairs
    document.body.style.cursor = "crosshair";

    //Ease of use: Adds a red border to the element the cursor is hovering over
    document.body.onmouseover = mouseEvent2 => {
        mouseEvent2.target.style.border = "medium solid red";
        mouseEvent2.target.style.backgroundColor  = "yellow";
    }; 
    document.body.onmouseout = mouseEvent3 => {
        mouseEvent3.target.style.border = "none";
        mouseEvent3.target.style.backgroundColor  = "initial";
    };

    //Deactivate all links
    for(let element of Array.from(document.getElementsByTagName("a"))){
        element.addEventListener("click", deactivateLinks);
    };

    //Removes the clicked element
    window.onclick = mouseEvent => { 

        //Remove element
        mouseEvent.target.remove();

        //Restores default values
        document.body.style.cursor = "auto";
        document.body.onmouseover = mouseEvent3 => mouseEvent3.target.style.border = "none"; 

        //Removes Eventlistener on Links so that clicking links works again
        for(let element of Array.from(document.getElementsByTagName("a"))){
            element.removeEventListener("click", deactivateLinks);
        }

        //Removes eventlisteners
        window.onclick = undefined;
        document.body.onmouseout = undefined;

        //Restores the scrollbar. Some Overlay-Scripts remove them
        document.body.style.overflowY = "visible";
        document.documentElement.style.overflowY = "visible";
    };

    function deactivateLinks(event){
        event.preventDefault();
    }
})();
