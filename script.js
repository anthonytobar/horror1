function resetAll() {
  document.location.reload("index.html").reset();
}

var a = document.getElementById("change1");	
var b = document.getElementById("change2");
var c = document.getElementById("change3");
var d = document.getElementById("change4");	
var e = document.getElementById("change5");
var f = document.getElementById("change6");
var g = document.getElementById("change7");
var h = document.getElementById("change8");
var i = document.getElementById("change9");
var j = document.getElementById("change10");
var k = document.getElementById("change11");
var l = document.getElementById("change12");
var m = document.getElementById("change13");
var n = document.getElementById("change14");
var o = document.getElementById("change15");
var p = document.getElementById("change16");
var q = document.getElementById("bb");
var audio1 = document.getElementById("you-died");
var audio2 = document.getElementById("you-scared");

function myFunction() {
  alert("All images must be the same to play sound");
}

function nextImage(el){
	if (a.src.match("images/ghost.jpg")){
		a.src = "images/screampic.jpg";
	} else if (a.src.match("images/screampic.jpg")){
		a.src = "images/scream3.jpg";
	} else if (a.src.match("images/scream3.jpg")){
		a.src = "images/scream.jpg";
	} else if (a.src.match("images/scream.jpg")){
		a.src = "images/horror.jpg";
	} else if (a.src.match("images/horror.jpg")){
		a.src = "images/ghost.jpg";
	} else {
		//do nothing
	}
}

function nextImage1(el){
	if (b.src.match("images/screampic.jpg")){
		b.src = "images/scream3.jpg";
	} else if (b.src.match("images/scream3.jpg")){
		b.src = "images/scream.jpg";
	} else if (b.src.match("images/scream.jpg")){
		b.src = "images/ghost.jpg";
	} else if (b.src.match("images/ghost.jpg")){
		b.src = "images/horror.jpg";
	} else if (b.src.match("images/horror.jpg")){
		b.src = "images/screampic.jpg";
	} else {
		//do nothing
	}
}

function nextImage2(el){
	if (c.src.match("images/scream3.jpg")){
		c.src = "images/scream.jpg";
	} else if (c.src.match("images/scream.jpg")){
		c.src = "images/ghost.jpg";
	} else if (c.src.match("images/ghost.jpg")){
		c.src = "images/screampic.jpg";
	} else if (c.src.match("images/screampic.jpg")){
		c.src = "images/horror.jpg";
	} else if (c.src.match("images/horror.jpg")){
		c.src = "images/scream3.jpg";
	} else {
		//do nothing
	}
}

function nextImage3(el){
	if (d.src.match("images/scream.jpg")){
		d.src = "images/ghost.jpg";
	} else if (d.src.match("images/ghost.jpg")){
		d.src = "images/scream3.jpg";
	} else if (d.src.match("images/scream3.jpg")){
		d.src = "images/screampic.jpg";
	} else if (d.src.match("images/screampic.jpg")){
		d.src = "images/horror.jpg";
	} else if (d.src.match("images/horror.jpg")){
		d.src = "images/scream.jpg";
	} else {
		//do nothing
	}
}

function nextImage4(el){
	if (e.src.match("images/mouth.jpg")){
		e.src = "images/smile2.jpg";
	} else if (e.src.match("images/smile2.jpg")){
		e.src = "images/smile.jpg";
	} else if (e.src.match("images/smile.jpg")){
		e.src = "images/mouthful.jpg";
	} else if (e.src.match("images/mouthful.jpg")){
		e.src = "images/horror.jpg";
	} else if (e.src.match("images/horror.jpg")){
		e.src = "images/mouth.jpg";
	} else {
		//do nothing
	}
}

function nextImage5(el){
	if (f.src.match("images/mouth.jpg")){
		f.src = "images/smile2.jpg";
	} else if (f.src.match("images/smile2.jpg")){
		f.src = "images/smile.jpg";
	} else if (f.src.match("images/smile.jpg")){
		f.src = "images/mouthful.jpg";
	} else if (f.src.match("images/mouthful.jpg")){
		f.src = "images/horror.jpg";
	} else if (f.src.match("images/horror.jpg")){
		f.src = "images/mouth.jpg";
	} else {
		//do nothing
	}
}

function nextImage6(el){
	if (g.src.match("images/smile.jpg")){
		g.src = "images/mouthful.jpg";
	} else if (g.src.match("images/mouthful.jpg")){
		g.src = "images/mouth.jpg";
	} else if (g.src.match("images/mouth.jpg")){
		g.src = "images/smile2.jpg";
	} else if (g.src.match("images/smile2.jpg")){
		g.src = "images/horror.jpg";
	} else if (g.src.match("images/horror.jpg")){
		g.src = "images/smile.jpg";
	} else {
		//do nothing
	}
}

function nextImage7(el){
	if (h.src.match("images/mouthful.jpg")){
		h.src = "images/mouth.jpg";
	} else if (h.src.match("images/mouth.jpg")){
		h.src = "images/smile2.jpg";
	} else if (h.src.match("images/smile2.jpg")){
		h.src = "images/smile.jpg";
	} else if (h.src.match("images/smile.jpg")){
		h.src = "images/horror.jpg";
	} else if (h.src.match("images/horror.jpg")){
		h.src = "images/mouthful.jpg";
	} else {
		//do nothing
	}
}

