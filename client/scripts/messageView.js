var MessageView = {

  render: _.template('<div class="message">' +
    '<span class="username"><%= username %></span>: ' +
    '<br><span class="text"><%= text %></span>' +
    // '<span class="roomname"><%= roomname %></span>' +
    '</div>'
    )

};