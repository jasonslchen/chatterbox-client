var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //if submit button is clicked, invoke renderMessage
  FormView.$form.on('submit', this.renderMessage);
  FormView.$form.on('submit', this.reload);
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
    if (serverData.results[i].username && serverData.results[i].text && serverData.results[i].roomname) {
      //sanitize HTML from XSS attacks before rendering to page
      serverData.results[i].text = sanitizeHTML(serverData.results[i].text);
      //add the rendered data to the html string
      html += MessageView.render(serverData.results[i]);
      //prepend html to chats
      // $(html).addClass(serferData.results[i].roomname);
      this.$chats.append(html);
      //using chats
    }
  }
  },

  renderMessage: function() {
    //grab input from text input field
    let text = $("#message").val();
    //define message with grabbed text from input field
    var message = {
      username: App.username,
      text: text,
      roomname: 'funtimes',
      objectId: 2
    };
    let add = MessageView.render(message);
    $("#chats").prepend(add);

    //call ajax POST to send server the new message
    Parse.create(message);
    //erase input from the text input field
    $("#message").val('');
  },

  reload: function() {
    Parse.readAll((data) => {
      //find and grab objectId the newest message on the current DOM page
      let newestMessage = $('#chats div:first-child').attr('id');
      //define a variable index
      let index;
      //iterate through data results
      for (let i = 0; i < data.results.length; i++) {
        //if the objectId is the same as newestMessage's Id
        if (data.results[i].objectId === newestMessage) {
          //index is equal to the ID in the array
          index = i;
          break;
        }
      }

      var sanitizeHTML = function (str) {
        var temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
      };

      //iterate through all the newest messages starting at the newest message
      for (let i = index; i < data.results.length; i++) {
        let html = '';
        //if the data includes username, text, and roomname
        if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
          //sanitize HTML from XSS attacks before rendering to page
        data.results[i].text = sanitizeHTML(data.results[i].text);
        html += MessageView.render(data.results[i]);
        //prepend the html to the chat div
        $('#chats').prepend(html);
        }
        }
      })
    }
};

