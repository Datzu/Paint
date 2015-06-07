<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="css/style.css" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <title></title>
    </head>
    <body>
        <div id="buttonPanel">
            <div class="button" id="blackButton" value="black"></div>
            <div class="button" id="whiteButton" value="white"></div>
            <div class="button" id="redButton" value="red"></div>
            <div class="button" id="greenButton" value="green"></div>
            <div class="button" id="blueButton" value="blue"></div>
            <p>Size: <input id="inputSize" /></p>
        </div>
        <canvas id="canvas" width="1024" height="500" style="border:1px solid #000000;"></canvas>
    </body>
</html>