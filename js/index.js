$(function(){
    // tab栏点击切换显示
    var hometabs = $('.tab-a');
    var wraps =$('.wrap');
    $('.tab-a').on("click",function(){
        for (var i = 0; i < hometabs.length; i++) {
            $(hometabs[i]).removeClass('redcolor');
            $(wraps[i]).addClass('hidden');
        }
        $(this).addClass("redcolor");
        var id = ($(this).attr('id'));
        $(wraps[id]).removeClass('hidden');
    })

    var loantabs = $('.c-t-li');
    $('.c-t-li').on("click",function(){
        for (var i = 0; i < loantabs.length; i++) {
            $(loantabs[i]).removeClass('active')
        }
        $(this).addClass("active");
    })
})