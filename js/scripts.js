var List = {
};
var listOfLists = [];

$(document).ready(function() {
  var currentList = Object.create(List);
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedList = $("input#new-list-name").val();

    var newList = Object.create(List);
    newList.name = inputtedList;
    newList.tasks = [];

    listOfLists.push(newList);
    $("ul#lists").append("<li><span class='list'>" + newList.name + "</span></li>");

    $("#show-lists").show();

    $('.list').last().click(function(){
      console.log(newList.name);
      currentList = newList;
      $("#show-tasks").show();
      $("#show-tasks h2").text(newList.name);
      $("ul#tasks").text("");
      newList.tasks.forEach(function(task){
        $("ul#tasks").append("<li><span class='task'>" + task + "</span></li>");
      });  
    });


    this.reset();

  });

  $("form#new-tasks").submit(function(event) {
    event.preventDefault();
    var task = $("input#new-task").val();
    currentList.tasks.push(task);
    $("ul#tasks").append("<li><span class='task'>" + task + "</span></li>");
    this.reset();
  });
    
});
