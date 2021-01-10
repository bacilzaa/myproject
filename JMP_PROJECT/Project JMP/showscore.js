$(document).ready(function(){
    setTimeout(function() { 
    var movie = localStorage.getItem("movie");
    $.ajax({
        url:"showscore.php",
        method:"GET",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        datatype:"JSON",
        data:{
            movie:movie
        },
        success:function(data){
            var alldata = JSON.parse(data);
            console.log(alldata)
            $.each(alldata ,function(k){
                document.getElementById("scoreshow").innerHTML = `Movie Score: ${alldata[k].realscore}`;
                var rating = alldata[k].score;
                for(var i=0; i <= rating-1; i++){
                    $(`.show:eq(`+i+`)`).css('color','yellow');
                }
            })
        }
    })

}, 1000)


})