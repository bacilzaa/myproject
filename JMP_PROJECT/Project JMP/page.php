<!DOCTYPE html>
    <html>
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!-------------------------------------------------------------------------------------CDN------------------------------------------------------------------------------------------->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<!-------------------------------------------------------------------------------------Extanal CSS---------------------------------------------------------------------------------->
        <link rel="stylesheet" type="text/css" href="browsestyle.css">
        <link href="assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/owl.theme.default.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="search.css">
        <style>
        #commentshow{ color:white}
        </style>
    </head>

    <body>
<!------------------------------------------------------------------------------------- Navbar -------------------------------------------------------------------------------------->

        <nav class="navbar navbar-expand-lg ">

        <a class="navbar-brand logo " href="browse.html">JMP Review</a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" id="navtog">
                <span class="navbar-toggler-icon logo"><i class="fa fa-bars" aria-hidden="true"></i></span>
            </button>
        
        <div class="collapse navbar-collapse " id="navbarTop"> 
            <ul class="navbar-nav mr-auto">
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link big" data-toggle="tooltip" title="Search" id="Box-Search">
                    <button class="btn btn2"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </a>
                </li>
            <li class="nav-item">
                <a class="nav-link big" data-toggle="tooltip"  id="link1">
                <button class="btn btn2" id="button1"></button>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link big" data-toggle="tooltip"  id="link2">
                <button class="btn btn2" id="button2"></button>
                </a>
            </li>
            </ul>
        </div>
        </nav>

    
<!----------------------------------------------------------------------------------------Model DIV------------------------------------------------------------------------------------->

        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="input-group med">
                <input class="form-control form-control-lg border-0 bg-white med" id="Search" type="text" placeholder="Search">
                <div class="input-group-append close">
                    <span class="input-group-text close"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
                <div id="t"></div>
        </div>
    


<!--------------------------------------------------------------------------------------Content Div----------------------------------------------------------->



        <div class="container-fluid fromtop">    
            <div  class="row" style="background-color:transparent">
                <div class=" d-none d-md-block" id="bannerImage">
                </div>
            </div>
        </div>
        <div class="container-fluid trailer mt-5">
            <p class="topic">Movie Info</p>
        </div>
        <div class="row mx-5">
            <div class="col-md">
                <div class="img-fluid" id="movieimg">
                </div>
            </div>
            <div class="col-md">
                <p class="description mx-5">
                </p>
                <div class="container-fluid trailer" id="score">
                    <div class="row mx-5">
                        <div class="col-md">
                            <p class="topic" id="scoreshow">Movie Score</p>
                        </div>
                        <div class="col-md">
                                <i class='fa fa-star fa-2x cm show' data-index='0'></i>
                                <i class='fa fa-star fa-2x cm show' data-index='1'></i>
                                <i class='fa fa-star fa-2x cm show' data-index='2'></i>
                                <i class='fa fa-star fa-2x cm show' data-index='3'></i>
                                <i class='fa fa-star fa-2x cm show' data-index='4'></i>
                            </div>
                    </div>
                </div>

                <div class="container-fluid trailer" style="margin-top:3%">
                    <p class="topic">Genres</p>
                </div>
                <div id="genres"></div>

                <div class="container-fluid trailer" id="video1" style="margin-top:3%">
                    <p class="topic">Video Trailer</p>
                </div>
                <iframe width="560" height="400"  frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    id="video"></iframe>
                </div>
        </div>

        <div class="container-fluid trailer" id = "cast">
            <p class="topic">Cast</p>
        </div>
        <div >
        <div class="container my-5 ">
            <div class="card btn" id="cast1">
                <div class="card-body owl-carousel owl-theme" id="Caster">
            </div>
        </div>

        </div>

        <div class="container-fluid trailer">
            <p class="topic">What do you think?</p>
        </div>
        <div class="comment">

        </div>

<!--------------------------------------------------------------------------------------Comment Div--------------------------------------------------------------------------------->
<div align ="center"  id="comment">
            <i class="fa fa-star fa-2x score" data-index="0"></i>
            <i class="fa fa-star fa-2x score" data-index="1"></i>
            <i class="fa fa-star fa-2x score" data-index="2"></i>
            <i class="fa fa-star fa-2x score" data-index="3"></i>
            <i class="fa fa-star fa-2x score" data-index="4"></i>

<form  method="post"  id="fcomment" onsubmit="savetoDB()">
    <textarea rows="4" cols="100" name="comment" placeholder="comment" id="#comment"></textarea>
    <div>
    <input type="submit" value="comment" class="btn btn2">
        </div>
</form>

</div>

<div class="container-fluid trailer" >
            <p class="topic">Comment</p>
            <!--<div id="commentshow"></div>-->
        </div>
    <div class="container">
        <div class="row">
            <div class="col-sm" id="showcomment"></div>
    </div>
<!------------------------------------------------------------------------------------- Footer -------------------------------------------------------------------------------------->
        <footer id="footer" class="py-4 bg-red text-white-50 ">

        <div class="d-flex justify-content-center">
            <div class="px-3">Copyright &copy;JMP Review </div>
            <div class="px-3"> Powered By W3.CSS </div>
            <div class="px-3"> Follow Us </div>
        </div>
        <div class="d-flex justify-content-center">
            <a class="btn1" href="#">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn1" href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="btn1" href="#">
                <i class="fab fa-google"></i>
            </a>
            <a class="btn1" href="#">
                <i class="fab fa-instagram"></i>
            </a>
            <a class="btn1" href="#">
                <i class="fab fa-youtube"></i>
            </a>
        </div>

        </footer>


    <body>
</html>







<!-------------------------------------------------------------------------------------Extanal Script---------------------------------------------------------------------------------->
<script src="checklogin.js"></script>
<script src="search.js"></script>
<script src="comment.js"></script>
<script src="showcomment.js"></script>
<script src="etc.js"></script>
<script src="owl.carousel.min.js"></script>
<script src="showscore.js"></script>
<script src="movie.js"></script>
