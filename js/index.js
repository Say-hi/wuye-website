$(function(){
    //  tab栏点击切换显示
    var $hometabs = $('.tab-a');
    var $wraps =$('.wrap');
    $('.tab-a').on("click",function(){
        for (var i = 0; i < $hometabs.length; i++) {
            $($hometabs[i]).removeClass('redcolor');
            $($wraps[i]).addClass('hidden');
        }
        $(this).addClass("redcolor");
        var id = ($(this).attr('id'));
        console.log(id);
        if(id == 3){
            $('.lunbo').addClass('hidden');
        }else {
            $('.lunbo').removeClass('hidden');
        }
        $($wraps[id]).removeClass('hidden');
    })
    //loan 页 choose切换
    var $loantabs = $('.c-t-li');
    $('.c-t-li').on("click",function(){
        $('.choose').addClass('go-to-top');
        for (var i = 0; i < $loantabs.length; i++) {
            $($loantabs[i]).removeClass('active');
            $('.c-t-l').removeClass('active');
        }

        $(this).addClass("active");
        var id = $(this).attr('data-tab').slice(-1);
        console.log(id);
        $('.c-t-l').eq(id).addClass('active');
        $('.choose-popup').addClass('show');
        $('.mask').addClass('show');
    })
    // 借款条件切换
    $('.c-t-l-li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    // 重置
    $('.btn-cancel').on('click',function(){
        $('.c-t-l-li').removeClass('active');
    })
    // 确定
    $('.btn-confirm').on('click',function(){
        $('.choose-popup').removeClass('show');
        $('.mask').removeClass('show');
        $('.choose').removeClass('go-to-top');
    })
    // 点击遮罩层
    $('.mask').on('click',function(){
        $('.choose-popup').removeClass('show');
        $('.mask').removeClass('show');
        $('.choose').removeClass('go-to-top');
    })
    // bbs tab切换
    var $bbstabs = $('.bbs-t');
    var $articles= $('.article')
    $('.bbs-t').on("click",function(){
        for (var i = 0; i < $bbstabs.length; i++) {
            $($bbstabs[i]).removeClass('active');
            $($articles[i]).addClass('hidden');
        }
        var id = ($(this).attr('id') - 4);
        $($articles[id]).removeClass('hidden');
        $(this).addClass("active");
    })

    // gotobbs页面 
    $('.gotobbs').on('click',function(){
        for (var i = 0; i < $hometabs.length; i++) {
            $($hometabs[i]).removeClass('redcolor');
            $($wraps[i]).addClass('hidden');
        }
         $($hometabs[2]).addClass("redcolor");
         $($wraps[2]).removeClass('hidden');
    })
})