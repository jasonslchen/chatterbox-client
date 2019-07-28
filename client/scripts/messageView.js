var MessageView = {

  //add objectId of each unique object to grab specific id
  render: _.template('<div class="message <%= roomname %>" id="<%= objectId %>" >' +'<a href="#" class="username <%= username %>"><%= username %></a>' +
    '<br><span class="text"><%= text %></span>' +
    '</div>'
    )

};

//id="<%= objectId %>"