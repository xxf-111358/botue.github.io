
//调用全屏的方法
$(function(){
    $('#dowebok').fullpage({
       // 设置每一屏幕的颜色
       sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        loopTop:true,
        //滚动到某一屏之后调用
        afterLoad:function (link,index) {
        // current类加给谁  谁就做动画
           $('.section').removeClass('current');
           //让动画 延迟执行
           setTimeout(function () {
               $('.section').eq(index-1).addClass('current');
           },100)
        }
    });
});