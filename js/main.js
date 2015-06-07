var brush = {
    size: 10,
    color: "black",
    shape: "square"
};

$(document).ready(function () {
    
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    $('#canvas').click(function (e) {
        
        var event = e || window.event;
        
        var x = event.pageX - c.offsetLeft;
        var y = event.pageY - c.offsetTop;
        
        ctx.fillStyle = brush.color;
        switch (brush.shape) {
            case 'square':
                ctx.fillRect(x, y, brush.size, brush.size);
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(x, y, brush.size, 0, 2*Math.PI);
                ctx.stroke();
                break;
        }
        
    });
    
    $('.button').click(function () {
        brush.color = $(this).attr('value');
    });
    
    $('#inputSize').change(function () {
        brush.size = $(this).val();
    });
    
    $('#inputShape').change(function () {
        brush.shape = $(this).val();
    });

});