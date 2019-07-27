var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    //on loading a page, run these functions on page
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    RoomsView.render();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      MessagesView.render(data);
      // window.setInterval(MessagesView.render(data), 10000);
      //call messagesview.render here
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
