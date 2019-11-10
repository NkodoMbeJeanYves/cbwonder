// get random value of array
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var app = [
			"About",
			"Home",
			"Services"
		];

// web page displayed
$('nav.site-navigation ul li a').on('click', function(e){
	e.preventDefault()
	on()
	let $page = $(this).html()
	setTimeout(function(){
			changePageTitle($page)
			loadPage($page)
        },2000)
})

// get all anchor elements when mobile menu is displayed
/*$li = $('a').closest('ul.site-nav-wrap li')
$li.forEach(callbackfn: Function, thisArg?: any)
// mobile page displayed
$('div.site-mobile-menu-body ul.site-nav-wrap li a').on('click', function(e){
	//e.preventDefault()
	console.log($(this))
	/*on()
	let $page = $(this)[0].html()
	console.log('page loaded : '$page)
	setTimeout(function(){
			changePageTitle($page)
			loadPage($page)
        },2000)
})*/


 function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
/**
*@Comment modifier le titre de chaque page
*
*/
function changePageTitle(pageTitle){
	// on selectionne la balise h1 de la page en question
	let title = pageTitle
	
		// set page welcome message
		$message = {"About": "Welcome to our about page",
					"Services": "Welcome to our services page",
					"Home" : "Welcome to our website"}
	
			switch (pageTitle.toLowerCase()) {
				case app[0].toLowerCase():
					// statements_1
					title = $message.About;
					break;
				case app[1].toLowerCase():
					// statements_1
					title = $message.Home;
					break;	
				case app[2].toLowerCase():
					// statements_1
					title = $message.Services;
					break;	
				default:
					// statements_def
					break;
			}
		// h5 title			
		$('.text-cursive.h5.text-teal').html(`${title}`)
		// h1 title
		$('h1.mb-3.font-weight-bold.text-teal').html(`${pageTitle} Page`)
	
		console.log(app)		

}

/**
 * fetches page using ajax
 * @param {*} page the page url
 */
function loadPage(page)
{
  // do not allow access to page since it's totally loaded
  
	$.ajax({
	    url: `./pages/${page}.html`,
	    cache:false,
	    dataType: 'html',
	    type: "GET",
	    success: function(data, textStatus, jqXHR) {
        $('div#content').empty();
        $('div#content').html(jqXHR.responseText);
	    }
	});

	$imgs = [
				'images/hero_1.jpg',
				'images/hero_2.jpg',
				'images/hero_3.jpg'];
	var myRandomElement = $imgs.randomElement();
	console.log(myRandomElement);
	// change image title
	// change image header when page loaded
	//$('.site-section-cover.overlay').css('background-image',myRandomElement)
	let imageUrl = myRandomElement;
	$('.site-section-cover.overlay').css('background-image', `url(${imageUrl})`);
}