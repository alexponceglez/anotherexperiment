const phone             = $(document).find('.right-column-phone .phone'),
      display           = $(phone).find('.notch .display'),
      displayHome       = $(phone).find('.notch .display .wrapper-display'),
      displaySala       = $(display).find('.wrapper-display-sala'),
      displayHabitacion = $(display).find('.wrapper-display-habitacion'),
      displayCocina     = $(display).find('.wrapper-display-cocina'),
      displayCochera    = $(display).find('.wrapper-display-cochera');


$(function () {

  // Acciones del menú SALA.
  $('.sala').on('click', function(e){
    e.preventDefault();
    $('.display .wrapper-display').hide();
    $(display).find('.wrapper-display-sala').show();
  });

  $($(displaySala).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();
  });

  // Acciones del menú HABITACIÓN.
  $('.habitacion').on('click', function(e){
    e.preventDefault();
    $('.display .wrapper-display').hide();
    $(display).find('.wrapper-display-habitacion').show();
  });

  $($(displayHabitacion).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();
  });

  // Acciones del menú COCINA.
  $('.cocina').on('click', function(e){
    e.preventDefault();
    $('.display .wrapper-display').hide();
    $(display).find('.wrapper-display-cocina').show();
  });

  $($(displayCocina).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();
  });

  // Acciones del menú COCHERA.
  $('.cochera').on('click', function(e){
    e.preventDefault();
    $('.display .wrapper-display').hide();
    $(display).find('.wrapper-display-cochera').show();
  });

  $($(displayCochera).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();
  });

});
