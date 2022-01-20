$(document).ready(function(){
  $(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown(300);
  });
  $(".gnb>li").mouseleave(function(){
    $(".sub").stop().slideUp(300);
  });

  var i = $(".indicator li.on").index();
  var count = $(".main_img li").length;

  $(".indicator li").click(function(){
    i = $(this).index();
    slide();
  });

  setInterval(function(){
    if(i==count-1){
      i=0;
    } else {
      i++;
    }
    slide();
  },5000);

  function slide(){
    $(".indicator li").removeClass("on");
    $(".indicator li").eq(i).addClass("on");
    $(".main_img li").stop().fadeOut(500);
    $(".main_img li").eq(i).stop().fadeIn(500);
  };

  $( function() {
    $( ".news_cont" ).accordion({
      active:false,
      collapsible:true
    });
  } );

  $(".section3 .btn .prev").click(function(){
    $(".section3 .cont").stop().animate({"margin-left":"0%"},500,function(){
      $(".section3 .cont li").last().prependTo(".section3 .cont");
      $(".section3 .cont").css({"margin-left":"-33.333%"})
    });
  });

  $(".section3 .btn .next").click(function(){
    $(".section3 .cont").stop().animate({"margin-left":"-66.666%"},500,function(){
      $(".section3 .cont li").first().appendTo(".section3 .cont");
      $(".section3 .cont").css({"margin-left":"-33.333%"})
    });
  });

  var m = $(".section4 .right .menu li.on").index();
  
  $(".section4 .right .menu li").click(function(){
    m = $(this).index();
    $(".section4 .right .menu li").removeClass("on");
    $(".section4 .right .menu li").eq(m).addClass("on");
    $(".section4 .right .menu li .line").fadeOut(500);
    $(".section4 .right .menu li").eq(m).children(".line").fadeIn(500);
    $(".section4 .left li").fadeOut(500);
    $(".section4 .left .big li").eq(m).fadeIn(500);
    $(".section4 .left .bottom li").eq(m).fadeIn(500);
  });




  $(".section5 .name>li").click(function(){
    var sn = $(".section5 .name>li.open").index();
    sn = $(this).index();

    //sns제목 아래 선 부분
    $(".section5 .name li").children(".line").stop().animate({"width":"0"});
    $(".section5 .name li .line").children("span").stop().fadeOut(100);
    $(this).children(".line").stop().animate({"width":"100%"},500,function(){
      $(this).children("span").stop().fadeIn(500);
    });

    //sns컨텐츠 내려오는 부분

    $(".section5 .sns>li").stop().fadeOut(300,function(){
      $(".section5 .sns>li").eq(sn).stop().fadeIn(function(){
        $(".section5 .sns>li").eq(sn).stop().animate({"top":"10px"},300);
      });
      $(".section5 .sns>li").stop().animate({"top":"-290px"});
    });
    // $(".section5 .sns>li").stop().animate({"top":"-290px"});
    // $(".section5 .sns>li").eq(sn).stop().animate({"top":"10px"});
  });
});