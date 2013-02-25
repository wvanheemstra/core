$(function(){
  // Document is ready
  var counter = 1,
      jade = require('jade'),
      intervalID,
      list = $('<ol></ol>');
      template = 'li(value=number)= label';

  function addItem() {
    counter *= 2;
    list.append(jade.render(template, {
      'locals': {
        'label': 'Test number #' + counter,
        'number': counter
      }
    }));
  }

  // Append list to body.
  $('body').append(list);

  // Add a new item every second.
  intervalID = window.setInterval(addItem, 1000);

  addItem();
});
