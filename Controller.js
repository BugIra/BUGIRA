"use strict";

var elem1 = document.getElementById( "TV_bedroom" );
elem1.addEventListener( "click", function() {
	var t = new TV( elem1.nextSibling.value, "bedroom" );
	sh.addDevice( t );
	elem1.nextSibling.value = "";
	var v = new TVView( t, document.getElementById("bedroom"));
	v.render();
});

var elem2 = document.getElementById( "Washer_bedroom" );
elem2.addEventListener( "click", function() {
	var w = new Washer( elem2.nextSibling.value, "bedroom" );
	sh.addDevice( w );
	elem2.nextSibling.value = "";
	var v = new WasherView( w, document.getElementById("bedroom"));
	v.render();
});

var elem3 = document.getElementById( "Light_bedroom" );
elem3.addEventListener( "click", function() {
	var l = new Light( elem3.nextSibling.value, "bedroom" );
	sh.addDevice( l );
	elem3.nextSibling.value = "";
	var v = new LightView( l, document.getElementById("bedroom"));
	v.render();
});

var elem4 = document.getElementById( "TV_balcony" );
elem4.addEventListener( "click", function() {
	var t = new TV( elem4.nextSibling.value, "balcony" );
	sh.addDevice( t );
	elem4.nextSibling.value = "";
	var v = new TVView( t, document.getElementById("balcony"));
	v.render();
});

var elem5 = document.getElementById( "Washer_balcony" );
elem5.addEventListener( "click", function() {
	var w = new Washer( elem5.nextSibling.value, "balcony" );
	sh.addDevice( w );
	elem5.nextSibling.value = "";
	var v = new WasherView( w, document.getElementById("balcony"));
	v.render();
});

var elem6 = document.getElementById( "Light_balcony" );
elem6.addEventListener( "click", function() {
	var l = new Light( elem6.nextSibling.value, "balcony" );
	sh.addDevice( l );
	elem6.nextSibling.value = "";
	var v = new LightView( l, document.getElementById("balcony"));
	v.render();
});

var elem7 = document.getElementById( "TV_hall" );
elem7.addEventListener( "click", function() {
	var t = new TV( elem7.nextSibling.value, "hall" );
	sh.addDevice( t );
	elem7.nextSibling.value = "";
	var v = new TVView( t, document.getElementById("hall"));
	v.render();
});

var elem8 = document.getElementById( "Washer_hall" );
elem8.addEventListener( "click", function() {
	var w = new Washer( elem8.nextSibling.value, "hall" );
	sh.addDevice( w );
	elem8.nextSibling.value = "";
	var v = new WasherView( w, document.getElementById("hall"));
	v.render();
});

var elem9 = document.getElementById( "Light_hall" );
elem9.addEventListener( "click", function() {
	var l = new Light( elem9.nextSibling.value, "hall" );
	sh.addDevice( l );
	elem9.nextSibling.value = "";
	var v = new LightView( l, document.getElementById("hall"));
	v.render();
});

var elem10 = document.getElementById( "TV_bathroom" );
elem10.addEventListener( "click", function() {
	var t = new TV( elem10.nextSibling.value, "bathroom" );
	sh.addDevice( t );
	elem10.nextSibling.value = "";
	var v = new TVView( t, document.getElementById("bathroom"));
	v.render();
});

var elem11 = document.getElementById( "Washer_bathroom" );
elem11.addEventListener( "click", function() {
	var w = new Washer( elem11.nextSibling.value, "bathroom" );
	sh.addDevice( w );
	elem11.nextSibling.value = "";
	var v = new WasherView( w, document.getElementById("bathroom"));
	v.render();
});

var elem12 = document.getElementById( "Light_bathroom" );
elem12.addEventListener( "click", function() {
	var l = new Light( elem12.nextSibling.value, "bathroom" );
	sh.addDevice( l );
	elem12.nextSibling.value = "";
	var v = new LightView( l, document.getElementById("bathroom"));
	v.render();
});

var elem13 = document.getElementById( "TV_diningroom" );
elem13.addEventListener( "click", function() {
	var t = new TV( elem13.nextSibling.value, "diningroom" );
	sh.addDevice( t );
	elem13.nextSibling.value = "";
	var v = new TVView( t, document.getElementById("diningroom"));
	v.render();
});

var elem14 = document.getElementById( "Washer_diningroom" );
elem14.addEventListener( "click", function() {
	var w = new Washer( elem14.nextSibling.value, "diningroom" );
	sh.addDevice( w );
	elem14.nextSibling.value = "";
	var v = new WasherView( w, document.getElementById("diningroom"));
	v.render();
});

var elem15 = document.getElementById( "Light_diningroom" );
elem15.addEventListener( "click", function() {
	var l = new Light( elem15.nextSibling.value, "diningroom" );
	sh.addDevice( l );
	elem15.nextSibling.value = "";
	var v = new LightView( l, document.getElementById("diningroom"));
	v.render();
});

var elem16 = document.getElementById( "a_chId" );
elem16.addEventListener( "click", function() {
	var id = sh.deleteDeviceByID( parseInt(elem16.nextSibling.value) );
	deleteView( id );
	elem16.nextSibling.value = "";
	
});
var elem17 = document.getElementById( "a_TV" );
elem17.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByGroup( "TV" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem18 = document.getElementById( "a_Washer" );
elem18.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByGroup( "Washer" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem19 = document.getElementById( "a_Light" );
elem19.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByGroup( "Light" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem20 = document.getElementById( "a_bedroom" );
elem20.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByLocation( "bedroom" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem21 = document.getElementById( "a_balcony" );
elem21.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByLocation( "balcony" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem22 = document.getElementById( "a_diningroom" );
elem22.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByLocation( "diningroom" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem23 = document.getElementById( "a_hall" );
elem23.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByLocation( "hall" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem24 = document.getElementById( "a_bathroom" );
elem24.addEventListener( "click", function() {
	var ids = sh.deleteDevicesByLocation( "bathroom" );
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var elem25 = document.getElementById( "a_chAll" );
elem25.addEventListener( "click", function() {
	var ids = sh.deleteAllDevices();
	for(var i in ids) {
		deleteView( ids[i] );
	}	
});
var deleteView = function( id ) {
	var e = document.getElementById( id );
	var r_e = document.getElementById("r_" + id );
	e.parentNode.removeChild( e );
	r_e.parentNode.removeChild( r_e );
}