function modifySchoolIntroduction(){
    var schoolIntroductionEditor = $(".schoolIntroductionEditor");
    schoolIntroductionEditor.css("display","block");
    var PschoolIntroduction = $("#PschoolIntroduction");
    PschoolIntroduction.css("display","none");
}

$(document).ready(function () {
    $("#cancelEditor").click(function () {
        var schoolIntroductionEditor = $(".schoolIntroductionEditor");
        schoolIntroductionEditor.css("display","none");
        var PschoolIntroduction = $("#PschoolIntroduction");
        PschoolIntroduction.css("display","block");
    });

    
    $("#selectStudentBtn").click(function () {
        var InputEnrollTime = $("#InputEnrollTime");
        var InputStudentName = $("#InputStudentName");
        var InputSelectClasses= $("#InputSelectClasses");
        alert("学生名字：" + InputStudentName.val() + "报名时间："+  InputEnrollTime.val() + "课程名称：" + InputSelectClasses.val() );
    })
});