document.getElementById("button1").addEventListener("click", function () {
    document.querySelector(".popupframe").style.display = "flex";

});

document.getElementById("button2").addEventListener("click", function () {
    document.querySelector(".popupframe").style.display = "none";

});


$(document).ready(function () {
    $("#pagenumber").keyup(function () {
        var pageno = $("#pagenumber").val();
        var pageNumberExp = /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/;

        console.log("===============");
        if (pageno.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#pagenumbererror").html("please enter number");
            $(this).css("background-color", "red");

        }

        else if (!pageno.trim().match(pageNumberExp)) {
            console.log("errrrrr");
            $("#pagenumbererror").html("please enter in correct form");
            $(this).css("background-color", "red");

        }
        else {
            $("#pagenumbererror").html("");
            $(this).css("background-color", "green");
        }
    })
})

$(document).ready(function () {
    $("#description").keyup(function () {
        var pagedescription = $("#description").val();
        var pagedescriptionEXP = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s"'/%~`()]{50,200}$/;

        console.log("===============");
        if (pagedescription.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#pagedescriptionerror").html("please fill name");
            $(this).css("background-color", "red");

        }

        else if (!pagedescription.trim().match(pagedescriptionEXP)) {
            console.log("errrrrr");
            $("#pagedescriptionerror").html("please enter in correct form");
            $(this).css("background-color", "red");

        }
        else {
            $("#pagedescriptionerror").html("");
            $(this).css("background-color", "green");
        }
    })
})



