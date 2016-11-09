// $(document).ready(function(){
//     function bb(item,bot){
//      $(item).eq(0).css({background:"#535353"});
//     // $(item).eq(0).addClass("first");
//      $(item).mouseover(function(){

//       var index=$(this).index();
//        console.log(index);
//       $(bot).each(function(index,obj){obj.style.display="none"}).eq(index).css("display","block");
//       $(item).css({background:"#fff"}).eq(index).css({background:"#535353"})  
//          });
//        // $(item).each(function(index,obj){obj.style.display="none"}).eq(index).css("display","block");   
//        //   });
//     }
//  bb(".ul-li",".floot-right-main");
// // $(".ul-li").eq(0).addClass("first")
// });
$(document).ready(function(){
  // var floors=$(".floot-right-main");
  // var lis=$(".ul-li")
  // console.log(floors.eq(0));
  // console.log(lis)

  $(".ul-li").mouseover(function(){
    var index=$(this).index();
     $(this).closest(".floor").find(".ul-li").removeClass("first").eq(index).addClass("first");
     $(this).closest(".floor").find(".floot-right-main").removeClass("main-1").eq(index).addClass("main-1");
  })

   // $(".ul-li").on("mouseover","a",function(){
   //  var index2 = $(this).closest(".ul-li").index();
   //  $(".ul-li").removeClass("first");
   //  $(this).closest(".floor").find(".ul-li").eq(index2).addClass("first");
   //  $(this).closest(".floor").find(".floot-right-main").removeClass("main-1").eq(index2).addClass("main-1");
   // })
//loucenglunbo
   //var floor=$(".floor").eq(0);
   // console.log(floor)
   function aa(obj){
   var floor_as=$(".floor-bo a",obj);
   //console.log(floor_as);
   var floor_boWidth=$(".floor-bo",obj).width();
   //console.log($(".floor-bo",obj))
   var now=0;
   var next=0;
   var t=setInterval(move,2000);
   floor_as.eq(1).css("left",floor_boWidth);
   floor_as.eq(2).css("left",floor_boWidth);
   var  flag=true;
   function move(){
    next++;
    if(next>2){
      next=0;
    }
   floor_as.eq(next).css("left",floor_boWidth);
   floor_as.eq(now).animate({left:-floor_boWidth});
   floor_as.eq(next).animate({left:0},function(){
    flag=true;
   });
   $(".bo-ul li",obj).eq(now).removeClass("li-first");
   $(".bo-ul li",obj).eq(next).addClass("li-first");
   now=next;
   }
  $(".floor-bo",obj).on({mouseover:function(){
    clearInterval(t)
  },mouseout:function(){
    t=setInterval(move,2000)
  }})
  function movel(){
    next--;
    if(next<0){
      next=2;
    }
   floor_as.eq(next).css("left",-floor_boWidth);
   floor_as.eq(now).animate({left:floor_boWidth});
   floor_as.eq(next).animate({left:0},function(){
    flag=true;
   });
   $(".bo-ul li",obj).eq(now).removeClass("li-first");
   $(".bo-ul li",obj).eq(next).addClass("li-first");
   now=next;
   }
   var btn_left=$(".btn-left",obj);
   var btn_right=$(".btn-right",obj);
   btn_right.click(function(){
    if(flag){
      move();
      flag=false;
    }
   });
  btn_left.click(function(){
    if(flag){
      movel();
      flag=false;
    }
   });
   //xuanxianka
   $(".bo-ul li",obj).each(function(index3,value){
    //console.log($(".bo-ul li",obj))
       $(this).click(function(){
        if(now==index3){
            return;
        }
        if(now<index3){
         floor_as.eq(index3).css("left",floor_boWidth);
         floor_as.eq(now).animate({left:-floor_boWidth});
         floor_as.eq(index3).animate({left:0},function(){
    flag=true;
   });
         $(".bo-ul li",obj).eq(now).removeClass("li-first");
         $(".bo-ul li",obj).eq(index3).addClass("li-first");
         now=index3;
         next=now;
        }
        if(now>index3){
         floor_as.eq(index3).css("left",-floor_boWidth);
         floor_as.eq(now).animate({left:floor_boWidth});
         floor_as.eq(index3).animate({left:0},function(){
    flag=true;
   });
         $(".bo-ul li",obj).eq(now).removeClass("li-first");
         $(".bo-ul li",obj).eq(index3).addClass("li-first");
         now=index3;
         next=now;
        }
       })
   })
 }
  var floor=$(".floor");
  aa(floor.eq(0));
  aa(floor.eq(1));
  aa(floor.eq(2));
  aa(floor.eq(3));
  aa(floor.eq(4));

  //banner图
  var banner_baos=$(".banner-bao a");
  var dongtu=$(".dongtu");
  var span=$(".ban-ulxiabiao span");
  var ban_i=$(".ban-i")
  console.log(ban_i);
  var now_banner=0;
  var next_banner=0;
  banner_baos.eq(0).css("zIndex",9)
  // banner_baos.slice(1).css("opacity",0);
  //ban_i.slice(1).css("display","none");
  var banner_t=setInterval(bannermove,2000);
   $(".ban-i").eq(0).css("display","block");
   span.eq(0).css("display","none");
  function bannermove(){
   next_banner++;
   if(next_banner>9){
    next_banner=0;
   }
   //banner_baos.eq(next_banner).animate({opacity:'1'});
   //banner_baos.eq(now_banner).animate({opacity:'0'});
   dongtu.eq(next_banner).animate({opacity:'1'});
   dongtu.eq(now_banner).animate({opacity:'0'});
   // span.eq(next_banner).addClass("span-block");
   // span.eq(next_banner).css("zIndex",99);
   
   // ban_i.eq(next_banner).addClass(".ban-i2");
   // span.eq(now_banner).removeClass("span-block")
   // ban_i.eq(now_banner).removeClass(".ban-i2");
   // now_banner=next_banner;
   $(".ban-i").eq(next_banner).css("display","block");
   $(".ban-i").eq(now_banner).css("display","none");
   span.eq(next_banner).css("display","none");
   span.eq(now_banner).css("display","block");
   now_banner=next_banner;
   $(".ban-ulxiabiao li").hover(function(){
    var index=$(this).index();
    span.eq(index).css("display","none");
    $(this).find(".ban-i").css("display","block");
   },function(){
    var index=$(this).index();
    span.eq(index).css("display","block")
    $(this).find(".ban-i").css("display","none");
   })
   }
   //banner图轮播
   //清除鼠标移入的move事件
   $(".banner-bao").on({mouseover:function(){clearInterval(banner_t)},mouseout:function(){banner_t=setInterval(bannermove,2000);}})
   //left-arrow 的 banner 轮播   
    var arrow_now=0;
    var arrow_next=0;
    banner_baos.eq(0).css("zIndex",9);
    $(".banner-bao a").slice(1).css("opacity",0);
   $(".right-arrow").click(function(){
    if(arrow_next>19){
      arrow_next=0;
      //  if (arrow_next==0) {
      //   banner_baos.eq(0).css("zIndex",10);
      //   banner_baos.eq(0).css("opacity",1);
      // }
    }
       arrow_next++;
       $(".banner-bao a").eq(arrow_next).animate({opacity:'1'});
       $(".banner-bao a").eq(arrow_next).css("zIndex",10);  
        $(".banner-bao a").eq(arrow_now).animate({opacity:'0'});
       $(".banner-bao a").eq(arrow_now).css("zIndex",8);
       $(".ban-ulxiabiao span").eq(arrow_next).css("display","none");
       $(".ban-ulxiabiao span").eq(arrow_now).css("display","block");
       $(".ban-i").eq(arrow_next).css("display","block");
       $(".ban-i").eq(arrow_now).css("display","none");

       arrow_now=arrow_next;
   })


 //tiantianbijia天天比价的dongxiao
 var tian=$(".nav-rig-bo ul");
 console.log(tian);
 var now_tian=0;
 var top1=0;
 var tian_t=setInterval(tian_move,3000);
 function tian_move(){
  if(now_tian>7){
    now_tian=0;
  }
  top1+=44;
  if(top1>304){
    top1=0;
  }
  tian.animate({top:-top1})
 }

 //change
 var change=$(".change");
 var cai_bao_ul=$(".cai-bao ul");
 var index5=0;
 cai_bao_ul.eq(0).css("zIndex","10")
 console.log(cai_bao_ul);
 change.click(function(){
  index5++;
  if(index5>2){
    index5=0;
  }
  cai_bao_ul.css("zIndex","5");
   cai_bao_ul.eq(index5).css("zIndex","10");
 })
 //change
 //lou btn
 function bb(obj){
  var btn_floor=$(".btn-floor",obj);
  console.log(btn_floor);
  var index=0;
  btn_floor.click(function(){
  index++;
  if(index>6){
     index=0;
   }
    // $(".ul-right li",$(".floor").eq(0)).removeClass("first");
    $(".ul-right li",obj).removeClass("first").eq(index).addClass("first");
    $(".floot-right-main",obj).removeClass("main-1").eq(index).addClass("main-1");
 })
 }
 bb($(".floor").eq(0));
 bb($(".floor").eq(1));
 bb($(".floor").eq(2));
 bb($(".floor").eq(3));
 bb($(".floor").eq(4));

 //楼层跳转
  //var zuocebian=$(".zuocebian")[0];
  var zuocebian=$(".elevator");
  var floors=$(".floor");
  var zcb_li=$(".handler",zuocebian);
  // console.log(floors.length);

  /*返回顶部*/
  $(".flTop").on({
    click:function(){$("body,html").animate({scrollTop:0},600)}
  })
  $(".fl_bottom").on({
    // mouseover:function(){$(this).children(".backtop-btn2").css("background-position","0 -214px")},
    // mouseout:function(){$(this).children(".backtop-btn2").css("background-position","-18px -214px")},
    click:function(){$("body,html").animate({scrollTop:floors.eq(4).offset().top+300},600,function(){
      zuocebian.hide();
    })}
  })
  /*返回顶部*/


  // console.log(floors.length);
  // $(".navL2 a").hover(function(){$(this).css("color","#c00")},function(){$(this).css("color"," #5E5E5E")})
  // var floors=$(".floor");
  // var nav=$("#navL");
  // var nav_lis=$(".navL2 li");
  // var flag=true;
  floors.each(function(index9,obj){
    $(window).scroll(function(){
      var top=$(document).scrollTop();
      if(top>=floors.eq(0).offset().top-400){
            zuocebian.show();
        }else if(top<floors.eq(0).offset().top-400){
            zuocebian.hide();
        }

        if(top>floors.eq(index9).offset().top-500){
          zcb_li.children(".etitle").css("display","none");
          zcb_li.children("a").css("color","#5E5E5E");
          zcb_li.children("a").children("span").css("color","#5E5E5E");
            zcb_li.eq(index9).children(".etitle").css("display","block");
            zcb_li.eq(index9).children("a").css("color","#c00");
            zcb_li.eq(index9).children("a").children("span").css("color","#c00");

            // nowFix=index9;
        }   
        
        // }).click(function(){
          // var index1=$(this).index(nav_lis);
          // console.log(index1)
        }) 
    })
  zcb_li.each(function(index10){
          $(this).click(function(){
          $("body,html").animate({scrollTop:floors.eq(index10).offset().top},400)
          })
  })


  //var piaozi=$(".piaozi",zuocebian);
  //console.log(piaozi)
  //var cw=document.documentElement.clientWidth;
  //var ch=document.documentElement.clientHeight;
  //console.log(cw,ch);
  // var flag=true;
  // var flag2=true;
   // for(var i=0;i<floors.length;i++){
   //   floors[i].h=floors[i].offsetTop;
   //   console.log(floors[i].h);
   // }
  //  window.onscroll=function(){
  //       var obj=document.body.scrollTop?document.body:document.documentElement;
  //     var top=obj.scrollTop;
  //     // console.log(top)
  //     for(var i=0;i<floors.length;i++){
  //     if(top>=floors[i].h-300){
  //     zuocebian.style.display="block";
  //     var zh=zuocebian.offsetHeight;
  //           zuocebian.style.top=(ch-zh)/2+"px"; 
  //           for(var j=0;j<zcb_li.length;j++){
  //         // zcb_li[j].style.backgroundColor="#fff";
  //         piaozi[j].style.display="none"; 
  //       }
  //      // zcb_li[i].style.backgroundColor="#ccc";
  //      piaozi[i].style.display="block"; 
  //      now=i;
  //   }
  //   if(top<floors[0].h-300||top>floors[floors.length-1].h+300){
  //     zuocebian.style.display="none";
  //   }

  // } 
  //  }
   
  //  for(var i=0;i<zcb_li.length;i++){
  //   zcb_li[i].index=i;
  //   zcb_li[i].onclick=function(){
  //     var obj=document.body.scrollTop?document.body:document.documentElement;
  //     animate(obj,{scrollTop:floors[this.index].h})
  //  }
  //  zcb_li[i].onmouseover=function(){
  //     piaozi[this.index].style.display="block";/*图片懒加载*/
  $(".lazy").lazyload({
    effect:"fadeIn",
    placeholder : "../images/lazy.png",
    skip_invisible:false
    })
/*图片懒加载*/
  //  }
  //   zcb_li[i].onmouseout=function(){
  //     if(this.index==now){
  //       return;
  //     }
  //     piaozi[this.index].style.display="none";
  //  }
  //  }
 /*图片懒加载*/
  $(".zrr").lazyload({
    effect:"fadeIn",
    // placeholder : "../images/lazy.png",
    skip_invisible:false
    })
/*图片懒加载*/
})