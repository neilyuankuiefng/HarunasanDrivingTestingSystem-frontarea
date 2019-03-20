$(document).ready(function () {
    $("#nav").load("nav.html",function () {
        //在载入完成之后改变状态
        $("#mainpage").removeClass("active");
        $("#register").addClass("active");
    });
    $('[data-toggle="tooltip"]').tooltip();  //初始化

    var Btnconfirm = $("#Btnconfirm");
    Btnconfirm.click(function () {
        checkInfo();
        var checkBoxAcceptLaw = $("#checkBoxAcceptLaw");
        var checkBoxAcceptLawFalseTips = $("#checkBoxAcceptLawFalseTips");

        if(!checkBoxAcceptLaw.is(':checked')){

            checkBoxAcceptLawFalseTips.removeClass("hidden");
            checkBoxAcceptLawFalseTips.html("请接受我们的服务条款");

        }else{
            checkBoxAcceptLawFalseTips.addClass("hidden");
        }

        if (
            $("#InputUserEmailDiv").hasClass("has-success")  &&
            $("#inputUserPasswordDiv").hasClass("has-success") &&
            $("#InputUserPasswordAgainDiv").hasClass("has-success") &&
            $("#InputAccountTelDiv").hasClass("has-success") &&
            $("#InputNickNameDiv").hasClass("has-success") &&
            checkBoxAcceptLaw.is(':checked')
        )
            {
            setTimeout(showSchoolInfo,1000);
            function showSchoolInfo() {
                BaseInfo.hide(300);
                DetailInfo.show(300);
            }
            alert("success");
        }else{
            alert("False");
        }
    });

    function checkInfo() {
        validateNumber();
        validatePassword();
        validatePasswordAgain();
        validateNickname();
        validateEmail();
    }

    //验证邮箱
    function validateEmail() {
        var InputUserEmailDiv = $("#InputUserEmailDiv");
        var InputUserEmailGlyTrue = $("#InputUserEmailGlyTrue");
        var InputUserEmailGlyFalse = $("#InputUserEmailGlyFalse");
        var InputUserEmailFalseTip = $("#InputUserEmailFalseTip");
        if(!$("#InputUserEmail").val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
            InputUserEmailDiv.removeClass("has-success");
            InputUserEmailDiv.addClass("has-error");
            InputUserEmailGlyTrue.addClass("hidden");
            InputUserEmailGlyFalse.removeClass("hidden");
            InputUserEmailFalseTip.removeClass("hidden");
            InputUserEmailFalseTip.html("请输入正确的邮箱");
        } else {
            InputUserEmailDiv.removeClass("has-error");
            InputUserEmailDiv.addClass("has-success");
            InputUserEmailGlyFalse.addClass("hidden");
            InputUserEmailGlyTrue.removeClass("hidden");
            InputUserEmailFalseTip.addClass("hidden");
        }
    }

    //账号/手机号验证
    function validateNumber () {
        //验证130-139,150-159,180-189号码段的手机号码
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var InputAccountTelFalseTip = $("#InputAccountTelFalseTip");
        var InputAccountTelDiv = $("#InputAccountTelDiv");
        var InputAccountTelGlyFalse = $("#InputAccountTelGlyFalse");
        var InputAccountTelGlyTrue = $("#InputAccountTelGlyTrue");
        if(!myreg.test($("#InputAccountTel").val()))
        {
            //如果输入的手机号码错误
            InputAccountTelDiv.removeClass("has-success");
            InputAccountTelDiv.addClass("has-error");
            InputAccountTelGlyTrue.addClass("hidden");
            InputAccountTelGlyFalse.removeClass("hidden");
            InputAccountTelFalseTip.removeClass("hidden");
            InputAccountTelFalseTip.html("请输入有效的手机号码！");
        }else{
            //如果输入的手机号码正确
            InputAccountTelDiv.removeClass("has-error");
            InputAccountTelDiv.addClass("has-success");
            InputAccountTelGlyFalse.addClass("hidden");
            InputAccountTelGlyTrue.removeClass("hidden");
            InputAccountTelFalseTip.addClass("hidden");
        }
    }

    //验证昵称非空验证
    function validateNickname() {
        var InputNickNameDiv = $("#InputNickNameDiv");
        var InputNickNameFalseTip = $("#InputNickNameFalseTip");
        var InputNickNameGlyFalse = $("#InputNickNameGlyFalse");
        var InputNickNameGlyTrue = $("#InputNickNameGlyTrue");
        if ($("#InputNickName").val()){
            InputNickNameDiv.removeClass("has-error");
            InputNickNameDiv.addClass("has-success");
            InputNickNameGlyFalse.addClass("hidden");
            InputNickNameGlyTrue.removeClass("hidden");
            InputNickNameFalseTip.addClass("hidden");
        }else{
            InputNickNameDiv.removeClass("has-success");
            InputNickNameDiv.addClass("has-error");
            InputNickNameGlyTrue.addClass("hidden");
            InputNickNameGlyFalse.removeClass("hidden");
            InputNickNameFalseTip.removeClass("hidden");
            InputNickNameFalseTip.html("请输入用户昵称");
        }
    }

    //密码验证
    function validatePassword () {
        var InputUserPasswordDiv = $("#InputUserPasswordDiv");
        var InputUserPasswordGlyTrue = $("#InputUserPasswordGlyTrue");
        var InputUserPasswordGlyFalse = $("#InputUserPasswordGlyFalse");
        var InputUserPasswordGlyWarning = $("#InputUserPasswordGlyWarning");
        var level =  $("#level");
        if(level.hasClass("pw-medium") || level.hasClass("pw-strong") ){
            //如果密码状态为中等或者强，设置DIV成成功
            InputUserPasswordDiv.removeClass("has-error");
            InputUserPasswordDiv.removeClass("has-warning");
            InputUserPasswordDiv.addClass("has-success");
            InputUserPasswordGlyFalse.addClass("hidden");
            InputUserPasswordGlyWarning.addClass("hidden");
            InputUserPasswordGlyTrue.removeClass("hidden");
        }else if(level.hasClass("pw-weak")){
            //如果密码状态为弱，设置DIV成警告
            InputUserPasswordDiv.removeClass("has-error");
            InputUserPasswordDiv.removeClass("has-success");
            InputUserPasswordDiv.addClass("has-warning");
            InputUserPasswordGlyFalse.addClass("hidden");
            InputUserPasswordGlyTrue.addClass("hidden");
            InputUserPasswordGlyWarning.removeClass("hidden");
        }else{
            //如果密码不符合弱规则，设置DIV成错误
            InputUserPasswordDiv.removeClass("has-warning");
            InputUserPasswordDiv.removeClass("has-success");
            InputUserPasswordDiv.addClass("has-error");
            InputUserPasswordGlyWarning.addClass("hidden");
            InputUserPasswordGlyTrue.addClass("hidden");
            InputUserPasswordGlyFalse.removeClass("hidden");
        }
    }

    //密码确认验证
    function validatePasswordAgain() {
        var InputUserPasswordAgainDiv =  $("#InputUserPasswordAgainDiv");
        var InputUserPasswordAgainFalseTip = $("#InputUserPasswordAgainFalseTip");
        var InputUserPasswordAgainGlyTrue = $("#InputUserPasswordAgainGlyTrue");
        var InputUserPasswordAgainGlyFalse = $("#InputUserPasswordAgainGlyFalse");
        var level =  $("#level");
        //如果设置的密码为中/高强度密码，提示进行验证
        if (level.hasClass("pw-medium") || level.hasClass("pw-strong")){
            if($("#InputUserPasswordAgain").val() === $("#InputUserPassword").val()){
                //密码一致，正确提示框；
                InputUserPasswordAgainDiv.removeClass("has-error");
                InputUserPasswordAgainDiv.addClass("has-success");
                InputUserPasswordAgainFalseTip.addClass("hidden");
                InputUserPasswordAgainGlyFalse.addClass("hidden");
                InputUserPasswordAgainGlyTrue.removeClass("hidden");
            }else{
                InputUserPasswordAgainDiv.removeClass("has-success");
                InputUserPasswordAgainDiv.addClass("has-error");
                InputUserPasswordAgainFalseTip.removeClass("hidden");
                InputUserPasswordAgainGlyFalse.removeClass("hidden");
                InputUserPasswordAgainGlyTrue.addClass("hidden");
                InputUserPasswordAgainFalseTip.html("密码输入不一致，请重新输入！");
            }
        }else {
            //如果设置密码为低/或者小于六位的密码，提示用户设置成中/高强度密码
            InputUserPasswordAgainDiv.removeClass("has-success");
            InputUserPasswordAgainDiv.addClass("has-error");
            InputUserPasswordAgainFalseTip.removeClass("hidden");
            InputUserPasswordAgainGlyFalse.removeClass("hidden");
            InputUserPasswordAgainGlyTrue.addClass("hidden");
            InputUserPasswordAgainFalseTip.html("请设置中/强强度密码");
        }
    }

    //输入密码时实时验证密码强度
    var InputUserPassword = $("#InputUserPassword");
    InputUserPassword.keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        var level = $("#level");
        var InputPasswordDiv = $("#InputUserPasswordDiv");
        var InputPasswordGlyTrue = $("#InputUserPasswordGlyTrue");
        var InputPasswordGlyFalse = $("#InputUserPasswordGlyFalse");
        var InputPasswordGlyWarning = $("#InputUserPasswordGlyWarning");

        if (false === enoughRegex.test($(this).val())) {
            //密码小于六位的时候，密码强度图片都为灰色
            level.removeClass('pw-weak');
            level.removeClass('pw-medium');
            level.removeClass('pw-strong');
            level.addClass('pw-defule');
            InputPasswordDiv.removeClass("has-error");
            InputPasswordDiv.removeClass("has-warning");
            InputPasswordDiv.removeClass("has-success");
            InputPasswordGlyFalse.addClass("hidden");
            InputPasswordGlyWarning.addClass("hidden");
            InputPasswordGlyTrue.addClass("hidden");
        }
        else if (strongRegex.test($(this).val())) {
            level.removeClass('pw-weak');
            level.removeClass('pw-medium');
            level.removeClass('pw-strong');
            level.addClass(' pw-strong');
            InputPasswordDiv.removeClass("has-error");
            InputPasswordDiv.removeClass("has-warning");
            InputPasswordDiv.addClass("has-success");
            InputPasswordGlyFalse.addClass("hidden");
            InputPasswordGlyWarning.addClass("hidden");
            InputPasswordGlyTrue.removeClass("hidden");
            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 （大小写字母）
        }
        else if (mediumRegex.test($(this).val())) {
            level.removeClass('pw-weak');
            level.removeClass('pw-medium');
            level.removeClass('pw-strong');
            level.addClass(' pw-medium');
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
            InputPasswordDiv.removeClass("has-error");
            InputPasswordDiv.removeClass("has-warning");
            InputPasswordDiv.addClass("has-success");
            InputPasswordGlyFalse.addClass("hidden");
            InputPasswordGlyWarning.addClass("hidden");
            InputPasswordGlyTrue.removeClass("hidden");
        }
        else {
            level.removeClass('pw-weak');
            level.removeClass('pw-medium');
            level.removeClass('pw-strong');
            level.addClass('pw-weak');
            InputPasswordDiv.removeClass("has-error");
            InputPasswordDiv.removeClass("has-success");
            InputPasswordDiv.addClass("has-warning");
            InputPasswordGlyFalse.addClass("hidden");
            InputPasswordGlyTrue.addClass("hidden");
            InputPasswordGlyWarning.removeClass("hidden");
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
        }
    });
    var InputUserPasswordAgain = $("#InputUserPasswordAgain");
    InputUserPasswordAgain.blur(validatePasswordAgain);


})