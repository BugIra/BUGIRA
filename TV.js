"use strict";

function TV( model, someLocation ) {
	Device.call( this, model, someLocation );
	this._currentChanel = 0;
	this._currentVolume = 20;
	this.MIN_CHANNEL = 0;
	this.MAX_CHANNEL = 99;
	this.MIN_VOLUME = 0;
	this.MAX_VOLUME = 100;
	this._timer = 0;
	
}
TV.prototype = Object.create( Device.prototype );
TV.prototype.constructor = TV;
TV.prototype.getModel = function() {
	return this._model;
}
TV.prototype.getCurrentChannel = function() {
	return this._currentChanel;
}
TV.prototype.getCurrentVolume = function() {
	return this._currentVolume;
}
TV.prototype.nextChannel = function() {
	if( this._currentChanel == this.MAX_CHANNEL ) {
		this._currentChanel = this.MIN_CHANNEL;
	} else {
		this._currentChanel++;
	}
}
TV.prototype.previousChannel = function() {
	if( this._currentChanel == this.MIN_CHANNEL ) {
		this._currentChanel = this.MAX_CHANNEL;
	} else {
		this._currentChanel--;
	}
}
TV.prototype.increaseVolume = function() {
	if( this._currentVolume < this.MAX_VOLUME ) {
		this._currentVolume++;
	}
}
TV.prototype.decreaseVolume = function() {
	if( this._currentVolume > this.MIN_VOLUME ) {
		this._currentVolume--;
	}
}
TV.prototype.timerOn = function( time ) {
	this._timer = time * 60000;
	setTimeout( this.pushOff(), this._timer);
}