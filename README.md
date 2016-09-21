# RANDOM QUOTES

### HOW TO USE

- Copy Files from Repository.


I. Include the stylesheet on your document's.

```sh
<!-- BOOTSTRAP -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- CSS - INCLUDE FONT AWESOME -->
<link rel="stylesheet" href="css/style.css">	
```
II. Add the HTML code.

```sh
<div class="slider-wrapper">
	<div class="slider-container">
		<div class="arrow" id="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
		<div class="arrow" id="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
		
		<div class="items">
			<img src="images/photo1.jpg" alt=""> <!-- ADD PHOTO -->
			<div class="info">
				<h2>Title 1</h2><hr> <!-- ADD TITLE -->
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam repellat, enim consequuntur hic, voluptatibus quod? lorem15</p> <!-- ADD DETAILS -->
			</div>
		</div> <!-- end items -->

		<div class="items">
			<img src="images/photo2.jpg" alt=""> <!-- ADD PHOTO -->
			<div class="info">
				<h2>Title 2</h2><hr> <!-- ADD TITLE -->
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam repellat, enim consequuntur hic, voluptatibus quod? lorem15</p> <!-- ADD DETAILS -->
			</div>
		</div> <!-- end items -->

	</div> <!-- end slider-container -->
</div><!-- end slider-wrapper -->
```
III. Add scripts.

```sh
<body>
...
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/slider.js"></script>

<script>
    $(".slider-wrapper").slider();
</script>

</body>
```

IV. Slider options.
```sh
<script>
    $(".slider-wrapper").slider({
        width: '100vw',  // width e.q. 100vw, 100%, 700px
        height: '100vh', // height e.q. 100vh, 100%, 700px
        animtype: null,  // Type of animations: null(standard animation), zoomIn, fadeIn
        delay: 4000,     // delay between transitions
        automatic: true, // enable/disable automatic slide rotation
        showcontrols: true, // enable/disable arrow controls
        colorcontrols: '#0085F6', // arrows background-color e.q. #000, red, rgb(0,0,0) 
        randomstart: false        // start from a random slide
    });
</script>
```

### [Live preview](https://htmlpreview.github.io/?https://github.com/PawelW1993/slider/blob/master/index.html)
