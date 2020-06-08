$(document).ready(function(){
$("#groceryList").sumbit(function(event)){
    event.prevent.default();
    let item=[".item1",".item2",".item3",".item4",".item5"];
    let itemName=[]
    itemName.push($("input#item1").val());
    itemName.push($("input#item2").val());
    itemName.push($("input#item3").val());
    itemName.push($("input#item4").val());
    itemName.push($("input#item5").val());

    itemName.forEach(function(element, index)
