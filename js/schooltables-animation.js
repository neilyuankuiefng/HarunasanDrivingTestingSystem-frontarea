$(document).ready(function () {
    //页面加载时，先隐藏后面两个步骤的表格
    var DetailInfo = $("#DetailInfo");
    var CertificationInfo = $("#CertificationInfo");
    var BaseInfo = $("#BaseInfo");
    CertificationInfo.hide();
    DetailInfo.hide();
    //首先将表格设置为不可见，在加载完成后设置为可见，以回避城市联动栏过长的bug
    DetailInfo.css("visibility","visible");

    //点击第一张表格下一页，显示第二张表格
    $("#BaseInfoNextBtn").click(function () {
        checkBaseInfo();
        DetailInfo.show(300);
        // $("#BaseInfo").hide(300);
    })

    //点击第二张表格下一页，显示第三张表格
    $("#DetailInfoNextBtn").click(function () {
        CertificationInfo.show(300);
        DetailInfo.hide(300);
    })

    //点击第二张表格上一页，显示第一张表格
    $("#DetailInfoPreBtn").click(function () {
        BaseInfo.show(300);
        DetailInfo.hide(300);
    })

    //点击第三张表格上一页，显示第二张表格
    $("#CertificationPreBtn").click(function () {
        CertificationInfo.hide(300);
        DetailInfo.show(300);
    })

    //验证完整性
    function checkBaseInfo() {
        // if($("#InputAccount").val() ==""){
        //     alert("123");
        //     InputAccount.parent().parent().parent().addClass("has-error"); // 父节点
        //     checkEmail();
        //     return false;
        // }
        checkEmail();
    }

    //邮箱完整性验证
    function checkEmail() {
        var temp = $("#InputEmail");
        //对电子邮件的验证
    }
})