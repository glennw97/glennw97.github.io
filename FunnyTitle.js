// <!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
          //  原始语句  $('[rel="icon"]').attr('href', "/img/trhx2.png");下面这句为更改后的
          $('[rel="icon"]').attr('href', "/img/avatar.png");
       
         document.title = '我们还会再见的！';
         clearTimeout(titleTime);
     }
     else {
        //  原始语句 $('[rel="icon"]').attr('href', "/img/trhx2.png");下面这句为更改后的语句
        $('[rel="icon"]').attr('href', "/img/avatar.png");
         document.title = '欢迎回来！'; //+ OriginTitle
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });


