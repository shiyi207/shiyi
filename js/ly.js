/**
 * Created by thinkpad on 2017/4/14.
 */
$(document).ready(function(){
    let yjt=$('.paimai:first-child>.yjt');
    let zhezhao=$('.zhezhao');
    console.log(zhezhao);
    let egg=$('.egg');
    let pm=$('.pm');
    let pmk=$('.pmk')
    // console.log(paimai);
    yjt.on('touchstart',function(){
        zhezhao.slideDown(0);
        pmk.removeClass('yc');
        pm.animate({
            left:0,
        },200);
    })
    let bottom=$('.bottom');

    bottom.on('touchstart',function(){
        setTimeout(function(){
            egg.removeClass('yc');
            zhezhao.removeClass('yc');
            pm.addClass('yc');
        },200)

    })
})