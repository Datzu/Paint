var brush = {
    size: 10,
    color: "black"
};

$(document).ready(function () {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    $('#canvas').click(function (e) {
        
        var event = e || window.event;
        
        var x = event.pageX - c.offsetLeft;
        var y = event.pageY - c.offsetTop;
        
        ctx.fillStyle = brush.color;
        ctx.fillRect(x, y, brush.size, brush.size);
        
    });
    
    $('.button').click(function () {
        brush.color = $(this).attr('value');
    });
    
    $('#inputSize').change(function () {
        brush.size = $(this).val();
    });

});