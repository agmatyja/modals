'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodali�my style dla prostego modala, kt�ry b�dzie zawsze wy�rodkowany w oknie. 
	
	Teraz wystarczy napisa� funkcj� otwieraj�c� modal:
	*/
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal').innerHTML = ""
		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	// Mimo, �e obecnie mamy tylko jeden link, stosujemy kod dla wielu link�w. W ten spos�b nie b�dzie trzeba go zmienia�, kiedy zechcemy mie� wi�cej link�w lub guzik�w otwieraj�cych modale
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy te� funkcj� zamykaj�c� modal, oraz przywi�zujemy j� do klikni�� na elemencie z klas� "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobr� praktyk� jest r�wnie� umo�liwianie zamykania modala poprzez klikni�cie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pami�ta�, aby zablokowa� propagacj� klikni�� z samego modala - inaczej ka�de klikni�cie wewn�trz modala r�wnie� zamyka�oby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	/* I to wszystko - mamy ju� dzia�aj�cy modal! 
	
	�WICZENIE: 
	Zmie� funkcj� showModal tak, aby w momencie wy�wietlania by�a zmieniana tre�� nag��wka na dowoln� inn�, np. "Modal header". 
	*/
	
})(); 