var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  index: 1,

  initialize: function() {
    //if add room button is clicked, invoke renderRoom
    this.$button.on('click', Rooms.add);

    //initalize on change event run (toggleRoom)
    this.$select.change(this.toggleRoom);
  },

  render: function(serverData) {
    //add rooms to dropdown list already in memory
    // this.$select.append('<option value="1">New Room</option>');
    //adding an input text field for adding a room
    $('#rooms').append('<input type="text" name="message" id="add-room"/>');
    //array that contains all room names
    let rooms = [];
    //iterate through server data results
    for (let i = 0; i < serverData.results.length; i++) {
      let html = ''
      //if the results includes a roomname
      if (serverData.results[i].roomname) {
        //if the rooms array does not include roomname
        if (!rooms.includes(serverData.results[i].roomname)) {
          //render newName and create DOM nodes
          html += this.DOMtemplate(serverData.results[i]);
          //push roomname into rooms array
          rooms.push(serverData.results[i].roomname);
          //append newRoom to the drop down list
          $('#rooms select').append(html);
        }
      }
    }
  },

  renderRoom: function(roomName) {
    //grab input from add room text field
     roomName = $('#add-room').val();
    //add an index to track option value
    //add new room input to $select dropdown
    $('#rooms select').append(`<option value="${this.index}">${roomName}</option>`);
    //increase index
    this.index++;
    //communicate with server to add a room to drop down list
    $('#add-room').val('');
  },


  toggleRoom: function() {
    let selected = $('#rooms select option:selected').text();
    console.log(selected);
    $('#chats div').show().filter(`:not(.${selected})`).slideUp();
    // $("#chat").filter(selected).slideUp();


  //   console.log(selected);
  //   $(#chat roomname)

  //   for (let user of Rooms.results) {
  //     if (!(user.roomname === selected)) {
  //       //use span class.html
  //       //grab text inside span class $(".roomnname").html()
  //       //compare and filter
  //     }
  //   }
  //     //on toggle change, read the roomname
  //     //filter messages by .roomname
  //     //filter .roomname property by name
  //     //only show messages from that room
  },

  DOMtemplate: _.template(`<option value="${this.index}"><%= roomname %></option>`)

};
