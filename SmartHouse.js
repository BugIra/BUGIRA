"use strict";

function SmartHouse( owner ) {
	this._owner = owner;
	this._devices = new Set();
}
SmartHouse.prototype.addDevice = function( device ) {
	
		this._devices.add( device );
	
}
SmartHouse.prototype.deleteDeviceByID = function( id ) {
	for ( var device of this._devices ) {
		if ( device.getID() == id ) {
			this._devices.delete( device );
			return device.getID();
		}
	}
}
SmartHouse.prototype.deleteDevicesByGroup = function( groupName ) {
	var arr = [];
	for ( var device of this._devices ) {
		if ( device.constructor.name === groupName ) {
			arr.push(device.getID());
			this._devices.delete( device );
		}
	}
	return arr;
}
SmartHouse.prototype.deleteDevicesByLocation = function( loc ) {
	var arr = [];
	for ( var device of this._devices ) {
		if ( device.getLocation() === loc ) {
			this._devices.delete( device );
			arr.push(device.getID());
		}
	}
	return arr;
}
SmartHouse.prototype.deleteAllDevices = function() {
	var arr = [];
	for ( var device of this._devices ) {
		arr.push(device.getID());
		this._devices.delete( device );
	}
	return arr;
}
var sh = new SmartHouse( "me" );
