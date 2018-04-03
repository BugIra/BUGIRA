"use strict";

function TVView( device, rootElement ) {
	this._device = device;
    this._rootElement = rootElement;
    this._TVRemote = document.createElement("div");
	this._TVRemote.className = "remote";
	this._TVRemote.id = "r_" + this._device.getID();
	this._channel = document.createElement("div");
	this._channel.className = "txt";	
	this._volume = document.createElement("div");
	this._volume.className = "txt";
}
TVView.prototype.channelChange = function() {
	this._channel.innerText = `Channel: ${this._device.getCurrentChannel()}`;
}  
TVView.prototype.volumeChange = function() {
	this._volume.innerText = `Volume: ${this._device.getCurrentVolume()}`;
}  
TVView.prototype.render = function() {
	var TV = document.createElement( "a" );
	TV.id = this._device.getID();
	TV.className = "showPic";
	TV.href = "#";
	TV.addEventListener( "click", () => {
        this._TVRemote.style.display = "block";
	});
	
    var picture = document.createElement("img");
    picture.src = "images/tv.png";
	TV.appendChild( picture );
	this._rootElement.appendChild(TV);
	
	var showId = document.createElement( "label" );
	showId.className = "showId";
	showId.innerText = `id = ${this._device.getID()}`;
	TV.appendChild( showId );
    	
	var model = document.createElement("div");
	model.className = "txt";
    model.innerText = `Model: ${this._device.getModel()}`;
      
    var TVPowBtn = document.createElement( "button" );
	TVPowBtn.className = "powBtn";
	TVPowBtn.innerHTML = "ON";
	TVPowBtn.addEventListener( "click", () => {
		this._device.pushOnOff();
        if( this._device.getOn() ) {
			TVPowBtn.style.background = "#66cc33";
			incChBtn.disabled = false;
			decChBtn.disabled = false;
			incVolBtn.disabled = false;
			decVolBtn.disabled = false;
		} else {
			TVPowBtn.style.background = "";
			incChBtn.disabled = true;
			decChBtn.disabled = true;
			incVolBtn.disabled = true;
			decVolBtn.disabled = true;
		}
    });
      
    var incChBtn = document.createElement("button");
    incChBtn.type = "button";
    incChBtn.innerHTML = "+";
    incChBtn.className = "incBtn";
	incChBtn.disabled = true;	
    incChBtn.addEventListener("click", () => {
        this._device.nextChannel();
        this.channelChange();
    });
	
	var decChBtn = document.createElement("button");
    decChBtn.type = "button";
    decChBtn.innerHTML = "-";
    decChBtn.className = "decBtn";
	decChBtn.disabled = true;
    decChBtn.addEventListener("click", () => {
        this._device.previousChannel();
        this.channelChange();
    });
	
	var incVolBtn = document.createElement("button");
    incVolBtn.type = "button";
    incVolBtn.innerHTML = "+";
    incVolBtn.className = "incBtn";
	incVolBtn.disabled = true;
    incVolBtn.addEventListener("click", () => {
        this._device.increaseVolume();
        this.volumeChange();
    });
	
	var decVolBtn = document.createElement("button");
    decVolBtn.type = "button";
    decVolBtn.innerHTML = "-";
    decVolBtn.className = "decBtn";
	decVolBtn.disabled = true;
    decVolBtn.addEventListener("click", () => {
        this._device.decreaseVolume();
        this.volumeChange();
    });
	
	var closeBtn = document.createElement( "button" );
	closeBtn.className = "closeBtn";
	closeBtn.innerHTML = "x";
	closeBtn.addEventListener( "click", () => {
        this._TVRemote.style.display = "none";
	});

	this.channelChange();
	this.volumeChange();
    manage.appendChild(this._TVRemote);
	this._TVRemote.appendChild(model);
    this._TVRemote.appendChild(this._channel);
	this._TVRemote.appendChild(incChBtn);
	this._TVRemote.appendChild(decChBtn);
	this._TVRemote.appendChild(this._volume);
    this._TVRemote.appendChild(incVolBtn);
	this._TVRemote.appendChild(decVolBtn);
    this._TVRemote.appendChild(TVPowBtn);
	this._TVRemote.appendChild(closeBtn);	
}