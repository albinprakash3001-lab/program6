let present=0;
let absent=0;
function MarkAttendance(){
    let name=document.getElementById("name").value;
    let status=document.getElementById("status").value;
    if(name==" "){
        alert("Enter student name.");
        return;
    }
    document.getElementById("list").innerHTML+=
    "<div class='student'>"+name+"-"+status+"</div>";
    if(status=="present")
        present++;
    else 
        absent++;
    document.getElementById("count").innerHTML=
    "present:"+present+"|Absent:"+absent;
    document.getElementById("name").value="";
}