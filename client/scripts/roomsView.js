var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //if add room button is clicked, invoke renderRoom
    this.$button.on('click', this.renderRoom);
  },

  render: function() {
    //add rooms to dropdown list already in memory
    // this.$select.append('<option value="1">New Room</option><option value="2">Fun Times</option><option value="3">Not Fun Times</option><option value="4">Mediocre Times</option>');

    //add a text field and make new room button to container
    $('#rooms').append('<input type="text" name="message" id="add-room"/>');
  },

  renderRoom: function(roomName) {
    //grab input from add room text field
     roomName = $('#add-room').val();
    //add an index to track option value
    let index = 1;
    //add new room input to $select dropdown
    $('#rooms select').append(`<option value="${index}">${roomName}</option>`);
    //increase index
    index++;
    //communicate with server to add a room to drop down list
  },

  toggleRoom: function() {
      //if a room is toggled,
      //filter .roomname property by name
      //only show messages from that room
  }

};
