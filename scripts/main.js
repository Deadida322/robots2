let posY = 0;
let ttt = 0;
let counter = 0;
let page1 = $('.page1');
let page2 = $('.page2');
let page3 = $('.page3');
let page4 = $('.page4');
let title = $('title');
let brush1 = $('.brush1');
let brush2 = $('.brush2');
let brush3 = $('.brush3');
let brush4 = $('.brush4');
let mobile_width = false;
let mCount = 0;
let reverse = false;
if (document.documentElement.clientWidth < 950){
    mobile_width = true;
}
function up1(){
    $('nav').css({
        backgroundColor: 'rgba(0, 26, 255, 0.202)'
    });
    $('.navcontainer').css({
        marginTop:'23vh'
    });
    title.html('Об игре');
    $('.stat').html('Game');
    page1.addClass('bl1');
    page2.addClass('dal1');
    brush1.addClass('brushdal2');
    brush2.addClass('brushdal1');
    brush3.addClass('brushdal0');
    if(!mobile_width){
        $('.arrows img').css({"opacity":"0",
                    'zIndex':'-30000',
                    'transform:': 'scale(0)'});
    }
    page4.css('zIndex','0');
    page3.css('zIndex','0');
}
function up2(){
    $('nav').css({
        backgroundColor: 'rgba(132, 0, 255, 0.202)'
    });
    $('.navcontainer').css({
        marginTop:'49vh'
    });
    title.html('О команде');
    $('.stat').html('Team');
    page1.addClass('bl2');
    page2.addClass('bl1');
    page3.addClass('dal1');
    brush1.addClass('brushdal3');
    brush2.addClass('brushdal2');
    brush3.addClass('brushdal1');
    brush4.addClass('brushdal0');
    page3.css('zIndex','999');
}
function up3(){
    $('nav').css({
        backgroundColor: 'rgba(255, 0, 242, 0.202)'
    });
    $('.navcontainer').css({
        marginTop:'93vh'
    });
    title.html('Соцсети');
    $('.stat').html('Social');
    page2.addClass('bl2');
    page3.addClass('bl1');
    page4.addClass('dal1');
    brush2.addClass('brushdal3');
    brush3.addClass('brushdal2');
    brush4.addClass('brushdal1');
    page4.css('zIndex','999999');
    page3.css('zIndex','6');
}
function down1(){
    $('nav').css({
        backgroundColor: 'rgba(0, 183, 255, 0.377)'
    });
    $('.navcontainer').css({
        marginTop:'-3vh'
    });
    title.html('Главная');
    $('.stat').html('Main');
    page1.removeClass('bl1');
    page2.removeClass('dal1');
    brush1.removeClass('brushdal2');
    brush2.removeClass('brushdal1');
    brush3.removeClass('brushdal0');
}
function down2(){
    $('.navcontainer').css({
        marginTop:'23vh'
    });
    $('nav').css({
        backgroundColor: 'rgba(0, 26, 255, 0.377)'
    });
    $('.stat').html('Game');
    title.html('Об игре');
    page1.removeClass('bl2');
    page2.removeClass('bl1');
    page3.removeClass('dal1');
    brush1.removeClass('brushdal3');
    brush2.removeClass('brushdal2');
    brush3.removeClass('brushdal1');
    brush4.removeClass('brushdal0');
    page4.css('zIndex','0');
    page3.css('zIndex','0');
}
function down3(){
    $('.navcontainer').css({
        marginTop:'49vh'
    });
    $('nav').css({
        backgroundColor: 'rgba(132, 0, 255, 0.202)'
    });
    $('.stat').html('Game');
    page2.removeClass('bl2');
    page1.addClass('bl2');
    page2.addClass('bl1');
    page3.addClass('dal1');
    page2.addClass('bl1');
    brush2.removeClass('brushdal3');
    brush3.removeClass('brushdal2');
    brush4.removeClass('brushdal1');
    brush1.addClass('brushdal3');
    brush2.addClass('brushdal2');
    brush3.addClass('brushdal1');
    brush4.addClass('brushdal0');
    page3.removeClass('bl1');
    page4.removeClass('dal1');
    page4.css('zIndex','8');
    page3.css('zIndex','999999');
}
$('.arrows').on('click', ()=>{
    up1();
    posY = 4;
});
function scroll1(event){
        if(event.originalEvent.deltaY != 0){
          posY = (posY + event.originalEvent.deltaY/100);
          console.log(posY);
          if (posY <= -1){
              posY = 0;
          }
          if (posY>16){
            posY = 16;
        }
          console.log(posY);
            if (posY > 3  && event.originalEvent.deltaY > 0 ){
                up1();
                ttt =1;
            }
            if (posY >2 && posY < 6 && event.originalEvent.deltaY < 0 ){
                down1();
                ttt = 0;
            }
            if (posY > 7  && event.originalEvent.deltaY > 0 ){
                up2();
                ttt = 2;
            }
            if (posY > 6  && event.originalEvent.deltaY < 0 ){
                down2();
                ttt = 1;
            }
            if (posY > 12  && event.originalEvent.deltaY > 0 ){
                up3();
                ttt = 3;
            }
            if (posY > 11  && event.originalEvent.deltaY < 0 ){
                down3();
               // ttt = 2;
            }
        }  
    }
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
$(window).on('wheel', function(event){
    scroll1(event);
});

