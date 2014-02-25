var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state + " " + this.zipCode;
  },
  valid: function() {
    var nonNumberRE = /\D/;
    var numberRE = /\d/
    var validZip = !nonNumberRE.test(this.zipCode) && this.zipCode.length === 5;
    var validStreet = this.street.length > 0;
    var validCity = this.city.length > 0 && !numberRE.test(this.city);
    var validState = this.state.length > 0 && !numberRE.test(this.state);

    return validZip && validStreet && validCity && validState; 
  }
};

var PhoneNumber = {
  formattedNumber: function() {
    return "(" + this.number.slice(0,3) + ") " + this.number.slice(3,6) + "-" + this.number.slice(6);
  },
  valid: function() {
    var re = /\D/;
    return !re.test(this.number) && this.number.length === 10;
  }
};

$(document).ready(function() {
/*    $("#add-phone-number").click(function() {
    $("#new-phone-numbers").append('<div class="new-phone-number">' +
                                      '<div class="form-group">' +
                                        '<label for="new-number">Phone Number</label>' +
                                        '<input type="text" class="form-control new-number">' +
                                      '</div>' +
                                    '</div>');
  });
*/
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    $("ul#tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");      

    $("#show-tasks").show();
    this.reset();
  });
});
