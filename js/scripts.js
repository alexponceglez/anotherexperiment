const phone                   = $(document).find('.right-column-phone .phone'),
      imageContent            = $(document).find('.left-column-components .image-content'),
      display                 = $(phone).find('.notch .display'),
      displayHome             = $(phone).find('.notch .display .wrapper-display'),
      displaySala             = $(display).find('.wrapper-display-sala'),
      displayHabitacion       = $(display).find('.wrapper-display-habitacion'),
      displayCocina           = $(display).find('.wrapper-display-cocina'),
      displayCochera          = $(display).find('.wrapper-display-cochera'),
      displayCocheraPuerta    = $(display).find('.wrapper-display-cochera-puerta');


$(function () {

  // Acciones del menú SALA.
  $('.sala').on('click', function(e){
    e.preventDefault();
    $('.display .wrapper-display').hide();
    $(display).find('.wrapper-display-sala').show();
    console.log(imageContent);
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


  // --> Puerta.
  $($(displayCochera).find('li .puerta')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayCocheraPuerta).show();
  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.puerta-abierta').show();
  });

  $($(displayCocheraPuerta).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayCocheraPuerta).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.puerta-abierta').show();
    $(imageContent).find('.puerta-cerrada').hide();
  });

  $($(displayCocheraPuerta).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.puerta-cerrada').show();
    $(imageContent).find('.puerta-abierta').hide();
  });

});
