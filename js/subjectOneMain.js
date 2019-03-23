$(document).ready(function () {

    //切换专项练习/章节练习 Tab页
    var BtnSpecialPractice = $("#BtnSpecialPractice");
    var BtnSectionPractice = $("#BtnSectionPractice");
    BtnSpecialPractice.click(function () {
        BtnSpecialPractice.addClass("active");
        BtnSectionPractice.removeClass("active");
        $("#DivSectionPractice").hide();
    })
    BtnSectionPractice.click(function () {
        BtnSectionPractice.addClass("active");
        BtnSpecialPractice.removeClass("active");
        $("#DivSectionPractice").show();
    })

    $("#schoolScore1").lqScore({
        $tipEle: $("#schoolScoretips1"),
        score: 5,
        tips:""
        //如果需要设置后还能评分，请添加[isReScore:true]属性
    });


})
