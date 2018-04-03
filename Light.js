"use strict";

function Light( model, someLocation ) {
	Device.call( this, model, someLocation );
	this._currentBright = 50;
	this._memoryBright = 0;
	this.MAX_BRIGHT = 100;
	this.MIN_BRIGHT = 0;
}
Light.prototype = Object.create( Device.prototype );
Light.prototype.constructor = Light;
Light.prototype.getCurrentBright = function() {
	return this._currentBright;
}
Light.prototype.increaseBright = function() {
	if( this._currentBright < this.MAX_BRIGHT ) {
		this._currentBright++;
	}
}
Light.prototype.decreaseBright = function() {
	if( this._currentBright > this.MIN_BRIGHT ) {
		this._currentBright--;
	}
}
Light.prototype.lightOnOff = function() {
	if( this._currentBright != 0 ) {
		this._memoryBright = this._currentBright;
		this._currentBright = 0;
	} else {
		this._currentBright = this._memoryBright;		
	}	
}