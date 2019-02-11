//Functions
let screenHeight = $(window).height();

function currentHheight(currentHheight){
	var currentElement = $(currentHheight);
	currentElement.css('height', screenHeight)
} 

function marginTopTitle(){
	var marginTitle = screenHeight / 4;
    var elementTitle = $(".firstStep h1");

    elementTitle.css("margin-top", marginTitle);
}

function fixedMenu(){
	var elementHeader = $("header .section");
	var currentScrool = $(window).scrollTop();
    (currentScrool > 0) ? elementHeader.addClass("topMenuWhite") : elementHeader.removeClass("topMenuWhite");
}


$(document).ready(function(){
	currentHheight(".firstStep"); //Call function when the page is ready
	marginTopTitle() //Call function when the page is ready

	$(window).on("resize",function(){
		currentHheight(".firstStep"); //Call function when the page is resized
		marginTopTitle() //Call function when the page is resized
	})
})

