$(document).ready(function () {

    var text;

    //点击开始考试按钮进行考试计时
    $("#BtnStartTest").click(function () {
        //设置初试时间
        text = $("#remainTime").html(  "45分" + "00秒");
        //设置定时器
        var setTime = parseInt(2699);
        countdown(setTime);
        $(this).hide();
        $("#DivTestingBtns").show();
    })

    $("#BtnTestingStop").click(function () {

    })
    //计时器45分钟
    function countdown(setTime){
       setInterval(function () {
            var hour=0,minute=0,second=0;
            if(setTime>0){
                hour = Math.floor(setTime/(60*60));
                minute = Math.floor(setTime/60 - hour * 60);
                second = Math.floor( (setTime) - (hour * 60 * 60 ) - (minute * 60 ));
                if(minute <= 9){
                    minute = '0' + minute;
                }
                if( second <= 9) {
                    second = '0' +  second;
                }
            }
            text = $("#remainTime").html( minute + "分" + second + "秒");
            setTime--;
        },1000);
    }

    // function startCountDown(setTime) {
    //     var Time = setTime;
    //     var hour=0,minute=0,second=0;
    //     if(Time>0){
    //         hour = Math.floor(Time/(60*60));
    //         minute = Math.floor(Time/60 - hour * 60);
    //         second = Math.floor( (Time) - (hour * 60 * 60 ) - (minute * 60 ));
    //         if(minute <= 9){
    //             minute = '0' + minute;
    //         }
    //         if( second <= 9) {
    //             second = '0' +  second;
    //         }
    //     }
    //     text = $("#remainTime").html( minute + "分" + second + "秒");
    //     Time--;
    //     // alert("213");
    // }

})