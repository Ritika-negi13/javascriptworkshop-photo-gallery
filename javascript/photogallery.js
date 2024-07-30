$('img').on('click', function() {
    var popupImage = $('img', {
      src: $(this).attr('src'), 
      css: {
        width: '100%',
        height: 'auto',
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 1000
      }
    });
    console.log($(this).attr('src'));
    var backdrop = $('<div>', {
      css: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 999
      }
    }).on('click', function() {
      $(this).remove();
      popupImage.remove();
    });
    $('body').append(backdrop, popupImage);
});