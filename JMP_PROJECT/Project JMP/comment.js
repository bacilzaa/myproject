var ratedIndex = -1,comment;
var Sesuser=localStorage.getItem('username');

$(document).ready(function(){
    resetStarcolors();

    $('#comment').on('click',function(){
        checklog();
    })

    $('.score').on('click',function(){
        ratedIndex = parseInt($(this).data('index'));
        console.log(ratedIndex);
    });

    $('.score').mouseover(function(){
        resetStarcolors();

        var currentindex = parseInt($(this).data('index'));
        setStars(currentindex);

    }); 

    $('.score').mouseleave(function(){
        resetStarcolors();

        if(ratedIndex != -1){
            setStars(ratedIndex);
        }

    });


});

function setStars(max){
    for(var i=0; i <= max; i++){
            $('.score:eq('+i+')').css('color','yellow');
        }

};

function resetStarcolors(){
    $('.score').css('color','white')
};


function checklog(){
    var cl =localStorage.getItem("username");
    if(!cl){
        alert("Plese login");
        window.location.href="login.html";
    }
}


function resetStarcolor(){
    $('.cm').css('color','white')
}

function savetoDB(){
    var form=$("#fcomment").serialize();
    var comment=form.substring(8,form.length);
    var movie = localStorage.getItem('movie');
    console.log(ratedIndex);
    //var comment = $("#comment").val().trim();

    $.ajax({
        url:"comment.php",
        method: "POST",
        dataType:'json',
        data:{
            ratedIndex: ratedIndex,
            comment:comment,
            movie:movie,
            username:Sesuser
        }, 
        success:function(data){
            console.log(data);
        }
    });

    $.ajax({
        url:"totalScore.php",
        method:"POST",
        dataType:'json',
        data:{
            movie:movie
        },
        success:function(res){
           alert(res);
        }
    });

};