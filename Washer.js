"use strict";

function Washer( model, someLocation ) {
	Device.call( this, model, someLocation );
	this._start = false;
	this._temperature = 40;
	this._time = 0;
	this._spin = 0;
	this._regime = "";
	this._memory = 0;
}
Washer.prototype = Object.create( Device.prototype );
Washer.prototype.constructor = Washer;
Washer.prototype.getStart = function() {
	return this._start;
}
Washer.prototype.getTemperature = function() {
	return this._temperature;
}
Washer.prototype.setTemperature = function( temp ) {
	this._temperature = temp;
}
Washer.prototype.getTime = function() {
	return this._time;
}
Washer.prototype.setTime = function( time ) {
	this._time = time;
}
Washer.prototype.getSpin = function() {
	return this._spin;
}
Washer.prototype.setSpin = function( spin ) {
	this._spin = spin;
}
Washer.prototype.getRegime = function() {
	return this._regime;
}
Washer.prototype.getMemory = function() {
	return this._memory;
}
Washer.prototype.setMemory = function( time ) {
	this._memory = time;
}
Washer.prototype.setRegime = function( regime ) {
	switch( regime ) {
		case "Baby":
			this._regime = "baby";
			this._temperature = 40;
			this._time = 120;
			this._spin = 600;
			this._memory = 120;
			break;
		case "Cotton":
			this._regime = "cotton";
			this._temperature = 90;
			this._time = 100;
			this._spin = 800;
			this._memory = 100;
			break;
		case "Wool":
			this._regime = "wool";
			this._temperature = 30;
			this._time = 60;
			this._spin = 600;
			this._memory = 60;
			break;
		case "Delicate":
			this._regime = "delicate";
			this._temperature = 30;
			this._time = 50;
			this._spin = 400;
			this._memory = 50;
			break;
		case "Quick":
			this._regime = "quick";
			this._temperature = 40;
			this._time = 45;
			this._spin = 800;
			this._memory = 45;
			break;
	}
}
Washer.prototype.pushPause = function() {
	if( this._start == false ) {
		this._start = true;
	} else {
		this._start = false;
	}
}