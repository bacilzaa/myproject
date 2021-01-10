$(document).ready(function(){
    setTimeout(function() { 
    $.ajax({
        url:"Recommend.php",
        method:"GET",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        datatype:"JSON",
        success:function(data){
            if(data.length > 2){
            var alldata = JSON.parse(data);
            console.log(alldata)
            $.each(alldata ,function(k){
                if(alldata[k].movie_id != 0){
                    api(alldata[k].movie_id,alldata[k].realscore)

                }
            })
            }else{
                $("#rec").hide()
            }
        }
    })

}, 1000)

function api(id,score){
    $.ajax({
        url : `https://api.themoviedb.org/3/movie/${id}?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3&language=en-US`,
        method: 'GET',
        datatype:'JSON',
        success:function(data){
            if((data.poster_path != null)){
                $("#Recommend").owlCarousel('add', `
                <div align="center">
                    <i class='fa fa-star fa-2x cm ' data-index='0' style="color:yellow"></i>
                    <span style="font-size:20px">${score}</span>
                </div>
                <div style="padding:1%;">
                    <a href="page.php?movie=${id}" title="${data.title}">
                        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" >
                    </a>
                </div>`).owlCarousel('update');
            }

        }
    })
}

/*var rating = alldata[k].score;
for(var i=0; i <= rating-1; i++){
    $(`.show:eq(`+i+`)`).css('color','yellow');*/
})