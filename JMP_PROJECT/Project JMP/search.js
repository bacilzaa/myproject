$(document).ready(function(){

var timeout,page = 1 ;

var modal = document.getElementById("myModal");
var t = document.getElementById("t");
// Get the button that opens the modal
var btn = document.getElementById("Box-Search");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  $("#myModal").toggleClass('active');
  $("#genre").hide();
  $('.navbar').removeClass('fixed-top');
  $('#cast1').hide();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("#genre").show();
  $("#Search").val("");
  $("#t").empty();
  $('.navbar').addClass('fixed-top');
  $('#cast1').show();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ((event.target == t)||(event.target == modal)) {
    modal.style.display = "none";
    $("#genre").show();
    $("#Search").val("");
    $("#t").empty();
    $('.navbar').addClass('fixed-top');
    $('#cast1').show();
  }

}


$("#Search").on('input',function(){
    console.log("Typing");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
    $("#t").empty();
    var movie = $("#Search").val();
    if (!isEmpty(movie)){ 
                api(movie,page);
            }
        }, 1000)
    });




function api(movie,page){
    $.ajax({
    url:`https://api.themoviedb.org/3/search/movie?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3&language=en-US&query=${movie}&page=${page}&include_adult=false`,
    method:"GET",
    datatype:"JSON",
    success :function(data){
        $.each(data.results ,function(k){
            if(data.results[k].poster_path != null){
            $("#t").append(`
                <div class="card med">
                <div class="card-body">
                <h3> ${data.results[k].title} </h3>
                <p><a href="page.php?movie=${data.results[k].id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" style="width:70%"></a>
                </p>
                <hr>
                </div>
                </div>`); 
            }
        });
            if(page < data.total_pages){
            $("#t").append(`<button class="SearchBtn btn btn2 btn5">${page}</button>`);
            }
            console.log(data);
                                
            $(`.SearchBtn`).on('click',function(){
            $(`.SearchBtn`).remove();
            console.log(page);
            page++;
            api(movie,page);
                    });// end button
                        }//end success    
                    });//end ajax      
                }//end function
    
    function isEmpty(str) {
        return (!str || 0 === str.length || /^\s*$/.test(str) );
    }
          
//----------------------------------------End Doc--------------------------------------------//
})