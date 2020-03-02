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
    $(".anchor1").click(function () {
        $(this).css("background-color", "green");
    });
});
        
$('.anchor1').click(function () {
    $('#form').hide()
})
    */
/* second page valiadtion*/

$(document).ready(function () {
    $("#myBtn").click(function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    })
});
$(".close").click(function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});


var selectedRow = null;

function sumbitfunction() {
    if (selectedRow == null) {
        addfunction();
        refresh();
    }
    else {
        update()
        refresh();
    }
}

function addfunction() {
    const temp = document.getElementById("mytabletemplaterow");
    const tabletemplete = temp.content;

    const td = tabletemplete.querySelectorAll("td");
    td[0].innerHTML = document.getElementById("pagenumber").value;
    td[1].innerHTML = document.getElementById("pagetext").value;
    const nodeElement = tabletemplete.cloneNode(true);


    document.getElementById("mytable").appendChild(nodeElement);
}

function readFormData() {
    var formData = {};
    formData["pagenumber"] = document.getElementById("pagenumber").value;
    formData["pagetext"] = document.getElementById("pagetext").value;
}

function refresh() {
    document.getElementById("pagenumber").value = "";
    document.getElementById("pagetext").value = "";
}

function editRow(td) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    selectedRow = td.parentElement.parentElement;
    console.log("666666", selectedRow);
    var x = document.getElementById("pn").innerHTML;
    document.getElementById("pagenumber").value = x;
    var y = document.getElementById("pd").innerHTML;
    document.getElementById("pagetext").value = y;

}

function update() {
    selectedRow.cells[0].innerHTML = document.getElementById("pagenumber").value;
    selectedRow.cells[1].innerHTML = document.getElementById("pagetext").value;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("usertable").deleteRow(i);
}

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
    $("#pagetext").keyup(function () {
        var pagedescription = $("#pagetext").val();
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


$(document).ready(function () {
    $("#step1").click(function () {
        $("#form").show();
        $("#second-page").hide();
        $("#frame").hide();
    })
})

$(document).ready(function () {
    $("#step2").click(function () {
        $("#form").hide();
        $("#second-page").show();
        $("#frame").hide();

    })
})

$(document).ready(function () {
    $("#step3").click(function () {
        $("#form").hide();
        $("#second-page").hide();
        $("#frame").show();
    })
})

$(document).ready(function () {
    $("#prev").click(function () {
        $("#form").show();
        $("#second-page").hide();
        $("#frame").hide();
    })
})

$(document).ready(function () {
    $("#next").click(function () {
        $("#form").hide();
        $("#second-page").show();
        $("#frame").hide();
    })
})

$(document).ready(function () {
    $(".anchor1").click(function () {
        $(".anchor-content1").css("background-color", "#5cb85c");
        $(".anchor1").css("background-color", "#5cb85c");
        $(".arrow1").css("border-left", "30px solid #5cb85c");
        $(".anchor-content2").css("background-color", "#b1dfbb");
        $(".anchor2").css("background-color", "#b1dfbb");
        $(".arrow2").css("border-left", "30px solid #b1dfbb");
        $(".anchor3").css("background-color", "lavender");
        $(".arrow3").css("border-left", "30px solid lavender");
    })
})

