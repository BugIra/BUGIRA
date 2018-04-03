"use strict";

var newID = new ManageID;
function Device( model, someLocation ) {	
	this._id = newID.getID();
	this._model = model;
	this._location = someLocation;
	this._on = false;
}
Device.prototype.getOn = function() {
	return this._on;
}
Device.prototype.pushOnOff = function() {
	if( this._on ) {
		this._on = false;
	} else {
		this._on = true;
	}
}
Device.prototype.getLocation = function() {
	return this._location;
}
Device.prototype.setLocation = function( someLocation ) {
	this._location = someLocation;
}
Device.prototype.getID = function() {
	return this._id;
}
Device.prototype.getModel = function() {
	return this._model;
}