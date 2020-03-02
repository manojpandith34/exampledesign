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

$("#submitButton").click(function () {
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
            document.getElementById("submitButton").disabled = true;

        }

        else if (!pageno.trim().match(pageNumberExp)) {
            console.log("errrrrr");
            $("#pagenumbererror").html("please enter in correct form");
            $(this).css("background-color", "red");
            document.getElementById("submitButton").disabled = true;

        }
        else {
            $("#pagenumbererror").html("");
            $(this).css("background-color", "green");
            document.getElementById("submitButton").disabled = false;
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
            document.getElementById("submitButton").disabled = true;

        }

        else if (!pagedescription.trim().match(pagedescriptionEXP)) {
            console.log("errrrrr");
            $("#pagedescriptionerror").html("please enter in correct form");
            $(this).css("background-color", "red");
            event.preventDefault();
            document.getElementById("submitButton").disabled = true;

        }
        else {
            $("#pagedescriptionerror").html("");
            $(this).css("background-color", "green");
            document.getElementById("submitButton").disabled = false;
        }
    })
})



