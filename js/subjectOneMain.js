$(document).ready(function () {
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
})
