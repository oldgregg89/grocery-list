$(document).ready(function(){
  $("#groceryForm").submit(function(event) {
    let groceryList = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];


    groceryList.sort();

    groceryList.forEAch(function(item) {
      upperCaseList = groceryList.toUpperCase(item);
    });
    
    let upperCaseList;
    

    $("#hide-form").hide();
    $("#hide-list").show();

    $("#list").text(upperCaseList);    

    event.preventDefault();

  });
});