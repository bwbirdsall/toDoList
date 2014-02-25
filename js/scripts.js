var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

var PhoneNumber = {
  formattedNumber: function() {
    return "(" + this.number.slice(0,3) + ") " + this.number.slice(3,6) + "-" + this.number.slice(6);
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-street">Street</label>' + 
                                   '<input type="text" class="form-control new-street">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-city">City</label>' + 
                                   '<input type="text" class="form-control new-city">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-state">State</label>' + 
                                   '<input type="text" class="form-control new-state">' + 
                                 '</div>' + 
                               '</div>');
  });

  $("#add-phone-number").click(function() {
    $("#new-phone-numbers").append('<div class="new-phone-number">' +
                                      '<div class="form-group">' +
                                        '<label for="new-phone-number">Phone Number</label>' +
                                        '<input type="text" class="form-control new-phone-number">' +
                                      '</div>' +
                                    '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;

    newContact.addresses = [];
    newContact.phoneNumbers = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);
    });

    $(".new-phone-number").each(function() {
      var inputtedPhoneNumber = $(this).find("input.new-phone-number").val();
      var newPhoneNumber = Object.create(PhoneNumber);
      newPhoneNumber.number = inputtedPhoneNumber;

      newContact.phoneNumbers.push(newPhoneNumber);

    })


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

      $("ul#phone-numbers").text("");
      newContact.phoneNumbers.forEach(function(phoneNumber) {
        $("ul#phone-numbers").append("<li>" + phoneNumber.formattedNumber() + "</li>");
      });
    });

    this.reset();
  });
});
