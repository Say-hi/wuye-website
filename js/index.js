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
        for (var i = 0; i < $loantabs.length; i++) {
            $($loantabs[i]).removeClass('active')
        }
        $(this).addClass("active");
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