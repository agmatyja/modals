'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodaliœmy style dla prostego modala, który bêdzie zawsze wyœrodkowany w oknie. 
	
	Teraz wystarczy napisaæ funkcjê otwieraj¹c¹ modal:
	*/
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal').innerHTML = ""
		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	// Mimo, ¿e obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie bêdzie trzeba go zmieniaæ, kiedy zechcemy mieæ wiêcej linków lub guzików otwieraj¹cych modale
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy te¿ funkcjê zamykaj¹c¹ modal, oraz przywi¹zujemy j¹ do klikniêæ na elemencie z klas¹ "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobr¹ praktyk¹ jest równie¿ umo¿liwianie zamykania modala poprzez klikniêcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiêtaæ, aby zablokowaæ propagacjê klikniêæ z samego modala - inaczej ka¿de klikniêcie wewn¹trz modala równie¿ zamyka³oby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	/* I to wszystko - mamy ju¿ dzia³aj¹cy modal! 
	
	ÆWICZENIE: 
	Zmieñ funkcjê showModal tak, aby w momencie wyœwietlania by³a zmieniana treœæ nag³ówka na dowoln¹ inn¹, np. "Modal header". 
	*/
	
})(); 