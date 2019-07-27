var MessageView = {

  //add objectId of each unique object to grab specific id
  render: _.template('<div class="message <%= roomname %>" id="<%= objectId %>" >' +'<span class="username"><%= username %></span>: ' +
    '<br><span class="text"><%= text %></span>' +
    '</div>'
    )

};

//id="<%= objectId %>"