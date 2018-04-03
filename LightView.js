"use strict";

function LightView( device, rootElement ) {
	this._device = device;
    this._rootElement = rootElement;
	this._bright = document.createElement( "div" );
	this._bright.className = "txt";
	this._LRemote = document.createElement( "div" );
	this._LRemote.className = "remote";
	this._LRemote.id = "r_" + this._device.getID();
}
LightView.prototype.brightChange = function() {
	this._bright.innerText = `Bright: ${this._device.getCurrentBright()}`;
}
LightView.prototype.render = function() {	    	
	var light = document.createElement( "a" );
	light.id = this._device.getID();
	light.className = "showPic";
	light.href = "#";
	light.addEventListener( "click", () => {
        this._LRemote.style.display = "block";
	});
	
    var picture = document.createElement("img");
    picture.src = "images/light.png";
	light.appendChild( picture );
	
	var showId = document.createElement( "label" );
	showId.className = "showId";
	showId.innerText = `id = ${this._device.getID()}`;
	light.appendChild( showId );
		
	this._rootElement.appendChild( light );
	
	var model = document.createElement("div");
	model.className = "txt";
    model.innerText = `Model: ${this._device.getModel()}`;
	
	var incBr = document.createElement( "button" );
	incBr.className = "incBtn";
	incBr.innerHTML = "+";
	incBr.disabled = true;
	incBr.addEventListener("click", () => {
        this._device.increaseBright();
        this.brightChange();
	});
	
	var decBr = document.createElement( "button" );
	decBr.className = "decBtn";
	decBr.innerHTML = "-";
	decBr.disabled = true;
	decBr.addEventListener( "click", () => {
        this._device.decreaseBright();
        this.brightChange();
	});	
	
	var LPowBtn = document.createElement( "button" );
	LPowBtn.className = "powBtn";
	LPowBtn.innerHTML = "ON";
	LPowBtn.addEventListener( "click", () => {
		this._device.pushOnOff();		
        if( this._device.getOn() ) {
			LPowBtn.style.background = "#66cc33";
			incBr.disabled = false;
			decBr.disabled = false;
		} else {
			LPowBtn.style.background = "";
			incBr.disabled = true;
			decBr.disabled = true;
		}
	});

	var closeBtn = document.createElement( "button" );
	closeBtn.className = "closeBtn";
	closeBtn.innerHTML = "x";
	closeBtn.addEventListener( "click", () => {
        this._LRemote.style.display = "none";
	});	
	
	this.brightChange();
	this._LRemote.appendChild( model );
	this._LRemote.appendChild( this._bright );
	this._LRemote.appendChild( incBr );
	this._LRemote.appendChild( decBr );
	this._LRemote.appendChild( LPowBtn );
	this._LRemote.appendChild( closeBtn );
	manage.appendChild( this._LRemote );
}