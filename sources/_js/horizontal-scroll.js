var mouseWheelEvt = function (event) {
    this.scrollLeft += event.deltaY;

    //Arrêter le défilement vertical par défaut jusqu'à ce que l'horizontal soit terminé
    if ( this.scrollWidth - this.clientWidth != this.scrollLeft){
        event.preventDefault();
    }
}

var scrollX = document.querySelectorAll('.js--scroll-x');
scrollX = Array.prototype.slice.call(scrollX);

scrollX.forEach(function(element) {
    element.addEventListener("wheel", mouseWheelEvt);
});
