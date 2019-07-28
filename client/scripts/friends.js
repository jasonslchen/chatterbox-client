var Friends = {

  //if username is clicked on span tag
    //display all messages sent by friends in bold or with highlight
    initialize: function() {
      // debugger;
      $('body #chats').on("click", ".username", this.toggleStatus)
        // console.log(this.currentClass)
    },

    toggleStatus: function() {
      // $('#chats div').toggleClass(`.${this.currentClass}`);
      let currentClass = $(this).attr("class").split(' ')[1];
      if (currentClass) {
        $('.' + currentClass).css("color", "red");

      }
    }
    //change users element to anchor
    //add class with specific username to element
    //toggle tags for the specific username

    //bonus:
      //allow for untoggling/defriending friends

};