function nextImage8(el){
	if (i.src.match("images/12.jpg")){
		i.src = "images/isgod.jpg";
	} else if (i.src.match("images/isgod.jpg")){
		i.src = "images/friendly.jpg";
	} else if (i.src.match("images/friendly.jpg")){
		i.src = "images/back.jpg";
	} else if (i.src.match("images/back.jpg")){
		i.src = "images/horror.jpg";
	} else if (i.src.match("images/horror.jpg")){
		i.src = "images/12.jpg";
	} else {
		//do nothing
	}
}

function nextImage9(el){
	if (j.src.match("images/isgod.jpg")){
		j.src = "images/friendly.jpg";
	} else if (j.src.match("images/friendly.jpg")){
		j.src = "images/back.jpg";
	} else if (j.src.match("images/back.jpg")){
		j.src = "images/12.jpg";
	} else if (j.src.match("images/12.jpg")){
		j.src = "images/horror.jpg";
	} else if (j.src.match("images/horror.jpg")){
		j.src = "images/isgod.jpg";
	} else {
		//do nothing
	}
}

function nextImage10(el){
	if (k.src.match("images/friendly.jpg")){
		k.src = "images/back.jpg";
	} else if (k.src.match("images/back.jpg")){
		k.src = "images/12.jpg";
	} else if (k.src.match("images/12.jpg")){
		k.src = "images/isgod.jpg";
	} else if (k.src.match("images/isgod.jpg")){
		k.src = "images/horror.jpg";
	} else if (k.src.match("images/horror.jpg")){
		k.src = "images/friendly.jpg";
	} else {
		//do nothing
	}
}

function nextImage11(el){
	if (l.src.match("images/back.jpg")){
		l.src = "images/12.jpg";
	} else if (l.src.match("images/12.jpg")){
		l.src = "images/isgod.jpg";
	} else if (l.src.match("images/isgod.jpg")){
		l.src = "images/friendly.jpg";
	} else if (l.src.match("images/friendly.jpg")){
		l.src = "images/horror.jpg";
	} else if (l.src.match("images/horror.jpg")){
		l.src = "images/back.jpg";
	} else {
		//do nothing
	}
}

function nextImage12(el){
	if (m.src.match("images/all.jpg")){
		m.src = "images/mim.jpg";
	} else if (m.src.match("images/mim.jpg")){
		m.src = "images/hands.jpg";
	} else if (m.src.match("images/hands.jpg")){
		m.src = "images/mime.jpg";
	} else if (m.src.match("images/mime.jpg")){
		m.src = "images/horror.jpg";
	} else if (m.src.match("images/horror.jpg")){
		m.src = "images/all.jpg";
	} else {
		//do nothing
	}
}

function nextImage13(el){
	if (n.src.match("images/mim.jpg")){
		n.src = "images/hands.jpg";
	} else if (n.src.match("images/hands.jpg")){
		n.src = "images/mime.jpg";
	} else if (n.src.match("images/mime.jpg")){
		n.src = "images/all.jpg";
	} else if (n.src.match("images/all.jpg")){
		n.src = "images/horror.jpg";
	} else if (n.src.match("images/horror.jpg")){
		n.src = "images/mim.jpg";
	} else {
		//do nothing
	}
}

function nextImage14(el){
	if (o.src.match("images/hands.jpg")){
		o.src = "images/mime.jpg";
	} else if (o.src.match("images/mime.jpg")){
		o.src = "images/all.jpg";
	} else if (o.src.match("images/all.jpg")){
		o.src = "images/mim.jpg";
	} else if (o.src.match("images/mim.jpg")){
		o.src = "images/horror.jpg";
	} else if (o.src.match("images/horror.jpg")){
		o.src = "images/hands.jpg";
	} else {
		//do nothing
	}
}

function nextImage15(el){
	if (p.src.match("images/mime.jpg")){
		p.src = "images/all.jpg";
	} else if (p.src.match("images/all.jpg")){
		p.src = "images/mim.jpg";
	} else if (p.src.match("images/mim.jpg")){
		p.src = "images/hands.jpg";
	} else if (p.src.match("images/hands.jpg")){
		p.src = "images/horror.jpg";
	} else if (p.src.match("images/horror.jpg")){
		p.src = "images/mime.jpg";
	} else {
		//do nothing
	}
}

function  checkConfiguration(el){
	if(a.src.match("images/horror.jpg") && b.src.match("images/horror.jpg") && c.src.match("images/horror.jpg") && d.src.match("images/horror.jpg") && e.src.match("images/horror.jpg") && f.src.match("images/horror.jpg")&& g.src.match("images/horror.jpg")&& h.src.match("images/horror.jpg")&& i.src.match("images/horror.jpg")&& j.src.match("images/horror.jpg")&& k.src.match("images/horror.jpg")&& l.src.match("images/horror.jpg")&& m.src.match("images/horror.jpg")&& n.src.match("images/horror.jpg")&& o.src.match("images/horror.jpg")&& p.src.match("images/horror.jpg")){
		document.getElementById("you-died").play();
	} else {}
}