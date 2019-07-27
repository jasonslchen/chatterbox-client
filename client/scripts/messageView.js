var MessageView = {

  render: _.template('<div class="message">' +
  '<span class="roomname"><%= roomname %></span><br>' +
    '<span class="username"><%= username %></span>: ' +
    '<br><span class="text"><%= text %></span>' +
    '</div>'
    )

};