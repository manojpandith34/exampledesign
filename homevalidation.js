$(document).ready(function () {
    $("#Oname").keyup(function () {
        var orgname = $("#Oname").val();
        var orgNameExp = /^[A-za-z]{0,3}[.]{0,1}[A-za-z]{2,30}[\s]{0,1}[a-zA-z]{2,30}$/;

        console.log("===============");
        if (orgname.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#orgnameerr").html("please fill name");
            $(this).css("background-color", "red");

        }

        else if (!orgname.trim().match(orgNameExp)) {
            console.log("errrrrr");
            $("#orgnameerr").html("please enter in correct form");
            $(this).css("background-color", "red");

        }
        else {
            $("#orgnameerr").html("");
            $(this).css("background-color", "green");
        }
    })
})

$(document).ready(function () {
    $("#Odescription").keyup(function () {
        var orgdescription = $("#Odescription").val();
        var orgdescriptionEXP = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s"'/%~`()]{50,200}$/;

        console.log("===============");
        if (orgdescription.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#orgdescriptionerr").html("please fill name");
            $(this).css("background-color", "red");

        }

        else if (!orgdescription.trim().match(orgdescriptionEXP)) {
            console.log("errrrrr");
            $("#orgdescriptionerr").html("please enter in correct form");
            $(this).css("background-color", "red");

        }
        else {
            $("#orgdescriptionerr").html("");
            $(this).css("background-color", "green");
        }
    })
})

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#logoimage').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#filechoose").change(function () {
    readURL(this);
});


/*$(document).ready(function () {
    setTimeout(popup, 3000);
    function popup() {
        $("#Oname").css("display", "block");
    }
})  */