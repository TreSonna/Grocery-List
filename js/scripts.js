$(document).ready(function(){
$("#groceryList").sumbit(function(event)){
    event.prevent.default();
    let item=[".item1",".item2",".item3",".item4",".item5"];
    let itemname=[]
    itemname.push($("input#item1").val());
    itemname.push($("input#item2").val());
    itemname.push($("input#item3").val());
    itemname.push($("input#item4").val());
    itemname.push($("input#item5").val());

    itemname.forEach(function(element, index)
