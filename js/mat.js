

var x = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
var text = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';


function f(elementId)
{
    return document.getElementById(elementId);
}

String.prototype.replaceChar = function(index, ch)
{
    return this.substr(0, index) + ch + this.substr(index + ch.length);
}

function foo()
{
    
   var i = Math.floor(Math.random() * 55);
   var j = Math.floor(Math.random() * 55);
   text = text.replaceChar(i, x[j]);
   //alert(text);
    
   f("p1").innerHTML = text;


}

var y = window.setInterval(foo, 2<<2);
 
