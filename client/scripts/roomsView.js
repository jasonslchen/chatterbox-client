var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //if add room button is clicked, invoke renderRoom
    this.$button.on('click', this.renderRoom);
  },

  render: function() {
    //add rooms to dropdown list already in memory
    this.$select.append('<option value="1">New Room</option><option value="2">Fun Times</option><option value="3">Not Fun Times</option><option value="4">Mediocre Times</option>');

    //add a text field and make new room button to container
    // $('#rooms').append('<input type="text" name="message" id="message"/>');
  },

  renderRoom: function() {
    //for the new room option
      //create a new input box and button
    //on make new room click
      //grab input and add to $select
    //grab text from input box
    //create a new room based on text
  },

  toggleRoom: function() {
      //if a room is toggled,
      //filter .roomname property by name
      //only show messages from that room
  }

};
