var loadBody = function(_init, _trigger){
	$('.body').html('');
	if(!_init){
		document.querySelector('#panel').togglePanel();
	}
	$('#spinner').show();
	window.setTimeout(function(){ $('#spinner').hide(); _trigger(); }, 400);	
};
var cardColor = function(_progress){
	if(_progress >= 75){
		return "green";
	}
	if(_progress < 75 && _progress >= 50){
		return "yellow";
	}
	if(_progress < 50 && _progress >= 25){
		return "orange";
	}
	if(_progress < 25){
		return "red";
	}
};
var card = function(_id, _title, _icon, _progress){
	var ctnr = $('<div class="card-container"></div>');
	var card = $('<paper-card heading="" id="'+_id+'"></paper-card>');
	var ccnt = $('<div class="card-content"></div>');
	var icon = $('<div class="title-icon"><img src="img/card-icons/'+_icon+'.png"></div>');
	var desc = $('<div class="title-descr">'+_title+'</div>');
	var pbar = $('<div class="card-progess-bar"></div>');
	var pbrt = $('<div class="cpb-total"></div>');
	var pbra = $('<div class="cpb-achieved '+cardColor(_progress)+'" style="width: '+_progress+'%;"></div>');
	var actn = $('<div class="card-actions"></div>');
	var actq = $('<paper-button id="actq">Questions</paper-button>');
	var actc = $('<paper-button id="actc" data-dialog="alert">Challenge...</paper-button>');
	//content
	icon.appendTo(ccnt);
	desc.appendTo(ccnt);
	//progress bar
	pbrt.appendTo(pbar);
	pbra.appendTo(pbar);
	//action
	actq.appendTo(actn);
	actc.appendTo(actn);
	//card
	ccnt.appendTo(card);
	pbar.appendTo(card);
	actn.appendTo(card);
	
	card.appendTo(ctnr);
	ctnr.appendTo('.body');
};
var friend = function(_avatar, _name){
	var lrow = $('<list-row></list-row>');
	var cel1 = $('<list-cell><div class="avatar" item-icon><img src="img/friends/'+_avatar+'.jpg" /></div></list-cell>');
	var cel2 = $('<list-cell><div class="flex">'+_name+'</div></list-cell>');
	var cel3 = $('<list-cell><paper-checkbox></paper-checkbox></list-cell>');
	cel1.appendTo(lrow);
	cel2.appendTo(lrow);
	cel3.appendTo(lrow);
	lrow.appendTo('.friendslist');
};
var trophy = function(_id, _title, _icon, _trophies){
	var ctnr = $('<div class="trophy-container"></div>');
	var trph = $('<paper-card heading="" id="'+_id+'"></paper-card>');
	var ccnt = $('<div class="card-content"></div>');
	var icon = $('<div class="title-icon"><img src="img/card-icons/'+_icon+'.png"></div>');
	var desc = $('<div class="title-descr">'+_title+'</div>');
	var tphl = $('<div class="trophy-line"></div>');
	//content
	icon.appendTo(ccnt);
	desc.appendTo(ccnt);
	//trophies
	$(_trophies).each(function(i, o){
		console.log(i + ' = '+ o);
		if(o >= 0 && i >= 0 && i <= 5) {
			switch(i){
				case 0:
					var _img = 'golden-trophy';
					break;
				case 1:
					var _img = 'silver-trophy';
					break;
				case 2:
					var _img = 'bronze-trophy';
					break;
				case 3:
					var _img = 'golden-medal';
					break;
				case 4:
					var _img = 'silver-medal';
					break;
				case 5:
					var _img = 'bronze-medal';
					break;
			}
			for(var j = 0; j < o; j++){
				$('<img src="img/trophies/'+_img+'.png" />').appendTo(tphl);
			}
		}
	});
	
	//card
	ccnt.appendTo(trph);
	tphl.appendTo(trph);	
	
	trph.appendTo(ctnr);
	ctnr.appendTo('.body');
};
var rank = function(){
	var ctnr = $('<div class="ctnr-tabs"></div>');
	var tabs = $('<paper-tabs selected="{{selected}}"></paper-tabs>');
	var tab1 = $('<paper-tab>General</paper-tab>');
	var tab2 = $('<paper-tab>Friends</paper-tab>');
	
	tab1.appendTo(tabs);
	tab2.appendTo(tabs);
	tabs.appendTo(ctnr);
	var pags = $('<iron-pages selected="{{selected}}"></iron-pages>');
	var pag1 = $('<div>Page 1</div>');
	var pag2 = $('<div>Page 2</div>');		
	pag1.appendTo(pags);
	pag2.appendTo(pags);
	pags.appendTo(ctnr);
	ctnr.appendTo('.body');
};

var play = function(_init){
	loadBody(_init, function(){
		//Create cards
		card(143, 'PHP - ADVANCED', 'php', 78);
		card(516, 'PHP - SECURITY', 'php', 52);
		card(23, 'MYSQL', 'mysql', 25);
		card(546, 'ANGULAR JS', 'angularjs', 10);
		
		//Create friends list
		friend('bart-simpson', 'Bart Simpson');
		friend('homer-simpson', 'Homer Simpson');
		friend('marge-simpson', 'Marge Simpson');
		friend('shrek', 'Shrek');
		friend('fiona', 'Fiona');
		friend('donkey', 'Donkey');
		friend('cat', 'Cat');
	});
};
var trophies = function(_init){
	loadBody(_init, function(){
		trophy(143, 'PHP - ADVANCED', 'php', [2, 1, 1, 1, 1, 2]);
		trophy(516, 'PHP - SECURITY', 'php', [1, 0, 1, 2, 0, 0]);
		trophy(23, 'MYSQL', 'mysql', [0, 0, 1, 0, 1, 1]);
	});
};
var ranking = function(_init){
	loadBody(_init, function(){
		rank();
	});
};

var init = function(){
	$('.body').css({
		'height': $(window).height() - $('paper-toolbar').outerHeight(true) - 6
	});
};

$(document).ready(function(){
	$(window).resize(function(){
		init();
	});
	init();	
	play(true);
	
	$(document).on('click', '#play', function(e){
		play();
	});
	$(document).on('click', '#trophies', function(e){
		trophies();
	});
	$(document).on('click', '#ranking', function(e){
		ranking();
	});
	
	$(document).on('click', '#actc', function(e){
		var card_id = $(this).parents('paper-card').attr('id');
		console.log(card_id);
		var id = e.target.getAttribute('data-dialog');
		var dialog = document.getElementById(id);
		if (dialog) {
			dialog.toggle();
			e.target.toggleAttribute && e.target.toggleAttribute('data-dialog-opened', dialog.opened);
		}
	});
});