function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " Вы попали на налог за роскошь. Заплатите $100 .");
	player[turn].заплати(100, 0);

	$("#landed").show().text("Вы попали на налог за роскошь. Заплатите $100 .");
}

function citytax() {
	addAlert(player[turn].name + " заплати $200 за городской налог.");
	player[turn].pay(200, 0);

	$("#landed").show().text("заплати $200 за городской налог.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("community chest", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[3] = new Square("Baltic Avenue", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("City Tax", "заплати $200", "#FFFFFF");
square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Oriental Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Шанс", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[8] = new Square("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("St. Charles Place", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("States Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Virginia Avenue", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("St. James Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("community chest", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[18] = new Square("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("New York Avenue", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Шанс", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[23] = new Square("Indiana Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Illinois Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("North Carolina Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("community chest", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[34] = new Square("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Шанс", "СЛЕДУЙТЕ ИНСТРУКЦИЯМ НА КАРТЕ", "#FFFFFF");
square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("LUXURY TAX", "заплати $100", "#FFFFFF");
square[39] = new Square("Boardwalk", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Выйти из тюрьмы, бесплатно. Эту карту можно хранить до тех пор, пока она не понадобится, или продать.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Вы заняли второе место в конкурсе красоты. Соберите 10 долларов.", function() { addamount(10, 'community chest');});
communityChestCards[2] = new Card("От продажи акций вы получаете $50.", function() { addamount(50, 'community chest');});
communityChestCards[3] = new Card("Наступает срок страхования жизни. Соберите 100 долларов.", function() { addamount(100, 'community chest');});
communityChestCards[4] = new Card("Возврат подоходного налога. Соберите 20 долларов.", function() { addamount(20, 'community chest');});
communityChestCards[5] = new Card("Наступает срок погашения праздничного фонда. Получите 100 долларов.", function() { addamount(100, 'community chest');});
communityChestCards[6] = new Card("Вы унаследовали 100 долларов.", function() { addamount(100, 'community chest');});
communityChestCards[7] = new Card("Получите $25 за консультацию.", function() { addamount(25, 'community chest');});
communityChestCards[8] = new Card("Оплатить больничный сбор в размере $100.", function() { subtractamount(100, 'community chest');});
communityChestCards[9] = new Card("Банковская ошибка в вашу пользу. Соберите 200 долларов.", function() { addamount(200, 'community chest');});
communityChestCards[10] = new Card("Оплатить школьные взносы в размере $50.", function() { subtractamount(50, 'community chest');});
communityChestCards[11] = new Card("Оплата услуг врача. Заплатите 50 долларов.", function() { subtractamount(50, 'community chest');});
communityChestCards[12] = new Card("Сегодня ваш день рождения. Соберите $10 с каждого игрока.", function() { collectfromeachplayer(10, 'community chest');});
communityChestCards[13] = new Card("Продвинуться до \"GO\" (Собрать $200).", function() { advance(0);});
communityChestCards[14] = new Card("С вас взимается плата за ремонт улиц. 40 долларов за дом. 115 долларов за гостиницу.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Отправляйтесь в тюрьму. Не проходите \"GO\". Не собирайте 200 долларов.", function() { gotojail();});


chanceCards[0] = new Card("ВЫЙТИ ИЗ ТЮРЬМЫ БЕСПЛАТНО. Эту карту можно хранить до тех пор, пока она не понадобится, или обменять.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Сделайте капитальный ремонт во всех ваших владениях. За каждый дом заплатите $25. За каждый отель - 100 долларов.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Штраф за превышение скорости - 15 долларов.", function() { subtractamount(15, 'chance');});
chanceCards[3] = new Card("Вы были избраны председателем совета директоров. Заплатите каждому игроку по 50 долларов.", function() { заплатиeachplayer(50, 'chance');});
chanceCards[4] = new Card("Вернитесь на три клетки назад.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ОБРАТИТЕСЬ В БЛИЖАЙШУЮ КОММУНАЛЬНУЮ СЛУЖБУ. Если она не куплена, вы можете купить ее у банка. В случае владения, заплатите владельцу вдвое больше арендной платы, чем положено.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Банк выплачивает вам дивиденды в размере $50.", function() { addamount(50, 'chance');});
chanceCards[7] = new Card("ДОБЕРИТЕСЬ ДО БЛИЖАЙШЕЙ ЖЕЛЕЗНОЙ ДОРОГИ. Если она не куплена, вы можете купить ее у банка. В случае владения, заплатите владельцу вдвое больше арендной платы, чем положено.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Заплатите налог на бедных в размере $15.", function() { subtractamount(15, 'chance');});
chanceCards[9] = new Card("Отправляйтесь в путешествие по железнодорожной дороге Рединга. Если вы проедете \"GO\", получите $200.", function() { advance(5);});
chanceCards[10] = new Card("Пройдите на набережную.", function() { advance(39);});
chanceCards[11] = new Card("Дойдите до Иллинойс Авеню. Если вы пройдете \"GO\", получите 200 долларов.", function() { advance(24);});
chanceCards[12] = new Card("Срок погашения вашего кредита на строительство. Соберите 150 долларов.", function() { addamount(150, 'chance');});
chanceCards[13] = new Card("ДОБЕРИТЕСЬ ДО БЛИЖАЙШЕЙ ЖЕЛЕЗНОЙ ДОРОГИ. Если она не куплена, вы можете купить ее у банка. В случае владения, заплатите владельцу вдвое больше арендной платы, чем положено.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Доехать до Сент-Чарльз Плейс. Если вы пройдете \"GO\", получите 200 долларов.", function() { advance(11);});
chanceCards[15] = new Card("Отправляйтесь в тюрьму. Не проходите \"GO\". Не собирайте 200 долларов.", function() { gotojail();});