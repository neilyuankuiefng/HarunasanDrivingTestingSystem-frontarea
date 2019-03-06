$(document).ready(function () {
    //导入导航页面
    $("#nav").load("nav.html");
    //当页面加载完成，设置register为已选择状态
    $("#mainpage").removeClass("active")
    $("#register").addClass("active");
})
