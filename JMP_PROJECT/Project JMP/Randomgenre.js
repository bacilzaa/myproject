
$(document).ready(function(){
    var action = 0, adventure  = 0, animetion = 0, comady = 0, crime = 0, documentary = 0, drama = 0, family = 0, fantasy = 0;
    var history = 0, horror = 0, music = 0, mystery = 0, romance = 0, sf = 0, tv = 0, thriller = 0, war = 0, west = 0;
    var Realpage =0;
    Randomganre(makeid(1),random(20));
    function Randomganre(movie,page){
        $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=163f1c7831ae6ab9b8556ff69bcc6ec3&language=en-US&query=${movie}&page=${page}&include_adult=false`,
        method:"GET",
        datatype:"JSON",
        success :function(data){
            $.each(data.results ,function(k){
            $.each(data.results[k].genre_ids ,function(v){
//------------------------------เพิ่มหนัง Action------------------------------------------------------------//                
                if(data.results[k].genre_ids[v] == "28"){
                if((data.results[k].poster_path != null)&&(action < 5)){
                    $("#Action").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    action++; 
                    }
                }
//----------------------------เพิ่มหนัง Adventure -----------------------------------------------------------//
                if(data.results[k].genre_ids[v] == "12"){
                if((data.results[k].poster_path != null)&&(adventure < 5)){
                    $("#Adventure").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    adventure++; 
                    }
                }
//----------------------------เพิ่มหนัง Animetion-----------------------------------------------------------//
                if(data.results[k].genre_ids[v] == "16"){
                if((data.results[k].poster_path != null)&&(animetion < 5)){
                    $("#Animetion").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    animetion++; 
                }
                }
//----------------------------เพิ่มหนัง Comady-----------------------------------------------------------/
                if(data.results[k].genre_ids[v] == "35"){
                if((data.results[k].poster_path != null)&&(comady < 5)){
                    $("#Comedy").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    comady++; 
                }
                }
//----------------------------เพิ่มหนัง Crime-----------------------------------------------------------//
                if(data.results[k].genre_ids[v] == "80"){
                if((data.results[k].poster_path != null)&&(crime < 5)){
                    $("#Crime").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    crime++; 
                }
                }
//----------------------------เพิ่มหนัง Documentary-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "99"){
                if((data.results[k].poster_path != null)&&(documentary < 5)){
                    $("#Doc").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    documentary++; 
                }
                }
//----------------------------เพิ่มหนัง Drama-----------------------------------------------------------//
                if(data.results[k].genre_ids[v] == "18"){
                if((data.results[k].poster_path != null)&&(drama < 5)){
                    $("#Drama").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update'); 
                    drama++;
                }
                }
//----------------------------เพิ่มหนัง Family-----------------------------------------------------------/
                if(data.results[k].genre_ids[v] == "10751"){
                if((data.results[k].poster_path != null)&&(family < 5)){
                    $("#Fam").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    family++; 
                }
                }
//----------------------------เพิ่มหนัง Fantasy-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "14"){
                if((data.results[k].poster_path != null)&&(fantasy < 5)){
                    $("#Fantasy").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    fantasy++; 
                }
                }
//----------------------------เพิ่มหนัง History-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "36"){
                if((data.results[k].poster_path != null)&&(history < 5)){
                    $("#his").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    history++; 
                }
                }
//----------------------------เพิ่มหนัง Horror-----------------------------------------------------------/
                if(data.results[k].genre_ids[v] == "27"){
                if((data.results[k].poster_path != null)&&(horror < 5)){
                    $("#hor").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    horror++; 
                }
                }
//----------------------------เพิ่มหนัง Music-----------------------------------------------------------//
                if(data.results[k].genre_ids[v] == "10402"){
                if((data.results[k].poster_path != null)&&(music < 5)){
                    $("#music").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    music++; 
                }
                }
//----------------------------เพิ่มหนัง Mystery-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "9648"){
                if((data.results[k].poster_path != null)&&(mystery < 5)){
                    $("#mystery").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    mystery++; 
                }
                }
//----------------------------เพิ่มหนัง Romance-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "10749"){
                if((data.results[k].poster_path != null)&&(romance < 5)){
                    $("#romance").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    romance++; 
                }
                }
//----------------------------เพิ่มหนัง Science Fiction-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "878"){
                if((data.results[k].poster_path != null)&&(sf < 5)){
                    $("#sf").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    sf++; 
                }
                }
//----------------------------เพิ่มหนัง TV Movie-----------------------------------------------------------/ /
                if(data.results[k].genre_ids[v] == "10770"){
                if((data.results[k].poster_path != null)&&(tv < 5)){
                    $("#tv").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    tv++; 
                }
                }
//----------------------------เพิ่มหนัง Thriller-----------------------------------------------------------/ /
                if(data.results[k].genre_ids[v] == "53"){
                if((data.results[k].poster_path != null)&&(thriller < 5)){
                    $("#thril").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    thriller++; 
                }
                }
//----------------------------เพิ่มหนัง War-----------------------------------------------------------/  /
                if(data.results[k].genre_ids[v] == "10752"){
                if((data.results[k].poster_path != null)&&(war < 5)){
                    $("#war").owlCarousel('add', `<div style="padding:1%;">
                    <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                    </a>
                    </div>`).owlCarousel('update');
                    war++; 
                }
                }
//----------------------------เพิ่มหนัง Western-----------------------------------------------------------//  
            if(data.results[k].genre_ids[v] == "37"){
            if((data.results[k].poster_path != null)&&(west < 5)){
                $("#west").owlCarousel('add', `<div style="padding:1%;">
                <a href="page.php?movie=${data.results[k].id}" title="${data.results[k].title}">
                <img src="https://image.tmdb.org/t/p/w500${data.results[k].poster_path}" >
                </a>
                </div>`).owlCarousel('update');
                west++; 
            }
    }                   
                    });//end each 
                });//end each

                console.log(data);
//----------------------------ให้หาทั้งหมด 5 หน้า-------------------------------------------------------//                
if(Realpage == 0){
    Realpage += page;
    Realpage += 1;
}

if(page < data.total_pages){
            if(page <= Realpage){
                page++;
                Randomganre(movie,page);
            }
        }
        console.log(Realpage)

    //-------------------------------------------หากมีไม่มีหนังให้ซ่อน DIV--------------------------------------------------//
    if(action == 0){
        $("#ac").hide()
    }
    if(adventure == 0){
        $("#ad").hide()
    }
    if(animetion == 0){
        $("#an").hide()
    }
    if(comady == 0){
        $("#co").hide()
    }
    if(crime == 0){
        $("#cr").hide()
    }
    if(documentary == 0){
        $("#do").hide()
    }
    if(drama == 0){
        $("#dr").hide()
    }
    if(family == 0){
        $("#fam").hide()
    }
    if(fantasy == 0){
        $("#fan").hide()
    }
    if(history == 0){
        $("#hi").hide()
    }
    if(horror == 0){
        $("#ho").hide()
    }
    if(music == 0){
        $("#mu").hide()
    }
    if(mystery == 0){
        $("#mys").hide()
    }
    if(romance == 0){
        $("#ro").hide()
    }
    if(sf == 0){
        $("#sc").hide()
    }
    if(tv == 0){
        $("#tm").hide()
    }
    if(thriller == 0){
        $("#th").hide()
    }
    if(war == 0){
        $("#wa").hide()
    }
    if(west == 0){
        $("#we").hide()
    }

//------------------------------------------End Success--------------------------------------------------------------//        
        }
    });//end ajax
    }//function

//------------------------------------------Function RandomMovie---------------------------------------------------//    
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz0123456789';
        var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    return result;

    }

//------------------------------------------Function RandomPage------------------------------------------------//
    function random(max){
    return Math.floor(Math.random() * Math.floor(max));
        }

//----------------------------------End Document-------------------------------------------------------------//
});