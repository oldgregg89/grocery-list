$(document).ready(function(){
  $("#groceryForm").submit(function(event) {
    let groceryList = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];
    let alphaGrocery = [];

    groceryList.sort();
    
    

    $("#hide-form").hide();
    $("#hide-list").show();

    $("#list").text(groceryList);    

    event.preventDefault();

  });
});