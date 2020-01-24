const phone                    = $(document).find('.right-column-phone .phone'),
      imageContent             = $(document).find('.left-column-components .image-content'),
      display                  = $(phone).find('.notch .display'),
      displayHome              = $(phone).find('.notch .display .wrapper-display'),
      displaySala              = $(display).find('.wrapper-display-sala'),
      displaySalaLuz           = $(display).find('.wrapper-display-sala-luz'),
      displaySalaTele          = $(display).find('.wrapper-display-sala-tele'),
      displayHabitacion        = $(display).find('.wrapper-display-habitacion'),
      displayHabitacionLuz     = $(display).find('.wrapper-display-habitacion-luz'),
      displayHabitacionVentana = $(display).find('.wrapper-display-habitacion-ventana'),
      displayHabitacionTele    = $(display).find('.wrapper-display-habitacion-tele')
      displayCocina            = $(display).find('.wrapper-display-cocina'),
      displayCocinaLuz         = $(display).find('.wrapper-display-cocina-luz'),
      displayCocinaVentana     = $(display).find('.wrapper-display-cocina-ventana')
      displayCochera           = $(display).find('.wrapper-display-cochera'),
      displayCocheraPuerta     = $(display).find('.wrapper-display-cochera-puerta'),
      displayCocheraLuz        = $(display).find('.wrapper-display-cochera-luz');


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

  // --> Luz

  $($(displaySala).find('li .luz')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displaySalaLuz).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.foco-encendido').show();
  });

  $($(displaySalaLuz).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displaySalaLuz).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-apagado').show();
    $(imageContent).find('.foco-encendido').hide();
  });

  $($(displaySalaLuz).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-encendido').show();
    $(imageContent).find('.foco-apagado').hide();
  });

  // --> Tele

  $($(displaySala).find('li .tele')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displaySalaTele).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.tele-apagada').show();
  });

  $($(displaySalaTele).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displaySalaTele).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.tele-encendida').show();
    $(imageContent).find('.tele-apagada').hide();
  });

  $($(displaySalaTele).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.tele-apagada').show();
    $(imageContent).find('.tele-encendida').hide();
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

  // --> Luz

  $($(displayHabitacion).find('li .luz')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayHabitacionLuz).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.foco-encendido').show();
  });

  $($(displayHabitacionLuz).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayHabitacionLuz).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-apagado').show();
    $(imageContent).find('.foco-encendido').hide();
  });

  $($(displayHabitacionLuz).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-encendido').show();
    $(imageContent).find('.foco-apagado').hide();
  });

  // --> Ventana

  $($(displayHabitacion).find('li .ventana')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayHabitacionVentana).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.ventana-cerrada').show();
  });

  $($(displayHabitacionVentana).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayHabitacionVentana).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.ventana-abierta').show();
    $(imageContent).find('.ventana-cerrada').hide();
  });

  $($(displayHabitacionVentana).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.ventana-cerrada').show();
    $(imageContent).find('.ventana-abierta').hide();
  });


  // --> Tele

  $($(displayHabitacion).find('li .tele')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayHabitacionTele).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.tele-apagada').show();
  });

  $($(displayHabitacionTele).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayHabitacionTele).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.tele-encendida').show();
    $(imageContent).find('.tele-apagada').hide();
  });

  $($(displayHabitacionTele).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.tele-apagada').show();
    $(imageContent).find('.tele-encendida').hide();
  });

  // Acciones del menú COCINA. -------------------------------------------->
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

  // --> Ventana

  $($(displayCocina).find('li .ventana')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayCocinaVentana).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.ventana-cerrada').show();
  });

  $($(displayCocinaVentana).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayCocinaVentana).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.ventana-abierta').show();
    $(imageContent).find('.ventana-cerrada').hide();
  });

  $($(displayCocinaVentana).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.ventana-cerrada').show();
    $(imageContent).find('.ventana-abierta').hide();
  });

  // --> Luz

  $($(displayCocina).find('li .luz')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayCocheraLuz).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.foco-encendido').show();
  });

  $($(displayCocinaLuz).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayCocinaLuz).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-apagado').show();
    $(imageContent).find('.foco-encendido').hide();
  });

  $($(displayCocinaLuz).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-encendido').show();
    $(imageContent).find('.foco-apagado').hide();
  });



  // Acciones del menú COCHERA. -------------------------------------------->
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

  // --> Luz

  $($(displayCochera).find('li .luz')).on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().hide();
    $(displayCocheraLuz).show();
    $(imageContent).find('img').each(function() {
      $(this).hide();
    });
    $(imageContent).find('.foco-encendido').show();
  });

  $($(displayCocheraLuz).find('li .menu')).on('click', function(e) {
    e.preventDefault();

  $(this).parent().parent().hide();
  $(displayHome).show();

  $(imageContent).find('img').each(function() {
    $(this).hide();
  });

  $(imageContent).find('.casa').show();
  });

  $($(displayCocheraLuz).find('li .puerta-on')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-apagado').show();
    $(imageContent).find('.foco-encendido').hide();
  });

  $($(displayCocheraLuz).find('li .puerta-off')).on('click', function(e) {
    e.preventDefault();

    $(imageContent).find('.foco-encendido').show();
    $(imageContent).find('.foco-apagado').hide();
  });

});
