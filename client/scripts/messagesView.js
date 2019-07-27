var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   //prepares any pre-sent messages and prepares it on the page
  //  App.fetch(cb);
  //probably has something to do with the submit button
  FormView.$form.on('submit', this.renderMessage);
  //check if there are usernames, texts, roomnnames to take care of edge cases if missing

},

render: function(serverData) {
  //jquery on submit click
  //set time out or set interval to get new messages every few seconds
  for(let i = 0; i < serverData.results.length; i++) {
    let html = '';
    if (serverData.results[i].username && serverData.results[i].text) {
      html += MessageView.render(serverData.results[i]);
      this.$chats.append(html);
    }
  }


  // lethtml = "";
  // for (let i = 0; i < data.results.length; i++) {
  //   //check for username
  //   //text
  //   //if doesnt have all 3, just ignore it.
  //   if(data.results[i].username && data.results[i].text) {

  //     html += MessageView.render(data.results[i]);
  //     $('#chats').append(html);
  //   }
  // }
    //use messages.render to convert messages into DOM
    //use prepend to append DOM to #chat div

  },

  renderMessage: function() {
    let text = $("#message").val();


  }

  // renderMessage: function() {
  //   //render message for one mssage we type in submission box
  //   //when we click submit, not only do we render on our screen, but also have to send to server
  //   // //render
  //   // let currentMessage;

  //   console.log('hi');
  // //   $(".submit").on("click", function() {
  //     currentMessage = $('chats').val();
  //   })
  // }

// use parse.create function
};