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
  
  var second = $(".section2").offset().top;
  var thirth = $(".section3").offset().top;
  var fourth = $(".section4").offset().top;
  var fifth = $(".section5").offset().top;

  $(window).scroll(function(){
    if($("body,html").scrollTop() >= second-100 && $("body,html").scrollTop() <= thirth-100){
      $(".section2 .news").stop().animate({"left":"65%"},300);
    } else {
      $(".section2 .news").stop().animate({"left":"100%"},300);
    }
  });


  $( function() {
    $( ".news_cont" ).accordion({
      active:false,
      collapsible:true
    });
  } );

  $(window).scroll(function(){
    if($("body,html").scrollTop() >= thirth-100 && $("body,html").scrollTop() <= fourth-100){
      // $(".section3 .title").stop().animate({"margin-top":"-300px"},500);
      $(".section3 .title").stop().fadeIn(500);
    } else {
      // $(".section3 .title").stop().animate({"margin-top":"-250px"},500);
      $(".section3 .title").stop().fadeOut(500);
    }
  });

  $(".section3 .cont li").mouseenter(function(){
    $(this).stop().animate({"margin-top":"30px"},200);
  });
  $(".section3 .cont li").mouseleave(function(){
    $(this).stop().animate({"margin-top":"10px"},200);
  });

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

  $(window).scroll(function(){
    if($("body,html").scrollTop() >= fourth-200 && $("body,html").scrollTop() <= fifth-200){
      $(".section4 .big").fadeIn(300);
      $(".section4 .right").stop().animate({"right":"0"},300);
    } else {
      $(".section4 .big").fadeOut(300);
      $(".section4 .right").stop().animate({"right":"-500px"},300);
    }
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

  $(window).scroll(function(){
    if($("body,html").scrollTop() >= fifth-100){
      $(".section5 .sns").stop().fadeIn(500);
    } else {
      $(".section5 .sns").stop().fadeOut(500);
    }
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

    // $(".section5 .sns>li").stop().animate({"top":"-290px"});
    // $(".section5 .sns>li").eq(sn).stop().animate({"top":"10px"});

    $(".section5 .sns>li").stop().fadeOut(100,function(){
      $(".section5 .sns>li").stop().animate({"top":"-290px"},100,function(){
        $(".section5 .sns>li").stop().fadeIn(100,function(){
          $(".section5 .sns>li").eq(sn).stop().animate({"top":"10px"},300);
        });  
      });
    });
  });

});