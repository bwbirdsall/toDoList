var List = {
};

var Task = {

};

$(document).ready(function() {
  $("#add-task").click(function() {
    $("#list-tasks").append('<div class="new-list-task">' +
                              '<div class="form-group">' +
                                '<label for="new-task">To Do Task</label>' +
                                '<input type="text" class="form-control new-task">' +
                              '</div>' +
                            '</div>');
    });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedList = $("input#new-list-name").val();

    var newList = Object.create(List);
    newList.name = inputtedList;
    newList.tasks = [];

    $(".new-list-task").each(function() {
      newList.tasks.push($(this).find("input.new-task").val());
    });

    console.log(newList.tasks);

    $("ul#lists").append("<li><span class='list'>" + newList.name + "</span></li>");

    $("#show-lists").show();

    $('.list').last().click(function(){
      $("#show-tasks").show();
      
      $("#show-tasks h2").text(newList.name);
      newList.tasks.forEach(function(task){
        $("ul#tasks").append("<li><span class='task'>" + task + "</span></li>");
      });  
    });
    


    this.reset();
  });
});
