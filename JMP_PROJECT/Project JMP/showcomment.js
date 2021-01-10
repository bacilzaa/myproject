$(document).ready(function(){
    setTimeout(function() { var movie = localStorage.getItem("movie");

    $.ajax({
        url:"showcomment.php",
        method:"GET",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        datatype:"JSON",
        data:{
            movie:movie
        },
        success:function(data){
            var sc=0;
            var alldata = JSON.parse(data);
            console.log(alldata)
            $.each(alldata ,function(k){
                $("#showcomment").append(`
                <div class="med">
                    <div class="card">
                        <div class="card-body">
                            <div style="float:left">
                                <i class='fa fa-star fa-2x cm ${sc}' data-index='0'></i>
                                <i class='fa fa-star fa-2x cm ${sc}' data-index='1'></i>
                                <i class='fa fa-star fa-2x cm ${sc}' data-index='2'></i>
                                <i class='fa fa-star fa-2x cm ${sc}' data-index='3'></i>
                                <i class='fa fa-star fa-2x cm ${sc}' data-index='4'></i>
                            </div>
                            <div style="float:left;margin-left:3%">
                                <h2>${alldata[k].username}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                    <p class="datacomment">${alldata[k].comment}</p>
                        </div>
                    </div>
                </div>
                `)
                var rating = alldata[k].rating;
                for(var i=0; i <= rating-1; i++){
                    $(`.${sc}:eq(`+i+`)`).css('color','yellow');
                }
                sc++;
            })
        }
    })

}, 1000)


})