//define functions here
function getIt() {
  $('p').on('click', function() {
    window.alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71) {
      alert('You've presses the G key);
    }
  })
}
$(document).ready(function(){

// call functions here

});
