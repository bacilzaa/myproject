$(document).ready(function(){
    var url = window.location.search;
    var movie = url.split("=");
    console.log(movie[1]);
    localStorage.setItem('movie', movie[1]);
    api(movie[1]);
    cast(movie[1]);
    video(movie[1]);

function api(id){
    $.ajax({
        url : `https://api.themoviedb.org/3/movie/${id}?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3&language=en-US`,
        method: 'GET',
        datatype:'JSON',
        success:function(data){
            console.log(data);
            $("title").append(`JMP || ${data.title}`);
            $('.description').append(`<h1 style="text-align:left" >${data.title}</h1><p style="text-align:left">${data.overview}</p>`);
            if(data.backdrop_path != null){
                $('#bannerImage').append(`<img src='https://image.tmdb.org/t/p/original${data.backdrop_path}' class="img-fluid" >`);
            }
            $('#movieimg').append(`<img src='https://image.tmdb.org/t/p/w500${data.poster_path}' style="height:100% ;width:100% ;">`);
            $.each(data.genres ,function(k){
                $("#genres").append(`<button class="btn">${data.genres[k].name}</button>`)
                console.log(data.genres[k].name)
            })

        }
    })
}

function cast(id){
    var count = 0;
    $.ajax({
        url : `https://api.themoviedb.org/3/movie/${id}/credits?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3`,
        method: 'GET',
        datatype:'JSON',
        success:function(data){   
            console.log(data.cast)  
            $.each(data.cast ,function(k){
                if(data.cast[k].profile_path != null){
                 count++;   
                $("#Caster").owlCarousel('add', `<div style="padding:1%;">
                <img src="https://image.tmdb.org/t/p/w500${data.cast[k].profile_path}" >
                <p style="color:white;font-size:20px;"> CHARACTER</p>
                <p style="color:white;font-size:14px;"> ${data.cast[k].character}</p>
                <p style="color:white;font-size:20px;"> NAME</p>
                <p style="color:white;font-size:14px;"> ${data.cast[k].name}</p>
                </div>`).owlCarousel('update');
                }
            })

            if(count == 0){
                $("#cast").hide()
                $("#cast1").hide()

            }    


        }
    })
}

function video(id){
    var count = 0;
    $.ajax({
        url : `https://api.themoviedb.org/3/movie/${id}/videos?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3&language=en-US`,
        method: 'GET',
        datatype:'JSON',
        success:function(data){
            if(data.results.length == 0){
                $("#video1").hide()
            }   
           console.log(data.results)
           $.each(data.results ,function(k){
                if(data.results[k].site == "YouTube"){
                    document.getElementById("video").setAttribute('src', `https://www.youtube.com/embed/${data.results[k].key}`);
                }
            })
        }
    })
}

});