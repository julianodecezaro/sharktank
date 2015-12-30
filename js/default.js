var admin = true;

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
var rankpos = function(_avatar, _name, _pos){
	var lrow = $('<list-row id="rankpos'+_pos+'"></list-row>');
	var cel1 = $('<list-cell><div class="avatar" item-icon><img src="img/friends/'+_avatar+'.jpg" /></div></list-cell>');
	var cel2 = $('<list-cell><div class="flex">'+_name+'</div></list-cell>');
	var cel3 = $('<list-cell><div class="flex rankpos">'+_pos+'</div></list-cell>');
	cel1.appendTo(lrow);
	cel2.appendTo(lrow);
	cel3.appendTo(lrow);
	return lrow;
};
var rank = function(){
	//GENERAL	
	$i=1;
	var general = $('<div id="general-ranking"></div>');
	if(admin){
		$('<div style="margin: 6px 12px;"><paper-dropdown-menu label="Course"></paper-dropdown-menu></div>').appendTo(general);
	}
	
	rankpos('woody-woodpecker', 'Woody Woodpecker', $i++).appendTo(general);
	rankpos('sugarfoot', 'Sugarfoot', $i++).appendTo(general);
	rankpos('dory', 'Dory', $i++).appendTo(general);
	rankpos('bart-simpson', 'Bart Simpson', $i++).appendTo(general);
	rankpos('nemo', 'Nemo', $i++).appendTo(general);
	rankpos('kung-fu-panda', 'Kung Fu Panda', $i++).appendTo(general);
	rankpos('mario-bros', 'Mario Bros', $i++).appendTo(general);
	rankpos('luigi', 'Luigi', $i++).appendTo(general);
	rankpos('homer-simpson', 'Homer Simpson', $i++).appendTo(general);	
	rankpos('sponge-bob', 'Sponge bob', $i++).appendTo(general);
	$('#tab-general').html(general.html());
	
	//FRIENDS
	$i=1;
	var friends = $('<div id="friends-ranking"></div>');
	if(admin){
		$('<div style="margin: 6px 12px;"><paper-dropdown-menu label="Course"></paper-dropdown-menu></div>').appendTo(friends);
	}
	
	rankpos('shrek', 'Shrek', $i++).appendTo(friends);
	rankpos('bart-simpson', 'Bart Simpson', $i++).appendTo(friends);
	rankpos('homer-simpson', 'Homer Simpson', $i++).appendTo(friends);
	rankpos('sponge-bob', 'Sponge bob', $i++).appendTo(friends);
	rankpos('marge-simpson', 'Marge Simpson', $i++).appendTo(friends);
	rankpos('fiona', 'Fiona', $i++).appendTo(friends);
	rankpos('donkey', 'Donkey', $i++).appendTo(friends);
	rankpos('cat', 'Cat', $i++).appendTo(friends);
	$('#tab-friends').html(friends.html());
};
var chart = function(){
	var ctnr = $('<div id="chart-ctnr"></div>');
    //var chtq = $('<google-chart type="pie" id="selection-chart" options=\'{"title": "Distribution of days in 2001H1"}\' cols=\'[{"label": "Month", "type": "string"},{"label": "Days", "type": "number"}]\' rows=\'[["Jan", 31],["Feb", 28],["Mar", 31],["Apr", 30],["May", 31],["Jun", 30]]\'> </google-chart>');
	if(admin){
		var chtq = $('<img src="img/statistics/participation.jpg"></img>');
	}else {
		var chtq = $('<img src="img/statistics/questions.jpg"></img>');
	}
	chtq.appendTo(ctnr);
	$('#tab-questions').html(ctnr.html());
	
	var ctnr2 = $('<div id="chart-ctnr"></div>');
    //var chtc = $('<google-chart type="pie" id="selection-chart2" options=\'{"title": "PUMBAAAA sadasdasdasdasdasdasd"}\' cols=\'[{"label": "Month", "type": "string"},{"label": "Days", "type": "number"}]\' rows=\'[["Jan", 31],["Feb", 28],["Mar", 31],["Apr", 30],["May", 31],["Jun", 30]]\'> </google-chart>');
	if(admin){
		var chtc = $('<img src="img/statistics/mistakes.jpg"></img>');
	}else {
		var chtc = $('<img src="img/statistics/challenges.jpg"></img>');
	}
	chtc.appendTo(ctnr2);
	//$('<paper-button raised><iron-icon icon="favorite"></iron-icon>Like</paper-button>').appendTo(ctnr2);
	$('#tab-challenges').html(ctnr2.html());
};
var question = function(_qstn, _optns, _editabled, _button, _evaluation){
	var ctnr = $('<div id="question-ctnr"></div>');
	if(!_editabled && _button && !_evaluation){
		$('<div class="questions-counter">1/10</div>').appendTo(ctnr);
	}
	var card = $('<paper-card heading="" style="padding: 6px 6px 10px 6px;"></paper-card>');
	var crdc = $('<div class="card-content"></div>');
	if(!_editabled){
		var qstn = $('<div class="qstn"><h3 style="margin-top: 0px;">'+_qstn+'</h3></div>');
	}else {
		var qstn = $('<div class="qstn"><paper-textarea label="Question" value="'+_qstn+'"></paper-textarea></div>');
	}
	var opts = $('<div class="optns"></div>');
	if(!_editabled){
		var ogrp = $('<paper-radio-group selected=""></paper-radio-group>');
		$(_optns).each(function(i, o){
			if(_evaluation){
				if(i == 1){
					$('<paper-radio-button name="'+i+'" checked>'+o+'</paper-radio-button>').appendTo(ogrp);
				}else {
					$('<paper-radio-button name="'+i+'" disabled>'+o+'</paper-radio-button>').appendTo(ogrp);
				}
			}else {
				$('<paper-radio-button name="'+i+'">'+o+'</paper-radio-button>').appendTo(ogrp);
			}
		});
		ogrp.appendTo(opts);
	}else {
		var atd = $('<paper-dropdown-menu label="Answer type"></paper-dropdown-menu>');
		var atm = $('<paper-listbox class="dropdown-content"></paper-listbox>');
		//var at1 = $('<paper-item>One choice</paper-item>');
		//var at2 = $('<paper-item>Multiple choice</paper-item>');
		//var at3 = $('<paper-item>Text area</paper-item>');
		//at1.appendTo(atm);
		//at2.appendTo(atm);
		//at3.appendTo(atm);
		atm.appendTo(atd);
		atd.appendTo(opts);
	}
	qstn.appendTo(crdc);
	opts.appendTo(crdc);
	crdc.appendTo(card);
	if(_button){
		if(chllg){
			$('<paper-button id="send-challenge" data-dialog="finish-challenge">SEND</paper-button>').appendTo(card);
		}else {
			$('<paper-button id="send-question" data-dialog="finish-question">SEND</paper-button>').appendTo(card);
		}
	}
	if(_evaluation){
		$('<div class="correct-answer">Answer: $_SERVER</div>').appendTo(card);		
		$('<paper-textarea label="Opinion"></paper-textarea>').appendTo(card);		
		$('<paper-button>ACCEPT</paper-button><paper-button class="reject">REJECT</paper-button>').appendTo(card);
	}
	card.appendTo(ctnr);
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
		$('<content-tabs></content-tabs>').appendTo('.body');
		rank();
	});	
};
var statistics = function(_init){
	loadBody(_init, function(){
		if(admin){
			$('<content-tabs-statistics-admin></content-tabs-statistics-admin>').appendTo('.body');
		}else {
			$('<content-tabs-statistics></content-tabs-statistics>').appendTo('.body');
		}
		chart();
	});
};
var about = function(_init){
	loadBody(_init, function(){
		
	});
};
var profile = function(_init){
	loadBody(_init, function(){
		var arr = ['$_GLOBALS', '$_SERVER', '$_SESSION', '$_COOKIE', '$_VARS'];
		question('Which superglobal variable holds information about headers, paths, and script locations?', arr, true);
		$(document).on('click', 'paper-radio-button', function(){
			$('paper-radio-button').prop('checked', false);
			$(this).prop('checked', true);
		});
	});
};
var settings = function(_init){
	loadBody(_init, function(){
		var arr = ['$_GLOBALS', '$_SERVER', '$_SESSION', '$_COOKIE', '$_VARS'];
		question('Which superglobal variable holds information about headers, paths, and script locations?', arr, false, false, true);
		$(document).on('click', 'paper-radio-button', function(){
			$('paper-radio-button').prop('checked', false);
			$(this).prop('checked', true);
		});
	});
};
var chllg = false;
var questions = function(_init){
	chllg = false;
	loadBody(_init, function(){
		var arr = ['$_GLOBALS', '$_SERVER', '$_SESSION', '$_COOKIE', '$_VARS'];
		question('Which superglobal variable holds information about headers, paths, and script locations?', arr, false, true);
		$(document).on('click', 'paper-radio-button', function(){
			$('paper-radio-button').prop('checked', false);
			$(this).prop('checked', true);
		});
		$(document).on('click', '#send-question', function(e){
			var id = e.target.getAttribute('data-dialog');
			var dialog = document.getElementById(id);
			if (dialog) {
				dialog.toggle();
				e.target.toggleAttribute && e.target.toggleAttribute('data-dialog-opened', dialog.opened);
				$(document).on('click', '#comments', function(e){
					comments(true);
					dialog.toggle();
				});
			}
		});
	});
};
var start = function(_init){
	chllg = true;
	loadBody(_init, function(){
		var arr = ['$_GLOBALS', '$_SERVER', '$_SESSION', '$_COOKIE', '$_VARS'];
		question('Which superglobal variable holds information about headers, paths, and script locations?', arr, false, true);
		$(document).on('click', 'paper-radio-button', function(){
			$('paper-radio-button').prop('checked', false);
			$(this).prop('checked', true);
		});
		$('<div id="gamersbar"><div class="gamers"><img id="bart-img" src="img/friends/bart-simpson.jpg"><img id="homer-img" src="img/friends/homer-simpson.jpg"><img id="shrek-img" src="img/friends/shrek.jpg"></div><div class="timer">60</div></div>').appendTo('.body');
		var itrvl = window.setInterval(function(){ 
			var val = parseInt($('.timer').text());
			if(val == 0){
				window.clearInterval(itrvl);
			}else {
				val--;
				if(val == 47){
					$('#bart-img').attr('src', 'img/friends/bart-simpson-ok.jpg');
				}				
				if(val == 32){
					$('#homer-img').attr('src', 'img/friends/homer-simpson-ok.jpg');
					$('#finish-challenge #waiting').hide();
					$('#finish-challenge #continue').show();
				}
				if(val == 33){
					$('#shrek-img').attr('src', 'img/friends/shrek-err.jpg');
				}				
				$('.timer').text(val);
			}
		}, 1000);
		$(document).on('click', '#send-challenge', function(e){
			var id = e.target.getAttribute('data-dialog');
			var dialog = document.getElementById(id);
			if (dialog) {
				dialog.toggle();
				e.target.toggleAttribute && e.target.toggleAttribute('data-dialog-opened', dialog.opened);
				$(document).on('click', '#comments', function(e){
					comments(true);
					dialog.toggle();
				});
			}
		});
	});
};
var comment = function(_avatar, _name, _text, _comment){
	var ctnr = $('<div class="comment-ctnr-in'+(!_comment?'-q':'')+'"></div>');
	var lrow = $('<list-row id="commentn"></list-row>');
	if(_comment){
		var cel2 = $('<list-cell><div class="avatar" item-icon><img src="img/friends/'+_avatar+'.jpg" /></div></list-cell>');
		var cel1 = $('<list-cell><div class="flex">'+_name+'</div></list-cell>');
	}else {
		var cel1 = $('<list-cell><div class="avatar" item-icon><img src="img/friends/'+_avatar+'.jpg" /></div></list-cell>');
		var cel2 = $('<list-cell><div class="flex">'+_name+'</div></list-cell>');
	}
	cel1.appendTo(lrow);
	cel2.appendTo(lrow);
	//cel2.appendTo(lrow2);
	lrow.appendTo(ctnr);
	$('<div id="comment" >'+_text+'</div>').appendTo(ctnr);
	$('<div id="comment-btns" ><iron-icon icon="reply"></iron-icon><iron-icon icon="thumb-up"></iron-icon><iron-icon icon="thumb-down"></iron-icon></div>').appendTo(ctnr);
	return ctnr;
};
var comment_card = function(_img, _name, _question, _comments){	
	if(_question){
		var cmm = comment(_img, _name, _question);
	}else {
		var cmm = comment(_img, _name, _comments, true);
	}
	return cmm;
};
var comments = function(_init){
	loadBody(_init, function(){
		var ctnr = $('<div class="comment-ctnr"></div>');
		var card = $('<paper-card></paper-card>');
		var cardc = $('<div class="card-content"></div>');
		comment_card('sponge-bob', 'Sponge Bob', 'What does the $_VARS variable do?').appendTo(cardc);
		comment_card('woody-woodpecker', 'Woody Woodpecker', null, 'Nothing. This is not a global variable.').appendTo(cardc);
		comment_card('sponge-bob', 'Sponge Bob', null, 'Thank you! I’m a PHP super noob. ;)').appendTo(cardc);		
		cardc.appendTo(card);
		
		var card2 = $('<paper-card style="margin-top: 6px; margin-bottom: 54px;"></paper-card>');
		var cardc2 = $('<div class="card-content"></div>');
		comment_card('donkey', 'Donkey', 'My answer was $_SESSION, I\'m really a donkey!! :/').appendTo(cardc2);
		comment_card('shrek', 'Shrek', null, 'LOL ;P').appendTo(cardc2);
		
		cardc2.appendTo(card2);
		
		card.appendTo(ctnr);
		card2.appendTo(ctnr);
		$('<paper-fab icon="add" title="New Question" style="position: fixed;bottom: 6px;right: 6px; z-index: 5; color: #FFF !important; background-color: #53439C !important;"></paper-fab>').appendTo(ctnr);
		ctnr.appendTo('.body');
	});
};

var init = function(){
	$('.body_ctnr').css({
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
	$(document).on('click', '#statistics', function(e){
		statistics();
	});
	$(document).on('click', '#about', function(e){
		about();
	});
	$(document).on('click', '#profile', function(e){
		profile(true);
	});
	$(document).on('click', '#settings', function(e){
		settings(true);
	});	
	
	$(document).on('click', '#actc', function(e){
		var card_id = $(this).parents('paper-card').attr('id');
		//console.log(card_id);
		var id = e.target.getAttribute('data-dialog');
		var dialog = document.getElementById(id);
		if (dialog) {
			dialog.toggle();
			e.target.toggleAttribute && e.target.toggleAttribute('data-dialog-opened', dialog.opened);
		}
	});
	$(document).on('click', '#actq', function(e){
		questions(true);
	});
	$(document).on('click', '#start', function(e){
		start(true);
	});
});