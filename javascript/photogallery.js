$(document).ready(function(){
    var Image=$('img').on('click', function() {
        var src=$(this).attr('src')
        $('img').attr('src',src).css({
            'width': 'auto',
            'height': '400px',
            'display': 'block',
            'position': 'fixed',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
            'z-index': '1',
            'background-color':'rgb(155, 153, 153)',
            'padding':'100px 362px 70px 362px'  
        }).on('click', function() {
            Image.css("display","none")
            $('gallery').css("display","")
            window.location.reload();
        });
    });
})

