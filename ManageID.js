"use strict";

function ManageID() {
	this._id = 0;
}
ManageID.prototype.getID = function() {
	return this._id++;
}
