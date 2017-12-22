<!doctype html>
<html>
    <head>
        <script>
            function callTen(callback){
                for(var i=0;i<10;i++){
                    callback();
                }
            }

            var callback = function(){alert('함수 호출')}
        </script>
    </head>
    <body>

    </body>
</html>