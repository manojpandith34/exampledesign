
//var modal = document.getElementById("myModal");
//var modal = document.getElementById("myModal")/

// Get the button that opens the modal
//var btn1 = document.getElementById("myBtn");
// var btn2 = document.getElementById("editBtn")



/*btn1.onclick = function () {
    modal.style.display = "block";
}
  */


//Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal



// When the user clicks on <span> (x), close the modal
/*span.onclick = function () {
    modal.style.display = "none";
} 
*/





/*$('#editBtn').on('click', function () {
    $("#myModal").modal("show");
    $("#txttitle").val($(this).closest('tr').children()[0].textContent);
});     
*/


$(document).ready(function () {
    $("#myBtn").click(function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    });

    $(".use-address").click(function () {
        console.log('on click---')
        var $row = $(this).closest("tr");    // Find the row
        var $text = $row.find(".nr").text(); // Find the text

        // Let's test it out
        alert($text);
    });

    $(".close").click(function () {

        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    });

});


// $(document).ready(function () {

// });


// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
 
 
 
*/


/*function showcontent() {
    var itm = document.getElementById("column1").value;
    //  document.getElementById("column1").innerHTML = itm;
    var cln = itm.cloneNode(true);
    document.getElementById("column1").appendChild(cln);
 
} 
 
 
let dataArr = [
    { pageNumber: 1, enterDescription: "this is a test page" }
]
 
 
  */

/*function myfunction() {
 
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    var table = document.getElementById("mytable");
    var row = temp.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var PageNO = document.getElementById("pagenumber").value;
    var pageText = document.getElementById("pagetext").value;
    cell1.innerHTML = PageNO;
    cell2.innerHTML = pageText;
    cell3.innerHTML = `<a href="">Edit</a>`;
/*const filetemplate = document.getElementById("colorsRequired") as HTMLTemplateElement;
  const filedisplayrec = filetemplate.content;
 
const labelElements = filedisplayrec.querySelectorAll("label");
  const spanElements = filedisplayrec.querySelectorAll("span");
  const divElements = filedisplayrec.querySelectorAll("div");
 
labelElements[0].innerText = key;
    spanElements[0].innerText = value;
 
const nodeElement: Node = filedisplayrec.cloneNode(true);
 
document.getElementById(parentToAppent).appendChild(nodeElement);
 
 
 
}
*/
var selectedRow = null;
function myfunction() {
    //if (selectedRow === null) {
    const temp = document.getElementById("mytabletemplaterow");
    const tabletemplete = temp.content;

    const td = tabletemplete.querySelectorAll("td");
    td[0].innerHTML = document.getElementById("pagenumber").value;
    td[1].innerHTML = document.getElementById("pagetext").value;
    const nodeElement = tabletemplete.cloneNode(true);


    document.getElementById("mytable").appendChild(nodeElement);
    refresh();




}






function deleteRow(r) {

    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("usertable").deleteRow(i);

}

function refresh() {
    document.getElementById("pagenumber").value = "";
    document.getElementById("pagetext").value = "";
}


/*function editRow(td) {

    var selectedRow = td.parentElement.parentElement;
    console.log('selectedRow', selectedRow)

    var modal = document.getElementById("myModal");
    modal.style.display = "block";


    var inputPageNumber = modal.getElementsByClassName("pNum")[0]
    var inputDtext = modal.getElementsByClassName('pt')[0]

    var pageN = selectedRow.getElementsByClassName('nr')[0]
    var pageD = selectedRow.getElementsByClassName('pd')[0]


    console.log('pNum', pageD)

    inputPageNumber.value = Number(pageN.innerHTML)
    inputDtext.value = pageD.innerHTML

    //document.getElementById("pagenumber").innerHTML = document.getElementById("numbertabledata").innerHTML;
    // var selectedRow = td.parentNode.parentNode;
    //  selectedRow.td[0]
    // console.log("----", selectedRow)
    // var y = document.getElementById("numbertabledata").innerHTML;
    // var d = document.getElementById("texttabledata").innerHTML;
    // document.getElementById("pagenumber").value = y;
    // document.getElementById("pagetext").value = d;
}

function update() {
    console.log("22222")

    selectedRow.cell[0].innerHTML = document.getElementById("pagenumber").value;
    selectedRow.cell[1].innerHTML = document.getElementById("pagetext").value;
}



    // document.getElementById("numbertabledata").innerHTML = "";
    // selectedRow.cells[0].innerHTML = "";


    //console.log("edddd", x)

    // x.innerHTML = "";
    // document.getElementById("numbertabledata").value = document.getElementById("numbertabledata").innerHTML;
    // document.getElementById("texttabledata").value = document.getElementById("texttabledata").innerHTML;
    // var x = document.getElementById("usertable").rows[0].cells;
    //x[0].innerHTML = "NEW CONTENT";


/*$("#mytable").on('click', 'input[id="deleteRow"]', function (event) {
    $(this).parent().parent().remove();
});

    */
/*function Remove(button) {
    //Determine the reference of the Row using the Button.
    var row = button.parentNode;
    //var name = row.getElementsByTagName("TD")[0].innerHTML;
    // if (confirm("Do you want to delete: " + name)) {

    //Get the reference of the Table.
    var table = document.getElementById("insert-row");

    //Delete the Table row using it's Index.
    table.deleteRow(row.rowIndex);
} */


