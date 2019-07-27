var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //if submit button is clicked, invoke renderMessage
  FormView.$form.on('submit', this.renderMessage);
},

render: function(serverData) {
  //data is received as an object with one key and the value of the key is an array of all the message objects
  var sanitizeHTML = function (str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };

  for (let i = 0; i < serverData.results.length; i++) {
    //define html as an empty string
    let html = '';
    //if data includes username and text
    if (serverData.results[i].username && serverData.results[i].text) {
      //sanitize HTML from XSS attacks before rendering to page
      serverData.results[i].text = sanitizeHTML(serverData.results[i].text);
      //add the rendered data to the html string
      html += MessageView.render(serverData.results[i]);
      //prepend html to chats
      this.$chats.prepend(html);
    }
  }
  },

  renderMessage: function() {
    //grab input from text input field
    let text = $("#message").val();
    //define message with grabbed text from input field
    var message = {
      username: 'wj',
      text: text,
      roomname: 'funtimes'
    };

    //define a new message that will render the new message
    let newMessage = MessageView.render(message);
    //prepend the new message to the chat container
    MessagesView.$chats.prepend(newMessage);

    //call ajax POST to send server the new message
    Parse.create(message);
    //erase input from the text input field
    $("#message").val('');
    //pass text into object with our username, and room
    //render it and submit it
    //pass it to server

  }


};