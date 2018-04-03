"use strict";

function WasherView( device, rootElement ) {
	this._device = device;
    this._rootElement = rootElement;
    this._remote = document.createElement("div");
	this._remote.className = "remoteW";
	this._remote.id = "r_" + this._device.getID();
	this._regime = document.createElement("div");		
}
WasherView.prototype.regChange = function() {
	this._regime.innerText = `Regime: ${this._device.getRegime()}
	                          Time: ${this._device.getTime()}
							  Spin: ${this._device.getSpin()}
							  Temp: ${this._device.getTemperature()}`;
}  
WasherView.prototype.timer = function() {
	var intId = setInterval( () => {
		var t = this._device.getTime();
		console.log( t );
		if( typeof t != "number" ){
			clearInterval( intId );
		} else if( --t > 0 ) {
			this._device.setTime( t );
		} else {
			this._device.setTime( "ended" );
		}
		this.regChange();
		console.log( t );
	}, 5000 );
}
WasherView.prototype.render = function() {
	var washer = document.createElement( "a" );
	washer.id = this._device.getID();
	washer.className = "showPic";
	washer.href = "#";
	washer.addEventListener( "click", () => {
        this._remote.style.display = "block";
	});
	
    var picture = document.createElement("img");
    picture.src = "images/washer.png";
	washer.appendChild( picture );
	this._rootElement.appendChild(washer);
		
	var showId = document.createElement( "label" );
	showId.className = "showId";
	showId.innerText = `id = ${this._device.getID()}`;
	washer.appendChild( showId );
    	
	var model = document.createElement("div");
	model.className = "txt";
    model.innerText = `Model: ${this._device.getModel()}`;	
	
	var changeRadio = function( arr ) {
		for (var i = 0; i < arr.length; i++) {
			var ch = 0;
			if( arr[i].checked ) {
				arr[i].checked = false;				
				if( i == (arr.length - 1) ) {
					ch = arr[0];											
				} else {
					ch = arr[i + 1];					
				}
				ch.checked = true;
				break;
			}
		}
		return ch;
	}
	
	var powBtn = document.createElement( "button" );
	powBtn.className = "powBtn";
	powBtn.innerHTML = "ON";
	powBtn.addEventListener( "click", () => {
        this._device.pushOnOff();
        if( this._device.getOn() ) {
			this._device.setRegime( "Baby" );
			this.regChange();
			powBtn.style.background = "#66cc33";
			startBtn.disabled = false;
			tempBtn.disabled = false;
			spinBtn.disabled = false;
			regBtn.disabled = false;
		} else {
			powBtn.style.background = "";
			startBtn.disabled = true;
			tempBtn.disabled = true;
			spinBtn.disabled = true;
			regBtn.disabled = true;		
			this._device.setTime( 0 );
		}
    });
	
	var startBtn = document.createElement( "button" );
	startBtn.className = "powBtn";
	startBtn.innerHTML = ">";
	startBtn.disabled = true;
	startBtn.addEventListener( "click", () => {
        this._device.pushPause();
		if( !this._device.getStart() ) {
			this._device.setMemory( this._device.getTime() );
			this._device.setTime( "pause" );
			startBtn.innerHTML = "||";
			startBtn.style.background = "#666666";
			tempBtn.disabled = false;
			spinBtn.disabled = false;
			regBtn.disabled = false;
		} else {
			this._device.setTime( this._device.getMemory() );
			startBtn.innerHTML = ">";
			startBtn.style.background = "#66cc33";
			tempBtn.disabled = true;
			spinBtn.disabled = true;
			regBtn.disabled = true;
			this.timer();
		}			
    });
    
	var tempPos = document.createElement( "div" );
	tempPos.className = "changeV";
	
	var labelTemp1 = document.createElement( "label" );
	labelTemp1.className = "label";
	labelTemp1.innerHTML = "0";
	
	var radioTemp1 = document.createElement( "input" );
	radioTemp1.type = "radio";
	radioTemp1.name = "tempGr";
	radioTemp1.value = "0";
	radioTemp1.disabled = true;
	radioTemp1.checked = true;
	labelTemp1.appendChild( radioTemp1 );
	
	var labelTemp2 = document.createElement( "label" );
	labelTemp2.className = "label";
	labelTemp2.innerHTML = "30";
	
	var radioTemp2 = document.createElement( "input" );
	radioTemp2.type = "radio";
	radioTemp2.name = "tempGr";
	radioTemp2.value = "30";
	radioTemp2.disabled = true;
	labelTemp2.appendChild( radioTemp2 );
	
	var labelTemp3 = document.createElement( "label" );
	labelTemp3.className = "label";
	labelTemp3.innerHTML = "40";
	
	var radioTemp3 = document.createElement( "input" );
	radioTemp3.type = "radio";
	radioTemp3.name = "tempGr";
	radioTemp3.value = "40";
	radioTemp3.disabled = true;
	labelTemp3.appendChild( radioTemp3 );
	
	var labelTemp4 = document.createElement( "label" );
	labelTemp4.className = "label";
	labelTemp4.innerHTML = "60";
	
	var radioTemp4 = document.createElement( "input" );
	radioTemp4.type = "radio";
	radioTemp4.name = "tempGr";
	radioTemp4.value = "60";
	radioTemp4.disabled = true;
	labelTemp4.appendChild( radioTemp4 );
	
	var labelTemp5 = document.createElement( "label" );
	labelTemp5.className = "label";
	labelTemp5.innerHTML = "90";
	
	var radioTemp5 = document.createElement( "input" );
	radioTemp5.type = "radio";
	radioTemp5.name = "tempGr";
	radioTemp5.value = "90";
	radioTemp5.disabled = true;
	labelTemp5.appendChild( radioTemp5 );
	
    var tempBtn = document.createElement("button");
    tempBtn.type = "button";
    tempBtn.innerHTML = "temp";
    tempBtn.className = "incBtn";
	tempBtn.disabled = true;
	tempBtn.addEventListener("click", () => {
		var rad = document.getElementsByName( "tempGr" );
		var ch = changeRadio( rad );
		this._device.setTemperature( ch.value );
		this.regChange();
	});
		
	tempPos.appendChild( labelTemp1 );
	tempPos.appendChild( labelTemp2 );
	tempPos.appendChild( labelTemp3 );
	tempPos.appendChild( labelTemp4 );
	tempPos.appendChild( labelTemp5 );
	tempPos.appendChild( tempBtn );
	
	var spinPos = document.createElement( "p" );
	spinPos.className = "changeV";
	
	var labelSpin1 = document.createElement( "label" );
	labelSpin1.className = "label";
	labelSpin1.innerHTML = "0";
	
	var radioSpin1 = document.createElement( "input" );
	radioSpin1.type = "radio";
	radioSpin1.name = "spinGr";
	radioSpin1.value = "0";
	radioSpin1.checked = true;
	radioSpin1.disabled = true;
	labelSpin1.appendChild( radioSpin1 );
	
	var labelSpin2 = document.createElement( "label" );
	labelSpin2.className = "label";
	labelSpin2.innerHTML = "600";
	
	var radioSpin2 = document.createElement( "input" );
	radioSpin2.type = "radio";
	radioSpin2.name = "spinGr";
	radioSpin2.value = "600";
	radioSpin2.disabled = true;
	labelSpin2.appendChild( radioSpin2 );
	
	var labelSpin3 = document.createElement( "label" );
	labelSpin3.className = "label";
	labelSpin3.innerHTML = "800";
	
	var radioSpin3 = document.createElement( "input" );
	radioSpin3.type = "radio";
	radioSpin3.name = "spinGr";
	radioSpin3.value = "800";
	radioSpin3.disabled = true;
	labelSpin3.appendChild( radioSpin3 );

	var labelSpin4 = document.createElement( "label" );
	labelSpin4.className = "label";
	labelSpin4.innerHTML = "1000";
	
	var radioSpin4 = document.createElement( "input" );
	radioSpin4.type = "radio";
	radioSpin4.name = "spinGr";
	radioSpin4.value = "1000";
	radioSpin4.disabled = true;
	labelSpin4.appendChild( radioSpin4 );
	
	var labelSpin5 = document.createElement( "label" );
	labelSpin5.className = "label";
	labelSpin5.innerHTML = "1200";
	
	var radioSpin5 = document.createElement( "input" );
	radioSpin5.type = "radio";
	radioSpin5.name = "spinGr";
	radioSpin5.value = "1200";	
	radioSpin5.disabled = true;
	labelSpin5.appendChild( radioSpin5 );
	
	var spinBtn = document.createElement("button");
    spinBtn.type = "button";
    spinBtn.innerHTML = "spin";
    spinBtn.className = "decBtn";
	spinBtn.disabled = true;
    spinBtn.addEventListener("click", () => {
		var rad = document.getElementsByName( "spinGr" );
		var ch = changeRadio( rad );
		this._device.setSpin( ch.value );
		this.regChange();
	});
	
	spinPos.appendChild( labelSpin1 );
	spinPos.appendChild( labelSpin2 );
	spinPos.appendChild( labelSpin3 );
	spinPos.appendChild( labelSpin4 );
	spinPos.appendChild( labelSpin5 );
	spinPos.appendChild( spinBtn );
	
	var regPos = document.createElement( "p" );
	regPos.className = "changeV";
	
	var labelReg1 = document.createElement( "label" );
	labelReg1.className = "label";
	labelReg1.innerHTML = "baby";
	
	var radioReg1 = document.createElement( "input" );
	radioReg1.type = "radio";
	radioReg1.name = "regGr";
	radioReg1.disabled = true;
	radioReg1.value = "Baby";
	radioReg1.checked = true;
	labelReg1.appendChild( radioReg1 );
		
	var labelReg2 = document.createElement( "label" );
	labelReg2.className = "label";
	labelReg2.innerHTML = "wool";
	
	var radioReg2 = document.createElement( "input" );
	radioReg2.type = "radio";
	radioReg2.name = "regGr";
	radioReg2.disabled = true;
	radioReg2.value = "Wool";
	labelReg2.appendChild( radioReg2 );
	
	var labelReg3 = document.createElement( "label" );
	labelReg3.className = "label";
	labelReg3.innerHTML = "cotton";
	
	var radioReg3 = document.createElement( "input" );
	radioReg3.type = "radio";
	radioReg3.name = "regGr";
	radioReg3.disabled = true;
	radioReg3.value = "Cotton";
	labelReg3.appendChild( radioReg3 );
	
	var labelReg4 = document.createElement( "label" );
	labelReg4.className = "label";
	labelReg4.innerHTML = "quick";
	
	var radioReg4 = document.createElement( "input" );
	radioReg4.type = "radio";
	radioReg4.name = "regGr";
	radioReg4.disabled = true;
	radioReg4.value = "Quick";
	labelReg4.appendChild( radioReg4 );
	
	var labelReg5 = document.createElement( "label" );
	labelReg5.className = "label";
	labelReg5.innerHTML = "delicate";
	
	var radioReg5 = document.createElement( "input" );
	radioReg5.type = "radio";
	radioReg5.name = "regGr";
	radioReg5.disabled = true;
	radioReg5.value = "Delicate";
	labelReg5.appendChild( radioReg5 );
	
	var regBtn = document.createElement("button");
    regBtn.type = "button";
    regBtn.innerHTML = "regime";
    regBtn.className = "incBtn";
	regBtn.disabled = true;
    regBtn.addEventListener("click", () => {
		var rad = document.getElementsByName( "regGr" );
		var ch = changeRadio( rad );
		this._device.setRegime( ch.value );
		this.regChange();
	});
	
	regPos.appendChild( labelReg1 );
	regPos.appendChild( labelReg2 );
	regPos.appendChild( labelReg3 );
	regPos.appendChild( labelReg4 );
	regPos.appendChild( labelReg5 );
	regPos.appendChild( regBtn );
	
	var closeBtn = document.createElement( "button" );
	closeBtn.className = "closeBtn";
	closeBtn.innerHTML = "x";
	closeBtn.addEventListener( "click", () => {
        this._remote.style.display = "none";
	});

	this.regChange();
	manage.appendChild(this._remote);
	this._remote.appendChild(model);
    this._remote.appendChild(this._regime);
	this._remote.appendChild(tempPos);
	this._remote.appendChild(spinPos);	
    this._remote.appendChild(regPos);
    this._remote.appendChild(powBtn);
	this._remote.appendChild(startBtn);
	this._remote.appendChild(closeBtn);	
}