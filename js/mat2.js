

var x = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
//var text = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
//var text = '<br/>ｦ<br/>ｧ<br/>ｨ<br/>ｩ<br/>ｪ<br/>ｫ<br/>ｬ<br/>ｭ<br/>ｮ<br/>ｯ<br/>ｱ<br/>ｲ<br/>ｳ<br/>ｴ<br/>ｵ<br/>ｶ<br/>ｷ<br/>ｸ<br/>ｹ<br/>ｺ<br/>ｻ<br/>ｼ<br/>ｽ<br/>ｾ<br/>ｿ<br/>ﾀ<br/>ﾁ<br/>ﾂ<br/>ﾃ<br/>ﾄ<br/>ﾅ<br/>ﾆ<br/>ﾇ<br/>ﾈ<br/>ﾉ<br/>ﾊ<br/>ﾋ<br/>ﾌ<br/>ﾍ<br/>ﾎ<br/>ﾏ<br/>ﾐ<br/>ﾑ<br/>ﾒ<br/>ﾓ<br/>ﾔ<br/>ﾕ<br/>ﾖ<br/>ﾗ<br/>ﾘ<br/>ﾙ<br/>ﾚ<br/>ﾛ<br/>ﾜ<br/>ﾝ<br/>';

var text = 'ｦ';


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
    
   //var i = Math.floor(Math.random() * 55);
   var j = Math.floor(Math.random() * 55);
   text = text.replaceChar(0, x[j]);
   //alert(text);
   //var dispText = text.replace(/(.{1})/g,"<br/>$1");
   f("p1").innerHTML = text;


}

var winht = window.innerHeight;
var winwt = window.innerWidth;

f('container').style.height = winht-10;
var h = 0;

function drop()
{
	f("p1").style.top = h+'px';
	h++;
	if(h >= winht)
	{
		h = 0;
		var l = Math.floor(Math.random() * winwt);
		f("p1").style.left = l+'px';
	}
	var tt2 = setTimeout('drop1()', 4);
}

function drop1()
{
	f("p1").style.top = h+'px';
	h++;
	if(h >= winht)
	{
		h = 0;
		var l = Math.floor(Math.random() * winwt);
		f("p1").style.left = l+'px';
	}
	var tt3 = setTimeout('drop()', 4);
}


drop();
var y = window.setInterval(foo, 200);

//var y = window.setInterval(foo, 2<<2);
 
