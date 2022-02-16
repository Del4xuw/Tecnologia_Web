var i = 0;
    var txt = 'Esta es una pagina con un poco de javascript';
    var speed = 80;
    function typeWrite(){
        if(i < txt.length){
            document.getElementById ('texto').innerHTML += txt.charAt(i);
            i++;
            setTimeout (typeWrite, speed);
        }
    }
<h1 id="texto"></h1>