$("body").keyup(function(e) {
    if(ttt>3){ttt=3;}
    if(ttt<0){ttt=0;}
        if (e.which == 34 || e.which == 32 || e.which == 40 || e.which == 39) {
            console.log("pressed");
            ttt +=1;
            let hh = $('title');
            if (ttt == 1){
                posY = 4;
                up1();
            }
            if (ttt == 2){
                posY = 10;
                up2();
            }
            if (ttt == 3){
                posY = 16;
                up3();
            }
            }
            if (e.which == 33 || e.which == 38 || e.which == 37) {
            ttt -=1;
            let hh = $('title');
            if (ttt == 0){
                posY = 4;
                down1();
            }
            if (ttt == 1){
                posY = 10;
                down2();
            } 
            if (ttt == 2){
                posY = 16;
                down3();
            }
        }
        if (e.which == 36) {
            ttt = 0;
            posY = 0;
            down3();
            down2();
            down1();
        }
        if (e.which == 35) {
            ttt = 3;
            posY = 16;
            up1();
            up2();
            up3();
        }
});

$('.down').on('click', function(event) {
    if(ttt>4){ttt=4;}
    if(ttt<0){ttt=0;}
    ttt +=1;
    if (ttt == 1){
        posY = 4;
        up1();
    }
    if (ttt == 2){
        posY = 9;
        up2();
    }
    if (ttt == 3){
        posY = 16;
        up3();
    }
    console.log(posY)

});
$('.up').on('click', function(event) {
    ttt -=1;
    console.log(posY)
    if (ttt == 0){
        posY = 4;
        down1();
    }
    if (ttt == 1){
        posY = 10;
        down2();
    } 
    if (ttt == 2){
        posY = 16;
        down3();
    }
});
if(mobile_width){
    $('.arrows').on('click', ()=>{
        
        if(!reverse){
            mCount++;
            if (mCount ==2){
                up1();
                mCount++;
            }
            if (mCount ==3){
                up2();
                
            }
            if (mCount ==4){
                up3();
                reverse = true;
                $('.arrm').addClass('arm');
            }
            console.log(mCount)
        }
        if(reverse){
            mCount--;
            if (mCount ==0){
                down1();
                $('.arrm').removeClass('arm');
                reverse = false;
            }
            if (mCount ==1){
                down2();
            }
            if (mCount ==2){
                down3();
            }
        }
    });
}

up1();

setTimeout(()=>{
    down1();
}, 1000);

setTimeout(()=>{
    up2();
}, 2000);

setTimeout(()=>{
    down2();
    down1();
}, 3000);