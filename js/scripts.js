
//Validazione del Login

function validateAccess(f) {
	var el;
	el = document.getElementById('user_error');
	if (f.username.value == "") 
		el.innerHTML = "Inserisci username";
	else 
		el.innerHTML = "";
	el = document.getElementById('pwd_error');
	if ((f.pwd.value == "") || (f.pwd.value.length <9)) 
		el.innerHTML = "La password deve contenere almeno 8 caratteri";
	else
		el.innerHTML = "";
	return true;
	}
	


//Validazione della registrazione

function isEmailAddr(email)   
{
  var str = new String(email);
  var index = str.indexOf("@");
  if (index > 0)
  {
    var pindex = str.indexOf(".",index);
    if ((pindex > index+1) && (str.length > pindex+2))
		return true;
  }
  return false;
}

function validRequired(formField,fieldLabel)  
{
	if (formField.value == "")
	{
		alert('Inserire un valore nel campo "' + fieldLabel + '" - informazione richiesta');
		formField.focus();
		return false;
	}
	
	return true;
}

function validEmail(formField,fieldLabel,required)   
{
	if (required && !validRequired(formField,fieldLabel))
		return false;

	if ( (formField.value.length < 5) || !isEmailAddr(formField.value) ) {
		alert("Inserire una mail valida nella forma: tuonome@tuodominio.***");
		formField.focus();
		return false;
	}
   
  return true;

}

function validDate(formField,fieldLabel,required)
{
	if (required && !validRequired(formField,fieldLabel))
		return false;
		
  	var elems = formField.value.split("/");
 	if (elems.length != 3) {
		alert('Inserire una data valida nella forma gg/mm/aaaa');
		return false; 
	}
		
 	var day = parseInt(elems[0],10);
	var month = parseInt(elems[1],10);
 	var year = parseInt(elems[2],10);
	
	if(month > 0 && month <13){
		if(year < 2018 && year > 1900){
			if(day > 0 && day <32){
				if(month == 02 && day >29){
					alert('Inserire un giorno valido.');
					return false;
				}
				
				if((month == 04 || month == 06 || month == 10 || month == 11) && day >30){
					alert('Inserire un giorno valido.');
					return false;
				}				
				return true;
			}
			else{
				alert('inserire un giorno adatto');
				return false;
			}
		}
		else 
		{
			alert('Inserire un anno corretto');
			return false;
		}
	}
	else{
		alert('Inserire un mese corretto');
		return false;
	}
	
}

function allDigits(str)
{
	return inValidCharSet(str,"0123456789");
}

function validPassword (form) {
	
	if (form.pw.value == "") {
		alert("Inserire una password");
		form.pw.focus();
		return false;
	}
	
	if(form.pw.value.length < 6) {
		alert("Errore: la password deve contenere almeno 6 caratteri");
		form.pw.focus();
		return false;
	  }
	  
	if( (form.pw.value == form.nome.value) || (form.pw.value == form.cognome.value) ) {
		alert("Errore: la password deve essere diversa dal proprio nome o cognome");
		form.pw.focus();
		return false;
	  }
	  
	re = /[0-9]/;
	if(!re.test(form.pw.value)) {
		alert("Errore: la password deve contenere almeno un numero");
		form.pw.focus();
		return false;
	  }
	  
	re = /[a-z]/;
	if(!re.test(form.pw.value)) {
		alert("Errore: la password deve contenere almeno un carattere minuscolo");
		form.pw.focus();
		return false;
	  }
	  
	re = /[A-Z]/;
	if(!re.test(form.pw.value)) {
		alert("Errore: la password deve contenere almeno un carattere maiuscolo");
		form.pw.focus();
		return false;
	  }
   
    return true;
}

function passwordConfirm (form) {
	if (form.pw.value != form.conferma.value) {
		alert("Errore: conferma la tua password correttamente");
		form.conferma.focus();
		return false;
	}
	
	return true;
}

function checkRadio(){
	if(document.getElementById("mRadio").checked || document.getElementById("fRadio").checked){
		return true
	}
	else{
		alert('selezionare un genere');
		return false;
	}
}


function validateRegistration(f) {

	if (!validRequired(f.nome,"Nome"))
		return false;
		
	if (!validRequired(f.cognome,"Cognome"))
		return false;
		
	if (!validDate(f.data,"Data di nascita",true))
		return false;	
		
	if (!validEmail(f.email,"Indirizzo Email",true))
		return false;
		
	if (!validPassword(f))
		return false;
		
	if (!passwordConfirm(f))
		return false;
		
	if (!checkRadio())
		return false;
		
	
	alert("Registrazione effettuata con successo: \nBenvenuto!");	
	return true;
}


 
 
 
 