"use strict";

function SmartHouseView( smartHouse ) {
	this._smartHouse = smartHouse;
}
SmartHouseView.prototype.render = function() {
	var manage = document.createElement( "div" );
	manage.id = "manage";
	manage.innerHTML = "SmartHouse Manage";
//	
	var menu = document.createElement( "ul" );
	menu.id = "menu";
	menu.class = "menu";
	//	
	var addMenu = document.createElement( "li" );
	addMenu.className = "mainMenu";
	addMenu.innerHTML = "Add device";
	
	var delMenu = document.createElement( "li" );
	delMenu.className = "mainMenu";
	delMenu.innerHTML = "Delete device";
		//
	var locList = document.createElement( "ul" );
	locList.className = "locations";	
	addMenu.appendChild( locList );
			//
	var chBR = document.createElement( "li" );
	chBR.className = "locList";
	chBR.innerHTML = "Bedroom";	
	locList.appendChild( chBR );
				//
	var devBR = document.createElement( "ul" );
	devBR.className = "devices";	
	chBR.appendChild( devBR );
					//
	var TVinBR = document.createElement( "li" );
	TVinBR.className = "devList";		
	devBR.appendChild( TVinBR );
	
	var a_TVinBR = document.createElement( "a" );
	a_TVinBR.id = "TV_bedroom";
	a_TVinBR.href = "#";
	a_TVinBR.innerHTML = "TV";
	TVinBR.appendChild( a_TVinBR );
	
	var modTV = document.createElement( "input" );
	modTV.placeholder = "input model";
	TVinBR.appendChild( modTV );
	
	var WinBR = document.createElement( "li" );
	WinBR.className = "devList";	
	devBR.appendChild( WinBR );
	
	var a_WinBR = document.createElement( "a" );
	a_WinBR.id = "Washer_bedroom";
	a_WinBR.href = "#";
	a_WinBR.innerHTML = "Washer";
	WinBR.appendChild( a_WinBR );
	
	var modW = document.createElement( "input" );
	modW.placeholder = "input model";
	WinBR.appendChild( modW );
	
	var LinBR = document.createElement( "li" );
	LinBR.className = "devList";	
	devBR.appendChild( LinBR );
	
	var a_LinBR = document.createElement( "a" );
	a_LinBR.id = "Light_bedroom";
	a_LinBR.href = "#";
	a_LinBR.innerHTML = "Light";
	LinBR.appendChild( a_LinBR );
	
	var modL = document.createElement( "input" );
	modL.placeholder = "input model";
	LinBR.appendChild( modL );
			//
	var chBal = document.createElement( "li" );
	chBal.className = "locList";
	chBal.innerHTML = "Balcony";	
	locList.appendChild( chBal );
				//
	var devBal = document.createElement( "ul" );
	devBal.className = "devices";
	chBal.appendChild( devBal );
					//
	var TVinBal = document.createElement( "li" );
	TVinBal.className = "devList";	
	devBal.appendChild( TVinBal );
	
	var a_TVinBal = document.createElement( "a" );
	a_TVinBal.id = "TV_balcony";
	a_TVinBal.href = "#";
	a_TVinBal.innerHTML = "TV";
	TVinBal.appendChild( a_TVinBal );
	
	var modTV1 = document.createElement( "input" );
	modTV1.placeholder = "input model";
	TVinBal.appendChild( modTV1 );
	
	var WinBal = document.createElement( "li" );
	WinBal.className = "devList";	
	devBal.appendChild( WinBal );
	
	var a_WinBal = document.createElement( "a" );
	a_WinBal.id = "Washer_balcony";
	a_WinBal.href = "#";
	a_WinBal.innerHTML = "Washer";
	WinBal.appendChild( a_WinBal );
	
	var modW1 = document.createElement( "input" );
	modW1.placeholder = "input model";
	WinBal.appendChild( modW1 );
	
	var LinBal = document.createElement( "li" );
	LinBal.className = "devList";	
	devBal.appendChild( LinBal );
	
	var a_LinBal = document.createElement( "a" );
	a_LinBal.id = "Light_balcony";
	a_LinBal.href = "#";
	a_LinBal.innerHTML = "Light";
	LinBal.appendChild( a_LinBal );
	
	var modL1 = document.createElement( "input" );
	modL1.placeholder = "input model";
	LinBal.appendChild( modL1 );
			//
	var chDin = document.createElement( "li" );
	chDin.className = "locList";
	chDin.innerHTML = "Dining room";	
	locList.appendChild( chDin );
				//
	var devDin = document.createElement( "ul" );
	devDin.className = "devices";
	chDin.appendChild( devDin );
					//
	var TVinDin = document.createElement( "li" );
	TVinDin.className = "devList";	
	devDin.appendChild( TVinDin );
	
	var a_TVinDin = document.createElement( "a" );
	a_TVinDin.id = "TV_diningroom";
	a_TVinDin.href = "#";
	a_TVinDin.innerHTML = "TV";
	TVinDin.appendChild( a_TVinDin );
	
	var modTV2 = document.createElement( "input" );
	modTV2.placeholder = "input model";
	TVinDin.appendChild( modTV2 );
	
	var WinDin = document.createElement( "li" );
	WinDin.className = "devList"	
	devDin.appendChild( WinDin );
	
	var a_WinDin = document.createElement( "a" );
	a_WinDin.id = "Washer_diningroom";
	a_WinDin.href = "#";
	a_WinDin.innerHTML = "Washer";
	WinDin.appendChild( a_WinDin );
	
	var modW2 = document.createElement( "input" );
	modW2.placeholder = "input model";
	WinDin.appendChild( modW2 );
	
	var LinDin = document.createElement( "li" );
	LinDin.className = "devList"	
	devDin.appendChild( LinDin );
	
	var a_LinDin = document.createElement( "a" );
	a_LinDin.id = "Light_diningroom";
	a_LinDin.href = "#";
	a_LinDin.innerHTML = "Light";
	LinDin.appendChild( a_LinDin );
	
	var modL2 = document.createElement( "input" );
	modL2.placeholder = "input model";
	LinDin.appendChild( modL2 );
			//
	var chBath = document.createElement( "li" );
	chBath.className = "locList";
	chBath.innerHTML = "Bathroom";	
	locList.appendChild( chBath );
				//
	var devBath = document.createElement( "ul" );
	devBath.className = "devices";
	chBath.appendChild( devBath );
					//
	var TVinBath = document.createElement( "li" );
	TVinBath.className = "devList"		
	devBath.appendChild( TVinBath );
	
	var a_TVinBath = document.createElement( "a" );
	a_TVinBath.id = "TV_bathroom";
	a_TVinBath.href = "#";
	a_TVinBath.innerHTML = "TV";
	TVinBath.appendChild( a_TVinBath );
	
	var modTV3 = document.createElement( "input" );
	modTV3.placeholder = "input model";
	TVinBath.appendChild( modTV3 );
	
	var WinBath = document.createElement( "li" );
	WinBath.className = "devList"	
	devBath.appendChild( WinBath );
	
	var a_WinBath = document.createElement( "a" );
	a_WinBath.id = "Washer_bathroom";
	a_WinBath.href = "#";
	a_WinBath.innerHTML = "Washer";
	WinBath.appendChild( a_WinBath );
	
	var modW3 = document.createElement( "input" );
	modW3.placeholder = "input model";
	WinBath.appendChild( modW3 );
	
	var LinBath = document.createElement( "li" );
	LinBath.className = "devList"
	devBath.appendChild( LinBath );
	
	var a_LinBath = document.createElement( "a" );
	a_LinBath.id = "Light_bathroom";
	a_LinBath.href = "#";
	a_LinBath.innerHTML = "Light";
	LinBath.appendChild( a_LinBath );
	
	var modL3 = document.createElement( "input" );
	modL3.placeholder = "input model";
	LinBath.appendChild( modL3 );
			//
	var chHall = document.createElement( "li" );
	chHall.className = "locList";
	chHall.innerHTML = "Hall";	
	locList.appendChild( chHall );
				//
	var devHall = document.createElement( "ul" );
	devHall.className = "devices";
	chHall.appendChild( devHall );
					//
	var TVinHall = document.createElement( "li" );
	TVinHall.className = "devList"		
	devHall.appendChild( TVinHall );
	
	var a_TVinHall = document.createElement( "a" );
	a_TVinHall.id = "TV_hall";
	a_TVinHall.href = "#";
	a_TVinHall.innerHTML = "TV";
	TVinHall.appendChild( a_TVinHall );
	
	var modTV4 = document.createElement( "input" );
	modTV4.placeholder = "input model";
	TVinHall.appendChild( modTV4 );
	
	var WinHall = document.createElement( "li" );
	WinHall.className = "devList"	
	devHall.appendChild( WinHall );
	
	var a_WinHall = document.createElement( "a" );
	a_WinHall.id = "Washer_hall";
	a_WinHall.href = "#";
	a_WinHall.innerHTML = "Washer";
	WinHall.appendChild( a_WinHall );
	
	var modW4 = document.createElement( "input" );
	modW4.placeholder = "input model";
	WinHall.appendChild( modW4 );
	
	var LinHall = document.createElement( "li" );
	LinHall.className = "devList"	
	devHall.appendChild( LinHall);
	
	var a_LinHall = document.createElement( "a" );
	a_LinHall.id = "Light_hall";
	a_LinHall.href = "#";
	a_LinHall.innerHTML = "Light";
	LinHall.appendChild( a_LinHall );
	
	var modL4 = document.createElement( "input" );
	modL4.placeholder = "input model";
	LinHall.appendChild( modL4 );
	
	var delList = document.createElement( "ul" );
	delList.className = "locations";	
	delMenu.appendChild( delList );
	
	var chId = document.createElement( "li" );
	chId.className = "locList";	
	delList.appendChild( chId );
	
	var a_chId = document.createElement( "a" );
	a_chId.id = "a_chId";
	a_chId.href = "#";
	a_chId.innerHTML = "by id";
	chId.appendChild( a_chId );
	
	var inID = document.createElement( "input" );
	inID.className = "inID";
	chId.appendChild( inID );
	
	var chGr = document.createElement( "li" );
	chGr.className = "locList";
	chGr.innerHTML = "by group";
	delList.appendChild( chGr );
		
	var groups = document.createElement( "ul" );
	groups.className = "devices";	
	chGr.appendChild( groups );
					//
	var tvGr = document.createElement( "li" );
	tvGr.className = "groupDel";	
	groups.appendChild( tvGr );
		
	var a_tvGr = document.createElement( "a" );
	a_tvGr.id = "a_TV";
	a_tvGr.href = "#";
	a_tvGr.innerHTML = "TVs";
	tvGr.appendChild( a_tvGr );
	
	var washGr = document.createElement( "li" );
	washGr.className = "groupDel";	
	groups.appendChild( washGr );
	
	var a_washGr = document.createElement( "a" );
	a_washGr.id = "a_Washer";
	a_washGr.href = "#";
	a_washGr.innerHTML = "Washers";
	washGr.appendChild( a_washGr );
	
	var lightGr = document.createElement( "li" );
	lightGr.className = "groupDel";	
	groups.appendChild( lightGr );
	
	var a_lightGr = document.createElement( "a" );
	a_lightGr.id = "a_Light";
	a_lightGr.href = "#";
	a_lightGr.innerHTML = "Lights";
	lightGr.appendChild( a_lightGr );
	
	var chLoc = document.createElement( "li" );
	chLoc.className = "locList";
	chLoc.innerHTML = "by location";	
	delList.appendChild( chLoc );
	
	var locate = document.createElement( "ul" );
	locate.className = "devices";	
	chLoc.appendChild( locate );
					//
	var locBR = document.createElement( "li" );
	locBR.className = "locDel";	
	locate.appendChild( locBR );
	
	var a_locBR = document.createElement( "a" );
	a_locBR.id = "a_bedroom";
	a_locBR.href = "#";
	a_locBR.innerHTML = "Bedroom";
	locBR.appendChild( a_locBR );
	
	var locBal = document.createElement( "li" );
	locBal.className = "locDel";	
	locate.appendChild( locBal );
	
	var a_locBal = document.createElement( "a" );
	a_locBal.id = "a_balcony";
	a_locBal.href = "#";
	a_locBal.innerHTML = "Balcony";
	locBal.appendChild( a_locBal );
	
	var locDR = document.createElement( "li" );
	locDR.className = "locDel";	
	locate.appendChild( locDR );
	
	var a_locDR = document.createElement( "a" );
	a_locDR.id = "a_diningroom";
	a_locDR.href = "#";
	a_locDR.innerHTML = "Dining room";
	locDR.appendChild( a_locDR );
	
	var locHall = document.createElement( "li" );
	locHall.className = "locDel";	
	locate.appendChild( locHall );
	
	var a_locHall = document.createElement( "a" );
	a_locHall.id = "a_hall";
	a_locHall.href = "#";
	a_locHall.innerHTML = "Hall";
	locHall.appendChild( a_locHall );
	
	var locBath = document.createElement( "li" );
	locBath.className = "locDel";	
	locate.appendChild( locBath );
	
	var a_locBath = document.createElement( "a" );
	a_locBath.id = "a_bathroom";
	a_locBath.href = "#";
	a_locBath.innerHTML = "Bathroom";
	locBath.appendChild( a_locBath );
	
	var chAll = document.createElement( "li" );
	chAll.className = "locList";	
	delList.appendChild( chAll );
	
	var a_chAll = document.createElement( "a" );
	a_chAll.id = "a_chAll";
	a_chAll.href = "#";
	a_chAll.innerHTML = "all";
	chAll.appendChild( a_chAll );
	
	var contentSH = document.createElement( "div" );
	contentSH.className = "content";
	
	var bedroom = document.createElement( "div" );
	bedroom.className = "bedroom";
	bedroom.id = "bedroom";
	
	var bedroomPic = document.createElement( "div" );
	bedroomPic.className = "bedroomPic";	
	bedroom.appendChild( bedroomPic );
	
	var diningroom = document.createElement( "div" );
	diningroom.className = "diningroom";
	diningroom.id = "diningroom";
	
	var diningPic = document.createElement( "div" );
	diningPic.className = "diningPic";	
	diningroom.appendChild( diningPic );
	
	var bathroom = document.createElement( "div" );
	bathroom.className = "bathroom";
	bathroom.id = "bathroom";
	
	var bathPic = document.createElement( "div" );
	bathPic.className = "bathPic";	
	bathroom.appendChild( bathPic );
	
	var balcony = document.createElement( "div" );
	balcony.className = "balcony";
	balcony.id = "balcony";
	
	var balconyPic = document.createElement( "div" );
	balconyPic.className = "balconyPic";	
	balcony.appendChild( balconyPic );
	
	var hall = document.createElement( "div" );
	hall.className = "hall";
	hall.id = "hall";
	
	var hallPic = document.createElement( "div" );
	hallPic.className = "hallPic";	
	hall.appendChild( hallPic );
	
	manage.appendChild( menu );
	menu.appendChild( addMenu );
	menu.appendChild( delMenu );
	
	contentSH.appendChild( bedroom );
	contentSH.appendChild( bathroom );
	contentSH.appendChild( hall );
	contentSH.appendChild( diningroom );
	contentSH.appendChild( balcony );
	document.body.appendChild( manage );
	document.body.appendChild( contentSH );
};

var shv = new SmartHouseView( sh );
shv.render();