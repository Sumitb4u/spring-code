	var PatternsDict = new Object();
	var ErrorsDict = new Object();
	var ElementsDict = new Object();
	var NamesDict = new Object();
	var almsg = "";
	var mesgDesc = new Array();
	var ischanged = "";
	var frmName = '';
	var catgTypValue ="0"; 
	
	PatternsDict.vinNum = /(^[A-Za-z0-9]{8}$)|(^[A-Za-z0-9]{17}$)/;
	PatternsDict.odom = /(^[\d]{1,6}$)/;
	PatternsDict.cost = /(^[\d\.]{1,8}$)/;
	PatternsDict.ron = /(^[A-Za-z0-9]{1,6}$)/;
	PatternsDict.issue = /(^[A-Za-z\d\s+\f\r\n\.\,\-\`\#\$\@\*\/\(\)\&\<\>\!\?\_\+\=\{\}\:\;\|\\\%\^\~\[\]]{1,1000}$)/;
	PatternsDict.servaction = /(^[A-Za-z\d\s+\f\r\n\.\,\-\`\#\$\@\*\/\(\)\&\<\>\!\?\_\+\=\{\}\:\;\|\\\%\^\~\[\]]{1,1000}$)/;
	
	var NS = (document.layers) ? true : false;
	var IE = (document.all) ? true : false;
	
	//SYED ADDED
	var reInteger = /^\d+$/;
	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	Array.prototype.removeByValue = function(val) { 
		for(var i=0; i<this.length; i++) {   
			if(this[i] == val) {     
				this.splice(i, 1);   
				break;  
				} 
			} 
		} 
	
	Array.prototype.remove = function() {
	    var what, a = arguments, L = a.length, ax;
	    while (L && this.length) {
	        what = a[--L];
	        while ((ax = this.indexOf(what)) !== -1) {
	            this.splice(ax, 1);
	        }
	    }
	    return this;
	};

	function replace(arrayName,replaceTo, replaceWith)
	{		
		for(var i=0; i<arrayName.length;i++ )
		{  
		  if(parseInt(arrayName[i],10)==parseInt(replaceTo,10)){
			  if(parseInt(replaceWith,10)<10){
				  replaceWith = "0" + parseInt(replaceWith,10);
			  }
			  arrayName.splice(i,1,replaceWith);  
		  }
	  }  
	} 
	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	
	function showTooltip(e){
    
	

	if(!e){var e = window.event;}
    var obj = e.srcElement; 
    if(obj.id=='lopdescRepair'){
		 if(document.getElementById('repairTooltip')){
	    var tooltip = document.getElementById('repairTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }
    }
    
    
	if(obj.id=='lopdescReplace'){
		 if(document.getElementById('replaceTooltip')){
	    var tooltip = document.getElementById('replaceTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }
    }

	 if(obj.id=='repairpartdesc'){
		 if(document.getElementById('repairPartTooltip')){
	    var tooltip = document.getElementById('repairPartTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }
    }

	 if(obj.id=='replacepartdesc'){
		 if(document.getElementById('replacePartTooltip')){
	    var tooltip = document.getElementById('replacePartTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }
    }

	  if(obj.id=='lopdesc'){
		 if(document.getElementById('primaryLopTooltip')){
	    var tooltip = document.getElementById('primaryLopTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }

		  if(document.getElementById('relatedLopTooltip')){
	    var tooltip = document.getElementById('relatedLopTooltip');
	    tooltip.innerHTML = obj.value;
	    tooltip.style.display = 'block';
		 }
    }
}

function hideTooltip(e){

 if(document.getElementById('repairTooltip')){
    var tooltip = document.getElementById('repairTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
 }

if(document.getElementById('replaceTooltip')){
    tooltip = document.getElementById('replaceTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
}

if(document.getElementById('replacePartTooltip')){
    tooltip = document.getElementById('replacePartTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
}

if(document.getElementById('repairPartTooltip')){
    tooltip = document.getElementById('repairPartTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
}

if(document.getElementById('primaryLopTooltip')){
    tooltip = document.getElementById('primaryLopTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
}

if(document.getElementById('relatedLopTooltip')){
    tooltip = document.getElementById('relatedLopTooltip');
    tooltip.innerHTML = '';
    tooltip.style.display = 'none';
}
}


	function isInteger (s) {   
	    	return reInteger.test(s);
	}
	//
	
	//Added by t8415sk Start
	
			function toggleSubletTyp() {
			
			var programVal=null;
			if(document.getElementById("prgType") !=null){
			  programVal = document.getElementById("prgType").value;
			}
			
			
		if(programVal !=null  && programVal == 'V'){
	
			document.getElementById("subletHeaderSpan").style.visibility='visible';
			document.getElementById("subletSpan").style.visibility='visible';
		}else {
	
			document.getElementById("subletHeaderSpan").style.visibility='hidden';
			document.getElementById("subletSpan").style.visibility='hidden';
		}
		
		
	}
	

	function checkLOPHr(keyEvt){ 
	
	var keyValue = (keyEvt.which) ? keyEvt.which : event.keyCode
	
	if (keyValue >31 &&(keyValue < 48 || keyValue > 57) && keyValue != 46 && keyValue != 190 && keyValue != 110 )
	{
	alert('Please Enter Valid Input');
	return false;
	}else{
	return true;
	}
	
	/*if (keyValue == 46 || keyValue == 190 || keyValue == 110 )
	{
		p= document.getElementById("00lophrs").value;
		var first =p.indexOf('.');
		if (first !=-1 ){
			document.getElementById("00lophrs").value =p;
			alert ('Only one decimal point is valid');
			return false;
		}
	
	}
	p= document.getElementById("00lophrs").value;
	if(p.length==2){
        var pp=p;
        var d5=p.indexOf('.');
        if(d5==-1){
                pp=pp+".00";
        }

       //document.getElementById("partCost").value="";
         document.getElementById("00lophrs").value=pp;
	}*/
	}
	
	function checkSubletTyp() {
		
		var subletVal="";
		var programVal="";
		if(document.getElementById("prgType") !=null){
		  programVal = document.getElementById("prgType").value;
		}
		if(document.dcdipap.sublet != null){
			subletVal = document.dcdipap.sublet.value;
			
			if(programVal == 'P' || (subletVal != null  && subletVal == '1')){
				
				document.getElementById("costMandatoryChk").style.visibility='visible';
				document.getElementById("proposedSerMandatoryChk").style.visibility='visible';
			}else if(programVal == 'V' && subletVal != null && subletVal == '0'){
				
				document.getElementById("costMandatoryChk").style.visibility='hidden';
				document.getElementById("proposedSerMandatoryChk").style.visibility='hidden';
				
			}
			//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
			if(document.dcdipap.CreateFlag.value=="true" &&  document.dcdipap.imageSequence4 != undefined){
				 document.getElementById("browseFlag").value ="true" ;
			}	
			//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
		}
		
		
		
	}	
	//Added by t8415sk End
	
	function form1atValue(elem) {
		var elemname = elem.name;
		var elemvalue = elem.value;
		var elemlength = elemvalue.length;
		var pattern = elemname;
	
		if( ( PatternsDict[pattern] ) &&  !( PatternsDict[pattern].exec(' ') ) ) {
			elem.value = trim(elem.value);
		}
	}


	function IsNumeric(value)
	{
	//alert ('Inside IsNumeric');
	var regexp = /^([0-9])*$/g; //Numeric validation
	if (regexp.test(value))
		{
		//alert('True');	
		return true;
		}	
	//alert('false');
	return false;
	}


	function validateLopHours(){
	
	var val = document.getElementById("00lophrs").value;

	if(!isNaN(val-0) && val>0){
	   //alert(val);
	   if(val >=100){
		  alert("Please enter valid Labor hours. Max allowed(99.99).");
		  document.getElementById("00lophrs").value="";
		  return;
		}
	}else{
			alert("Enter valid lop Hrs");
			document.getElementById("00lophrs").value="";
			return;
		}
  }


/*	 if(parseFloat(lopHrs)==true){
		 return true;
	 }else{
		alert("Enter valid lop Hrs");
	    return false;
	 }
	}
*/

	
	function checkNumeric(keyEvt) {
        
		var keyValue = (keyEvt.which) ? keyEvt.which : event.keyCode
		                if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
		                {
		                alert("Please enter numeric value");
		                  return false;
		                }
		                else{
		                              //  alert("True key press"+keyValue);
		                return true;
		                }
		                
		}


	function checkValue() {
	 	var val = arguments[0];
	  	val = val.replace(/%/g,  "\\");
	  	var pattern = arguments[1];
	  	var error = arguments[2];
	  	var dispname = arguments[3];
	  	var reqd = arguments[4];
	
		if( ( val == "" ) && ( typeof reqd == "undefined") ) {
			return true;
	  	} 
	
	  	var gotIt = PatternsDict[pattern].exec(val);
	
	  	if( gotIt ) {
			return true;
	  	} else {
			alert(ErrorsDict[error]);	
	  	}
	  
	  	return false;
	}
	
	function removeQuote(value){
		value = value.replace("'",  '`');
	
		if( value.indexOf("'") != -1) {
	        return removeQuote(value);
	    }
	
		return value;
	}
	
	function removeDoubleQuote(value){
		value = value.replace('"',  '`');	
		
		if( value.indexOf('"') != -1) {
	        return removeDoubleQuote(value);
	    }
	
		return value;
	}
	
	
	function Trim1(string,text,by) {
	
	// Replaces text with by in string
	    var strLength = string.length, txtLength = text.length;
	    if ((strLength == 0) || (txtLength == 0)) return string;
	
	    var i = string.indexOf(text);
	    if ((!i) && (text != string.substring(0,txtLength))) return string;
	    if (i == -1) return string;
	
	    var newstr = string.substring(0,i) + by;
	
	    if (i+txtLength < strLength)
	        newstr += Trim1(string.substring(i+txtLength,strLength),text,by);
	
	    return newstr;
	}
	
	function Trim(s) {
	
	// Remove leading spaces and carriage returns
		while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r')) { 
			s = s.substring(1,s.length); 
		}
	// Remove trailing spaces and carriage returns
		while ( (s.substring(s.length-1,s.length) == ' ') || 
				(s.substring(s.length-1,s.length) == '\n') || 
				(s.substring(s.length-1,s.length) == '\r') ) { 
			s = s.substring(0,s.length-1); 
		}
	
		return s;
	}
	
	function ValidateCost(m){ 
		var p=m.value;
	
		if(p.length==5){
	        var pp=p;
	        var d5=p.indexOf('.');
	        if(d5==-1){
	                pp=pp+".";
	        }
	
	        m.value="";
	        m.value=pp;
		}
		
	}

	function ValidatePartCost(keyEvt){ 
		var keyValue = (keyEvt.which) ? keyEvt.which : event.keyCode
		//alert('keyvalue'+keyValue);
		if (keyValue >31 &&(keyValue < 48 || keyValue > 57) && keyValue != 46 && keyValue != 190 && keyValue != 110 )
		{
		alert('Please enter numeric Part Cost');
		return false;
		}
		
		if (keyValue == 46 || keyValue == 190 || keyValue == 110 )
		{
			p= document.getElementById("partCost").value;
			var first =p.indexOf('.');
			if (first !=-1 ){
				document.getElementById("partCost").value =p;
				alert ('Only one decimal point is valid');
				return false;
			}
		
		}
		p= document.getElementById("partCost").value;
		if(p.length==5){
	        var pp=p;
	        var d5=p.indexOf('.');
	        if(d5==-1){
	                pp=pp+".00";
	        }
	
	       //document.getElementById("partCost").value="";
	         document.getElementById("partCost").value=pp;
			alert( document.getElementById("partCost").value);
		}
		
			return true;
	}	
	
	function checkValues(form1) {
		var elements = form1.elements;
		var length = elements.length;
		for( i = 0 ; i < length; i++ ) {
			var elem = elements[i];
	
			if( (elem.type == "text") || (elem.type == "textarea")) {
				form1atValue(elem);
				var elemname = elem.name;
	
				if(elemname == "servaction" || elemname == "issue")	{ 	 
				 	elem.value = Trim1(Trim1(elem.value,'\r',' '),'\n',' ');
				 	elem.value = Trim(elem.value);		
				 	elem.value = removeQuote(elem.value); 
				 	elem.value = removeDoubleQuote(elem.value); 			 
				}
				
				var nameexpr = ElementsDict[elemname];
				var val = elem.value;
	
				if( nameexpr ) {
					nameexpr = "checkValue('"+ val.replace(/\\/g,  "\%") + "'," + nameexpr +");";
					//serv00251888 changes by t4646vb start
					
					//var result = eval(nameexpr);
					var result;
					if(elemname == "servaction" || elemname == "issue")	
						result = true;
					else
						result = eval(nameexpr);
					//serv00251888 changes by t4646vb end
					
	
					if  ( !(  result ) ) {
						elem.select();
						elem.focus();
						return false;
					}
				}
			}
		}
	
		return true;
	
	}
	
	
	function validateform1(form1) {
		//alert('inside validateform1');
		return checkValues(form1);
	}
	
	
	function trim(value) {
	 	value = value.replace(/^\s+/, ''); 
	 	value = value.replace(/\s+$/, ''); 
	 	return value; 
	}
	
	//T4317SK DIPAP TCR CHANGES START 
 function onRepEstChange(costvalue)
 {
 //if(!checkNumeric(costvalue))
  // return;
    var estimateCost = document.getElementById("cost").value;
  if(estimateCost!=null && trim(estimateCost)!='')
 document.getElementById("cost").value =  parseFloat (document.getElementById("cost").value).toFixed(2);
 //document.getElementById("cost").value = addCommas( document.getElementById("cost").value);
 }

 function addCommas(nStr)
{
       nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
	//T4317SK DIPAP TCR CHANGES END
	/*function preview(what, num){
		// valid file types	
		// SeRV00195888 Dipap-pdf change by t4646vb start
		//var fileTypes=["jpg","jpeg"];
		var fileTypes=["jpg","jpeg","pdf","txt","doc","docx","3gp","xls","xlsx"];
		// SeRV00195888 Dipap-pdf change by t4646vb end
	  	// the id of the preview image tag
		var outImage="previewField";
	  	// what to display when the image is not valid
		/***** DO NOT EDIT BELOW *****/
		/*var source=what.value;
		
		var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
		
		// Start: Added for PMO#472.42
		
		var prg = document.dcdipap.prgType.value;	
		var fileType= "pdf";
			
		
		/////////////////////////////////////////////////
		
		var dealerCode = document.dcdipap.dealerCode.value;
		var userId = document.dcdipap.userId.value;
		//alert("---dealerCode-- "+dealerCode);
		//alert("---userId-- "+userId);
		
		var queryString;
		var image1 = document.getElementById('dummyfile1').value;
		var image2 = document.getElementById('dummyfile2').value;
		var image3 = document.getElementById('dummyfile3').value;
		var image4 = document.getElementById('dummyfile4').value;	
		var image5 = document.getElementById('dummyfile5').value;
		var image6 = document.getElementById('dummyfile6').value;
		var image7 = document.getElementById('dummyfile7').value;
		var image8 = document.getElementById('dummyfile8').value;
		if(prg == 'P')
		{
			var image9 = document.getElementById('dummyfile9').value;
			var image10 = document.getElementById('dummyfile10').value;
			var image11 = document.getElementById('dummyfile11').value;
			var image12 = document.getElementById('dummyfile12').value;
			var image13 = document.getElementById('dummyfile13').value;
			var image14 = document.getElementById('dummyfile14').value;
			var image15 = document.getElementById('dummyfile15').value;
			var image16 = document.getElementById('dummyfile16').value;
		}
		
		/*document.dcdipap.targetAction.value = "holdRequest";
		
		if( prg!='P') 
		{
			//VIN plate Image Validation				
			if ( (image1 != "") && (image1 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //3/4th Image Validation				
			if ( (image2 != "") && (image2 != null)  ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //Odometer Image Validation							
			if ( (image3 != "") && (image3 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //Affected Area Image Validation							
			if ( (image4 != "") && (image4 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		} 
		else
		{
		    // TransID Image Documentation				
			if ( (image1 != "") && (image1 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
	
		    //2nd Image Validation				
			if ( (image2 != "") && (image2 != null)  ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    // 3rd Image Validation							
			if ( (image3 != "") && (image3 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
				
		   //4th Image Validation							
			if ( (image4 != "") && (image4 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		}
		
		if ( (image5 != "") && (image5 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image6 != "") && (image6 != null) )
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image7 != "") && (image7 != null) )
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
			
		if ( (image8 != "") && (image8 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		/*if(prg == 'P') 
		{
			if ( (image9 != "") && (image9 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "9";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image10 != "") && (image10 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image11 != "") && (image11 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "B";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image12 != "") && (image12 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "C";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image13 != "") && (image13 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "D";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image14 != "") && (image14 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "E";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image15 != "") && (image15 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "F";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
			
			if ( (image16 != "") && (image16 != null) ) 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "G";
			} else 
			{
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		}
		
		
		
		if (document.dcdipap.url1.value != "") {
			document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";
	
		}	
	
		if (document.dcdipap.url2.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url2.value+"||";
	
		}else if ( document.dcdipap.url2.value != "" ){
			document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
		}
		
		if (document.dcdipap.url3.value != "" && document.dcdipap.stringurl.value != "" ) {
	
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url3.value+"||";
		}else if ( document.dcdipap.url3.value != "" ){
			document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
		}	
	
		if (document.dcdipap.url4.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url4.value+"||";
	
		}else if ( document.dcdipap.url4.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
		}	
	
		if (document.dcdipap.url5.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url5.value+"||";
	
		}else if ( document.dcdipap.url5.value != "" ){
			document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
		}
		
		if (document.dcdipap.url6.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url6.value+"||";
	
		}else if ( document.dcdipap.url6.value != "" ){
			document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
		}
			
		if (document.dcdipap.url7.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url7.value+"||";
	
		}else if ( document.dcdipap.url7.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
		}	
	
		if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
			if(prg != 'P')
			{
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
			}else
			{
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value+"||";
			}
	
		}else if ( document.dcdipap.url8.value != "" ) {
			if(prg != 'P')
			{
				document.dcdipap.stringurl.value = document.dcdipap.url8.value;
			}else
			{
				document.dcdipap.stringurl.value = document.dcdipap.url8.value+"||";	
			}
		}
		
		
		// Start: Added for PMO#472.42
		
	/*	if(prg == 'P')
		{
			if (document.dcdipap.url9.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url9.value+"||";
	
			}else if ( document.dcdipap.url9.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url9.value+"||";
			}
			
			
			if (document.dcdipap.url10.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url10.value+"||";
	
			}else if ( document.dcdipap.url10.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url10.value+"||";
			}
			
			if (document.dcdipap.url11.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url11.value+"||";
	
			}else if ( document.dcdipap.url11.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url11.value+"||";
			}
			
			if (document.dcdipap.url12.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url12.value+"||";
	
			}else if ( document.dcdipap.url12.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url12.value+"||";
			}
			
			if (document.dcdipap.url13.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url13.value+"||";
	
			}else if ( document.dcdipap.url13.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url13.value+"||";
			}
			
			if (document.dcdipap.url14.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url14.value+"||";
	
			}else if ( document.dcdipap.url14.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url14.value+"||";
			}
			
			if (document.dcdipap.url15.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url15.value+"||";
	
			}else if ( document.dcdipap.url15.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url15.value+"||";
			}
			
			if (document.dcdipap.url16.value != "" && document.dcdipap.stringurl.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url16.value;
	
			}else if ( document.dcdipap.url16.value != "" ) {
				document.dcdipap.stringurl.value = document.dcdipap.url16.value;
			}
			
		}
		
		var iReq = document.dcdipap.iReq.value;
		//alert("---iReq-- "+iReq);
		
		var lopDescription = document.getElementById("lopDescription").value;*/
		//queryString = "&vinNum="+document.dcdipap.vinNum.value+"&odom="+document.dcdipap.odom.value+"&cost="+document.dcdipap.cost.value+"&ron="+document.dcdipap.ron.value+"&issue="+document.dcdipap.issue.value+"&servaction="+document.dcdipap.servaction.value+"&catg="+document.dcdipap.catg.value+"&lopDescription="+lopDescription+"&typeImage="+document.dcdipap.typeImage.value+"&iReq="+iReq+"&claimType="+document.dcdipap.claimType.value+"&targetAction=holdRequest&ProgramType="+prg+"&lopDescription="+lopDescription;
		//alert("---queryString-- "+queryString);
		//alert("--typeImage value-- "+document.dcdipap.typeImage.value);
		
		//////////////////////////////////////////////////
		
		
		
	 /* 	if(num == '3' || num == '4')
	  	{
	  		if(prg == 'P')
	  		{
	  			if(fileType == ext)
	  			{
	  				url = source.replace(/\\/g,"//");
	  				if (num == '3') {
	  			  		document.dcdipap.url3.value = url;
	  			  	} 
	  			  	if (num == '4') {
	  			 		document.dcdipap.url4.value = url;
	  			  	}
	  			}
	  			else
	  			{
	  				if (num == '3') 
	  				{
	  					eval(document.getElementById('dummyfile3').select());		
	  					eval(document.getElementById('dummyfile3').focus());
	  				}
	  				if (num == '4') 
	  				{
	  					eval(document.getElementById('dummyfile4').select());		
	  					eval(document.getElementById('dummyfile4').focus());
	  				}
					alert("Incorrect selection. Please load file with an extension of .pdf");
	  			}
	  		}
	  		else
	  		{
	  			for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
	  			if(i<fileTypes.length)
	  			{
	  				url = source.replace(/\\/g,"//");
	  				if (num == '3') {
	  			  		document.dcdipap.url3.value = url;
	  			  	} 
	  			  	if (num == '4') {
	  			 		document.dcdipap.url4.value = url;
	  			  	}
	  			}
	  			else
	  			{
	  				if (num == '3') {
	  					eval(document.getElementById('dummyfile3').select());		
	  					eval(document.getElementById('dummyfile3').focus());
	  				}
	  				if (num == '4') 
	  				{
	  					eval(document.getElementById('dummyfile4').select());		
	  					eval(document.getElementById('dummyfile4').focus());
	  				}
					alert("Incorrect selection. Please load file with an extension of .jpeg, .jpg, .pdf, .txt, .doc, .docx, .3gp, .xls or .xlsx");
	  			}
	  		}
	  		
	  	}
	  	else
	  	{
	  		for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
	  		
	  		if (i<fileTypes.length) 
	  		{
	  		  	url = source.replace(/\\/g,"//");
	//  			alert("url in js is in dr in if"+url);
	  			  	if (num == '1') {
	  			  		document.dcdipap.url1.value = url;
	  			  	    
	  			  		 				
	  			  	} 
	  			  	if (num == '2') {
	  			  		document.dcdipap.url2.value = url;
	  			  	} 
	  			  	if (num == '5') {
	  			  		document.dcdipap.url5.value = url;
	  			  	} 
	  			  	if (num == '6') {
	  			  		document.dcdipap.url6.value = url;
	  			  	} 
	  			  	if (num == '7') {
	  			  		document.dcdipap.url7.value = url;
	  			  	} 
	  			  	if (num == '8') {
	  			 		document.dcdipap.url8.value = url;
	
	
						if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" )
						{
							if(prg != 'P')
							{
								document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
							}else
							{
								document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value+"||";
							}
	
						}else if ( document.dcdipap.url8.value != "" ) {
							if(prg != 'P')
							{
								document.dcdipap.stringurl.value = document.dcdipap.url8.value;
							}else
							{
								document.dcdipap.stringurl.value = document.dcdipap.url8.value+"||";	
							}
						}
	
						if(prg == 'P')
						{
							typeImage ="XXXXXXX8XXXXXXXX";
						}
						else
						{
							typeImage ="XXXXXXX8";
						}
	
						document.dcdipap.action="/service/writeup/dipap/jsp/imageUpload.jsp?&targetAction=holdRequest&typeImage="+typeImage+"&image1="+url+"&ProgramType="+prg+"&dealerCode="+dealerCode+"&userId="+userId+"&stringurl="+document.dcdipap.stringurl.value;
	  			  		document.dcdipap.method="POST";
	  			  		document.dcdipap.submit();
	  			  	}	
	  			  	
	  			    if (num == '9') {
				 		document.dcdipap.url9.value = url;
				  	}
	  			    if (num == '10') {
				 		document.dcdipap.url10.value = url;
				  	}
	  			    if (num == '11') {
	  			 		document.dcdipap.url11.value = url;
	  			  	}
	  			    if (num == '12') {
	  			 		document.dcdipap.url12.value = url;
	  			  	}
	  			    if (num == '13') {
	  			 		document.dcdipap.url13.value = url;
	  			  	}
	  			    if (num == '14') {
	  			 		document.dcdipap.url14.value = url;
	  			  	}
	  			    if (num == '15') {
	  			 		document.dcdipap.url15.value = url;
	  			  	}
	  			    if (num == '16') {
	  			 		document.dcdipap.url16.value = url;*/
	  			 		
	  			 	 /*  if (document.dcdipap.url16.value != "") {
				  			document.dcdipap.stringurl.value = document.dcdipap.url16.value;
		
				  		}
						if(prg == 'P')
						{
							typeImage ="XXXXXXXXXXXXXXXG";
						}
						else
						{
							typeImage ="XXXXXXX8";
						}*/
						
				  		//queryString= queryString +"&stringurl="+document.dcdipap.stringurl.value+"&url16="+document.dcdipap.url16.value;
				  		
				  		//alert("---queryString-- "+queryString);*/
				  		//alert("---url16-- "+document.dcdipap.url16.value);
				  		//alert("---stringurl-- "+document.dcdipap.stringurl.value);
						//alert("--typeImage value in 1 --"+document.dcdipap.typeImage.value);
				  		//alert("---targetAction value--- "+document.dcdipap.targetAction.value);
				  		
				  	    /*$.ajaxFileUpload({
				  	        //url:'/service/writeup/dipap/DIPAPServlet'+queryString,
							url:'/service/writeup/dipap/DIPAPServlet',
				  	        secureuri:false,
				  	        fileElementId:'realfile16',
				  	        dataType: 'xml',
				  	        success: function(data, success){
				  	                //alert("---success---");
				  	      }
				  	   });*/
	
					   // document.dcdipap.action="/service/writeup/dipap/jsp/imageUpload.jsp?&targetAction=holdRequest&typeImage="+typeImage+"&image1="+url+"&ProgramType="+prg+"&dealerCode="+dealerCode+"&userId="+userId+"&stringurl="+document.dcdipap.stringurl.value;
	  			  		//document.dcdipap.method="POST";
	  			  		//document.dcdipap.submit();
	  		/*	  	}
	  		  } 
	  		  else 
	  		  {
	  	//end of change by veqar
	//  				alert("in dr js preview 3 ");
	  				if (num == '1') {
	  					eval(document.getElementById('dummyfile1').select());
	  					eval(document.getElementById('dummyfile1').focus());
	  				} else if (num == '2') {
	  					eval(document.getElementById('dummyfile2').select());		
	  					eval(document.getElementById('dummyfile2').focus());
	  				} else if (num == '5') {
	  					eval(document.getElementById('dummyfile5').select());
	  					eval(document.getElementById('dummyfile5').focus());
	  				} else if (num == '6') {
	  					eval(document.getElementById('dummyfile6').select());		
	  					eval(document.getElementById('dummyfile6').focus());
	  				} else if (num == '7') {
	  					eval(document.getElementById('dummyfile7').select());		
	  					eval(document.getElementById('dummyfile7').focus());
	  				} else if (num == '8') {
	  					eval(document.getElementById('dummyfile8').select());		
	  					eval(document.getElementById('dummyfile8').focus());
	  				}
	  				
	  				else if (num == '9') {
	  					eval(document.getElementById('dummyfile9').select());		
	  					eval(document.getElementById('dummyfile9').focus());
	  				}else if (num == '10') {
	  					eval(document.getElementById('dummyfile10').select());		
	  					eval(document.getElementById('dummyfile10').focus());
	  				}else if (num == '11') {
	  					eval(document.getElementById('dummyfile11').select());		
	  					eval(document.getElementById('dummyfile11').focus());
	  				}else if (num == '12') {
	  					eval(document.getElementById('dummyfile12').select());		
	  					eval(document.getElementById('dummyfile12').focus());
	  				}else if (num == '13') {
	  					eval(document.getElementById('dummyfile13').select());		
	  					eval(document.getElementById('dummyfile13').focus());
	  				}else if (num == '14') {
	  					eval(document.getElementById('dummyfile14').select());		
	  					eval(document.getElementById('dummyfile14').focus());
	  				}else if (num == '15') {
	  					eval(document.getElementById('dummyfile15').select());		
	  					eval(document.getElementById('dummyfile15').focus());
	  				}else if (num == '16') {
	  					eval(document.getElementById('dummyfile16').select());		
	  					eval(document.getElementById('dummyfile16').focus());
	  				}
	  	//end of change by veqar
	  			  //SeRV00195888 Dipap-pdf change by t4646vb start
	  				//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
	  				alert("Incorrect selection. Please load file with an extension of .jpeg, .jpg, .pdf, .txt, .doc, .docx, .3gp, .xls or .xlsx");
	  			//SeRV00195888 Dipap-pdf change by t4646vb end
	  		  }
	  	}*/
		
		/*var queryString;
		var image1 = document.getElementById('dummyfile1').value;
		var image2 = document.getElementById('dummyfile2').value;
		var image3 = document.getElementById('dummyfile3').value;
		var image4 = document.getElementById('dummyfile4').value;	
		var image5 = document.getElementById('dummyfile5').value;
		var image6 = document.getElementById('dummyfile6').value;
		var image7 = document.getElementById('dummyfile7').value;
		var image8 = document.getElementById('dummyfile8').value;
		var prg = document.dcdipap.prgType.value;	
		
		alert("---image1--- "+image1);
		document.dcdipap.targetAction.value = "holdRequest";
		
		if( prg!='P') 
		{
			//VIN plate Image Validation				
			if ( (image1 != "") && (image1 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //3/4th Image Validation				
			if ( (image2 != "") && (image2 != null)  ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //Odometer Image Validation							
			if ( (image3 != "") && (image3 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    //Affected Area Image Validation							
			if ( (image4 != "") && (image4 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		} 
		else
		{
		    // TransID Image Documentation				
			if ( (image1 != "") && (image1 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
	
		    //2nd Image Validation				
			if ( (image2 != "") && (image2 != null)  ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		
		    // 3rd Image Validation							
			if ( (image3 != "") && (image3 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
				
		   //4th Image Validation							
			if ( (image4 != "") && (image4 != null) ) {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
			} else {
				document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
			}
		}
		
		if ( (image5 != "") && (image5 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		
		if ( (image6 != "") && (image6 != null) )
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image7 != "") && (image7 != null) )
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
			
		if ( (image8 != "") && (image8 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		
		var iReq = document.dcdipap.iReq.value;
		var lopDescription = document.getElementById("lopDescription").value;
		queryString = "?vinNum="+document.dcdipap.vinNum.value+"&odom="+document.dcdipap.odom.value+"&cost="+document.dcdipap.cost.value+"&ron="+document.dcdipap.ron.value+"&issue="+document.dcdipap.issue.value+"&servaction="+document.dcdipap.servaction.value+"&catg="+document.dcdipap.catg.value+"&lopDescription="+lopDescription+"&typeImage="+document.dcdipap.typeImage.value+"&iReq="+iReq+"&claimType="+document.dcdipap.claimType.value+"&targetAction=holdRequest&ProgramType="+prg+"&lopDescription="+lopDescription+"&savetype=addReq&targetVal=imageResize&tabVal=0&imageUploaded=true";
		*/
	  	//for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
		  	
		  /*	if (i<fileTypes.length) {
		  	url = source.replace(/\\/g,"//");
		  	
		  	
		  	
	//		alert("url in js is in dr in if"+url);
			  	if (num == '1') {
			  		
			 /* 	} 
			  	if (num == '2') {
			  		document.dcdipap.url2.value = url;
			  		
			  		
			/*  	} 
			  	if (num == '3') {
			  		document.dcdipap.url3.value = url;
	
			  		
			  /*	} 
			  	if (num == '4') {
			 		document.dcdipap.url4.value = url;
			 		
			 		
			/*  	}
	//Veqar added code 
			  	if (num == '5') {
			  		document.dcdipap.url5.value = url;
			  		
			  		
			  		
			 /* 	} 
			  	if (num == '6') {
			  		document.dcdipap.url6.value = url;
			  		
			  		
			/*  	} 
			  	if (num == '7') {
			  		document.dcdipap.url7.value = url;
			  		
			  		
			 /* 	} 
			  	if (num == '8') {
			 		document.dcdipap.url8.value = url;
			 		
			 		/*if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
			 			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
	
			 		}else if ( document.dcdipap.url8.value != "" ) {
			 			document.dcdipap.stringurl.value = document.dcdipap.url8.value;
			 		}
			 		
			 		alert("--typeImage value in 8 --"+document.dcdipap.typeImage.value);
			 		
			  		alert("--url before ajaxupload in num8--"+url);
			  		
			  		
			  	    $.ajaxFileUpload({
			  	        url:'/service/writeup/dipap/DIPAPServlet',
			  	        secureuri:false,
			  	        fileElementId:'realfile8',
			  	        dataType: 'xml',
			  	        success: function(data, success){
			  	    		//document.getElementById("image1").value=msg;
			  	    		
			  	            if(msg.MSG=="Image Successfully Uploaded!!")
			  	            {
			  	                alert("---success---");
			  	                document.getElementById("image1").value="true";
			  	            }
			  	      }
			  	   });*/
			/*  	}	
		  	} else {
	//end of change by veqar
	//			alert("in dr js preview 3 ");
				if (num == '1') {
					eval(document.getElementById('dummyfile1').select());
					eval(document.getElementById('dummyfile1').focus());
				} else if (num == '2') {
					eval(document.getElementById('dummyfile2').select());		
					eval(document.getElementById('dummyfile2').focus());
				} else if (num == '3') {
					eval(document.getElementById('dummyfile3').select());		
					eval(document.getElementById('dummyfile3').focus());
				} else if (num == '4') {
					eval(document.getElementById('dummyfile4').select());		
					eval(document.getElementById('dummyfile4').focus());
				}
	//veqar added code
				  else if (num == '5') {
					eval(document.getElementById('dummyfile5').select());
					eval(document.getElementById('dummyfile5').focus());
				} else if (num == '6') {
					eval(document.getElementById('dummyfile6').select());		
					eval(document.getElementById('dummyfile6').focus());
				} else if (num == '7') {
					eval(document.getElementById('dummyfile7').select());		
					eval(document.getElementById('dummyfile7').focus());
				} else if (num == '8') {
					eval(document.getElementById('dummyfile8').select());		
					eval(document.getElementById('dummyfile8').focus());
				}
	//end of change by veqar
			  //SeRV00195888 Dipap-pdf change by t4646vb start
				//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
				alert("Incorrect selection. Please load file with an extension of .jpeg, .jpg, .pdf, .txt, .doc, .docx, .3gp, .xls or .xlsx");
			//SeRV00195888 Dipap-pdf change by t4646vb end
		  }*/
	  	// End: Added for PMO#472.42
		 // return;
	
	//}


	function preview(what, num){
		
	    //T4317SK changes 
	var statval = 	document.dcdipap.statusInfo.value ;
	//alert("status value "+statval);
   //T4317SK changes	
	// valid file types	
	// SeRV00195888 Dipap-pdf change by t4646vb start
	var fileTypes1=["jpg","jpeg"]; // //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
	var fileTypes=["jpg","jpeg","pdf","txt","doc","docx","3gp","xls","xlsx"];
	// SeRV00195888 Dipap-pdf change by t4646vb end
  	// the id of the preview image tag
	var outImage="previewField";
  	// what to display when the image is not valid
	/***** DO NOT EDIT BELOW *****/
	var source=what.value;
	var model = "";
	var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
	//alert("--- ext--- "+ext);
	// Start: Added for PMO#472.42
	var tcrFirstImageFlag = true; //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187
	var prg = document.dcdipap.prgType.value;	
	if(document.dcdipap.modelYear.value != null){
		model=document.dcdipap.modelYear.value;
	}
	var fileType= "pdf";
	
	// Start: Added for PMO#472.42 by t9453ss
	
	var actualurl = source.replace(/\\/g,"//");
	var lastindex= actualurl.lastIndexOf("//");
	actualurl = actualurl.substring(lastindex+2);
	//alert("---  actualurl--   "+actualurl);
			//T4317SK changes for DIPAP same name issue
 
 // Changes to avoid same image to be added

	var tempString = document.dcdipap.submitStringUrl.value;
		 if(document.dcdipap.submitStringUrl.value !=''){
			if(document.dcdipap.submitStringUrl.value.substring(document.dcdipap.submitStringUrl.value.length - 2) == '||'){
				
				document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value +num+'|'+actualurl;
			}else{
			
				document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value + '||'+num+'|'+actualurl;
			}
		 }else{
			 document.dcdipap.submitStringUrl.value = num+'|'+actualurl;
		 }
 // Changes to avoid same image to be added
	if(actualurl.length   > 20 )
		{
		//alert("---  actualurl--   "+actualurl);
         var imgesize = actualurl.length;
		 //alert("Image size "+ imgesize);
		 imgesize = imgesize - 20;
		 //alert("---  Last 20 of URL--   "+  actualurl.substring(imgesize));
          actualurl = trim(actualurl.substring(imgesize));
		  //alert("---  Last 20 of URL--   "+ actualurl);
		 }
		 //T4317SK changes for DIPAP same name issue
	
	var submitStringUrl = document.dcdipap.submitStringUrl.value;
	//alert("---  submitStringUrl--   "+submitStringUrl);
	var tempsubmitStringUrl = '';
	//alert("StrURL:"+submitStringUrl);
	var fileNamesArray = submitStringUrl.split("||");
	//alert("fileNamesArray - "+fileNamesArray);
	for(var j=0;j<fileNamesArray.length;j++)
	{
		var fileNamesList = fileNamesArray[j];
		
		var fileNames = fileNamesList.split("|");
		
		if(fileNames[0] != num && fileNames[1] == actualurl)
		{
			 alert("Please do not upload image or document with same name");
			 // Changes to avoid same image to be added
			 document.dcdipap.submitStringUrl.value=tempString;
			  // Changes to avoid same image to be added
			// document.getElementById("dummyfile"+num).value = '';
			 //document.getElementById("realfile"+num).form.reset();
			 
			 document.getElementById("realfile"+num).outerHTML = document.getElementById("realfile"+num).outerHTML;  // Added for PMO#472.42 by t9453ss
			 //document.getElementById("dummyfile"+num).focus();
			 return;
		}
		
		if(fileNames[0]!=''){	
			if(fileNames[0] == num){
					if(tempsubmitStringUrl != ''){
					
						tempsubmitStringUrl = tempsubmitStringUrl  + '||'+num+'|'+actualurl	;
					}else{
						tempsubmitStringUrl = num+'|'+actualurl	;
					}
			}

			if(fileNames[0] != num){
					if(tempsubmitStringUrl != ''){
						tempsubmitStringUrl = tempsubmitStringUrl  + '||'+fileNames[0]+'|'+fileNames[1]	;
					}else{
						tempsubmitStringUrl = fileNames[0]+'|'+fileNames[1]	;
					}
			}
		}
	}

	document.dcdipap.submitStringUrl.value=tempsubmitStringUrl;

	// Start: Added for PMO#472.42 by t9453ss
	/////////////////////////////////////////////////
	
	//var dealerCode = document.dcdipap.dealerCode.value;
	//var userId = document.dcdipap.userId.value;
	//alert("---dealerCode-- "+dealerCode);
	//alert("---userId-- "+userId);
	
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
	if(prg == 'T')
	{
		//alert("inside browse tcrcheck");
		if(document.getElementById("cb1")){
			//alert("1");
		if(document.getElementById("cb1").checked==true){
			document.getElementById("tcrCheck").value=document.getElementById("cb1").value;
		  }
		}
		if(document.getElementById("cb2")){
		//	alert("2");
		if(document.getElementById("cb2").checked==true){
			document.getElementById("tcrCheck").value=document.getElementById("cb2").value;
		  }
		}
		//alert("tcrCheck = "+document.getElementById("tcrCheck").value);
	}
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	
	var queryString;
	var image1 = document.getElementById('realfile1').value;
	var image2 = document.getElementById('realfile2').value;
	var image3 = document.getElementById('realfile3').value;
	var image4 = document.getElementById('realfile4').value;	
	var image5 = document.getElementById('realfile5').value;
	var image6 = document.getElementById('realfile6').value;
	var image7 = document.getElementById('realfile7').value;
	var image8 = document.getElementById('realfile8').value;
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187Start
	if(prg == 'T')
	{
		var image9 = document.getElementById('realfile9').value;
	}
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187End
	
	if(prg == 'P')
	{
		var image9 = document.getElementById('realfile9').value;
		var image10 = document.getElementById('realfile10').value;
		var image11 = document.getElementById('realfile11').value;
		var image12 = document.getElementById('realfile12').value;
		var image13 = document.getElementById('realfile13').value;
		var image14 = document.getElementById('realfile14').value;
		var image15 = document.getElementById('realfile15').value;
		var image16 = document.getElementById('realfile16').value;
	}
	var form = document.dcdipap;
	
	form.modelYear.value=model;
	document.dcdipap.typeImage.value = "";
	var ok = "";
	var VIN = form.vinNum.value;
	var odom = form.odom.value;			
									
	var ron = form.ron.value;
	var issue = form.issue.value;
	var servaction = form.servaction.value;
	
	var catg = document.dcdipap.catg.value;		
	form.ProgramType.value = prg;
	var iReq = document.dcdipap.iReq.value;
	var typeImage;
	document.dcdipap.targetAction.value = "holdRequest";
    document.dcdipap.sourceType.value = "BROWSE";
	//alert("- iReq value--"+iReq);
	var stringurl = document.dcdipap.stringurl.value;
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
	var submitTypeImage = "XXXX";
	if(prg == 'T'){
		if(catg == 'F' || catg == 'H'){
			submitTypeImage = "XXXXXXX";
		}else{
			submitTypeImage = "XXXXXX";
		}
		
	}
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	
	/*document.dcdipap.targetAction.value = "holdRequest";
	
	if( prg!='P') 
	{
		//VIN plate Image Validation				
		if ( (image1 != "") && (image1 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //3/4th Image Validation				
		if ( (image2 != "") && (image2 != null)  ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //Odometer Image Validation							
		if ( (image3 != "") && (image3 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //Affected Area Image Validation							
		if ( (image4 != "") && (image4 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	} 
	else
	{
	    // TransID Image Documentation				
		if ( (image1 != "") && (image1 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}

	    //2nd Image Validation				
		if ( (image2 != "") && (image2 != null)  ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    // 3rd Image Validation							
		if ( (image3 != "") && (image3 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
			
	   //4th Image Validation							
		if ( (image4 != "") && (image4 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	}
	
	if ( (image5 != "") && (image5 != null) ) 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	
	if ( (image6 != "") && (image6 != null) )
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	
	if ( (image7 != "") && (image7 != null) )
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
		
	if ( (image8 != "") && (image8 != null) ) 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	/*if(prg == 'P') 
	{
		if ( (image9 != "") && (image9 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "9";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image10 != "") && (image10 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image11 != "") && (image11 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "B";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image12 != "") && (image12 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "C";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image13 != "") && (image13 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "D";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image14 != "") && (image14 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "E";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image15 != "") && (image15 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "F";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
		
		if ( (image16 != "") && (image16 != null) ) 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "G";
		} else 
		{
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	}
	
	
	
	if (document.dcdipap.url1.value != "") {
		document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";

	}	

	if (document.dcdipap.url2.value != "" && document.dcdipap.stringurl.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url2.value+"||";

	}else if ( document.dcdipap.url2.value != "" ){
		document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
	}
	
	if (document.dcdipap.url3.value != "" && document.dcdipap.stringurl.value != "" ) {

		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url3.value+"||";
	}else if ( document.dcdipap.url3.value != "" ){
		document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
	}	

	if (document.dcdipap.url4.value != "" && document.dcdipap.stringurl.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url4.value+"||";

	}else if ( document.dcdipap.url4.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
	}	

	if (document.dcdipap.url5.value != "" && document.dcdipap.stringurl.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url5.value+"||";

	}else if ( document.dcdipap.url5.value != "" ){
		document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
	}
	
	if (document.dcdipap.url6.value != "" && document.dcdipap.stringurl.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url6.value+"||";

	}else if ( document.dcdipap.url6.value != "" ){
		document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
	}
		
	if (document.dcdipap.url7.value != "" && document.dcdipap.stringurl.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url7.value+"||";

	}else if ( document.dcdipap.url7.value != "" ) {
		document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
	}	

	if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
		if(prg != 'P')
		{
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
		}else
		{
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value+"||";
		}

	}else if ( document.dcdipap.url8.value != "" ) {
		if(prg != 'P')
		{
			document.dcdipap.stringurl.value = document.dcdipap.url8.value;
		}else
		{
			document.dcdipap.stringurl.value = document.dcdipap.url8.value+"||";	
		}
	}
	
	
	// Start: Added for PMO#472.42
	
/*	if(prg == 'P')
	{
		if (document.dcdipap.url9.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url9.value+"||";

		}else if ( document.dcdipap.url9.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url9.value+"||";
		}
		
		
		if (document.dcdipap.url10.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url10.value+"||";

		}else if ( document.dcdipap.url10.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url10.value+"||";
		}
		
		if (document.dcdipap.url11.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url11.value+"||";

		}else if ( document.dcdipap.url11.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url11.value+"||";
		}
		
		if (document.dcdipap.url12.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url12.value+"||";

		}else if ( document.dcdipap.url12.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url12.value+"||";
		}
		
		if (document.dcdipap.url13.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url13.value+"||";

		}else if ( document.dcdipap.url13.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url13.value+"||";
		}
		
		if (document.dcdipap.url14.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url14.value+"||";

		}else if ( document.dcdipap.url14.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url14.value+"||";
		}
		
		if (document.dcdipap.url15.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url15.value+"||";

		}else if ( document.dcdipap.url15.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url15.value+"||";
		}
		
		if (document.dcdipap.url16.value != "" && document.dcdipap.stringurl.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url16.value;

		}else if ( document.dcdipap.url16.value != "" ) {
			document.dcdipap.stringurl.value = document.dcdipap.url16.value;
		}
		
	}
	
	var iReq = document.dcdipap.iReq.value;
	//alert("---iReq-- "+iReq);
	
	var lopDescription = document.getElementById("lopDescription").value;*/
	//queryString = "&vinNum="+document.dcdipap.vinNum.value+"&odom="+document.dcdipap.odom.value+"&cost="+document.dcdipap.cost.value+"&ron="+document.dcdipap.ron.value+"&issue="+document.dcdipap.issue.value+"&servaction="+document.dcdipap.servaction.value+"&catg="+document.dcdipap.catg.value+"&lopDescription="+lopDescription+"&typeImage="+document.dcdipap.typeImage.value+"&iReq="+iReq+"&claimType="+document.dcdipap.claimType.value+"&targetAction=holdRequest&ProgramType="+prg+"&lopDescription="+lopDescription;
	//alert("---queryString-- "+queryString);
	//alert("--typeImage value-- "+document.dcdipap.typeImage.value);
	
	//////////////////////////////////////////////////
	
	
	
  	if(num == '3' || num == '4')
  	{
  		if(prg == 'P')
  		{
  			if(fileType == ext)
  			{
  				url = source.replace(/\\/g,"//");
  				if (num == '3') 
  				{
  			  		document.dcdipap.url3.value = url;
  			  		
	  			  	/*if (document.dcdipap.url3.value != "" && document.dcdipap.submitStringUrl.value != "" ) 
	  			  	{
						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url3.value+"||";
					}else if (document.dcdipap.url3.value != "" )
					{
						document.dcdipap.submitStringUrl.value = document.dcdipap.url3.value+"||";
						document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
					}*/
  			  		
	  			  	if (document.dcdipap.url3.value != "") {
	  					document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
	  				}
	  			  	
	  			    if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
                 //t4317sk changes for need info start
				 if(statval == 'NEEDINFO')
                 {
		           document.dcdipap.statusInfo.value = "NEEDINFO";
		           //alert("inside Need info");
		         }	
               else
                {
	  			  	 document.dcdipap.statusInfo.value = "HOL";
			          //alert("inside HOLD");
			     }
				 //t4317sk changes for need info end
	  			 }
	  			  
	  			    if(prg == 'P')
					{
						typeImage ="XX3XXXXXXXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "3")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
						
						
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXOXXXXX";
						submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "O")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
						
					} 
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXOXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "O")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
						
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			    document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	} 
  			  	if (num == '4') 
  			  	{
	  			 	//Changes for DIPAP RSA  - Start By Ankur Nayak[T8576AN]
  			  		disableRequiredField(this.document);
  			  		//Changes for DIPAP RSA - End By Ankur Nayak[T8576AN]
					document.dcdipap.url4.value = url;
  			 		
  			 		/*if (document.dcdipap.url4.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url4.value+"||";
  		
  					}else if ( document.dcdipap.url4.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url4.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
  					}*/
  			 		
  			 		
  			 		if (document.dcdipap.url4.value != "") {
	  					document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
	  				}
  			 		
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						 //T4317SK changes for needinfo
                         if(statval == 'NEEDINFO')
                         {
		                    document.dcdipap.statusInfo.value = "NEEDINFO";
		                    // alert("inside Need info");
	                   	}	
                       else
                       {
                        //alert("inside HOLD");
	  			  	    document.dcdipap.statusInfo.value = "HOL";
					   }
					   //T4317SK changes for needinfo
	  			  	}
  			 		
	  			    if(prg == 'P')
					{
						typeImage ="XXX4XXXXXXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "4");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXAXXXX";
						submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "A");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					} 
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXAXXXXX";
						submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "A");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			    document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					//document.dcdipap.submitStringUrl.value=tempsubmitStringUrl;
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			}
  			else
  			{
  				if (num == '3') 
  				{
  					alert(ErrorsDict.incorrectDocumentMsg);
  					//eval(document.getElementById('dummyfile3').select());		
  					//eval(document.getElementById('dummyfile3').focus());
					//document.getElementById('dummyfile3').value = '';  // Added for PMO#472.42 by t9453ss
					document.getElementById('realfile3').outerHTML = document.getElementById('realfile3').outerHTML; // Added for PMO#472.42 by t9453ss
  				}
  				if (num == '4') 
  				{
  					alert(ErrorsDict.incorrectDocumentMsg);
  					//eval(document.getElementById('dummyfile4').select());		
  					//eval(document.getElementById('dummyfile4').focus());
				//	document.getElementById('dummyfile4').value = '';  // Added for PMO#472.42 by t9453ss
					document.getElementById('realfile4').outerHTML = document.getElementById('realfile4').outerHTML; // Added for PMO#472.42 by t9453ss
  				}
				
  			}
  		}
  		else
  		{
  			for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
  			if(i<fileTypes.length)
  			{
  				url = source.replace(/\\/g,"//");
  				if (num == '3') {
  			  		document.dcdipap.url3.value = url;
  			  		
	  			  	/*if (document.dcdipap.url3.value != "" && document.dcdipap.submitStringUrl.value != "" ) 
	  			  	{
						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url3.value+"||";
					}else if (document.dcdipap.url3.value != "" )
					{
						document.dcdipap.submitStringUrl.value = document.dcdipap.url3.value+"||";
						document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
					}*/
	  			  
  			  		if (document.dcdipap.url3.value != "") {
	  					document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
	  				}
	  			  	
	  			  	
	  			    if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                   if(statval == 'NEEDINFO')
                   {
		              document.dcdipap.statusInfo.value = "NEEDINFO";
		              //alert("inside Need info");
		            }	
                  else
                   {
                         //alert("inside HOLD");
	  			  	    document.dcdipap.statusInfo.value = "HOL";
				   }
				    //T4317SK changes for needinfo
					}
	  			    if(prg == 'P')
					{
	  			    	typeImage ="XX3XXXXXXXXXXXXX";
	  			    	submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "3")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXOXXXXX";
						submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "O")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXOXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,2)+submitTypeImage.substring(2,3).replace("X", "O")+submitTypeImage.substring(3);
						//alert("---submitTypeImage in 3--"+submitTypeImage);
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			    
	  			    document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	} 
  			  	if (num == '4') {
  			 		document.dcdipap.url4.value = url;
  			 		
  			 		/*if (document.dcdipap.url4.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url4.value+"||";
  		
  					}else if ( document.dcdipap.url4.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url4.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
  					}*/
  			 		
  			 		if (document.dcdipap.url4.value != "") {
	  					document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
	  				}
  			 		
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                           if(statval == 'NEEDINFO')
                             {
		                        document.dcdipap.statusInfo.value = "NEEDINFO";
		                       // alert("inside Need info");
		                      }	
                          else
                            {
							    //alert("Inside HOLD");
	  			  	            document.dcdipap.statusInfo.value = "HOL";
	  			  	        }
							 //T4317SK changes for needinfo
					}
  			 		
	  			    if(prg == 'P')
					{
	  			    	typeImage ="XXX4XXXXXXXXXXXX";
	  			    	submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "4");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXAXXXX";
						submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "A");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					} //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXAXXXXX";
						submitTypeImage = submitTypeImage.substring(0,3)+submitTypeImage.substring(3,4).replace("X", "A");
						//alert("---submitTypeImage in 4--"+submitTypeImage);
					} //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			    document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			}
  			else
  			{
  				if (num == '3') {
  					alert(ErrorsDict.incorrectImageMsg);
  					//eval(document.getElementById('dummyfile3').select());		
  					//eval(document.getElementById('dummyfile3').focus());
  				//	document.getElementById("dummyfile3").value = '';  // Added for PMO#472.42 by t9453ss
					document.getElementById('realfile3').outerHTML = document.getElementById('realfile3').outerHTML; // Added for PMO#472.42 by t9453ss
  				}
  				if (num == '4') 
  				{
  					alert(ErrorsDict.incorrectImageMsg);
  					//eval(document.getElementById('dummyfile4').select());		
  					//eval(document.getElementById('dummyfile4').focus());
  					//document.getElementById("dummyfile4").value = '';  // Added for PMO#472.42 by t9453ss
					document.getElementById('realfile4').outerHTML = document.getElementById('realfile4').outerHTML; // Added for PMO#472.42 by t9453ss
  				}
  			}
  		}
  		
  	}
  	else
  	{
  		for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
  		
  		if (i<fileTypes.length) 
  		{
  		  	url = source.replace(/\\/g,"//");
//  			alert("url in js is in dr in if"+url);
  			  	if (num == '1') 
  			  	{
  			  	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
  			  	 if(prg == 'T')
					{
  			  		for (var j=0; j<fileTypes1.length; j++) 	if (fileTypes1[j]==ext) break;
  			  	if (j>= fileTypes1.length) 
  		  		{
  			  	//	document.getElementById("dummyfile1").value = '';  
					document.getElementById('realfile1').outerHTML = document.getElementById('realfile1').outerHTML; 
					tcrFirstImageFlag=false;
					alert(ErrorsDict.incorrectTCRFirstMsg);
					
  		  		}
					}
  			  	if(tcrFirstImageFlag){
  			  	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
  			  		document.dcdipap.url1.value = url;
  			  	    //alert("---url1 value in preview--   "+document.dcdipap.url1.value);
  			  	    
	  			  	if (document.dcdipap.url1.value != "") {
	  					//document.dcdipap.submitStringUrl.value = document.dcdipap.url1.value+"||";
	  					document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";
	  					
	  				}

					if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						    //T4317SK changes for needinfo
                  if(statval == 'NEEDINFO')
                     {
		              document.dcdipap.statusInfo.value = "NEEDINFO";
		              //alert("inside Need info");
		             }	
              else
                    {
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	    //alert("inside Hold"); 
					}
		  			}
	  			    //alert("---target action in 1--"+document.dcdipap.targetAction.value);
	  			   // alert("---string url in 1--  "+document.dcdipap.stringurl.value);

	  			    if(prg == 'P')
					{
						typeImage ="IXXXXXXXXXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1).replace("X", "I")+submitTypeImage.substring(1);
						//alert("---submitTypeImage in 1--"+submitTypeImage);
						
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="VXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1).replace("X", "V")+submitTypeImage.substring(1);
						//alert("---submitTypeImage in 1--"+submitTypeImage);
					} 
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="VXXXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1).replace("X", "V")+submitTypeImage.substring(1);
						//alert("---submitTypeImage in 1--"+submitTypeImage);
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    
	  			   // alert("---final--"+submitTypeImage);
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			    document.dcdipap.typeImage.value = typeImage;
	  			   // alert("---submitTypeImage--   "+document.dcdipap.submitTypeImage.value);
	  				enableRequiredField(this.document);
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  		}			
  			  	} 
  			  	if (num == '2') 
  			  	{
  			  		document.dcdipap.url2.value = url;
					//alert("---url2 in 2nd image --"+document.dcdipap.url2.value);
  			  		
					
					/*if (document.dcdipap.url2.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url2.value+"||";
				
					}else if ( document.dcdipap.url2.value != "" ){
						document.dcdipap.submitStringUrl.value = document.dcdipap.url2.value+"||";
						document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
					}*/
					
					if ( document.dcdipap.url2.value != "" ){
						document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
					}
					
					if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                         if(statval == 'NEEDINFO')
                         {
		                   document.dcdipap.statusInfo.value = "NEEDINFO";
		                   //alert("inside Need info");
		                  }	
                        else
                        {
                          //alert("inside Hold ");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	    }
		  			}
	  			    //alert("---target action in 1--"+document.dcdipap.targetAction.value);
	  			  // alert("---string url in 2--  "+document.dcdipap.stringurl.value);
	  			  
	  			  	if(prg == 'P')
					{
						typeImage ="X2XXXXXXXXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1)+submitTypeImage.substring(1,2).replace("X", "2")+submitTypeImage.substring(2);
						//alert("---submitTypeImage in 2--"+submitTypeImage);
						
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XTXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1)+submitTypeImage.substring(1,2).replace("X", "T")+submitTypeImage.substring(2);
						//alert("---submitTypeImage in 2--"+submitTypeImage);
						
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XTXXXXXXX";
						submitTypeImage = submitTypeImage.substring(0,1)+submitTypeImage.substring(1,2).replace("X", "T")+submitTypeImage.substring(2);
						//alert("---submitTypeImage in 2--"+submitTypeImage);
						
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			    //alert("---sourceType --"+document.dcdipap.sourceType.value);
	  			  
	  			    document.dcdipap.submitTypeImage.value = submitTypeImage;
	  			   // alert("---document.dcdipap.submitTypeImage.value --"+document.dcdipap.submitTypeImage.value);
	  			  
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
	  			    form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	
  			  	} 
  			  	if (num == '5') 
  			  	{
  			  		document.dcdipap.url5.value = url;
  			  		
	  			  	/*if (document.dcdipap.url5.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url5.value+"||";
	
	  				}else if ( document.dcdipap.url5.value != "" ){
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.url5.value+"||";
	  					document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
	  				}*/
	  			  	
	  			  	  			  	
  			  		if ( document.dcdipap.url5.value != "" ){
	  					document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
	  				}
	  			  	
	  			  	if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                  if(statval == 'NEEDINFO')
                   {
		              document.dcdipap.statusInfo.value = "NEEDINFO";
		               //alert("inside Need info");
		           }	
                   else
                   {
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	    //alert("inside HOLD");
					}
					  //T4317SK changes for needinfo
					}
	  			  
	  			  	if(prg == 'P')
					{
						typeImage ="XXXX5XXXXXXXXXXX";
					}
					else if(prg == 'V')  //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXX5XXX";
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXX5XXXX";
						submitTypeImage = submitTypeImage.substring(0,4)+submitTypeImage.substring(4,5).replace("5", "T")+submitTypeImage.substring(5);
						
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	  			  	
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
	  			    form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	} 
  			  	if (num == '6') 
  			  	{
  			  		document.dcdipap.url6.value = url;
  			  		
	  			  	/*if (document.dcdipap.url6.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url6.value+"||";
	
	  				}else if ( document.dcdipap.url6.value != "" ){
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.url6.value+"||";
	  					document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
	  				}*/
	  				
	  				if ( document.dcdipap.url6.value != "" ){
	  					document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
	  				}
	  			  	
	  			  	if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                    if(statval == 'NEEDINFO')
                        {
		                  document.dcdipap.statusInfo.value = "NEEDINFO";
		                   //alert("inside Need info");
		                }	
                   else
                      {
                         //alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			     	}
						 //T4317SK changes for needinfo
					 }
	  			  	if(prg == 'P') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXX6XXXXXXXXXX";
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXX6XX";
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXXX6XXX";
						submitTypeImage = submitTypeImage.substring(0,5)+submitTypeImage.substring(5,6).replace("6", "T")+submitTypeImage.substring(6);
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End

					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
	  			  	form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	
  			  	} 
  			  	if (num == '7') 
  			  	{
  			  		document.dcdipap.url7.value = url;
  			  		
	  			  	/*if (document.dcdipap.url7.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url7.value+"||";
	
	  				}else if ( document.dcdipap.url7.value != "" ) {
	  					document.dcdipap.submitStringUrl.value = document.dcdipap.url7.value+"||";
	  					document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
	  				}*/
	  				
	  				if ( document.dcdipap.url7.value != "" ) {
	  					document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
	  				}
	  			  	
	  			  	if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                   if(statval == 'NEEDINFO')
                    {
		              document.dcdipap.statusInfo.value = "NEEDINFO";
		             //alert("inside Need info");
		            }	
                   else
                    {
					    //alert("inside Hold ");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					 //T4317SK changes for needinfo
					}
	  			  	if(prg == 'P') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXXX7XXXXXXXXX";
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXXX7X";
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXXXX7XX";
						if(catg == 'F' || catg == 'H'){
						submitTypeImage = submitTypeImage.substring(0,6)+submitTypeImage.substring(6,7).replace("7", "T")+submitTypeImage.substring(7);
						}
					}
	  			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End

					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
	  			  	form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	} 
  			  	if (num == '8') 
  			  	{
  			 		document.dcdipap.url8.value = url;


					/*if (document.dcdipap.url8.value != "" && document.dcdipap.submitStringUrl.value != "" )
					{
						if(prg != 'P')
						{
							document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url8.value;
						}else
						{
							document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url8.value+"||";
						}

					}else if ( document.dcdipap.url8.value != "" ) 
					{
						if(prg != 'P')
						{
							document.dcdipap.submitStringUrl.value = document.dcdipap.url8.value;
							document.dcdipap.stringurl.value = document.dcdipap.url8.value;
						}else
						{
							document.dcdipap.submitStringUrl.value = document.dcdipap.url8.value+"||";	
							document.dcdipap.stringurl.value = document.dcdipap.url8.value;
						}
					}*/
  			 		
  			 		if ( document.dcdipap.url8.value != "" ) 
					{
						if(prg != 'P' && prg != 'T') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
						{
							document.dcdipap.stringurl.value = document.dcdipap.url8.value;
						}else
						{
							document.dcdipap.stringurl.value = document.dcdipap.url8.value+"||";	
						}
					}
					
					if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						    //T4317SK changes for needinfo
                    if(statval == 'NEEDINFO')
                   {
		               document.dcdipap.statusInfo.value = "NEEDINFO";
		               //alert("inside Need info");
	             	}	
                 else
                  {
                        //alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
					if(prg == 'P') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXXXX8XXXXXXXX";
					}
					else if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						typeImage ="XXXXXXX8";
					}
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					else 
					{
						typeImage ="XXXXXXX8X";
					}
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
					
					
					/*document.dcdipap.action="/service/writeup/dipap/jsp/imageUpload.jsp?&targetAction=holdRequest&typeImage="+typeImage+"&image1="+url+"&ProgramType="+prg+"&dealerCode="+dealerCode+"&userId="+userId+"&stringurl="+document.dcdipap.stringurl.value;
  			  		document.dcdipap.method="POST";
  			  		document.dcdipap.submit();*/
  			  	}	
  			  	
  			    if (num == '9') {
			 		document.dcdipap.url9.value = url;
			 		
			 		/*if (document.dcdipap.url9.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url9.value+"||";
		
					}else if ( document.dcdipap.url9.value != "" ) {
						document.dcdipap.submitStringUrl.value = document.dcdipap.url9.value+"||";
						document.dcdipap.stringurl.value = document.dcdipap.url9.value+"||";
					}*/
					
					if ( document.dcdipap.url9.value != "" ) {
						//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
						if(prg != 'P')
						{
							document.dcdipap.stringurl.value = document.dcdipap.url9.value;
						}else
						{
							document.dcdipap.stringurl.value = document.dcdipap.url9.value+"||";
						}
						//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
						
					}
			 		
			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                    if(statval == 'NEEDINFO')
                      {
		                document.dcdipap.statusInfo.value = "NEEDINFO";
		                // alert("inside Need info");
		               }	
                    else
                    {
						//alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
			 		//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
			 		if(prg == 'P') 
					{
						typeImage ="XXXXXXXX9XXXXXXX";
					}else {
						typeImage ="XXXXXXXX9";
					}
			 		//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
			  	}
  			    if (num == '10') {
			 		document.dcdipap.url10.value = url;
			 		
			 		/*if (document.dcdipap.url10.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url10.value+"||";
		
					}else if ( document.dcdipap.url10.value != "" ) {
						document.dcdipap.submitStringUrl.value = document.dcdipap.url10.value+"||";
						document.dcdipap.stringurl.value = document.dcdipap.url10.value+"||";
					}*/
					
					if ( document.dcdipap.url10.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url10.value+"||";
					}
			 		
			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                    if(statval == 'NEEDINFO')
                    {
		              document.dcdipap.statusInfo.value = "NEEDINFO";
		             //alert("inside Need info");
		            }	
                  else
                  {
					     //alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
			 		
			 		if(prg == 'P')
					{
			 			typeImage ="XXXXXXXXXAXXXXXX";
					}
					

					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
			  	}
  			    if (num == '11') {
  			 		document.dcdipap.url11.value = url;
  			 		/*
  			 		if (document.dcdipap.url11.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url11.value+"||";
  		
  					}else if ( document.dcdipap.url11.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url11.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url11.value+"||";
  					}*/
  					
  					if ( document.dcdipap.url11.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url11.value+"||";
  					}
  			 		
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                     if(statval == 'NEEDINFO')
                     {
		                 document.dcdipap.statusInfo.value = "NEEDINFO";
		                  //alert("inside Need info");
		             }	
                  else
                    {
	  			  	      //alert("inside Hold ");
						document.dcdipap.statusInfo.value = "HOL";
	  			  	 }
					 //T4317SK changes for needinfo
					}
  			 		
  			 		if(prg == 'P')
					{
  			 			typeImage ="XXXXXXXXXXBXXXXX";
					}
					
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			    if (num == '12') {
  			 		document.dcdipap.url12.value = url;
  			 		
  			 		/*if (document.dcdipap.url12.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url12.value+"||";
  		
  					}else if ( document.dcdipap.url12.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url12.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url12.value+"||";
  					}*/
  					
  					if ( document.dcdipap.url12.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url12.value+"||";
  					}
  			 		
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						    //T4317SK changes for needinfo
                        if(statval == 'NEEDINFO')
                       {
		                  document.dcdipap.statusInfo.value = "NEEDINFO";
		                  //alert("inside Need info");
	                 	}	
                       else
                      {  
                         //alert("inside Hold"); 
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			    	}
						//T4317SK changes for needinfo
					}
  			 		
  			 		if(prg == 'P')
					{
  			 			typeImage ="XXXXXXXXXXXCXXXX";
					}
					
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			    if (num == '13') {
  			 		document.dcdipap.url13.value = url;
  			 		
  			 		/*if (document.dcdipap.url13.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url13.value+"||";
  		
  					}else if ( document.dcdipap.url13.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url13.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url13.value+"||";
  					}*/
  					
  					if ( document.dcdipap.url13.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url13.value+"||";
  					}
  			 		
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                       if(statval == 'NEEDINFO')
                      {
		                document.dcdipap.statusInfo.value = "NEEDINFO";
		                 //alert("inside Need info");
		               }	
                     else
                     {
                        //alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
  			 		
  			 		
  			 		if(prg == 'P')
					{
  			 			typeImage ="XXXXXXXXXXXXDXXX";
					}
					

					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			    if (num == '14') {
  			 		document.dcdipap.url14.value = url;
  			 		
  			 		/*if (document.dcdipap.url14.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url14.value+"||";
  		
  					}else if ( document.dcdipap.url14.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url14.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url14.value+"||";
  					}*/
  					
  					if ( document.dcdipap.url14.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url14.value+"||";
  					}
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                        if(statval == 'NEEDINFO')
                        {
		                  document.dcdipap.statusInfo.value = "NEEDINFO";
		                //  alert("inside Need info");
		                }	
                     else
                     {
						// alert("inside Hold");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
  			 		}
  			 		
  			 		if(prg == 'P')
					{
  			 			typeImage ="XXXXXXXXXXXXXEXX";
					}
					
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			    if (num == '15') {
  			 		document.dcdipap.url15.value = url;
  			 		
  			 		/*if (document.dcdipap.url15.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url15.value+"||";
  		
  					}else if ( document.dcdipap.url15.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url15.value+"||";
  						document.dcdipap.stringurl.value = document.dcdipap.url15.value+"||";
  					}*/
  			 		
  					
  					if ( document.dcdipap.url15.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url15.value+"||";
  					}
  					
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                      if(statval == 'NEEDINFO')
                      {
		                 document.dcdipap.statusInfo.value = "NEEDINFO";
		               // alert("inside Need info");
	                	}	
                   else
                   {
					  //  alert("inside hold");
	  		 	  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
  			 		if(prg == 'P')
					{
  			 			typeImage ="XXXXXXXXXXXXXXFX";
					}
					

					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			  	}
  			    if (num == '16') {
  			 		document.dcdipap.url16.value = url;
  			 		
  			 		/*if (document.dcdipap.url16.value != "" && document.dcdipap.submitStringUrl.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.submitStringUrl.value+document.dcdipap.url16.value;
  		
  					}else if ( document.dcdipap.url16.value != "" ) {
  						document.dcdipap.submitStringUrl.value = document.dcdipap.url16.value;
  						document.dcdipap.stringurl.value = document.dcdipap.url16.value;
  					}*/
  			 		
  					if ( document.dcdipap.url16.value != "" ) {
  						document.dcdipap.stringurl.value = document.dcdipap.url16.value;
  					}
  					
  			 		if(document.dcdipap.iReq.value == 0)
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdRequest";
	  			  	}
	  			  	else
	  			  	{
	  			  		document.dcdipap.targetAction.value = "holdUpdateRequest";
						     //T4317SK changes for needinfo
                     if(statval == 'NEEDINFO')
                    {
		           document.dcdipap.statusInfo.value = "NEEDINFO";
		            //alert("inside Need info");
	             	}	
                  else
                   {
					  //alert("inside HOLD");
	  			  		document.dcdipap.statusInfo.value = "HOL";
	  			  	}
					//T4317SK changes for needinfo
					}
  			 		if(prg == 'P')
					{
						typeImage ="XXXXXXXXXXXXXXXG";
					}
					
					document.dcdipap.typeImage.value = typeImage;
					enableRequiredField(this.document); // DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
  			 		form.action="/service/writeup/dipap/DIPAPServlet";
					form.method="POST";
					form.submit();
  			 		
  			 	 /*  if (document.dcdipap.url16.value != "") {
			  			document.dcdipap.stringurl.value = document.dcdipap.url16.value;
	
			  		}
					if(prg == 'P')
					{
						typeImage ="XXXXXXXXXXXXXXXG";
					}
					else
					{
						typeImage ="XXXXXXX8";
					}*/
					
			  		//queryString= queryString +"&stringurl="+document.dcdipap.stringurl.value+"&url16="+document.dcdipap.url16.value;
			  		
			  		//alert("---queryString-- "+queryString);*/
			  		//alert("---url16-- "+document.dcdipap.url16.value);
			  		//alert("---stringurl-- "+document.dcdipap.stringurl.value);
					//alert("--typeImage value in 1 --"+document.dcdipap.typeImage.value);
			  		//alert("---targetAction value--- "+document.dcdipap.targetAction.value);
			  		
			  	    /*$.ajaxFileUpload({
			  	        //url:'/service/writeup/dipap/DIPAPServlet'+queryString,
						url:'/service/writeup/dipap/DIPAPServlet',
			  	        secureuri:false,
			  	        fileElementId:'realfile16',
			  	        dataType: 'xml',
			  	        success: function(data, success){
			  	                //alert("---success---");
			  	      }
			  	   });*/

				   // document.dcdipap.action="/service/writeup/dipap/jsp/imageUpload.jsp?&targetAction=holdRequest&typeImage="+typeImage+"&image1="+url+"&ProgramType="+prg+"&dealerCode="+dealerCode+"&userId="+userId+"&stringurl="+document.dcdipap.stringurl.value;
  			  		//document.dcdipap.method="POST";
  			  		//document.dcdipap.submit();
  			  	}
  		  } 
  		  else 
  		  {
  	//end of change by veqar
//  				alert("in dr js preview 3 ");
  				if (num == '1') {
  					//eval(document.getElementById('dummyfile1').select());
  					//eval(document.getElementById('dummyfile1').focus());
  				//	document.getElementById("dummyfile1").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile1').outerHTML = document.getElementById('realfile1').outerHTML;   // Added for PMO#472.42 by t9453ss
  				} else if (num == '2') {
  					//eval(document.getElementById('dummyfile2').select());		
  					//eval(document.getElementById('dummyfile2').focus());
  					//document.getElementById("dummyfile2").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile2').outerHTML = document.getElementById('realfile2').outerHTML;   // Added for PMO#472.42 by t9453ss
  				} else if (num == '5') {
  					//eval(document.getElementById('dummyfile5').select());
  					//eval(document.getElementById('dummyfile5').focus());
  				//	document.getElementById("dummyfile5").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile5').outerHTML = document.getElementById('realfile5').outerHTML;   // Added for PMO#472.42 by t9453ss
  				} else if (num == '6') {
  					//eval(document.getElementById('dummyfile6').select());		
  					//eval(document.getElementById('dummyfile6').focus());
  				//	document.getElementById("dummyfile6").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile6').outerHTML = document.getElementById('realfile6').outerHTML;   // Added for PMO#472.42 by t9453ss
  				} else if (num == '7') {
  					//eval(document.getElementById('dummyfile7').select());		
  					//eval(document.getElementById('dummyfile7').focus());
  				//	document.getElementById("dummyfile7").value = '';  // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile7').outerHTML = document.getElementById('realfile7').outerHTML;  // Added for PMO#472.42 by t9453ss
  				} else if (num == '8') {
  					//eval(document.getElementById('dummyfile8').select());		
  					//eval(document.getElementById('dummyfile8').focus());
  				//	document.getElementById("dummyfile8").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile8').outerHTML = document.getElementById('realfile8').outerHTML;  // Added for PMO#472.42 by t9453ss
  				}
  				
  				else if (num == '9') {
  					//eval(document.getElementById('dummyfile9').select());		
  					//eval(document.getElementById('dummyfile9').focus());
  				//	document.getElementById("dummyfile9").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile9').outerHTML = document.getElementById('realfile9').outerHTML;  // Added for PMO#472.42 by t9453ss
  				}else if (num == '10') {
  					//eval(document.getElementById('dummyfile10').select());		
  					//eval(document.getElementById('dummyfile10').focus());
  				//	document.getElementById("dummyfile10").value = '';  // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile10').outerHTML = document.getElementById('realfile10').outerHTML;  // Added for PMO#472.42 by t9453ss
  				}else if (num == '11') {
  					//eval(document.getElementById('dummyfile11').select());		
  					//eval(document.getElementById('dummyfile11').focus());
  				//	document.getElementById("dummyfile11").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile11').outerHTML = document.getElementById('realfile11').outerHTML;   // Added for PMO#472.42 by t9453ss
  				}else if (num == '12') {
  					//eval(document.getElementById('dummyfile12').select());		
  					//eval(document.getElementById('dummyfile12').focus());
  				//	document.getElementById("dummyfile12").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile12').outerHTML = document.getElementById('realfile12').outerHTML;   // Added for PMO#472.42 by t9453ss
  				}else if (num == '13') {
  					//eval(document.getElementById('dummyfile13').select());		
  					//eval(document.getElementById('dummyfile13').focus());
//document.getElementById("dummyfile13").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile13').outerHTML = document.getElementById('realfile13').outerHTML;   // Added for PMO#472.42 by t9453ss
  				}else if (num == '14') {
  					//eval(document.getElementById('dummyfile14').select());		
  					//eval(document.getElementById('dummyfile14').focus());
  				//	document.getElementById("dummyfile14").value = '';   // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile14').outerHTML = document.getElementById('realfile14').outerHTML;    // Added for PMO#472.42 by t9453ss
  				}else if (num == '15') {
  					//eval(document.getElementById('dummyfile15').select());		
  					//eval(document.getElementById('dummyfile15').focus());
  				//	document.getElementById("dummyfile15").value = '';    // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile15').outerHTML = document.getElementById('realfile15').outerHTML;    // Added for PMO#472.42 by t9453ss
  				}else if (num == '16') {
  					//eval(document.getElementById('dummyfile16').select());		
  					//eval(document.getElementById('dummyfile16').focus());
  				//	document.getElementById("dummyfile16").value = '';    // Added for PMO#472.42 by t9453ss
  					document.getElementById('realfile16').outerHTML = document.getElementById('realfile16').outerHTML;   // Added for PMO#472.42 by t9453ss
  				}
  				
  	//end of change by veqar
  			  //SeRV00195888 Dipap-pdf change by t4646vb start
  				//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
  				//Changes bt t8415sk for DIPAP TCR RSA PMO 472.45 Start
  				if(prg == 'T' && num =='1'){
  					//alert("@1");
  					alert(ErrorsDict.incorrectTCRFirstMsg);
  				}else{//alert("@1");
  					alert(ErrorsDict.incorrectImageMsg);
  				}
  				//Changes bt t8415sk for DIPAP TCR RSA PMO 472.45 Start
  			//SeRV00195888 Dipap-pdf change by t4646vb end
  		  }
  	}
	
	/*var queryString;
	var image1 = document.getElementById('dummyfile1').value;
	var image2 = document.getElementById('dummyfile2').value;
	var image3 = document.getElementById('dummyfile3').value;
	var image4 = document.getElementById('dummyfile4').value;	
	var image5 = document.getElementById('dummyfile5').value;
	var image6 = document.getElementById('dummyfile6').value;
	var image7 = document.getElementById('dummyfile7').value;
	var image8 = document.getElementById('dummyfile8').value;
	var prg = document.dcdipap.prgType.value;	
	
	alert("---image1--- "+image1);
	document.dcdipap.targetAction.value = "holdRequest";
	
	if( prg!='P') 
	{
		//VIN plate Image Validation				
		if ( (image1 != "") && (image1 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //3/4th Image Validation				
		if ( (image2 != "") && (image2 != null)  ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //Odometer Image Validation							
		if ( (image3 != "") && (image3 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    //Affected Area Image Validation							
		if ( (image4 != "") && (image4 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	} 
	else
	{
	    // TransID Image Documentation				
		if ( (image1 != "") && (image1 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}

	    //2nd Image Validation				
		if ( (image2 != "") && (image2 != null)  ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	
	    // 3rd Image Validation							
		if ( (image3 != "") && (image3 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
			
	   //4th Image Validation							
		if ( (image4 != "") && (image4 != null) ) {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
		} else {
			document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
		}
	}
	
	if ( (image5 != "") && (image5 != null) ) 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	
	
	if ( (image6 != "") && (image6 != null) )
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	
	if ( (image7 != "") && (image7 != null) )
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
		
	if ( (image8 != "") && (image8 != null) ) 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
	} else 
	{
		document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
	}
	
	
	var iReq = document.dcdipap.iReq.value;
	var lopDescription = document.getElementById("lopDescription").value;
	queryString = "?vinNum="+document.dcdipap.vinNum.value+"&odom="+document.dcdipap.odom.value+"&cost="+document.dcdipap.cost.value+"&ron="+document.dcdipap.ron.value+"&issue="+document.dcdipap.issue.value+"&servaction="+document.dcdipap.servaction.value+"&catg="+document.dcdipap.catg.value+"&lopDescription="+lopDescription+"&typeImage="+document.dcdipap.typeImage.value+"&iReq="+iReq+"&claimType="+document.dcdipap.claimType.value+"&targetAction=holdRequest&ProgramType="+prg+"&lopDescription="+lopDescription+"&savetype=addReq&targetVal=imageResize&tabVal=0&imageUploaded=true";
	*/
  	//for (var i=0; i<fileTypes.length; i++) 	if (fileTypes[i]==ext) break;
	  	
	  /*	if (i<fileTypes.length) {
	  	url = source.replace(/\\/g,"//");
	  	
	  	
	  	
//		alert("url in js is in dr in if"+url);
		  	if (num == '1') {
		  		//alert("--url for 1--"+url);
		  		document.dcdipap.url1.value = url;
		  		
		  		/* if (document.dcdipap.url1.value != "") {
		  			document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";

		  		}
		  		queryString= queryString +"&stringurl="+document.dcdipap.stringurl.value+"&url1="+document.dcdipap.url1.value;
		  		
		  		alert("---queryString-- "+queryString);
		  		alert("---url1-- "+document.dcdipap.url1.value);
		  		alert("---stringurl-- "+document.dcdipap.stringurl.value);
				alert("--typeImage value in 1 --"+document.dcdipap.typeImage.value);
		  		alert("---targetAction value--- "+document.dcdipap.targetAction.value);
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet'+queryString,
		  	        secureuri:false,
		  	        fileElementId:'realfile1',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    	alert("---in success--- ");
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		 /* 	} 
		  	if (num == '2') {
		  		document.dcdipap.url2.value = url;
		  		
		  		/*if (document.dcdipap.url2.value != "" && document.dcdipap.stringurl.value != "" ) {
		  			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url2.value+"||";

		  		}else if ( document.dcdipap.url2.value != "" ){
		  			document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
		  		}
		  		alert("--typeImage value in 2 --"+document.dcdipap.typeImage.value);
		  		
		  		alert("--url before ajaxupload in num2--"+url);
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile2',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    	alert(" --in success--- ");
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		/*  	} 
		  	if (num == '3') {
		  		document.dcdipap.url3.value = url;

		  		/*if (document.dcdipap.url3.value != "" && document.dcdipap.stringurl.value != "" ) {

		  			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url3.value+"||";
		  		}else if ( document.dcdipap.url3.value != "" ){
		  			document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
		  		}
		  		
		  		alert("--typeImage value in 3 --"+document.dcdipap.typeImage.value);
		  		
		  		alert("--url before ajaxupload in num3--"+url);
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile3',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		  /*	} 
		  	if (num == '4') {
		 		document.dcdipap.url4.value = url;
		 		
		 		/*if (document.dcdipap.url4.value != "" && document.dcdipap.stringurl.value != "" ) {
		 			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url4.value+"||";

		 		}else if ( document.dcdipap.url4.value != "" ) {
		 			document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
		 		}	
		 		alert("--typeImage value in 4 --"+document.dcdipap.typeImage.value);
		 		
		  		alert("--url before ajaxupload in num4--"+url);
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile4',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		/*  	}
//Veqar added code 
		  	if (num == '5') {
		  		document.dcdipap.url5.value = url;
		  		
		  		
		  		/*if (document.dcdipap.url5.value != "" && document.dcdipap.stringurl.value != "" ) {
		  			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url5.value+"||";

		  		}else if ( document.dcdipap.url5.value != "" ){
		  			document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
		  		}
		  		
		  		alert("--typeImage value in 5 --"+document.dcdipap.typeImage.value);
		  		alert("--url before ajaxupload in num5--"+url);
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile5',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		 /* 	} 
		  	if (num == '6') {
		  		document.dcdipap.url6.value = url;
		  		
		  		/*if (document.dcdipap.url6.value != "" && document.dcdipap.stringurl.value != "" ) {
		  			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url6.value+"||";

		  		}else if ( document.dcdipap.url6.value != "" ){
		  			document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
		  		}
		  		alert("--typeImage value in 6 --"+document.dcdipap.typeImage.value);
		  		
		  		alert("--url before ajaxupload in num6--"+url);
		  		
		  		
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile6',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		/*  	} 
		  	if (num == '7') {
		  		document.dcdipap.url7.value = url;
		  		
		  		/*if (document.dcdipap.url7.value != "" && document.dcdipap.stringurl.value != "" ) {
		  			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url7.value+"||";

		  		}else if ( document.dcdipap.url7.value != "" ) {
		  			document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
		  		}	
		  		alert("--typeImage value in 7 --"+document.dcdipap.typeImage.value);
		  		
		  		alert("--url before ajaxupload in num7--"+url);
		  		
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile7',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		 /* 	} 
		  	if (num == '8') {
		 		document.dcdipap.url8.value = url;
		 		
		 		/*if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
		 			document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;

		 		}else if ( document.dcdipap.url8.value != "" ) {
		 			document.dcdipap.stringurl.value = document.dcdipap.url8.value;
		 		}
		 		
		 		alert("--typeImage value in 8 --"+document.dcdipap.typeImage.value);
		 		
		  		alert("--url before ajaxupload in num8--"+url);
		  		
		  		
		  	    $.ajaxFileUpload({
		  	        url:'/service/writeup/dipap/DIPAPServlet',
		  	        secureuri:false,
		  	        fileElementId:'realfile8',
		  	        dataType: 'xml',
		  	        success: function(data, success){
		  	    		//document.getElementById("image1").value=msg;
		  	    		
		  	            if(msg.MSG=="Image Successfully Uploaded!!")
		  	            {
		  	                alert("---success---");
		  	                document.getElementById("image1").value="true";
		  	            }
		  	      }
		  	   });*/
		/*  	}	
	  	} else {
//end of change by veqar
//			alert("in dr js preview 3 ");
			if (num == '1') {
				eval(document.getElementById('dummyfile1').select());
				eval(document.getElementById('dummyfile1').focus());
			} else if (num == '2') {
				eval(document.getElementById('dummyfile2').select());		
				eval(document.getElementById('dummyfile2').focus());
			} else if (num == '3') {
				eval(document.getElementById('dummyfile3').select());		
				eval(document.getElementById('dummyfile3').focus());
			} else if (num == '4') {
				eval(document.getElementById('dummyfile4').select());		
				eval(document.getElementById('dummyfile4').focus());
			}
//veqar added code
			  else if (num == '5') {
				eval(document.getElementById('dummyfile5').select());
				eval(document.getElementById('dummyfile5').focus());
			} else if (num == '6') {
				eval(document.getElementById('dummyfile6').select());		
				eval(document.getElementById('dummyfile6').focus());
			} else if (num == '7') {
				eval(document.getElementById('dummyfile7').select());		
				eval(document.getElementById('dummyfile7').focus());
			} else if (num == '8') {
				eval(document.getElementById('dummyfile8').select());		
				eval(document.getElementById('dummyfile8').focus());
			}
//end of change by veqar
		  //SeRV00195888 Dipap-pdf change by t4646vb start
			//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
			alert("Incorrect selection. Please load file with an extension of .jpeg, .jpg, .pdf, .txt, .doc, .docx, .3gp, .xls or .xlsx");
		//SeRV00195888 Dipap-pdf change by t4646vb end
	  }*/
  	// End: Added for PMO#472.42
	  return;

}
	
	function checkLopTyp(input) {
	
	}	
	
	function checkCatgTyp() {
		var catg = document.dcdipap.catg.value;//veqar change
		var category = document.dcdipap.catg;
		var selectedvalue = category.options[category.selectedIndex].value;
		
		//Modification for PMO 472.46 Ticket 6979599 by t6570hj - Start
		var status = document.dcdipap.statusInfo.value;
		
		if(status == "HOLD" || status == "NEEDINFO"){
				
			if(catg == "U" || catg == "L"){
				// Changes to fix Hold Request Issue Start
				//if(document.getElementById("editSheet")){
				//	document.getElementById("editSheet").style.display = "block";
				//	document.getElementById("editSheet").style.padding = "25px";
				//}
				
				if(document.getElementById("CreateFlag").value == "true"){
					document.getElementById("CreateFlag").value = "true";
					
					if(document.getElementById("editSheet")){
					
					document.getElementById("editSheet").style.display = "block";
					document.getElementById("editSheet").style.padding = "25px";
					}
					
					if(document.getElementById("notSubmitted"))
					document.getElementById("notSubmitted").style.display = "none";
				}else{
				
					document.getElementById("CreateFlag").value = "false";
					if(document.getElementById("editSheet")){
					document.getElementById("editSheet").style.display = "none";
					document.getElementById("editSheet").style.padding = "00px";
					}
					if(document.getElementById("notSubmitted"))
					document.getElementById("notSubmitted").style.display = "block";
				}
				//if(document.getElementById("CreateFlag"))
				//document.getElementById("CreateFlag").value = "true";
				//if(document.getElementById("notSubmitted"))
				//document.getElementById("notSubmitted").style.display = "none";
			}else{
				if(document.getElementById("editSheet")){
					document.getElementById("editSheet").style.display = "none";
					document.getElementById("editSheet").style.padding = "00px";
				}
				
				
				//if(document.getElementById("CreateFlag"))
				//document.getElementById("CreateFlag").value = "false";
				if(document.getElementById("notSubmitted"))
				document.getElementById("notSubmitted").style.display = "block";
				// Changes to fix Hold Request Issue End
			}
		}
		//Modification for PMO 472.46 Ticket 6979599 by t6570hj - End
		
		if (catg != "0") {
			head1.style.visibility = "visible";
		} else {	
			head1.style.visibility = "hidden"; 
		}
			
		var catgTypIndex	=	document.dcdipap.catg.selectedIndex;//veqar change
		catgTypValue	=	document.dcdipap.catg.options[catgTypIndex].value;//veqar change
			
		
		//if(document.dcdipap.ProgramType.value=='P'){
		//}else{
		//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
		var test = "document.dcdipap.inputLop"+catgTypValue;
		if(test){
			var inputLop	=	eval("document.dcdipap.inputLop"+catgTypValue+".value");
			if(document.getElementById("LOPDropDown"))
			eval("document.getElementById('LOPDropDown').innerHTML	= inputLop");
			if(document.dcdipap.selectedLopIndex)
			eval("document.dcdipap.selectedLopIndex.value = catg");
			//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
		}
			
		//}	
	}
	
	
	function holdRequest() {
		document.dcdipap.targetAction.value = "holdUpdateRequest";
		document.dcdipap.sourceType.value = "HOLD";
		submitrequest();
	}
	
	function holdUpdateRequest() {
		document.dcdipap.targetAction.value = "holdUpdateRequest";
		submitrequest();
	}
	
	function preview1(what, num){
		// SeRV00195888 Dipap-pdf change by t4646vb start
		var fileTypes1=["jpg","jpeg"]; //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 
		var fileTypes=["jpg","jpeg","pdf","txt","doc","docx","3gp","xls","xlsx"];
		// SeRV00195888 Dipap-pdf change by t4646vb end
		var outImage="previewField";
	  	// what to display when the image is not valid
	  
		var ok = "Y";    
	
		/***** DO NOT EDIT BELOW *****/
	
	  	var source=what.value;
	  	var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
	  	
	    // Start: Added for PMO#472.42
	  	
	  	var prg = document.dcdipap.prgType.value;	
	  	
		var fileType= "pdf";
		
		
	  	if(num == '3' || num == '4')
	  	{

	  		if(prg == 'P')
	  		{
	  			if (fileType == ext) return ok;
	  			if(fileType != ext)
	  			{
	  				if (num == '3') 
	  				{
	  					//eval(document.getElementById('dummyfile3').select());		
	  					//eval(document.getElementById('dummyfile3').focus());
	  				}
	  				if (num == '4') 
	  				{
	  					//eval(document.getElementById('dummyfile4').select());		
	  					//eval(document.getElementById('dummyfile4').focus());
	  				}
	  				alert(ErrorsDict.incorrectDocumentMsg);
	  			}
	  		}
	  		else
	  		{
	  			for (var i=0; i<fileTypes.length; i++) if (fileTypes[i]==ext) return ok;
	  			if (!(i<fileTypes.length)) 
	  			{
	  				/*if (num == '3') {
	  					//eval(document.getElementById('dummyfile3').select());		
	  					//eval(document.getElementById('dummyfile3').focus());
	  				}
	  				if (num == '4') 
	  				{
	  					//eval(document.getElementById('dummyfile4').select());		
	  					//eval(document.getElementById('dummyfile4').focus());
	  				}*/
	  				//alert("@@5");
	  				alert(ErrorsDict.incorrectImageMsg);
	  			}
	  		}
	  		
	  	} 
	  //Changes by t8415sk for DIPAP TCR PMO 472.45 End
	  	else if(num == '1')
	  	{

	  		if(prg == 'T')
	  		{
	  			for (var i=0; i<fileTypes1.length; i++) if (fileTypes1[i]==ext) return ok;
	  			
	  			if (!(i<fileTypes1.length)) 
	  			{//alert("@@2");
	  				alert(ErrorsDict.incorrectTCRFirstMsg);
	  			}
	  		}
	  		else
	  		{
	  			for (var i=0; i<fileTypes.length; i++) if (fileTypes[i]==ext) return ok;
	  			if (!(i<fileTypes.length)) 
	  			{
	  				//alert("@@2");
	  				alert(ErrorsDict.incorrectImageMsg);
	  			}
	  		}
	  		
	  	}
	  	//Changes by t8415sk for DIPAP TCR PMO 472.45 End
	  	else
	  	{
	  		for (var i=0; i<fileTypes.length; i++) if (fileTypes[i]==ext) return ok;
	  		 if(!(i<fileTypes.length)) 
	  		 {
	  			/*	if (num == '1') {
	  					eval(document.getElementById('dummyfile1').select());
	  					eval(document.getElementById('dummyfile1').focus());
	  				} else if (num == '2') {
	  					eval(document.getElementById('dummyfile2').select());		
	  					eval(document.getElementById('dummyfile2').focus());
	  				} else if (num == '5') {
	  					eval(document.getElementById('dummyfile5').select());
	  					eval(document.getElementById('dummyfile5').focus());
	  				} else if (num == '6') {
	  					eval(document.getElementById('dummyfile6').select());		
	  					eval(document.getElementById('dummyfile6').focus());
	  				} else if (num == '7') {
	  					eval(document.getElementById('dummyfile7').select());		
	  					eval(document.getElementById('dummyfile7').focus());
	  				} else if (num == '8') {
	  					eval(document.getElementById('dummyfile8').select());		
	  					eval(document.getElementById('dummyfile8').focus());
	  				}else if (num == '9') {
	  					eval(document.getElementById('dummyfile9').select());		
	  					eval(document.getElementById('dummyfile9').focus());
	  				}else if (num == '10') {
	  					eval(document.getElementById('dummyfile10').select());		
	  					eval(document.getElementById('dummyfile10').focus());
	  				}else if (num == '11') {
	  					eval(document.getElementById('dummyfile11').select());		
	  					eval(document.getElementById('dummyfile11').focus());
	  				}else if (num == '12') {
	  					eval(document.getElementById('dummyfile12').select());		
	  					eval(document.getElementById('dummyfile12').focus());
	  				}else if (num == '13') {
	  					eval(document.getElementById('dummyfile13').select());		
	  					eval(document.getElementById('dummyfile13').focus());
	  				}else if (num == '14') {
	  					eval(document.getElementById('dummyfile14').select());		
	  					eval(document.getElementById('dummyfile14').focus());
	  				}else if (num == '15') {
	  					eval(document.getElementById('dummyfile15').select());		
	  					eval(document.getElementById('dummyfile15').focus());
	  				}else if (num == '16') {
	  					eval(document.getElementById('dummyfile16').select());		
	  					eval(document.getElementById('dummyfile16').focus());
	  				}*/
	  				
	  			// End: Added for PMO#472.42
	  				
	  	          //end of change by veqar
	  			  //SeRV00195888 Dipap-pdf change by t4646vb start
	  				//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
	  			//alert("@@3");
	  				alert(ErrorsDict.incorrectImageMsg);
	  			//SeRV00195888 Dipap-pdf change by t4646vb end
	  				return false;
	  		  }
	  	}
	  	
	  	
	  	
	  	
	  	
	  	/*for (var i=0; i<fileTypes.length; i++) if (fileTypes[i]==ext) return ok;
	
	//alert("in dr js preview1 2 ");
		  	if (!(i<fileTypes.length)) {
				if (num == '1') {
					eval(document.getElementById('dummyfile1').select());
					eval(document.getElementById('dummyfile1').focus());
				} else if (num == '2') {
					eval(document.getElementById('dummyfile2').select());		
					eval(document.getElementById('dummyfile2').focus());
				} else if (num == '3') {
					eval(document.getElementById('dummyfile3').select());		
					eval(document.getElementById('dummyfile3').focus());
				} else if (num == '4') {
					eval(document.getElementById('dummyfile4').select());		
					eval(document.getElementById('dummyfile4').focus());
				}
	//veqar added code
				  else if (num == '5') {
					eval(document.getElementById('dummyfile5').select());
					eval(document.getElementById('dummyfile5').focus());
				} else if (num == '6') {
					eval(document.getElementById('dummyfile6').select());		
					eval(document.getElementById('dummyfile6').focus());
				} else if (num == '7') {
					eval(document.getElementById('dummyfile7').select());		
					eval(document.getElementById('dummyfile7').focus());
				} else if (num == '8') {
					eval(document.getElementById('dummyfile8').select());		
					eval(document.getElementById('dummyfile8').focus());
				}
	//end of change by veqar
	
			  //SeRV00195888 Dipap-pdf change by t4646vb start
				//alert("Your selection is wrong.\n\n Please load an image with an extention of .jpg");
				alert("Incorrect selection. Please load file with an extension of .jpeg, .jpg, .pdf, .txt, .doc, .docx, .3gp, .xls or .xlsx");
			//SeRV00195888 Dipap-pdf change by t4646vb end
			    
				return false;		    
		  }*/
	
	}
		//Added by t8415sk Start for DIPAP TCR RSA Start
	/*function insertRowforATS(area,type,severity)
	{
	var table=document.getElementById("atsTable");
	var row=table.insertRow(2);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	cell1.innerHTML='<input type="checkbox" name="adsAll" id="adsAll">';
	cell2.innerHTML=area;
	cell3.innerHTML=type;
	cell4.innerHTML=severity;
	
	} */
	
////Change by t8415sk for DIPAP TCR RSA Start
//	
//	var arr=new Array();
//		
//		if(!Array.prototype.indexOf) {
//		    Array.prototype.indexOf = function(needle) {
//		        for(var i = 0; i < this.length; i++) {
//		            if(this[i] === needle) {
//		                return i;
//		            }
//		        }
//		        return -1;
//		    };
//		}
//	
//		Array.prototype.contains = function(k) {
//		    for(var p in this)
//		        if(this[p] === k)
//		            return true;
//		    return false;
//		};
//		
//	function insertRowforATS(area,type,severity)
//	{
//		alert("insertRowforATS" +area + type + severity );
//		var table = document.getElementById("atsTable");
//		var rowCount = table.rows.length;
//		var row = table.insertRow(rowCount);
//		var rowCountPlus=rowCount+1;
//		var cell1 = row.insertCell(0);
//		var element1 = document.createElement("input");
//		element1.type = "checkbox";
//		element1.name="adsAll";
//		element1.id="adsCheckBox"+rowCountPlus;
//		
//		cell1.appendChild(element1);
//
//		var cell2 = row.insertCell(1);
//		var element2 = document.createElement("input");
//		element2.type = "text";
//		element2.name="area";
//		element2.value=area;
//		element2.style.border="0";
//		element2.readOnly = "true";
//		element2.size="57";
//		element2.id="area"+rowCountPlus;
//		
//		cell2.appendChild(element2);
//			//	alert("inserted is = area"+rowCountPlus);
//		var cell3 = row.insertCell(2);
//		var element3 = document.createElement("input");
//		element3.type = "text";
//		element3.name="type";
//		element3.value=type;
//		element3.style.border="0";
//		element3.readOnly = "true";
//		element3.size="48";
//		element3.id="type"+rowCountPlus;
//		cell3.appendChild(element3);
//
//		var cell4 = row.insertCell(3);
//		var element4 = document.createElement("input");
//		element4.type = "text";
//		element4.name="severity";
//		element4.value=severity;
//		element4.style.border="0";
//		element4.readOnly = "true";
//		element4.size="18";
//		element4.id="severity"+rowCountPlus;
//		
//		cell4.appendChild(element4);
//	
//	}
//	
//	
//	function deleteRowforATS() {
//		try {
//		var table = document.getElementById("atsTable");
//		var rowCount = table.rows.length;
//		var deleteVal="";
//		var delArea="";
//		var delType="";
//		var delSeverity="";
//		var checkDeleteMark="";
//	//	alert("inside Delete rowCount= " + rowCount);
//		var count=0;
//		  for(var i=2; i<rowCount; i++) {
//		    row = table.rows[i];
//		    count=i+1;
//		  //  alert("i ="+i);
//		    var chkbox = row.cells[0].childNodes[0];
//		    if(  chkbox != null &&   chkbox.checked == true) {
//		    	
//		    	delArea=document.getElementById("area"+count).value;
//		    	delType=document.getElementById("type"+count).value;
//		    	delSeverity=document.getElementById("severity"+count).value;
//		   // 	alert("inside loop  delArea = "+delArea);
//		    	deleteVal=delArea.substring(0,2)+delType.substring(0,2)+delSeverity.substring(0,1);
//		    //	alert("deleteVal= "+deleteVal);
//		    	arr.splice(arr.indexOf(deleteVal), 1);
//		        table.deleteRow(i);
//		    //    alert("i ="+i);
//		        if(rowCount>2){
//			        for(var ij=i+1; ij<=rowCount; ij++) {
//			        	
//			        	if(document.getElementById("area"+ij)){
//			        	alert("before id val"+ij + "  "+document.getElementById("area"+ij).value);
//			        	
//			        	jQuery(this).prev("area"+ij).attr("id","area"+(ij-1));
//			        	
//			        	
//			        	/*document.getElementById("area"+ij).id="area"+(ij-1);
//			        	document.getElementById("type"+ij).id="type"+(ij-1);
//			        	document.getElementById("severity"+ij).id="severity"+(ij-1);*/
//			        	alert("after id val"+document.getElementById("area"+(ij-1)).value);
//			        	}
//			         }
//			       }
//		        
//		        rowCount--;
//		        i--;
//		        checkDeletemMark="y";
//		        
//		        
//		    }
//		    }
//		  if(checkDeletemMark != "y"){
//			  alert(ErrorsDict.selectATSCodeMsg);
//			  
//		  }
//		/*}else{
//			alert(ErrorsDict.selectATSCodeMsg);
//			alert(ErrorsDict.selectATSCodeMsg);
//		}*/
//
//		}catch(e) {
//		    alert(e.message + " " + e.toString());
//		}         } 
//	
//	
//	function addATSAfterBroswe(atsCode){
//		
//		arr.push(atsCode);
//		
//		document.getElementById("atsCode").value=arr;
//		
//	}
//	function addATS(){
//		var table = document.getElementById("atsTable");
//		var rowCount = table.rows.length;
//	//	alert("rowCount = "+ rowCount);
//		if(document.getElementById("noATS"))
//		table.deleteRow(2);
//		
//		rowCount = table.rows.length;
//	//	alert("rowCount1 = "+ rowCount);
//		if(document.getElementById("areaCode").value && document.getElementById("areaCode").value != -1){
//			if(document.getElementById("typeCode").value  && document.getElementById("typeCode").value != -2){
//				if(document.getElementById("severityCode").value == null || document.getElementById("severityCode").value == -3){
//					
//					alert(ErrorsDict.selectSeverityMsg);
//					return;
//				}
//				
//			}else{
//				alert(ErrorsDict.selectTypeMsg);
//				return;
//				
//			}
//			
//			
//			
//		}else{
//			alert(ErrorsDict.selectAreaMsg);
//			return;
//			
//		}
//		
//		
//		if(rowCount<=13){
//		var areaCode=document.getElementById("areaCode").value;
//		var typeCode=document.getElementById("typeCode").value;
//		var severityCode=document.getElementById("severityCode").value;
//		var atsCode=areaCode.substring(0,2)+typeCode.substring(0,2)+severityCode.substring(0,1);
//		
//		if(arr.contains(atsCode)){
//			alert(ErrorsDict.dupATSMsg);
//			return;
//		}
//		arr.push(atsCode);
//	//	alert("atsCode Array= "+arr);
//		document.getElementById("atsCode").value=arr;
//		//alert("document.getElementById('atsCode').value = "+document.getElementById("atsCode").value);
//		insertRowforATS(areaCode,typeCode,severityCode);
//		
//	}   else{
//		alert(ErrorsDict.maxATSMsg);
//	}
//		
//		$("#areaCode option:first").attr("selected", true);
//		$("#typeCode option:first").attr("selected", true);
//		$("#severityCode option:first").attr("selected", true);
//		
//	}
//	
//	function checkboxTCR(cbVal){
//	//	alert("inside checkboxTCR cbVal= "+cbVal);
//		if(cbVal == 'K'){
//			if(document.getElementById("cb2").checked==true){
//			document.getElementById("cb2").checked=false;
//			}
//			}else if(cbVal == 'D'){
//			if(document.getElementById("cb1").checked==true){
//			document.getElementById("cb1").checked=false;
//			}
//		
//	}
//	}
//	
//	function selectALL() {
//	//	alert("inside selectALL");
//		var table = document.getElementById("atsTable");
//		var rowCount = table.rows.length;
//		//alert("count= "+rowCount);
//		if(document.getElementById("adsAll2").checked==true){
//		for(var i=3; i<=rowCount; i++) {
//		document.getElementById("adsCheckBox"+i).checked=true;
//		 }
//		}
//		if(document.getElementById("adsAll2").checked==false){
//		for(var i=3; i<=rowCount; i++) {
//		document.getElementById("adsCheckBox"+i).checked=false;
//		 }
//		}
//
//	}
//	//Added by t8415sk Start for DIPAP TCR RSA End
	
//Change by t8415sk for DIPAP TCR RSA Start
	
	var arr=new Array();
		
		if(!Array.prototype.indexOf) {
		    Array.prototype.indexOf = function(needle) {
		        for(var i = 0; i < this.length; i++) {
		            if(this[i] == needle) {
		            	 
		                return i;
		               
		            }
		        }
		        return -1;
		    };
		}
	
		Array.prototype.contains = function(k) {
		    for(var p in this)
		        if(this[p] == k)
		            return true;
		    return false;
		};
		
		 function setCB(tcrVal){
		//alert("inside cb tcrVal - "+tcrVal);
		if(document.getElementById("cb1") && document.getElementById("cb2")){
			
		//	alert("inside cb tcrVal - "+ document.getElementById("tcrCheck").value);
			
			if(tcrVal == 'K' ){
				
				document.getElementById("cb1").checked=true;
				
				
			}else if(tcrVal == 'D' ){
				
				document.getElementById("cb2").checked=true;
				
				
			}
			
			
		}
		
		
	}
	
		
	function setCB1(tcrVal){
	//	alert("inside cb1 tcrVal - "+tcrVal );
		if(document.getElementById("cb1") && document.getElementById("cb2")){
			
		//	alert("inside cb1 tcrVal - "+ document.getElementById("tcrCheck").value);
			
			if(tcrVal == 'K' ){
				
				document.getElementById("cb1").checked=true;
				
				
			}else if(tcrVal == 'D' ){
				
				document.getElementById("cb2").checked=true;
				
				
			}
			
			
		}
		
		
	}
	
	//function setCBVal(){
//	}
	
	//function setNoATS(){
	//}
//	function selectNotSelectCheckBox(id){
//		var table = document.getElementById("atsTable");
//		var rowCount = table.rows.length;
//		
//		
//		
//	}
	
	function selectCheckBox(id){
	//	alert("selectCheckBox id ="+id);
		if(document.getElementById(id).checked==false){
			document.getElementById("adsAll2").checked=false;
		}
		
	//	selectNotSelectCheckBox(id);
			
			
		
		
//		element2.style.fontFamily = "Arial,sans-serif"; 
//		element2.style.fontSize = "9pt";
//		element2.style.color = "#FFFFFF";
//		element2.style.backgroundColor="#336699";
		
	}
	
	function setTableColor(){
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
		for(var i=3;i<=rowCount ;i++){
		var rowId="row"+i;
		var areaId="area"+i;
		var typeId="type"+i;
		var severityId="severity"+i;
		//alert("inside setTableColor rowCount -"+rowCount + "i ="+i);
		if(i % 2 == 0){
		//	alert("document.getElementById(areaId) -"+document.getElementById(areaId).value);
			document.getElementById(rowId).className="alternateRow";
			
			document.getElementById(areaId).style.color = "#000000";
			document.getElementById(areaId).style.backgroundColor="#DEDEDE";
			
			document.getElementById(typeId).style.color = "#000000";
			document.getElementById(typeId).style.backgroundColor="#DEDEDE";
			
			document.getElementById(severityId).style.color = "#000000";
			document.getElementById(severityId).style.backgroundColor="#DEDEDE";
		}else{
			document.getElementById(rowId).className="";
			
			document.getElementById(areaId).style.color = "#000000";
			document.getElementById(areaId).style.backgroundColor="#FFFFFF";
			
			document.getElementById(typeId).style.color = "#000000";
			document.getElementById(typeId).style.backgroundColor="#FFFFFF";
			
			document.getElementById(severityId).style.color = "#000000";
			document.getElementById(severityId).style.backgroundColor="#FFFFFF";
			
			
		}
		
		
	}
	
	}
	function insertRowforATS(area,type,severity)
	{
		//alert("insertRowforATS" +area + type + severity );
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		var rowCountPlus=rowCount+1;
		if(rowCountPlus % 2 == 0){
			row.className ="alternateRow";
		}
		row.id="row"+rowCountPlus;
		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name="adsAll";
		element1.id="adsCheckBox"+rowCountPlus;
		element1.onclick=(function (){selectCheckBox(this.id);}  );
		cell1.appendChild(element1);

		var cell2 = row.insertCell(1);
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.name="area";
		element2.value=area;
		element2.style.border="0";
		if(rowCount % 2 != 0){
			element2.style.color = "#000000";
			element2.style.backgroundColor="#DEDEDE";
		}
		element2.readOnly = "true";
		element2.size="53";
		element2.id="area"+rowCountPlus;
		element2.title=area;
		
		
		
		cell2.appendChild(element2);
				//alert("inserted is = area"+rowCountPlus);
		var cell3 = row.insertCell(2);
		var element3 = document.createElement("input");
		element3.type = "text";
		element3.name="type";
		element3.value=type;
		element3.style.border="0";
		if(rowCount % 2 != 0){
			element3.style.color = "#000000";
			element3.style.backgroundColor="#DEDEDE";
		}
		element3.readOnly = "true";
		element3.size="43";
		element3.id="type"+rowCountPlus;
		element3.title=type;
		cell3.appendChild(element3);
//alert("inserted is = type"+rowCountPlus);
		var cell4 = row.insertCell(3);
		var element4 = document.createElement("input");
		element4.type = "text";
		element4.name="severity";
		element4.value=severity;
		element4.style.border="0";
		if(rowCount % 2 != 0){
			element4.style.color = "#000000";
			element4.style.backgroundColor="#DEDEDE";
		}
		element4.readOnly = "true";
		element4.size="16";
		element4.id="severity"+rowCountPlus;
		element4.title=severity;
		cell4.appendChild(element4);
	//alert("inserted is = severity"+rowCountPlus);
	}
	
//	function test(){
//
//		alert(document.getElementById('userId').value);
//		document.getElementById('userId').value="aa";
//		alert(document.getElementById('userId').value);
//		document.getElementById('userId').id= "apple";
//
//		alert(document.getElementById('apple').value);
//
////document.getElementById('userId').id=
//	//	jQuery(this).prev("userId").attr("id","userIdd"));
//	//	alert(document.getElementById('userIdd').value);
//
//
//		
//	}

	function validateRepairCost(event,thisa){

		var event = event || window.event; // for trans-browser compatibility
		var liCharCode = event.which || event.keyCode;

		if(onlyNumericValues(event)){
			  var cost = document.getElementById('cost').value;
			  var charVal = String.fromCharCode(liCharCode);
			  if(liCharCode == 46 && (cost.length == 0 || cost.indexOf('.') > -1)){
					return false;     
			  }

			  if( (charVal == '#') || (charVal == '$') || (charVal == '%') || (charVal == '&') || 
					(charVal == '(') ){
					return false;     
			  }
			  ValidateCost(thisa);
			  return true;
		}else{
			  return false;
		}
	}
	
	function deleteRowforATS() {
		try {
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
		var deleteVal="";
		var delArea="";
		var delType="";
		var delSeverity="";
		var checkDeleteMark="";
	//	alert("inside Delete rowCount= " + rowCount);
		if(document.getElementById("noATS")){
		//	alert("1");
			 alert(ErrorsDict.selectATSCodeMsg);
			 return;
		}
		
		var checkk="n";
		for(var i=2; i<rowCount; i++) {
		    var row1 = table.rows[i];
		    var chkbox1 = row1.cells[0].childNodes[0];
		    if( chkbox1 != null &&   chkbox1.checked == true) {
		    	checkk="y";
		    }
		}
		if(checkk == "n"){
		//	alert("2");
		   	 alert(ErrorsDict.selectATSCodeMsg);
				 return;
		}
		
		 
		
		var count=0;
		  for(var i=2; i<rowCount; i++) {
		    row = table.rows[i];
		    count=i+1;
		 //   alert("i ="+i);
		    var chkbox = row.cells[0].childNodes[0];
		    if(  chkbox != null &&   chkbox.checked == true) {
		    	
		    	delArea=document.getElementById("area"+count).value;
		    	delType=document.getElementById("type"+count).value;
		    	delSeverity=document.getElementById("severity"+count).value;
		    //	alert("inside loop  delArea = "+delArea);
		    	deleteVal=delArea.substring(0,2)+delType.substring(0,2)+delSeverity.substring(0,1);
		   // 	alert("deleteVal= -"+deleteVal+"-");
		    	//alert("deleteVal.length= "+deleteVal.length);
		    //	alert("before delete arr is "+arr);
		    	//alert("arr.indexOf(deleteVal) "+arr.indexOf(deleteVal));
		    	arr.splice(arr.indexOf(deleteVal), 1);
		    	document.getElementById("atsCode").value=arr;
			//	alert("document.getElementById('atsCode').value = "+document.getElementById("atsCode").value);
		        table.deleteRow(i);
		      //  alert("i ="+i);
		        if(rowCount>2){
			        for(var ij=i+1; ij<=rowCount; ij++) {
			        	//alert("inside for i ="+i);
			        	if(document.getElementById("area"+ij)){
			        	//alert("before id val"+ij + "  "+document.getElementById("area"+ij).value);
			        	
			        	document.getElementById("area"+ij).id="area"+(ij-1);
			        	document.getElementById("type"+ij).id="type"+(ij-1);
			        	document.getElementById("severity"+ij).id="severity"+(ij-1);

			        	document.getElementById("adsCheckBox"+ij).id="adsCheckBox"+(ij-1);
			        	document.getElementById("row"+ij).id="row"+(ij-1);
			        	
			        	//alert("after id val"+(ij-1) + "  "+document.getElementById("area"+(ij-1)).value);
			        	}
			         }
			       }
		        
		        rowCount--;
		        i--;
		        checkDeletemMark="y";
		        
		        
		    }
		    }
		  if(checkDeletemMark != "y"){
			//  alert("3");
			  alert(ErrorsDict.selectATSCodeMsg);
			  return;
			  
		  }
		  
		  var rowCountDel = table.rows.length;
		  if(rowCountDel == 2){
			//  alert("inside noATS");
			  
			  var tableNoATS = document.getElementById("atsTable");
				var rowCountN = tableNoATS.rows.length;
				var rowN = tableNoATS.insertRow(rowCountN);
			//	alert("inside noATS1");

				var cell1 = rowN.insertCell(0);
				
				//cell1.setAttribute('colspan', '4'); 
				cell1.colSpan = 4;
				var element2 = document.createElement("input");
				element2.type = "text";
				element2.name="noATS";
				element2.value=" No ATS Selected ";
				element2.style.border="0";
				element2.readOnly = "true";
				element2.size="53";
				element2.id="noATS";
				//element2.colspan="4";
		//		alert("inside noAT2S");
				cell1.appendChild(element2);
			//	alert("inside noATS3");
				
				document.getElementById("adsAll2").disabled=true;
		  }else{
			  setTableColor();
		  }
		  
		  if(document.getElementById("adsAll2").checked==true){
			  document.getElementById("adsAll2").checked=false;
		  }
		  
		 
		/*}else{
			alert(ErrorsDict.selectATSCodeMsg);
			alert(ErrorsDict.selectATSCodeMsg);
		}*/

		}catch(e) {
		    alert(e.message + " " + e.toString());
		}         } 
	
	
	function addATSAfterBroswe(atsCode){
		var table = document.getElementById("atsTable");
		var aa=atsCode;
	//	alert("atsCode -" +atsCode +"- atsCode.length -"+atsCode.length+"-");
	//	alert("aa -" +aa +"- aa.length -"+aa.length+"-");
	//	alert("atsCode - " +atsCode +" atsCode.length - "+atsCode.size);
		if(document.getElementById("noATS")){
		table.deleteRow(2);
		document.getElementById("adsAll2").disabled=false;
		}else{
			document.getElementById("adsAll2").disabled=false;
			
		}
		
		

		arr.push(atsCode);
		
		document.getElementById("atsCode").value=arr;
		
	}
	function addATS(){
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
	//	alert("rowCount = "+ rowCount);
		
		

		rowCount = table.rows.length;
		//alert("rowCount1 = "+ rowCount);
		if(document.getElementById("areaCode").value && document.getElementById("areaCode").value != -1){
			if(document.getElementById("typeCode").value  && document.getElementById("typeCode").value != -2){
				if(document.getElementById("severityCode").value == null || document.getElementById("severityCode").value == -3){
					
					alert(ErrorsDict.selectSeverityMsg);
					
					return;
				}
				
			}else{
				alert(ErrorsDict.selectTypeMsg);
				return;
				
			}
			
			
			
		}else{
			alert(ErrorsDict.selectAreaMsg);
			return;
			
		}
		
		if(document.getElementById("noATS")){
			table.deleteRow(2);
			document.getElementById("adsAll2").disabled=false;
			}
		
		if(rowCount<=13){
		var alternateVal= false;
		var areaCode=document.getElementById("areaCode").value;
		var typeCode=document.getElementById("typeCode").value;
		var severityCode=document.getElementById("severityCode").value;
		var atsCode=areaCode.substring(0,2)+typeCode.substring(0,2)+severityCode.substring(0,1);
	//	alert("atsCode = "+atsCode);
		if(arr.contains(atsCode)){
			alert(ErrorsDict.dupATSMsg);
			$("#areaCode option:first").attr("selected", true);
			$("#typeCode option:first").attr("selected", true);
			$("#severityCode option:first").attr("selected", true);
			
			return;
		}
		arr.push(atsCode);
		//alert("atsCode Array= "+arr);
		document.getElementById("atsCode").value=arr;
	//	alert("document.getElementById('atsCode').value = "+document.getElementById("atsCode").value);
		
		
		insertRowforATS(areaCode,typeCode,severityCode);
		
	}   else{
		alert(ErrorsDict.maxATSMsg);
	}
		
		$("#areaCode option:first").attr("selected", true);
		$("#typeCode option:first").attr("selected", true);
		$("#severityCode option:first").attr("selected", true);
		
		
		var rowCountUncheck = table.rows.length;
		for(var i=2; i<rowCountUncheck; i++) {
		row = table.rows[i];

		var chkbox = row.cells[0].childNodes[0];
		if(  chkbox != null &&   chkbox.checked == true) {
		chkbox.checked=false;
		}
		}
		if(document.getElementById("adsAll2").checked==true){
			  document.getElementById("adsAll2").checked=false;
		  }
		
	}
	
	function checkboxTCR(cbVal){
	//	alert("inside checkboxTCR cbVal= "+cbVal);
		if(cbVal == 'K'){
			if(document.getElementById("cb2").checked==true){
			document.getElementById("cb2").checked=false;
			}
			}else if(cbVal == 'D'){
			if(document.getElementById("cb1").checked==true){
			document.getElementById("cb1").checked=false;
			}
		
	}
	}
	
	function afterResetTCR(){
	//	alert("inside afterResetTCR");
		if(document.getElementById("noATS")){
			return;
			}
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
		//alert("$1");
		while(arr.length > 0){
			
			if(arr.length > 0){
				arr.pop();
			}
		}
		//alert("arr after pop"+arr);
		
		//alert("$2");
		var count=2;
		for(var i=2; i<rowCount; i++) {
		row = table.rows[i];
		count+=1;
		//alert("count "+count);
		var delArea=document.getElementById("area"+count).value;
	   // alert("delArea "+delArea);
		var delType=document.getElementById("type"+count).value;
		var delSeverity=document.getElementById("severity"+count).value;
		
		if(delArea != null && delArea.length > 0 && delType != null && delType.length > 0 && delSeverity != null && delSeverity.length > 0){
		var atsCode=delArea.substring(0,2)+delType.substring(0,2)+delSeverity.substring(0,1);
		//alert("atsCode "+atsCode);
		arr.push(atsCode);
		 }else{
			//alert("inside delete i = "+i + " rowCount-"+rowCount);
		table.deleteRow(i);
		rowCount--;
        i--;
      //alert("inside after delete i = "+i+ " rowCount-"+rowCount);
		 }
		}
		document.getElementById("atsCode").value=arr;
	//alert("$4");
		 var rowCountDel = table.rows.length;
		  if(rowCountDel == 2){
		//alert("inside noATS");
			  var tableNoATS = document.getElementById("atsTable");
				var rowCountN = tableNoATS.rows.length;
				var rowN = tableNoATS.insertRow(rowCountN);
		//	alert("inside noATS1");

				var cell1 = rowN.insertCell(0);
				
				//cell1.setAttribute('colspan', '4'); 
				cell1.colSpan = 4;
				var element2 = document.createElement("input");
				element2.type = "text";
				element2.name="noATS";
				element2.value=" No ATS Selected ";
				element2.style.border="0";
				element2.readOnly = "true";
				element2.size="53";
				element2.id="noATS";
				//element2.colspan="4";
			//	alert("inside noAT2S");
				cell1.appendChild(element2);
			//	alert("inside noATS3");
				
				document.getElementById("adsAll2").disabled="disabled";
		  }
		
		
	}
	function selectALL() {
		//alert("inside selectALL");
		var table = document.getElementById("atsTable");
		var rowCount = table.rows.length;
		//alert("count= "+rowCount);
		if(document.getElementById("adsAll2").checked==true){
		 for(var i=2; i<rowCount; i++) {
		row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];


		if(  chkbox != null &&   chkbox.checked == false) {

		chkbox.checked = true;
		}


		 }
} else if(document.getElementById("adsAll2").checked==false){
		 for(var i=2; i<rowCount; i++) {
		row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];


		if(  chkbox != null &&   chkbox.checked == true) {

		chkbox.checked = false;
		}


		 }
}



		/*
		if(document.getElementById("adsAll2").checked==true){
		for(var i=3; i<=rowCount; i++) {
		document.getElementById("adsCheckBox"+i).checked=true;
		 }
		}
		if(document.getElementById("adsAll2").checked==false){
		for(var i=3; i<=rowCount; i++) {
		document.getElementById("adsCheckBox"+i).checked=false;
		 }
		} */

	}
	
	function getVICSDetails(vin){
		
		var queryString="VIN="+vin+"&targetAction=getVICSDetails";
		var targetUrl="/service/writeup/dipap/DIPAPServlet?"+queryString;
		var waitMsg = "Processing, Please Wait......";
		var url = "/portal/toolbox/wait.jsp?qry=" + escape(targetUrl) + "&waitMsg=" + escape(waitMsg);
		win=window.open(url,"POPUP","width=1000,height=1000,resizable=yes,scrollbars=yes");
	}
	
	
	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	
	
	
	
	
	function submitrequest(){
		form1 = document.dcdipap;	
		var prg = form1.prgType.value;	
		if (validateform1(form1)) {
				document.dcdipap.typeImage.value = "";
				var ok = "";
				var VIN = form1.vinNum.value;
				var odom = form1.odom.value;			
				
				var ron = form1.ron.value;
				var issue = form1.issue.value;
				var servaction = form1.servaction.value;
					//T4317SK DIPAP TCR CHANGES START 
		if(prg =='T' || prg =='V' )
		{
		var vnfflag = document.dcdipap.vinNotFoundFlag.value;
 
       if(vnfflag == 'N')
			{
		   	eval(document.dcdipap.vinNum.select());				
			eval(document.dcdipap.vinNum.focus());		
	        alert(ErrorsDict.vinnotFoundMsg);	
			return;	
			 }
			     if(vnfflag == 'D')
			{
		   	eval(document.dcdipap.vinNum.select());				
			eval(document.dcdipap.vinNum.focus());		
	        alert("Duplicate VINs found. Please enter the full 17 digit VIN.");	
			return;	
			 }
			// if( prg=='T' || prg == 'V')
			 if( prg=='T' )
			{
		     var sublet = document.dcdipap.sublet.value;
			 if(sublet == 'Select')
			{
			 eval(document.dcdipap.sublet.focus());		
             alert("Sublet is required. Please select the Sublet");	
			 return;
			 }
			}
		}
			//T4317SK DIPAP TCR CHANGES END
	          				
				
				var image1 = document.getElementById('realfile1').value;
				var image2 = document.getElementById('realfile2').value;
				var image3 = document.getElementById('realfile3').value;
				var image4 = document.getElementById('realfile4').value;	
	//code added by veqar.
				var image5 = document.getElementById('realfile5').value;
				var image6 = document.getElementById('realfile6').value;
				var image7 = document.getElementById('realfile7').value;
				var image8 = document.getElementById('realfile8').value;	
				
				
				if (document.dcdipap.targetAction.value == "resizeUpdate") {
	
					var image11 = (document.getElementById("image11").complete)==undefined ? "true" : (document.getElementById("image11").complete);
					var image22 = (document.getElementById("image22").complete)==undefined ? "true" : (document.getElementById("image22").complete);
					var image33 = (document.getElementById("image33").complete)==undefined ? "true" : (document.getElementById("image33").complete);
					var image44 = (document.getElementById("image44").complete)==undefined ? "true" : (document.getElementById("image44").complete);
	                var image55 = (document.getElementById("image55").complete)==undefined ? "true" : (document.getElementById("image55").complete);
					var image66 = (document.getElementById("image66").complete)==undefined ? "true" : (document.getElementById("image66").complete);
					var image77 = (document.getElementById("image77").complete)==undefined ? "true" : (document.getElementById("image77").complete);
					var image88 = (document.getElementById("image88").complete)==undefined ? "true" : (document.getElementById("image88").complete);	
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					if(prg == 'T'){
						var image99 = (document.getElementById("image99").complete)==undefined ? "true" : (document.getElementById("image99").complete);
					}
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
					if(prg == 'P')
					{
						var image99 = (document.getElementById("image99").complete)==undefined ? "true" : (document.getElementById("image99").complete);
						var image100 = (document.getElementById("image100").complete)==undefined ? "true" : (document.getElementById("image100").complete);	
						var image111 = (document.getElementById("image111").complete)==undefined ? "true" : (document.getElementById("image111").complete);
						var image222 = (document.getElementById("image222").complete)==undefined ? "true" : (document.getElementById("image222").complete);
						var image333 = (document.getElementById("image333").complete)==undefined ? "true" : (document.getElementById("image333").complete);
						var image444 = (document.getElementById("image444").complete)==undefined ? "true" : (document.getElementById("image444").complete);
						var image555 = (document.getElementById("image555").complete)==undefined ? "true" : (document.getElementById("image555").complete);
						var image666 = (document.getElementById("image666").complete)==undefined ? "true" : (document.getElementById("image666").complete);
					}
	
				}			
//				document.dcdipap.targetAction.value = "holdUpdateRequest"; Changes by t8415sk for DIPAP TCR RSA 472.45  
				var catg = form1.catg.value;		
				
				if ( (image1 != "") && (image1 != null) ) {
					ok = preview1(document.getElementById('realfile1'), '1'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image2 != "") && (image2 != null) ) {
					ok = preview1(document.getElementById('realfile2'), '2'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image3 != "") && (image3 != null) ) {
					ok = preview1(document.getElementById('realfile3'), '3'); 
					
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image4 != "") && (image4 != null) ) {
					ok = preview1(document.getElementById('realfile4'), '4'); 
					
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
				}
	//code added by veqar
					if ( (image5 != "") && (image5 != null) ) {
					ok = preview1(document.getElementById('realfile5'), '5'); 
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image6 != "") && (image6 != null) ) {
					ok = preview1(document.getElementById('realfile6'), '6'); 
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image7 != "") && (image7 != null) ) {
					ok = preview1(document.getElementById('realfile7'), '7'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image8 != "") && (image8 != null) ) {
	
					ok = preview1(document.getElementById('realfile8'), '8'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
				}
				//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
				if(prg == 'T')
				{
				//	alert("##1");
					var pimage9 = document.getElementById('realfile9').value;
					if ( (pimage9 != "") && (pimage9 != null) ) {
						
						ok = preview1(document.getElementById('realfile9'), '9'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
				}
				//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
				
				// Start: Added for PMO#472.42
				
				if(prg == 'P')
				{
					var pimage9 = document.getElementById('realfile9').value;
					var pimage10 = document.getElementById('realfile10').value;
					var pimage11 = document.getElementById('realfile11').value;
					var pimage12 = document.getElementById('realfile12').value;	
					
					var pimage13 = document.getElementById('realfile13').value;
					var pimage14 = document.getElementById('realfile14').value;
					var pimage15 = document.getElementById('realfile15').value;
					var pimage16 = document.getElementById('realfile16').value;
					
					
					if ( (pimage9 != "") && (pimage9 != null) ) {
		
						ok = preview1(document.getElementById('realfile9'), '9'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage10 != "") && (pimage10 != null) ) {
		
						ok = preview1(document.getElementById('realfile10'), '10'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage11 != "") && (pimage11 != null) ) {
		
						ok = preview1(document.getElementById('realfile11'), '11'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage12 != "") && (pimage12 != null) ) {
		
						ok = preview1(document.getElementById('realfile12'), '12'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage13 != "") && (pimage13 != null) ) {
		
						ok = preview1(document.getElementById('realfile13'), '13'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage14 != "") && (pimage14 != null) ) {
		
						ok = preview1(document.getElementById('realfile14'), '14'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage15 != "") && (pimage15 != null) ) {
		
						ok = preview1(document.getElementById('realfile15'), '15'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
					
					if ( (pimage16 != "") && (pimage16 != null) ) {
		
						ok = preview1(document.getElementById('realfile16'), '16'); 
		
						if (ok != "Y") {
							return;
						}else {
							ok = "";
						}
					}
				}
				// End: Added for PMO#472.42
				
				//alert("---url1--- "+document.dcdipap.url1.value);
				///alert("---url2--- "+document.dcdipap.url2.value);
				//alert("---url3--- "+document.dcdipap.url3.value);
				//alert("---url4--- "+document.dcdipap.url4.value);
				
				
				/*if (document.dcdipap.url1.value != "") {
					document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";
	
				}	
	    
				if (document.dcdipap.url2.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url2.value+"||";
	
				}else if ( document.dcdipap.url2.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
				}
				
				if (document.dcdipap.url3.value != "" && document.dcdipap.stringurl.value != "" ) {
	
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url3.value+"||";
				}else if ( document.dcdipap.url3.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
				}	
			
				if (document.dcdipap.url4.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url4.value+"||";
	
				}else if ( document.dcdipap.url4.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
				}	
	
				if (document.dcdipap.url5.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url5.value+"||";
	
				}else if ( document.dcdipap.url5.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
				}
				
				if (document.dcdipap.url6.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url6.value+"||";
	
				}else if ( document.dcdipap.url6.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
				}
					
				if (document.dcdipap.url7.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url7.value+"||";
	
				}else if ( document.dcdipap.url7.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
				}	
	
				if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
					if(prg != 'P')
					{
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
					}else
					{
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value+"||";
					}
	
				}else if ( document.dcdipap.url8.value != "" ) {
					if(prg != 'P')
					{
						document.dcdipap.stringurl.value = document.dcdipap.url8.value;
					}else
					{
						document.dcdipap.stringurl.value = document.dcdipap.url8.value+"||";	
					}
				}
				
				
				//alert("---stringurl--- "+document.dcdipap.stringurl.value);
				
				// Start: Added for PMO#472.42
				
				if(prg == 'P')
				{
					if (document.dcdipap.url9.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url9.value+"||";
		
					}else if ( document.dcdipap.url9.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url9.value+"||";
					}
					
					
					if (document.dcdipap.url10.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url10.value+"||";
		
					}else if ( document.dcdipap.url10.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url10.value+"||";
					}
					
					if (document.dcdipap.url11.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url11.value+"||";
		
					}else if ( document.dcdipap.url11.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url11.value+"||";
					}
					
					if (document.dcdipap.url12.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url12.value+"||";
		
					}else if ( document.dcdipap.url12.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url12.value+"||";
					}
					
					if (document.dcdipap.url13.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url13.value+"||";
		
					}else if ( document.dcdipap.url13.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url13.value+"||";
					}
					
					if (document.dcdipap.url14.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url14.value+"||";
		
					}else if ( document.dcdipap.url14.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url14.value+"||";
					}
					
					if (document.dcdipap.url15.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url15.value+"||";
		
					}else if ( document.dcdipap.url15.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url15.value+"||";
					}
					
					if (document.dcdipap.url16.value != "" && document.dcdipap.stringurl.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url16.value;
		
					}else if ( document.dcdipap.url16.value != "" ) {
						document.dcdipap.stringurl.value = document.dcdipap.url16.value;
					}
					
				}*/
				//document.dcdipap.stringurl.value = document.dcdipap.submitStringUrl.value;
				//document.dcdipap.typeImage.value = document.dcdipap.submitTypeImage.value
				
				//alert("---final stringurl value in submitrequest --   "+document.dcdipap.stringurl.value);
				//alert(" ---final document.dcdipap.typeImage.value --- "+document.dcdipap.typeImage.value);	
				
				// End: Added for PMO#472.42
				
	//end of change by veqar			
	
				
				//VIN Validation
	// SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - Start
				/*if (VIN.length == 8) {
	
					var VIN_lastSix = VIN.substring(2,8);
	
					if (!isInteger(VIN_lastSix)) {
						eval(document.dcdipap.vinNum.select());				
						eval(document.dcdipap.vinNum.focus());	
						alert(ErrorsDict.vinLastSix);
						return;
					}
	
				}
		
				if (VIN.length == 17) {
		
					var VIN_lastSix = VIN.substring(11,17);
	
					if (!isInteger(VIN_lastSix)) {
						eval(document.dcdipap.vinNum.select());				
						eval(document.dcdipap.vinNum.focus());	
						alert(ErrorsDict.vinLastSix);
						return;
					}
		
				}*/

		// SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - End
	
				if ((VIN == "") || (VIN.length != 17 && VIN.length != 8 && VIN.length != 0)) {
					eval(document.dcdipap.vinNum.select());				
					eval(document.dcdipap.vinNum.focus());			
					alert(ErrorsDict.vinNum);		
			       	return;					
				}
				
				//Category Validation	
		
				if (catg == "0") {
					eval(document.dcdipap.catg.focus());
					alert(ErrorsDict.catg);		
			       	return;					
				}
						
				//Odometer Validation	
				//alert("@@1 document.dcdipap.targetAction.value - "+document.dcdipap.targetAction.value);
				if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {
	
					if ((odom == '') || (odom == null)) {
						eval(document.dcdipap.odom.focus());
						alert(ErrorsDict.odom);		
				       	return;					
					}
                     // alert('Odom'+odom);
					if (!IsNumeric(odom)){
						eval(document.dcdipap.odom.focus());
						alert(ErrorsDict.odom);		
						return;
					}
				}
				
//				//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
//				
//				if(document.dcdipap.sourceType.value != "HOLD"){
//					
//					if ((odom == '') || (odom == null)) {
//						eval(document.dcdipap.odom.focus());
//						alert(ErrorsDict.odom);		
//				       	return;					
//					}
//                     // alert('Odom'+odom);
//					if (!IsNumeric(odom)){
//						eval(document.dcdipap.odom.focus());
//						alert(ErrorsDict.odom);		
//						return;
//					}
//				}
//				
//				
//				//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
													
				//Estimated Repair Cost Validation	
				//Tanuja	
				var action = form1.savetype.value;
				var status = "";
				var cost = "";
				var flag = "Y";
				
				if(action == "updateReq"){
					status = form1.statusInfo.value;
					if(status != "HOLD"){
						flag = "N";
					}		
				}
				//Changes by t8415sk for PMO 472.44 Start
				var subletValue="";
				if(prg != "P"){
					subletValue=document.getElementById("sublet").value;
				}
				//Changes by t8415sk for PMO 472.44 End
				if(flag == "Y" ){
					cost = form1.cost.value;
					if ((cost == '') || (cost == null) ) {
						//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
						
						if(subletValue == '1' || prg == "P" || prg == "T"){
							//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
							eval(form1.cost.focus());
							alert(ErrorsDict.cost);		
					       	return;	
						}else{
							cost="0.00";
							document.getElementById("cost").value=cost;
							//form1.cost.value=cost;
						}
					// Changes for 472.46 tkt 6986663 by t7950kd Start	 					
					}else if (prg == "V" && subletValue == '1' && cost<=0){
						eval(form1.cost.focus());
						alert(ErrorsDict.NonZeroCostMsg);		
				       	return;
					}
					// Changes for 472.46 tkt 6986663 by t7950kd End
					
				}	
				//Changes by t8415sk for PMO 472.44 End
				//End	
								//DIPAP TCR CHANGES START - T4317SK 
								/*if(prg == "V"){
				var vcost = document.getElementById("cost").value; 
				var vsubletvalue =document.getElementById("sublet").value; 
				if(document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest"&&prg == "V"&&vcost == "0.00"&&vsubletvalue=="1")
			    {
					eval(document.dcdipap.cost.focus());
                alert("Actual Cost amount can't be 0. Please enter the Actual Cost in numbers");
				return;	
				}
				}*/
				//DIPAP TCR CHANGES END - T4317SK 
				
					
				//Added by Tanuja
				//ClaimType Validation
				var claimT =  form1.claimType.value;
				if (claimT == "0") {
					eval(document.dcdipap.claimType.focus());
					alert(ErrorsDict.claimT);		
			       	return;					
				}
				//End
				
				if (ron == null) form1.ron.value = "";
	
				//Repair Issue Validation	
				
				if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {			
						
					if ((issue == '') || (issue == null)) {
						eval(form1.issue.focus());
						alert(ErrorsDict.issue);		
						form1.issue.value = "";
				       	return;					
					}
					
				}	
				
				//Proposed Service Action Validation	
				
				if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {						
				
					if ((servaction == '') || (servaction == null)) {
						//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
						//Changes by t8415sk for PMO 472.44 Start
						if(subletValue == '1'  || prg == 'P' || prg == 'T'){
						//Changes by t8415sk for PMO 472.44 End	
							//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
						eval(form1.servaction.focus());
						alert(ErrorsDict.servaction);		
						form1.servaction.value = "";
				       	return;			
						}
					}
					
				}
				
				
				
				//alert("---submitTypeImage in submit request--- "+document.dcdipap.submitTypeImage.value);
				//document.dcdipap.typeImage.value = document.dcdipap.submitTypeImage.value;
				//var typeImage = document.dcdipap.typeImage.value;
				//alert("---typeImage--- "+typeImage);
				
				
				/*if(prg!='P')
				{
					if (typeImage.substring(0,1) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile1').focus());
						alert(ErrorsDict.vinplateimg);		
				       	return;					
				    } 
					
					if (typeImage.substring(1,2) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile2').focus());
						alert(ErrorsDict.odomimg);		
				       	return;					
				    } 
					
					if (typeImage.substring(2,3) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile3').focus());
						alert(ErrorsDict.vehicleimg);		
				       	return;					
				    } 
					
					if (typeImage.substring(3,4) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile4').focus());
						alert(ErrorsDict.affectedimg);		
				       	return;					
				    } 
					
				}
				else
				{
					if (typeImage.substring(0,1) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile1').focus());
						alert(ErrorsDict.transidimg);		
				       	return;					
				    } 
					
					if (typeImage.substring(1,2) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile2').focus());
						alert(ErrorsDict.image2img);		
				       	return;					
				    } 
					
					if (typeImage.substring(2,3) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile3').focus());
						alert(ErrorsDict.image3img);		
				       	return;					
				    } 
					
					if (typeImage.substring(3,4) == 'X' || (typeImage == null || typeImage == ''))
					{
						eval(document.getElementById('dummyfile4').focus());
						alert(ErrorsDict.image4img);		
				       	return;					
				    } 
					else
					{
						if(document.dcdipap.dlrEligCrPWTSheet.value == 'true')
						{
							if(document.dcdipap.worksheetStatus.value=="0"){
								alert(ErrorsDict.wrkSheetStatus);
							}
						}
						
					}
					
				}*/
				
				
				/*if( prg!='P') {
					
				//VIN plate Image Validation				
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
				
					if ( (image1 != "") && (image1 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image11) && (image1 == '' || image1 == null) ) {
							eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.vinplateimg);		
					       	return;					
					} else {
						if ( (image1 == '' || image1 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.vinplateimg);		
					       	return;					
						} else {
							if ( (image1 != "") && (image1 != null) ) {
	
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "V";
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}					
	
						}
					}
				
				}	
	
				//3/4th Image Validation				
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image2 != "") && (image2 != null)  ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image22) && (image2 == '' || image2 == null) ) {
							eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.odomimg);		
					       	return;					
					} else {
						if ( (image2 == '' || image2 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.odomimg);		
					       	return;					
						} else {
							if ( (image2 != "") && (image2 != null)  ) {
							    //count++;
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";				
						}
					}
				}
				
				//Odometer Image Validation							
			
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image3 != "") && (image3 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") &&  (!image33) && (image3 == '' || image3 == null) ) {
							eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.vehicleimg);		
					       	return;					
					} else {
						if ( (image3 == '' || image3 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.vehicleimg);		
					       	return;					
						} else {
							if ( (image3 != "") && (image3 != null) ) {
								//count++;
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";				
						}
					}
				}
	
				
				//Affected Area Image Validation							
	
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image4 != "") && (image4 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image44) && (image4 == '' || image4 == null) ) {
							eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.affectedimg);		
					       	return;					
					} else {
						if ( (image4 == '' || image4 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.affectedimg);		
					       	return;					
						} else {
							if ( (image4 != "") && (image4 != null) ) {
								//count++;
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}					
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";				
						}
					}
	//					alert("in dr js submit in typeimage gen   "+document.dcdipap.typeImage.value);
				}
				
				} 
					else {
				
				// TransID Image Documentation				
				
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
				
					if ( (image1 != "") && (image1 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image11) && (image1 == '' || image1 == null) ) {
							eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.transidimg);		
					       	return;					
					} else {
						if ( (image1 == '' || image1 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.transidimg);		
					       	return;					
						} else {
							if ( (image1 != "") && (image1 != null) ) {
	
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
	
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}					
	
						}
					}
				
				}	
	
				//2nd Image Validation				
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image2 != "") && (image2 != null)  ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
			
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image22) && (image2 == '' || image2 == null) ) {
							eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.image2img);		
					       	return;					
					} else {
						if ( (image2 == '' || image2 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.image2img);		
					       	return;					
						} else {
							if ( (image2 != "") && (image2 != null)  ) {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "T";				
						}
					}
				}
				
				// 3rd Image Validation							
			
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image3 != "") && (image3 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image33) && (image3 == '' || image3 == null) ) {
							eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.image3img);		
					       	return;					
					} else {
						if ( (image3 == '' || image3 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.image3img);		
					       	return;					
						} else {
							if ( (image3 != "") && (image3 != null) ) {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
	
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "O";				
						}
					}
				}
	
				
				//4th Image Validation							
	
				if (document.dcdipap.targetAction.value == "holdRequest" || document.dcdipap.targetAction.value == "holdUpdateRequest") {
					if ( (image4 != "") && (image4 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} else {
					if ( (document.dcdipap.targetAction.value == "resizeUpdate") && (!image44) && (image4 == '' || image4 == null) ) {
							eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.image4img);		
					       	return;					
					} else {
						if ( (image4 == '' || image4 == null) && (document.dcdipap.targetAction.value != "resizeUpdate") ) {
							eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.image4img);		
					       	return;					
						} else {
							if ( (image4 != "") && (image4 != null) ) {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
	
							} else {
								document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
							}					
	//						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";				
						}
					}
	//					alert("in dr js submit in typeimage gen   "+document.dcdipap.typeImage.value);
				}
	
		  }			
	// code added by veqar
	
				//5th Image Validation
				
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null){
	
					if ( (image5 != "") && (image5 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
					} else {
	
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
	//			
	
	
	
				//6th Image Validation
					
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
	
					if ( (image6 != "") && (image6 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				}
	//			
	
				//7th Image Validation
			
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image7 != "") && (image7 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				}
	//			 
	
	
				// 8th Image Validation
	
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image8 != "") && (image8 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
				//	
				
				
				
				// Start: Added for PMO#472.42
				if(prg == 'P')
				{
				
					//9th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image9 != "") && (image9 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "9";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//10th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image10 != "") && (image10 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "A";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//11th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image11 != "") && (image11 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "B";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//12th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image12 != "") && (image12 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "C";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//13th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image13 != "") && (image13 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "D";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//14th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image14 != "") && (image14 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "E";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//15th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image15 != "") && (image15 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "F";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//			 
					
					//16th Image Validation
					
					if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
						if ( (image16 != "") && (image16 != null) ) {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "G";
						} else {
							document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
						}
					}
					//
					
				}*/
				//alert("---final stringurl--- "+document.dcdipap.stringurl.value);
				// End: Added for PMO#472.42
				form1.ProgramType.value = prg;
				
				if(document.dcdipap.sourceType.value == "HOLD")
				{
					document.dcdipap.sourceType.value = "HOLD";
					
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					if(document.getElementById("cb1")){
						if(document.getElementById("cb1").checked==true){
							document.getElementById("tcrCheck").value=document.getElementById("cb1").value;
						  }
						}
						if(document.getElementById("cb2")){
						if(document.getElementById("cb2").checked==true){
							document.getElementById("tcrCheck").value=document.getElementById("cb2").value;
						  }
						}
					
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
				
				}
				else
				{
					document.dcdipap.sourceType.value = "SUBMIT";

					//ATS Table validations
					//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
					if(prg == 'T')
					{
						
					if(document.getElementById("atsTable") && document.getElementById("noATS")){
						
							alert(ErrorsDict.selectOneATSMsg);
							return;
							
//						var table = document.getElementById("atsTable");
//						var rowCount = table.rows.length;
//						alert(" present rowCount = "+rowCount);
//						if(rowCount<=2){
//							alert(ErrorsDict.selectOneATSMsg);
//							return;
//						}
					}
					
					}
					
					
					
					
					
					//Start: Added for PMO 472.42 by t9453ss

					//if(prg != 'P')
					if(prg == 'V') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						
						if(document.dcdipap.imageSequence1 == undefined)
						{
							//eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.vinplateimg);		
					       	return;		
						}
						if(document.dcdipap.imageSequence2 == undefined)
						{
							//eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.odomimg);
							return;
						}
						
						if(document.dcdipap.imageSequence3 == undefined)
						{
							//eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.vehicleimg);		
					       	return;	
						}
						
						if(document.dcdipap.imageSequence4 == undefined)
						{
							//eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.affectedimg);		
					       	return;		
						}
						
					}
					else if(prg == 'P') //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
					{
						
						/*var ext="";
						var brflag=false;
						if(document.getElementById("image44")!=undefined && document.getElementById("image44").innerText!=undefined && document.getElementById("image44").innerText!=""){
							source=document.getElementById("image44").innerText;
							ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
							if(ext!="" && trim(ext)=="pdf"){
								
								brflag=true;
								
							
							}
						}		*/													
						if(document.dcdipap.imageSequence1 == undefined)
						{
							//eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.transidimg);			
					       	return;		
						}
						if(document.dcdipap.imageSequence2 == undefined)
						{
							//eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.image2img);	
							return;
						}
						
						if(document.dcdipap.imageSequence3 == undefined)
						{
							//eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.image3img);	
					       	return;	
						}
						if(document.dcdipap.CreateFlag.value!="true" && document.dcdipap.imageSequence4 == undefined)
						{
							//eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.worksheetMsg);		
					       	return;		
						} // Initial cat was diesel/ 
						
						
						var category = document.dcdipap.catg;
						var selectedvalue = category.options[category.selectedIndex].value;
						
			
						
						if(document.dcdipap.CreateFlag.value=="true" && (document.dcdipap.imageSequence4 == undefined) && ((selectedvalue != 'U') && (selectedvalue != 'L')))
						{
							//eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.worksheetMsg);		
							return;
						}
						//Category changes


						if(document.dcdipap.CreateFlag.value=="true" && ((selectedvalue != 'U') && (selectedvalue != 'L'))){
								var submitStringUrl = document.dcdipap.submitStringUrl.value;
								
								var fileNamesArray = submitStringUrl.split("||"); 
							
								var flag = false;
								for(var j=0;j<fileNamesArray.length;j++)
								{
									var fileNamesList = fileNamesArray[j];
									
									var fileNames = fileNamesList.split("|");
									if(fileNames[0] == document.dcdipap.imageSequence4.value){
										flag= true;
									}
								}

								if(flag == false){
									alert(ErrorsDict.worksheetMsg);		
					       			return;		
								}
						}
						
						/*if(!brflag && document.getElementById("browseFlag").value=="true" )
						{
								//eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.worksheetMsg);		
						      	return;		
						}*/
						

						if(document.dcdipap.imageSequence5 == undefined)
						{
							//eval(document.getElementById('dummyfile5').focus());
							alert(ErrorsDict.image5img);		
					       	return;		
						}
						
						if(document.dcdipap.imageSequence6 == undefined)
						{
							//eval(document.getElementById('dummyfile6').focus());
							alert(ErrorsDict.image6img);		
					       	return;		
						}
											
					} 
					
					else 
					{
						
						if(document.dcdipap.imageSequence1 == undefined)
						{
							//eval(document.getElementById('dummyfile1').focus());
							alert(ErrorsDict.vinplateimg);		
					       	return;		
						}
						if(document.dcdipap.imageSequence2 == undefined)
						{
							//eval(document.getElementById('dummyfile2').focus());
							alert(ErrorsDict.vehicleDelimg);
							return;
						}
						
						if(document.dcdipap.imageSequence3 == undefined)
						{
							//eval(document.getElementById('dummyfile3').focus());
							alert(ErrorsDict.detailedRepEstmtimg);		
					       	return;	
						}
						
						if(document.dcdipap.imageSequence4 == undefined)
						{
							//eval(document.getElementById('dummyfile4').focus());
							alert(ErrorsDict.affected1img);		
					       	return;		
						}
						
						if(document.dcdipap.imageSequence5 == undefined)
						{
							//eval(document.getElementById('dummyfile5').focus());
							alert(ErrorsDict.affected2img);		
					       	return;		
						}
						
						if(document.dcdipap.imageSequence6 == undefined)
						{
							//eval(document.getElementById('dummyfile6').focus());
							alert(ErrorsDict.affected3img);		
					       	return;		
						}
						if(document.getElementById("catg").value == "F" || document.getElementById("catg").value == "H" ){
							
							if(document.dcdipap.imageSequence7 == undefined)
							{
								//eval(document.getElementById('dummyfile6').focus());
								alert(ErrorsDict.stiimg);		
						       	return;		
							}
							
						}
						
						//Checkbox validations
						if(document.getElementById("cb1") && document.getElementById("cb2")){
							if(document.getElementById("cb1").checked == false && document.getElementById("cb2").checked == false){
								alert(ErrorsDict.cbValidate);	
								return;
							}
							
						}
						
						
						
							if(document.getElementById("cb1")){
							if(document.getElementById("cb1").checked==true){
								document.getElementById("tcrCheck").value=document.getElementById("cb1").value;
							  }
							}
							if(document.getElementById("cb2")){
							if(document.getElementById("cb2").checked==true){
								document.getElementById("tcrCheck").value=document.getElementById("cb2").value;
							  }
							}
						}
						//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
					
						
					
					
					

					if(prg == 'P')
					{
						//var reqType = document.dcdipap.requestType.value;
						//alert("reqType::"+reqType);
						var createwrkSheetFlag=document.dcdipap.CreateFlag.value;
//						var browseFlag=document.getElementById("browseFlag").value;
						/*if(reqType == "updateType")
						{
							var createwrkSheetFlag=document.dcdipap.CreateFlag.value;
							if(createwrkSheetFlag == true)
							{
								alert(ErrorsDict.wrkSheetStatus);
								return;
							}
						}
						else
						{*/
//						if(browseFlag!="true"){
							var category = document.dcdipap.catg;
							var selectedvalue = category.options[category.selectedIndex].value;
							

							//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
							if(createwrkSheetFlag == "true" && (document.dcdipap.worksheetSubmitStatus.value == "0" || document.dcdipap.worksheetSubmitStatus.value == "") && ((selectedvalue == 'U') ||(selectedvalue == 'L'))){
								/*alert(ErrorsDict.wrkSheetStatus);		
						       	return;	*/
								if(document.getElementById("browseFlag").value =="true" &&  document.dcdipap.imageSequence4 == undefined){
									alert(ErrorsDict.worksheetMsg);	
									return;
								}else if (document.getElementById("browseFlag").value =="true" &&  document.dcdipap.imageSequence4 != undefined) {
									
								}else{
									alert(ErrorsDict.wrkSheetStatus);		
							       	return;	
								}
							}
							
							if(document.getElementById("browseFlag").value =="true" &&  document.dcdipap.imageSequence4 == undefined && ((selectedvalue == 'U') ||(selectedvalue == 'L'))){
					
								alert(ErrorsDict.worksheetMsg);	
								return;
							}
							//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
							
//						}
							
						//}
						
						
					}
					//End: Added for PMO 472.42 by t9453ss
				}
				
				
				//alert("--final source type in submitrequest ---  "+document.dcdipap.sourceType.value);
	// end of change by veqar
				
				document.dcdipap.targetAction.value = "holdUpdateRequest"; //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
				enableRequiredField(this.document);
				form1.action="/service/writeup/dipap/DIPAPServlet";
				form1.method="POST";
				form1.submit();
	
		}
	
}	
	
	//Added for Quality SR-CX-07266
	function submitQuality(){
		form1 = document.dcdipap;	
		var prg = form1.ProgramType.value;
		
		if (validateform1(form1)) {
				document.dcdipap.typeImage.value = "";
				var ok = "";
				var VIN = form1.vinNum.value;
				var odom = form1.odom.value;			
									
				var ron = form1.ron.value;
				var issue = form1.issue.value;
				var servaction = form1.servaction.value;
	          				
				var image1 = document.getElementById('realfile1').value;
				var image2 = document.getElementById('realfile2').value;
				var image3 = document.getElementById('realfile3').value;
				var image4 = document.getElementById('realfile4').value;	
				var image5 = document.getElementById('realfile5').value;
				var image6 = document.getElementById('realfile6').value;
				var image7 = document.getElementById('realfile7').value;
				var image8 = document.getElementById('realfile8').value;	
	
				var catg = form1.catg.value;		
				
				//code added by t9409ap - Start			
				var group = form1.group.value;
				//code added by t9409ap - End
	
				if ( (image1 != "") && (image1 != null) ) {
					ok = preview1(document.getElementById('realfile1'), '1'); 
					
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image2 != "") && (image2 != null) ) {
					ok = preview1(document.getElementById('realfile2'), '2'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image3 != "") && (image3 != null) ) {
					ok = preview1(document.getElementById('realfile3'), '3'); 
					
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image4 != "") && (image4 != null) ) {
					ok = preview1(document.getElementById('realfile4'), '4'); 
					
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
				}
	
				if ( (image5 != "") && (image5 != null) ) {
					ok = preview1(document.getElementById('realfile5'), '5'); 
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image6 != "") && (image6 != null) ) {
					ok = preview1(document.getElementById('realfile6'), '6'); 
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image7 != "") && (image7 != null) ) {
					ok = preview1(document.getElementById('realfile7'), '7'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
					
				}
	
				if ( (image8 != "") && (image8 != null) ) {
	
					ok = preview1(document.getElementById('realfile8'), '8'); 
	
					if (ok != "Y") {
						return;
					}else {
						ok = "";
					}
				}
	
	
				if (document.dcdipap.url1.value != "") {
					document.dcdipap.stringurl.value = document.dcdipap.url1.value+"||";
	
				}	
				if (document.dcdipap.url2.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url2.value+"||";
	
				}else if ( document.dcdipap.url2.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url2.value+"||";
				}
				
				if (document.dcdipap.url3.value != "" && document.dcdipap.stringurl.value != "" ) {
	
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url3.value+"||";
				}else if ( document.dcdipap.url3.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url3.value+"||";
				}	
			
				if (document.dcdipap.url4.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url4.value+"||";
	
				}else if ( document.dcdipap.url4.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.url4.value+"||";
				}	
	
				if (document.dcdipap.url5.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url5.value+"||";
	
				}else if ( document.dcdipap.url5.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url5.value+"||";
				}
				
				if (document.dcdipap.url6.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url6.value+"||";
	
				}else if ( document.dcdipap.url6.value != "" ){
					document.dcdipap.stringurl.value = document.dcdipap.url6.value+"||";
				}
					
				if (document.dcdipap.url7.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url7.value+"||";
	
				}else if ( document.dcdipap.url7.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.url7.value+"||";
				}	
	
				if (document.dcdipap.url8.value != "" && document.dcdipap.stringurl.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.stringurl.value+document.dcdipap.url8.value;
	
				}else if ( document.dcdipap.url8.value != "" ) {
					document.dcdipap.stringurl.value = document.dcdipap.url8.value;
				}
	
				//VIN Validation
	//SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - Start
			/*	if (VIN.length == 8) {
	
					var VIN_lastSix = VIN.substring(2,8);
	
					if (!isInteger(VIN_lastSix)) {
						eval(document.dcdipap.vinNum.select());				
						eval(document.dcdipap.vinNum.focus());	
						alert(ErrorsDict.vinLastSix);
						return;
					}
	
				}
		
				if (VIN.length == 17) {
		
					var VIN_lastSix = VIN.substring(11,17);
	
					if (!isInteger(VIN_lastSix)) {
						eval(document.dcdipap.vinNum.select());				
						eval(document.dcdipap.vinNum.focus());	
						alert(ErrorsDict.vinLastSix);
						return;
					}
		
				}*/

	//SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - End
	
				if ((VIN == "") || (VIN.length != 17 && VIN.length != 8 && VIN.length != 0)) {
					eval(document.dcdipap.vinNum.select());				
					eval(document.dcdipap.vinNum.focus());			
					alert(ErrorsDict.vinNum);		
			       	return;					
				}
				    	
				//Category Validation	
		
				if (catg == "0") {
					eval(document.dcdipap.catg.focus());
					alert(ErrorsDict.catg);		
			       	return;					
				}
				
				//Group Validation - added by t9409ap - Start
				if (group == "0") {
					eval(document.dcdipap.group.focus());
					alert(ErrorsDict.group);
				return;
	                        }
	                        //Group Validation - added by t9409ap - End
	
				//Odometer Validation	
				
				if ((odom == '') || (odom == null)) {
						eval(document.dcdipap.odom.focus());
						alert(ErrorsDict.odom);		
				       	return;					
				}

				if (!IsNumeric(odom)){
					eval(document.dcdipap.odom.focus());
					alert(ErrorsDict.odom);		
					return;
				}
					
				if (ron == null) form1.ron.value = "";
	
				//Repair Issue Validation	
				
				if ((issue == '') || (issue == null)) {
						eval(form1.issue.focus());
						alert(ErrorsDict.issue);		
						form1.issue.value = "";
				       	return;					
				}
				
				
				if ((servaction == '') || (servaction == null)) {		
						eval(form1.servaction.focus());
						// alert(ErrorsDict.servaction);
						form1.servaction.value = "";
				       	// return;					
				}
				
				//Dictionary Validation	
	
				var restrictedWrds = new Array("death", "injury", "accident", "fire", "flame", "sparks", "smoldering", "rollover", "roll over", "fatality", "fatal", "kill" );
				var strng1 = form1.issue.value;
				var chkstr1 = strng1.toLowerCase();
				if (issue != null)
					{
					 for (ctr = 0; ctr < restrictedWrds.length; ctr++)
					{
	                   var wrd = restrictedWrds[ctr];  
	                   if (chkstr1.indexOf(wrd) != -1)
	                      {
						     alert("Notice: This system is not to be used for reporting of accidents,fires,rollover,personal injuries or death. If you wish to report these types of issues, please call the Chrysler Customer Assistance Center @1-800-992-1997. You have used a word in your Issue/Proposed Service Action description that is specifically spelled out in the National Highway Transportation Safety Administration TREAD Act. If you are not reporting on incidentas described above, please avoid using these keywords: Death, Injury, Accident, Fire, Flame, Sparks, Smoldering, Rollover, Roll Over, Fatality, Fatal or Kill. Thank you!!!! ");
						     form1.issue.value = "";
						     return;
	                       }
	                }  
					}
	            var strng2 = form1.servaction.value;
				var chkstr2 = strng2.toLowerCase();
	            if (servaction != null) 
					{
					for (ctr = 0; ctr < restrictedWrds.length; ctr++)
					{
	                   var wrd = restrictedWrds[ctr];  
	                   if (chkstr2.indexOf(wrd) != -1)
	                      {
						     alert("Notice: This system is not to be used for reporting of accidents,fires,rollover,personal injuries or death. If you wish to report these types of issues, please call the Chrysler Customer Assistance Center @1-800-992-1997. You have used a word in your Issue/Proposed Service Action description that is specifically spelled out in the National Highway Transportation Safety Administration TREAD Act. If you are not reporting on incidentas described above, please avoid using these keywords: Death, Injury, Accident, Fire, Flame, Sparks, Smoldering, Rollover, Roll Over, Fatality, Fatal or Kill. Thank you!!!! ");
						     form1.servaction.value = "";
						     return;
	                       }
	                }  
					}
	
	
				
				
				// TransID Image Documentation				
	
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
				
					if ( (image1 != "") && (image1 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "I";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
				
				//2nd Image Validation				
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image2 != "") && (image2 != null)  ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "2";
			
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
				
				// 3rd Image Validation							
			
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image3 != "") && (image3 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "3";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
							
				//4th Image Validation							
	
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image4 != "") && (image4 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "4";
	
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
	
				//5th Image Validation
				
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null){
	
					if ( (image5 != "") && (image5 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "5";
					} else {
	
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
	
				//6th Image Validation
					
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
	
					if ( (image6 != "") && (image6 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "6";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				}
	
	
				//7th Image Validation
			
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image7 != "") && (image7 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "7";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				}
	
	
				// 8th Image Validation
	
				if (document.dcdipap.targetAction.value != "" || document.dcdipap.targetAction.value != null) {
					if ( (image8 != "") && (image8 != null) ) {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "8";
					} else {
						document.dcdipap.typeImage.value = document.dcdipap.typeImage.value + "X";				
					}
				} 
				form1.ProgramType.value = prg;
	                  form1.submitInfo.value = "submitform";
				form1.action="/service/writeup/dipap/DIPAPServlet";
				form1.method="POST";
				form1.submit();
	
		}
	}
	
	
	
	function submitForm(){
	  document.dcdipap.submit();
	}
	
	function addReqReset(inputCatg, inputLop){
		document.dcdipap.reset();
		//Changes by t4317sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
		if(inputLop == "NoLopForTCR"){
			afterResetTCR();
		}else{
			loadLOPDropDown(inputCatg, inputLop);
		}
		//Changes by t4317sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
		
		
		
	}
	
	//Added for Quality SR-CX-07266
	function qualityReset(){
		document.dcdipap.reset();
	}
	
	function updateReqReset(inputCatg, inputLop){
		
		document.dcdipap.reset();
		//Modification for PMO 472.46 Ticket 6979599 by t6570hj - Start
		var catg = document.dcdipap.catg.value;//veqar change
		if(catg == "U" || catg == "L"){
			if(document.getElementById("editSheet")){
				document.getElementById("editSheet").style.display = "block";
				document.getElementById("editSheet").style.padding = "25px";
			}
			
			if(document.getElementById("CreateFlag"))
			document.getElementById("CreateFlag").value = "true";
			if(document.getElementById("notSubmitted"))
			document.getElementById("notSubmitted").style.display = "none";
		}else{
			if(document.getElementById("editSheet")){
				document.getElementById("editSheet").style.display = "none";
				document.getElementById("editSheet").style.padding = "00px";
			}
			
			
			if(document.getElementById("CreateFlag"))
			document.getElementById("CreateFlag").value = "false";
			if(document.getElementById("notSubmitted"))
			document.getElementById("notSubmitted").style.display = "block";
		}
		
		
		//Modification for PMO 472.46 Ticket 6979599 by t6570hj - End
		
		if(inputLop == "NoLopForTCR"){
			afterResetTCR();
		}else{
			loadLOPDropDown(inputCatg, inputLop);	
		}
		
	}
	
	function LimitText(field, num) { 
		
		if (field.value.length > num-1){ 
			field.value = field.value.substring(0, num-1); 
			alert("Sorry, messages cannot be any longer than "+num+ " characters."); 
		} 
	} 
	// Changes to fix hold issue
	function loadLOPDropDown(inputCatg, inputLop){
		 //Modification for PMO 472.46 Ticket 6979599 by t6570hj - Start
		var catg = document.dcdipap.catg.value;
		var status = document.dcdipap.statusInfo.value;
		
		if(status == "HOLD" || status == "NEEDINFO"){
			if(catg == "U" || catg == "L"){
				if(document.getElementById("CreateFlag")){
					if(document.getElementById("CreateFlag").value == 'true'){
						if(document.getElementById("editSheet")){
							document.getElementById("editSheet").style.display = "block";
							document.getElementById("editSheet").style.padding = "25px";
						}
						if(document.getElementById("notSubmitted"))
							document.getElementById("notSubmitted").style.display = "none";
					}else{
						if(document.getElementById("editSheet")){
								document.getElementById("editSheet").style.display = "none";
								document.getElementById("editSheet").style.padding = "00px";
							}
							if(document.getElementById("notSubmitted"))
								document.getElementById("notSubmitted").style.display = "block";
						}
				}
				
			}else{
				
				if(document.getElementById("editSheet")){
					document.getElementById("editSheet").style.display = "none";
					document.getElementById("editSheet").style.padding = "00px";
				}
				
			//	if(document.getElementById("CreateFlag"))
			//		document.getElementById("CreateFlag").value = "false";
				if(document.getElementById("notSubmitted"))
					document.getElementById("notSubmitted").style.display = "block";
			}
			
			
		}
		//Modification for PMO 472.46 Ticket 6979599 by t6570hj - End
		
		
		 var prg = document.dcdipap.prgType.value;
		
		 
		
		var lopVal="document.dcdipap.inputLop"+inputCatg+".value";
		var inputLopSelect	=null;
			//Added by t8415sk start
		if(lopVal)
		inputLopSelect	=	eval("document.dcdipap.inputLop"+inputCatg+".value");
		eval("document.getElementById('LOPDropDown').innerHTML	= inputLopSelect");
			//Added by t8415sk End
		var selectedLopIndexCount	=	eval("document.dcdipap.lop"+inputCatg+".length");
		var lopValue;
	
		for(i=0; i<selectedLopIndexCount; i++) {
			lopValue = eval("document.dcdipap.lop"+inputCatg+".options[i].value");
	
			if(inputLop == lopValue) {
				eval("document.dcdipap.lop"+inputCatg+".options[i].selected = true");
			}
		}

		//toActivateTooltip();	
		//t4317sk changes for caategory issue 
 var img4 = document.dcdipap.img4.value;
 if(img4!="")
		{
	 //alert("Disabling category");
        var catg = document.dcdipap.catg;	
		if(catg){
			catg.disabled=true;
		}
         }
//T4317SK changes for category issue 
	}
	
	
	
	//Start: Added for PMO#472.42
	
	
	/*function validate() {
		//alert("--in validate func--");
		form1 = document.dcdipap;	
		var prg = form1.prgType.value;	
		if (validateform1(form1)) 
		{
			document.dcdipap.typeImage.value = "";
			var VIN = form1.vinNum.value;
			var odom = form1.odom.value;			
											
			var ron = form1.ron.value;
			var issue = form1.issue.value;
			var servaction = form1.servaction.value;
			var catg = form1.catg.value;	
			
			//VIN Validation
	
			if (VIN.length == 8) {
	
				var VIN_lastSix = VIN.substring(2,8);
	
				if (!isInteger(VIN_lastSix)) {
					eval(document.dcdipap.vinNum.select());				
					eval(document.dcdipap.vinNum.focus());	
					alert(ErrorsDict.vinLastSix);
					return;
				}
	
			}
	
			if (VIN.length == 17) {
	
				var VIN_lastSix = VIN.substring(11,17);
	
				if (!isInteger(VIN_lastSix)) {
					eval(document.dcdipap.vinNum.select());				
					eval(document.dcdipap.vinNum.focus());	
					alert(ErrorsDict.vinLastSix);
					return;
				}
	
			}
	
			if ((VIN == "") || (VIN.length != 17 && VIN.length != 8 && VIN.length != 0)) {
				eval(document.dcdipap.vinNum.select());				
				eval(document.dcdipap.vinNum.focus());			
				alert(ErrorsDict.vinNum);		
		       	return;					
			}
			
			//Category Validation	
	
			if (catg == "0") {
				eval(document.dcdipap.catg.focus());
				alert(ErrorsDict.catg);		
		       	return;					
			}
					
			//Odometer Validation	
	
			if ((odom == '') || (odom == null)) {
				eval(document.dcdipap.odom.focus());
				alert(ErrorsDict.odom);		
		       	return;					
			}
	      				
			//ClaimType Validation
			var claimT =  form1.claimType.value;
			if (claimT == "0") {
				eval(document.dcdipap.claimType.focus());
				alert(ErrorsDict.claimT);		
		       	return;					
			}
			
			if (ron == null) form1.ron.value = "";
	
			//Repair Issue Validation	
			if ((issue == '') || (issue == null)) {
				eval(form1.issue.focus());
				alert(ErrorsDict.issue);		
				form1.issue.value = "";
		       	return;					
			}
				
			
			//Proposed Service Action Validation	
			if ((servaction == '') || (servaction == null)) {
				eval(form1.servaction.focus());
				alert(ErrorsDict.servaction);		
				form1.servaction.value = "";
		       	return;					
			}
		}
		return true;
	}*/

	function validate() {
	//alert("--in validate func--");
	form1 = document.dcdipap;	
	var prg = form1.prgType.value;	
	if (validateform1(form1)) 
	{
		document.dcdipap.typeImage.value = "";
		var VIN = form1.vinNum.value;
		var odom = form1.odom.value;			
										
		var ron = form1.ron.value;
		var issue = form1.issue.value;
		var servaction = form1.servaction.value;
		var catg = form1.catg.value;	
		
		//VIN Validation
// SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - Start
	/*	if (VIN.length == 8) {

			var VIN_lastSix = VIN.substring(2,8);

			if (!isInteger(VIN_lastSix)) {
				eval(document.dcdipap.vinNum.select());				
				eval(document.dcdipap.vinNum.focus());	
				alert(ErrorsDict.vinLastSix);
				return;
			}

		}

		if (VIN.length == 17) {

			var VIN_lastSix = VIN.substring(11,17);

			if (!isInteger(VIN_lastSix)) {
				eval(document.dcdipap.vinNum.select());				
				eval(document.dcdipap.vinNum.focus());	
				alert(ErrorsDict.vinLastSix);
				return;
			}

		}*/
	// SeRV01422243 - Ticket - 8067129 - Commenting the check to allow Jeep Renegade VINS with alpha numeric character in last 6 digits in DIPAP - End

		if ((VIN == "") || (VIN.length != 17 && VIN.length != 8 && VIN.length != 0)) {
			eval(document.dcdipap.vinNum.select());				
			eval(document.dcdipap.vinNum.focus());			
			alert(ErrorsDict.vinNum);		
	       	return;					
		}
			//T4317SK DIPAP TCR CHANGES START 
		if(prg =='T' || prg =='V')
		{
		var vnfflag = document.dcdipap.vinNotFoundFlag.value;
	
       if(vnfflag == 'N')
			{
		   	eval(document.dcdipap.vinNum.select());				
			eval(document.dcdipap.vinNum.focus());		
	        alert(ErrorsDict.vinnotFoundMsg);	
			return;	
			 }
			        if(vnfflag == 'D')
			{
		   	eval(document.dcdipap.vinNum.select());				
			eval(document.dcdipap.vinNum.focus());		
	        alert("Duplicate VINs found. Please enter the full 17 digit VIN.");	
			return;	
			 }
			// if(prg =='T' || prg == 'V' )
			 if(prg =='T' )
			{
			var sublet = document.dcdipap.sublet.value;
			 if(sublet == 'Select')
			{
			 eval(document.dcdipap.sublet.focus());
			 alert("Sublet is required. Please select the Sublet");
			 return;
			 }
			}
		}
			//T4317SK DIPAP TCR CHANGES END
		//Category Validation	

		if (catg == "0") {
			eval(document.dcdipap.catg.focus());
			alert(ErrorsDict.catg);		
	       	return;					
		}
				
		//Odometer Validation	

		if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {
            //alert('inside not hold');
			if ((odom == '') || (odom == null)) {
				eval(document.dcdipap.odom.focus());
				alert(ErrorsDict.odom);		
		       	return;					
			}

			if (!IsNumeric(odom)){
				eval(document.dcdipap.odom.focus());
				alert(ErrorsDict.odom);		
		       	return;
			}
		}
		
//		//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
//		
//		if (document.dcdipap.targetAction.value == "holdUpdateRequest") {
//            //alert('inside not hold');
//			if ((odom == '') || (odom == null)) {
//				eval(document.dcdipap.odom.focus());
//				alert(ErrorsDict.odom);		
//		       	return;					
//			}
//
//			if (!IsNumeric(odom)){
//				eval(document.dcdipap.odom.focus());
//				alert(ErrorsDict.odom);		
//		       	return;
//			}
//		}
//		
//		
//		
//		//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
		
		//Estimated Repair Cost Validation	
		// Changes by t8415sk for PMO 472.44 - Start
		var subletValueValidation = "";
		if(prg != "P"){
			subletValueValidation=document.getElementById("sublet").value; 
		}
		// Changes by t8415sk for PMO 472.44 - End
		var action = form1.savetype.value;
		var status = "";
		var cost = "";
		var flag = "Y";
		
		if(action == "updateReq"){
			status = form1.statusInfo.value;
			if(status != "HOLD"){
				flag = "N";
			}		
		}
		
		if(flag == "Y"){
			cost = form1.cost.value;
			//Changes by t8415sk for PMO 472.44 Start
			if ((cost == '') || (cost == null)) {
				if(subletValueValidation == "1" || prg == "P" || prg == "T"){  //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 
				eval(form1.cost.focus());
				alert(ErrorsDict.cost);		
		       	return;			
				}else{
					cost="0.00";
					document.getElementById("cost").value=cost;
					//form1.cost.value = cost;
				}
			}
			// Changes for 472.46 tkt 6986663 by t8415sk Start	 
			else if (prg == "V" && subletValueValidation == '1' && cost<=0){
				eval(form1.cost.focus());
				alert(ErrorsDict.NonZeroCostMsg);		
		       	return;
			} // Changes for 472.46 tkt 6986663 by t8415sk End
			//Changes by t8415sk for PMO 472.44 End
		}	
      				
		//ClaimType Validation
		var claimT =  form1.claimType.value;
		if (claimT == "0") {
			eval(document.dcdipap.claimType.focus());
			alert(ErrorsDict.claimT);		
	       	return;					
		}
		
		if (ron == null) form1.ron.value = "";

		//Repair Issue Validation	
		if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {			
				
			if ((issue == '') || (issue == null)) {
				eval(form1.issue.focus());
				alert(ErrorsDict.issue);		
				form1.issue.value = "";
		       	return;					
			}
			
		}	
			
		
		//Proposed Service Action Validation	
		if (document.dcdipap.targetAction.value != "holdRequest" && document.dcdipap.targetAction.value != "holdUpdateRequest") {						
		
			if ((servaction == '') || (servaction == null)) {
				if(subletValueValidation == "1" || prg == "P" || prg == "T"){  //Changes by t8415sk for PMO 472.44
				eval(form1.servaction.focus());
				alert(ErrorsDict.servaction);		
				form1.servaction.value = "";
		       	return;		
				}
			}
			
		}
		return true;	
	}
	return;
}
	//Added by t9543un -- Start for blocking users to use browse button when he is eligible to create using the link in update request
		function checkuserTyp(){
			var reqType = document.dcdipap.requestType.value;
			//alert("reqType::"+reqType);
			
			if(reqType == "updateType"){
			
				var createwrkSheetFlag=document.dcdipap.CreateFlag.value;
				//alert("createwrkSheetFlag...."+createwrkSheetFlag)
				// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
				if(createwrkSheetFlag=="true" && document.getElementById("browseFlag").value!="true"  ){
				// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
			//	if(createwrkSheetFlag=="true" && ! document.getElementById("browseFlag").value){
					var catg = document.dcdipap.catg.value;
					if( catg =="U"  ||  catg =="L"){
						alert(ErrorsDict.editMsg);
						return false;
					}
					else{
						return true;
					}
				}
				else{
					return true;
				}
			}
		}

		//Added by t9543un -- End for blocking users to use browse button when he is eligible to create using the link
		
	//Added by t9543un	--Start
	function openEditPWTSheet(){
		if(validate()){
			var vin=document.dcdipap.vinNum.value;
			var odomValue=document.dcdipap.odom.value;
			
			
			
			var c = document.getElementById("claimType");  
			var claimType = c.options[c.selectedIndex].value; 
			
			var sublet = "0";
			var e = document.dcdipap.catg;
			var catgValue = e.options[e.selectedIndex].value;
			
			var claimNum=document.dcdipap.ron.value;
			var prgType=document.dcdipap.ProgramType.value;
			
			var issue=document.dcdipap.issue.value;
			var servaction=document.dcdipap.servaction.value
			
			var cost=document.dcdipap.cost.value;
			var iReq=document.dcdipap.reqNum.value;
			
			var typeImage=document.dcdipap.typeImage.value;
			var stringurl=document.dcdipap.stringurl.value;		
			
			
			//queryString="vinNum="+vin+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&ron="+claimNum+"&prgType="+prgType+"&issue="+issue+"&servaction="+servaction+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet=0&reqNum="+iReq+"&iseq=4&targetAction=editWorksheetData&tabVal=0&PwtWorksheet=editWorksheetData";
			
			queryString="vinNum="+vin+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&ron="+claimNum+"&prgType="+prgType+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet=0&reqNum="+iReq+"&iseq=4&targetAction=editWorksheetData&tabVal=0&PwtWorksheet=editWorksheetData";
			
			var url="/service/writeup/dipap/DIPAPServlet?"+queryString;
	
					// Madethe changes for progress bar T0984NG - Start
			var waitMsg = "Processing, Please Wait......";
			var url1 = "/portal/toolbox/wait.jsp?qry=" + escape(url) + "&waitMsg=" + escape(waitMsg);
			// Madethe changes for progress bar T0984NG - End
	win=window.open(url1,"editPOPUPDC","width=1000,height=1000,resizable=yes,scrollbars=yes,status=1");
		}
		
	}
	//Added by t9543un	--End
	
	function createPWTSheet(modyrList){

		
		if(validate()){
		
		
			
		var model=document.dcdipap.modelYear.value;
		var category = document.dcdipap.catg;
		var selectedvalue = category.options[category.selectedIndex].value;
		var prog=document.dcdipap.prgType;
		var progSelected=prog.options[prog.selectedIndex].value;
		var createflag=false;
		
		if(progSelected=='P' && (selectedvalue=='U' || selectedvalue=='L')){
		     
			var modfirst=modyrList.indexOf("[");
			var modlast=modyrList.indexOf("]");
			var modelYR=modyrList.substring(modfirst+1, modlast);
			var modelArray=modelYR.split(",");
			var count=0;
			for(var i=0;i<modelArray.length;i++){
				if(model!=null && model!=''){
					if(model>=parseInt(modelArray[i])){
						count++;
						createflag=true;
						break;
						
					}
			}else{

				var vin = document.dcdipap.vinNum.value;
                //t9543un - Special character check in VIN 
				var specialChars = "~*|,\":<>[]{}`\';()@&$#%!";
				//alert("vin..."+vin);
                for (var i = 0; i < vin.length; i++)
			     {
				        if (specialChars.indexOf(vin.charAt(i)) != -1){
                         eval(document.dcdipap.vinNum.select());				
                         eval(document.dcdipap.vinNum.focus());
                         alert ("Please Enter Valid VIN no."); 
						
						 return;
						}
				 }
				 //t9543un - Special character check in VIN 
                // PMO472.42 Check VIN is not 8 or 17 digit - t9543un - Start
				if(vin.length != 0 && vin.length != 8 && vin.length != 17){
					eval(document.dcdipap.vinNum.select());				
                    eval(document.dcdipap.vinNum.focus());
                    alert (ErrorsDict.vinNum); 
					
					return;
				}else{
				
				alert (ErrorsDict.vinnotFoundMsg); 
				return;
				}
				 // PMO472.42 Check VIN is not 8 or 17 digit - t9543un - End
			}
									
			}
			if(count==0){
				alert(ErrorsDict.browseMsg);
				createflag=false;
			}
		}else if(progSelected=='P'){
			alert(ErrorsDict.browseMsg);
			createflag=false;
		}
		document.dcdipap.dlrEligCrPWTSheet.value=createflag;
		//T4317SK changes 
		//var pcost =  document.dcdipap.cost ; 
		//if(pcost.disabled == true )
		//{
			//alert("inside enabling cost");
		 //pcost.disabled  = false ;
		//}
	 //T4317SK changes
		if(createflag==true){
			var vinValue=document.dcdipap.vinNum.value;
			var odomValue=document.dcdipap.odom.value;
			//var claimType=document.dcdipap.claimType.options[document.dcdipap.claimType.selectedIndex].innerText;
			var c = document.getElementById("claimType");  
			var claimType = c.options[c.selectedIndex].value; 
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			// Commented as sublet will only be used for Vehicle Prog Type
			// Passing 0 value for sublet but need to be removed afterward.
			//var e = document.getElementById("sublet");  
			//var sublet = e.options[e.selectedIndex].value; 
			var sublet = "0";
			var e = document.dcdipap.catg;
			var catgValue = e.options[e.selectedIndex].value;
			var claimNum=document.dcdipap.ron.value;
			var prgType=document.dcdipap.prgType.value;
			//var issue=document.dcdipap.issue.value;
			//var servaction=document.dcdipap.servaction.value
			
			var lopName="lop"+catgValue;
			
			//var lopindex = document.dcdipap.lopName;
			
		
			//alert("lopindex.value..."+document.dcdipap.lopName.value);
			//var lopdescValue = document.getElementById("lopDescription").value;
			var stringurl="";
			var cost=document.dcdipap.cost.value;
			var iReq=document.dcdipap.iReq.value;
			
			var typeImage="";
			
			
			if (document.dcdipap.url1.value != "") {
				stringurl = document.dcdipap.url1.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "V";
				else
					typeImage=typeImage + "I";
		
			}else{
				typeImage=typeImage + "X";
				
			}	
			if (document.dcdipap.url2.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url2.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "T";
				else
					typeImage=typeImage + "2";
		
			}else if ( document.dcdipap.url2.value != "" ){
				stringurl = document.dcdipap.url2.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "T";
				else
					typeImage=typeImage + "2";
			}else{
				typeImage=typeImage + "X";
			}
			
			if (document.dcdipap.url3.value != "" && stringurl != "" ) {
		
				stringurl = stringurl+document.dcdipap.url3.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "O";
				else
					typeImage=typeImage + "3";
				
			}else if ( document.dcdipap.url3.value != "" ){
				stringurl = document.dcdipap.url3.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "O";
				else
					typeImage=typeImage + "3";
			}else{
				typeImage=typeImage + "X";
			}	
		
			if (document.dcdipap.url4.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url4.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "A";
				else
					typeImage=typeImage + "4";
		
			}else if ( document.dcdipap.url4.value != "" ) {
				stringurl = document.dcdipap.url4.value+"||";
				if(prgType=="V")
					typeImage=typeImage + "A";
				else
					typeImage=typeImage + "4";
				
				
			}else{
				typeImage=typeImage + "X";
			}	
		
			if (document.dcdipap.url5.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url5.value+"||";
				typeImage=typeImage + "5";
		
			}else if ( document.dcdipap.url5.value != "" ){
				stringurl = document.dcdipap.url5.value+"||";
				typeImage=typeImage + "5";
			}else{
				typeImage=typeImage + "X";
			}
			
			if (document.dcdipap.url6.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url6.value+"||";
				typeImage=typeImage + "6";
		
			}else if ( document.dcdipap.url6.value != "" ){
				stringurl = document.dcdipap.url6.value+"||";
				typeImage=typeImage + "6";
			}else{
				typeImage=typeImage + "X";
			}
				
			if (document.dcdipap.url7.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url7.value+"||";
				typeImage=typeImage + "7";
		
			}else if ( document.dcdipap.url7.value != "" ) {
				stringurl = document.dcdipap.url7.value+"||";
				typeImage=typeImage + "7";
			}else{
				typeImage=typeImage + "X";
			}	
		
			if (document.dcdipap.url8.value != "" && stringurl != "" ) {
				stringurl = stringurl+document.dcdipap.url8.value;
				typeImage=typeImage + "8";
		
			}else if ( document.dcdipap.url8.value != "" ) {
				stringurl = document.dcdipap.url8.value;
				typeImage=typeImage + "8";
			}else{
				typeImage=typeImage + "X";
			}
			
			
			
			
			if(prgType == 'P')
			{
				if (document.dcdipap.url9.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url9.value;
					typeImage=typeImage + "9";
		
				}else if ( document.dcdipap.url9.value != "" ) {
					stringurl = document.dcdipap.url9.value;
					typeImage=typeImage + "9";
				}else{
					typeImage=typeImage + "X";
				}
				
				
				if (document.dcdipap.url10.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url10.value;
					typeImage=typeImage + "A";
		
				}else if ( document.dcdipap.url10.value != "" ) {
					stringurl = document.dcdipap.url10.value;
					typeImage=typeImage + "A";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url11.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url11.value;
					typeImage=typeImage + "B";
		
				}else if ( document.dcdipap.url11.value != "" ) {
					stringurl = document.dcdipap.url11.value;
					typeImage=typeImage + "B";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url12.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url12.value;
					typeImage=typeImage + "C";
		
				}else if ( document.dcdipap.url12.value != "" ) {
					stringurl = document.dcdipap.url12.value;
					typeImage=typeImage + "C";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url13.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url13.value;
					typeImage=typeImage + "D";
		
				}else if ( document.dcdipap.url13.value != "" ) {
					stringurl = document.dcdipap.url13.value;
					typeImage=typeImage + "D";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url14.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url14.value;
					typeImage=typeImage + "E";
		
				}else if ( document.dcdipap.url14.value != "" ) {
					stringurl = document.dcdipap.url14.value;
					typeImage=typeImage + "E";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url15.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url15.value;
					typeImage=typeImage + "F";
		
				}else if ( document.dcdipap.url15.value != "" ) {
					stringurl = document.dcdipap.url15.value;
					typeImage=typeImage + "F";
				}else{
					typeImage=typeImage + "X";
				}
				
				if (document.dcdipap.url16.value != "" && stringurl != "" ) {
					stringurl = stringurl+document.dcdipap.url16.value;
					typeImage=typeImage + "G";
		
				}else if ( document.dcdipap.url16.value != "" ) {
					stringurl = document.dcdipap.url16.value;
					typeImage=typeImage + "G";
				}else{
					typeImage=typeImage + "X";
				}
				
			}
			var queryString;
			// Changes by SUMIT- t8415sk for DIPAP RSA Start
			//var createPWT =document.getElementById("createPWT").innerText;
			var createPWT="";
			if(document.getElementById("createPWTId") != null ){
				createPWT=document.getElementById("createPWTId").value;
			}else if(document.getElementById("editPWTId") != null ){
				createPWT=document.getElementById("editPWTId").value;
			}		
			
			//alert(" createPWT= "+createPWT);

			//removed issue n serv action from url by t9543un - start
			if(createPWT !=null && createPWT=="Create"){
			//	queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue=&ron="+claimNum+"&prgType="+prgType+"&issue="+issue+"&servaction="+servaction+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&iReq="+iReq+"&PwtWorksheet=create";
				
				queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue=&ron="+claimNum+"&prgType="+prgType+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&iReq="+iReq+"&PwtWorksheet=create";
			
			}
			else if(createPWT !=null && createPWT=="Edit"){
				//queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue=&ron="+claimNum+"&prgType="+prgType+"&issue="+issue+"&servaction="+servaction+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&iReq="+iReq+"&PwtWorksheet=edit";
				
				queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue=&ron="+claimNum+"&prgType="+prgType+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&iReq="+iReq+"&PwtWorksheet=edit";
			
			}
			//removed issue n serv action from url by t9543un - End
//			if(createPWT !=null && createPWT=="Edit"){
//				queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue="+lopdescValue+"&ron="+claimNum+"&prgType="+prgType+"&issue="+issue+"&servaction="+servaction+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&PwtWorksheet=edit";
//			}
//			else {
//				queryString="vinNum="+vinValue+"&odom="+odomValue+"&cost="+cost+"&claimType="+claimType+"&catg="+catgValue+"&lopdescValue="+lopdescValue+"&ron="+claimNum+"&prgType="+prgType+"&issue="+issue+"&servaction="+servaction+"&stringurl="+stringurl+"&typeImage="+typeImage+"&sublet="+sublet+"&PwtWorksheet=create";
//			}
				
			// Changes by SUMIT- t8415sk for DIPAP RSA End
			var targetUrl="/service/writeup/dipap/DIPAPServlet?"+queryString;
			// Madethe changes for progress bar T0984NG - Start
			var waitMsg = "Processing, Please Wait......";
			var url = "/portal/toolbox/wait.jsp?qry=" + escape(targetUrl) + "&waitMsg=" + escape(waitMsg);
			// Madethe changes for progress bar T0984NG - End
			win=window.open(url,"POPUPDC","width=1000,height=1000,resizable=yes,scrollbars=yes,status=yes");
		}
		}
	}
	
	
	function editPWTSheet(modyrList){
		
		if(validate()){
		
			var model=document.dcdipap.modelYear.value;
			var category = document.dcdipap.catg;
			var selectedvalue = category.options[category.selectedIndex].value;
			var prog=document.dcdipap.prgType;
			var progSelected=prog.options[prog.selectedIndex].value;
			var createflag=false;
			
			if(progSelected=='P' && (selectedvalue=='U' || selectedvalue=='L')){
			     
				var modfirst=modyrList.indexOf("[");
				var modlast=modyrList.indexOf("]");
				var modelYR=modyrList.substring(modfirst+1, modlast);
				var modelArray=modelYR.split(",");
				var count=0;
				for(var i=0;i<modelArray.length;i++){
				
					if(model>=parseInt(modelArray[i])){
						count++;
						createflag=true;
						break;
						
					}
										
				}
				if(count==0){
					alert(ErrorsDict.browseMsg);
					createflag=false;
				}
			}else if(progSelected=='P'){
				alert(ErrorsDict.browseMsg);
				createflag=false;
			}
			document.dcdipap.dlrEligCrPWTSheet.value=createflag;
			if(createflag==true){
			
			var vinValue=document.dcdipap.vinNum.value;
			var odomValue=document.dcdipap.odom.value;
			var claimType=document.dcdipap.claimType.options[document.dcdipap.claimType.selectedIndex].innerText;
			var e = document.dcdipap.catg;
			var catgValue = e.options[e.selectedIndex].value;
			var claimNum=document.dcdipap.ron.value;
		
			var url="/service/writeup/dipap/DIPAPServlet?vinNum="+vinValue+"&odom="+odomValue+"&claimType="+claimType+"&catg="+catgValue+"&ron="+claimNum+"&PwtWorksheet=edit";
			win=window.open(url,"POPUP","width=1000,height=1000,resizable=yes,scrollbars=yes");
		}
		}
		
	}
		
function selectClaimType(claimtype,tocmapping,subcatg,catg){
	//alert("claimtype = "+claimtype );
	//alert("tocmapping = "+tocmapping );
	//alert("subcatg = "+subcatg );
	//alert("catg = "+catg );
	// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
	var returnCode = document.getElementById("starPartTOCReturnCode").value;
	if(returnCode != '000' && returnCode != 'null'){
		//alert("Please use browse button to upload the PDF!!!");
		document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
		document.getElementById("dipapMainDiv").style.display = 'none';	
		document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
		document.getElementById("headdivwsmsg").style.display = 'block';
		window.opener.document.getElementById("browseFlag").value="true";
		return false;
	}

	var returnCode = document.getElementById("starPartListReturnCode").value;
	if(returnCode != '000' && returnCode != 'null'){
		//alert("Please use browse button to upload the PDF!!!");
		document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
		document.getElementById("dipapMainDiv").style.display = 'none';	
		document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
		document.getElementById("headdivwsmsg").style.display = 'block';	
		window.opener.document.getElementById("browseFlag").value="true";
		return false;
	}

	var returnCode = document.getElementById("qlopTOCReturnCode").value;
	if(returnCode != '000' && returnCode != 'null'){ //Modified from true to 000
		//alert("Please use browse button to upload the PDF!!!");
		document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
		document.getElementById("dipapMainDiv").style.display = 'none';	
		document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
		document.getElementById("headdivwsmsg").style.display = 'block';
		window.opener.document.getElementById("browseFlag").value="true";
		return false;
	}

	// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
	
	var returnCode = document.getElementById("starPartTOCReturnCode").value;
	if(returnCode != '000' && returnCode != 'null'){
		document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
		document.getElementById("headdivwsmsg").style.display = 'block';
		document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
		document.getElementById("dipapMainDiv").style.display = 'none';	
		window.opener.document.getElementById("browseFlag").value="true";
		
	}else{
		 returnCode = document.getElementById("starPartListReturnCode").value;
		if(returnCode != '000' && returnCode != 'null'){
				//alert("Please use browse button to upload the PDF!!!");
				//this.window.close();
			document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
			document.getElementById("headdivwsmsg").style.display = 'block';
			document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
			document.getElementById("dipapMainDiv").style.display = 'none';	
			window.opener.document.getElementById("browseFlag").value="true";
		
			}else{
			 returnCode = document.getElementById("qlopTOCReturnCode").value;
			if(returnCode != '000' && returnCode != 'null'){ //Modified from true to 000
				//alert("Please use browse button to upload the PDF!!!");
				//this.window.close();
			document.getElementById("headdivwsmsg").style.visibility = 'visible'; 
			document.getElementById("headdivwsmsg").style.display = 'block';	
			
			document.getElementById("dipapMainDiv").style.visibility = 'hidden'; 
			document.getElementById("dipapMainDiv").style.display = 'none';	
			window.opener.document.getElementById("browseFlag").value="true";
			
			}
	}
	}
	
	claimtype=claimtype.substring(0,1);

	//Added for url fix by t9543un start
	
	document.pwtwrksheet.issue.value=window.opener.document.dcdipap.issue.value;
	document.pwtwrksheet.servaction.value=window.opener.document.dcdipap.servaction.value;
	//Added for url fix by t9543un End
	
	if(claimtype!="W" ){
		document.getElementById("repairallowance").style.visibility="Hidden";
		document.getElementById("towingallowance").style.visibility="visible";
	}else{
		var e = document.pwtwrksheet.carType;
		var carTyp = e.options[e.selectedIndex].value;
		
		document.getElementById("repairallowance").style.visibility="visible";
		document.getElementById("towingallowance").style.visibility="Hidden";
		
		if(carTyp!=null && carTyp!="0" && carTyp!=""){
			var carListArr=carTyp.split("_");
			var rentalDays=carListArr[1];
			var rentAllowance=carListArr[2];
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			//document.getElementById("rentaldays").value=rentalDays;
			document.getElementById("rentalamount").value=rentAllowance;
		}			
	}
	
	var selbox =document.pwtwrksheet.subctg;
	if(catg!=null && catg!="0"){
		selbox.options[0] = new Option(NamesDict.selectMsg,'0');
		selbox.options.length = 1;
		for (var k in tocmapping) {
			if (tocmapping.hasOwnProperty(k)){
				if(k==catg){
					var childArray=new Array();
					childArray=tocmapping[k];
					for(var i=0;i<childArray.length;i++){
						
						var values=childArray[i].split("||");
													
						if(values[1]==subcatg){
							
							selbox.add(new Option(values[0],values[1],true,'selected'));
						}
						else{
							selbox.add(new Option(values[0],values[1]));
						}							
					}
				}
			}

							
			}
			calculateAllowance();
	}
	// Single PLOP Logic changes by T0984NG
	//loadPrimRelatedLop();
	
	// Start: Added by t9453ss for part price changes
	/*var partnumObj = document.getElementById("partnum");
	var strUser = partnumObj.options[partnumObj.selectedIndex].value;
	var partdesc=partnumObj.options[partnumObj.selectedIndex].innerText;
	if(strUser!=0){
		var selPartNum=strUser.split("_");
		document.getElementById("part").value=selPartNum[0];
		document.getElementById("qty").value=selPartNum[1];
		document.getElementById("dlrNetSel").value=selPartNum[2];
		document.getElementById("qtyentered").value=1;
		
		var position = partdesc.indexOf("-");
		document.getElementById("desc").value=partdesc.substring(position + 1);
	}else{
		document.getElementById("part").value='';
		document.getElementById("desc").value='';
		document.getElementById("qty").value='';
	}*/
	// End: Added by t9453ss for part price changes
	
	}

	
	function getRentDetails(){
		
		var e = document.pwtwrksheet.carType;
		var carTyp = e.options[e.selectedIndex].value;
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		//var carListArr=carTyp.split("_");
		//var rentalDays=carListArr[1];
	 	//var rentAllowance=carListArr[2];
		var rentalDays = "";
		var rentAllowance = "0.00";
		if(carTyp != "0"){
			var carListArr=carTyp.split("_");
			rentalDays=carListArr[1];
	 		rentAllowance=carListArr[2];
		}
	 	//document.getElementById("rentaldays").value=rentalDays;
		document.getElementById("rentaldays").value="";
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
	 	document.getElementById("rentalamount").value=rentAllowance;
	 	document.pwtwrksheet.savestatus.value="";   // Added by t9453ss for worksheet status
		
		
	}
	
	function changeSubCatg(tocmapping){
		
		var catg=document.pwtwrksheet.catgsel.options[document.pwtwrksheet.catgsel.options.selectedIndex].value;
		var selbox =document.pwtwrksheet.subctg;
		
		selbox.options.length = 1;
		for (var k in tocmapping) {
			if (tocmapping.hasOwnProperty(k)){
				if(k==catg){
					
					var childArray=new Array();
					childArray=tocmapping[k];
					for(var i=0;i<childArray.length;i++){
						
						var values=childArray[i].split("||");
						
						selbox.add(new Option(values[0],values[1]));
						
						
					}
				}
			}
		}
//		document.pwtwrksheet.partnum.options.length=1;

		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		if(document.getElementById("partnum1")!=null){
			document.getElementById("partnum1").options.length=1;
		}
		
		if(document.getElementById("partnum")!=null){
			document.getElementById("partnum").options.length=1;
		}
		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		
		document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status
		document.getElementById("part").value='';
		document.getElementById("desc").value='';
		document.getElementById("qty").value='';
		document.getElementById("qtyentered").value='';
		
	}
	
	function getPartNum(tocmapping){
		
		var catg=document.pwtwrksheet.catgsel.options[document.pwtwrksheet.catgsel.options.selectedIndex].value;
		var subcatg=document.pwtwrksheet.subctg.options[document.pwtwrksheet.subctg.options.selectedIndex].value;
		var carTypeSel="";
		var vinNum=document.pwtwrksheet.vin8.value;
		var claimType=document.pwtwrksheet.clmtyp.value;
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		
		//var elements = document.getElementById("repairpartnum");
		//alert("repairpartnum::"+elements.length);
		//for(var i = 0; i < elements.length; i++)
		//{
		//	alert("repairpartnum::"+elements[i].value);
		//}
		/*
		alert("repairpartcount param::"+document.getElementById("repairpartcount").value);
		alert("repairlopcount param::"+document.getElementById("repairlopcount").value);
		alert("replacepartcount param::"+document.getElementById("replacepartcount").value);
		alert("replacelopcount param::"+document.getElementById("replacelopcount").value);
		*/
		/*
		var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
				
		var rowCount = repairparttable.rows.length - 1;
		var count=0;
		alert("Total repairparttable displayed::"+rowCount);        
		for(var i=1; i<=rowCount; i++) {
			alert("Loop::"+i);
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
		    alert("chkbox::"+chkbox);
			count++;				
			var repairpartnum=row.cells[1].childNodes[1];
			var repairpartdesc=row.cells[1].childNodes[2];	            	
			var repairqty=row.cells[1].childNodes[3];	            	
			var repairdlrnet=row.cells[1].childNodes[4];
			var partscostR=row.cells[1].childNodes[5];
			var replacepartseq=row.cells[1].childNodes[6];
			alert("repairpartnum:: "+repairpartnum.value);
			alert("repairpartdesc:: "+repairpartdesc.value);
			alert("repairqty:: "+repairqty.value);
			alert("repairdlrnet:: "+repairdlrnet.value);
			alert("partscostR:: "+partscostR.value);
			alert("replacepartseq:: "+replacepartseq.value);
		}
		alert("After loop");
		*/
		/*
		var repairpartcount1 =parseInt(repairparttable.rows.length)-1;
		var repairlopcount1 =parseInt(repairloptable.rows.length)-1;
		var replacepartcount1 =parseInt(replaceparttable.rows.length)-1;
		var replacelopcount1 =parseInt(replaceloptable.rows.length)-1;
		alert("After repairpartcount::"+repairpartcount1);
		alert("After repairlopcount::"+repairlopcount1);
		alert("After replacepartcount::"+replacepartcount1);
		alert("After replacelopcount::"+replacelopcount1);
		*/
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
		form=document.pwtwrksheet;
		
		//Changes for DIPAP RSA  - Start By Ankur Nayak[T8576AN]
		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		if(document.getElementById("partnum1")!=null){
			document.getElementById("partnum1").options.length=1;
		}
		
		if(document.getElementById("partnum")!=null){
			document.getElementById("partnum").options.length=1;
		}
		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	
		if(claimType!=null && claimType!="")
			claimType=claimType.substring(0,1);
		if(claimType=="W"){
			carTypeSel=document.pwtwrksheet.carType.options[document.pwtwrksheet.carType.options.selectedIndex].value
		}
		//Changes for DIPAP RSA - End By Ankur Nayak[T8576AN]

		//form.action="/service/writeup/dipap/DIPAPServlet?source=PWTSheet&category="+catg+"&subcategory="+subcatg+"&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&PwtWorksheet=getPartDetails";
		//form.method="POST";
		//form.submit();
		// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		ajaxUtil.doAction("/service/writeup/dipap/DIPAPServlet?source=PWTSheet&category="+catg+"&subcategory="+subcatg+"&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&PwtWorksheet=getPartDetails", 'pwtwrksheet', 'partInqDetails');			
		// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	}
	
	
	function fillPartNum(){
	
		var e = document.getElementById("partnum");
		var strUser = e.options[e.selectedIndex].value;
		var partdesc=e.options[e.selectedIndex].innerText;
		if(strUser!=0){
			var selPartNum=strUser.split("_");
			document.getElementById("part").value=selPartNum[0];
			document.getElementById("qty").value=selPartNum[1];
//			document.getElementById("dlrNetSel").value=selPartNum[2];
			
			var position = partdesc.indexOf("-");
			document.getElementById("desc").value=partdesc.substring(position + 1);
		}else{
			document.getElementById("part").value='';
			document.getElementById("desc").value='';
			document.getElementById("qty").value='';
		}
		
		document.getElementById("qtyentered").value="1";
		document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status
	   
		
		// Start: Added by t9453ss for part price changes
		
		var catg=document.pwtwrksheet.catgsel.options[document.pwtwrksheet.catgsel.options.selectedIndex].value;
		var subcatg=document.pwtwrksheet.subctg.options[document.pwtwrksheet.subctg.options.selectedIndex].value;
		var carTypeSel="";
		var partNumber = document.getElementById("part").value;
		var vinNum=document.pwtwrksheet.vin8.value;
		var claimType=document.pwtwrksheet.clmtyp.value;
		//alert("---- partNumber --- "+partNumber);
		form=document.pwtwrksheet;
		
		if(claimType!=null && claimType!="")
			claimType=claimType.substring(0,1);
		if(claimType=="W"){
			carTypeSel=document.pwtwrksheet.carType.options[document.pwtwrksheet.carType.options.selectedIndex].value
		}

		/*form.action="/service/writeup/dipap/DIPAPServlet?source=PWTSheet&category="+catg+"&subcategory="+subcatg+"&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&partNumber="+partNumber+"&PwtWorksheet=getPartPrice";
		form.method="POST";
		form.submit();*/
		document.getElementById('repairList').disabled= true; 
		document.getElementById('replaceList').disabled= true; 
		document.getElementById('npnPart').disabled= true; 
		// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		ajaxUtil.doAction("/service/writeup/dipap/DIPAPServlet?source=PWTSheet&category="+catg+"&subcategory="+subcatg+"&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&partNumber="+partNumber+"&PwtWorksheet=getPartPrice", 'pwtwrksheet', 'partPriceDetail');
		// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
		// End: Added by t9453ss for part price changes
	}
	
	function validateQty(){
		
		var minqty=parseInt(document.getElementById("qty").value);
		var qtyEntered=parseInt(document.getElementById("qtyentered").value);
		
		if(qtyEntered<minqty){
		
			alert("Please Enter Quantity Greater than Minimun Quantity");
			
		}
	}
	function RepairList(){
		//var form1=document.pwtwrksheet;
		//document.getElementById("defaultrepairpart").style.visibility="visible";
		//document.getElementById("defaultrepairlop").style.visibility="visible";
		//alert("Inside RepairList()");
		var table = document.getElementById("repairpart");
		var rowCount = table.rows.length;
		
		var partnumRef = document.getElementById("partnum");
		var partnumSelVal = partnumRef.options[partnumRef.selectedIndex].value;
		if(partnumSelVal == 0){
			alert(ErrorsDict.selectPartMsg);
	    	return;
		}
	    //row.id="repairRow";
	    var enteredPart=document.getElementById("part").value;
	    
	    var qtyEntered=document.getElementById("qtyentered").value;
	    
	    if(qtyEntered==null || qtyEntered==""){
	    	alert(ErrorsDict.selectPartQty);
			document.getElementById("qtyentered").focus();
	    	return;
	    }else if(qtyEntered<=0){
			alert(ErrorsDict.validPartQty);
	    	return;
		}
		
	    for(var i=1;i<rowCount;i++){
	
	    	var row1=table.rows[i];
	    	
	    	var existingPart=row1.cells[1].getElementsByTagName('input')[0].value;
	    	
	    	if(existingPart==enteredPart){
	    		alert(ErrorsDict.dupPart);
	    		return;
	    		
	    	}
	    }
		
	    var row = table.insertRow(rowCount);
	    var cell1 = row.insertCell(0);
	    var element1 = document.createElement("input");
	    element1.type = "checkbox";
	    element1.name="repairpart";
		element1.id="repairpartcheckbox"+rowCount;
		element1.onclick=function(){ 
										//var e =document.getElementById("repairqty"+rowCount);
			                            // alert('RepairList');
										var e=row.cells[3].getElementsByTagName('input')[0];
			
										if(e.readOnly){
											e.removeAttribute("readOnly","true");
											//Changes by Ankur Nayak [T8576AN] - Start
											e.className= "";
											//Changes by Ankur Nayak [T8576AN] - End											
											e.removeAttribute('style');
										}else{
										    e.setAttribute("readOnly","true"); 
											//Changes by Ankur Nayak [T8576AN] - Start
											e.className= "readonlyField";
											//Changes by Ankur Nayak [T8576AN] - End
											e.style.border="0";
										}
									} ;
	    cell1.appendChild(element1);

	    //alert("id is:"+document.getElementById("repairpartcheckbox"+rowCount).id);    

	    var cell2 = row.insertCell(1);
	    var element2 = document.createElement("input");
	    element2.type = "text";
	    element2.name="repairpartnum";
	    element2.value=document.getElementById("part").value;
	    element2.style.border="0";
	    element2.size="12";
	    element2.readOnly = "true";
		element2.id="repairpartnum"+rowCount;
	    cell2.appendChild(element2);
	        
	    var cell3 = row.insertCell(2);
	    var element3 = document.createElement("input");
	    element3.type = "text";
	    element3.name="repairpartdesc";
	    element3.size="50";
	    element3.value=document.getElementById("desc").value;
		//element3.id="repairpartdesc"+rowCount;
		element3.id="repairpartdesc";
		element3.onmouseover = (function (){showTooltip();});
		element3.onmouseout = (function (){hideTooltip();});
	    element3.style.border="0";
	    element3.readOnly = "true";
	    cell3.appendChild(element3);
	   
	
		var element10 = document.createElement("div");  	
		
		element10.id="repairPartTooltip";
		
		element10.style.display = "none"; 
		element10.style.border = '2px solid #333333';
		element10.style.backgroundColor = '#fffedf';
		element10.style.position = 'absolute';
		element10.style.width='170px';
		element10.style.fontSize = '10px';
		element10.style.padding = '5px';
		cell3.appendChild(element10);	


	    var cell4 = row.insertCell(3);
	    var element4 = document.createElement("input");
	    element4.type = "text";
	    element4.name="repairqty";
	    element4.maxlength = "2";
		element4.id="repairqty"+rowCount;
		element4.size="2";
	    element4.value=document.getElementById("qtyentered").value;
	    element4.style.border="0";
	    element4.readOnly = "true";
		//Changes by Ankur Nayak [T8576AN] - Start
		/*
		element4.onkeypress=(function(){
										var keyValue = (this.which) ? this.which : event.keyCode
								        if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
						                {
									        alert("Please Enter valid numeric value");
						                  return;
								        }else{
									        return true;
								        }
			
							});
		*/
		element4.className = "readonlyField";
		element4.onkeypress=(function(){
										if(element4.className != "readonlyField"){
											
											var keyValue = (this.which) ? this.which : event.keyCode
											if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
											{
												alert(ErrorsDict.numericMsg);
											  return false;
											}else{
												return true;
											}
										}			
							});
		//Changes by Ankur Nayak [T8576AN] - End
		//Added for Calculations fix when part qty is modified by t9543un -- Start 
		element4.onchange=(function(){
																		

									calulateRepairAmount();
									calulateReplaceAmount();
									calculateAllowance();
						});
		//Added for Calculations fix when part qty is modified by t9543un -- end
		
	    cell4.appendChild(element4);
	    
	  
	    var element5 = document.createElement("input");
	    element5.type = "hidden";
	    //element5.value=document.getElementById("dlrNetSel").value;
	    // PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	    element5.value=document.getElementById("partPriceValue").value;
	    // PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	    //element5.value=4.00;
	    element5.name="repairdlrnet";
	    element5.style.border="0";
	    cell4.appendChild(element5);
	    
	    
	    var element6 = document.createElement("input");
	    element6.type = "hidden";
	 // PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	    element6.value=parseFloat( element5.value)*parseFloat( element4.value);
	 // PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet 
	    element6.name="partscostR";
	    element6.style.border="0";
	    cell4.appendChild(element6);
	    
	   // alert("element6.value "+element6.value);
	    
	    var PartSeq=rowCount;//Added by Umesh For Correcting the Part Seq number
	    rowCount = table.rows.length;
	   //Added by Umesh For Correcting the Part Seq number - Start
	      if(rowCount >= 3){
	   // alert("Before count "+parseInt(table.rows[rowCount-3].cells[3].childNodes[3].value));
	    	//alert("part-- "+table.rows[rowCount-2].cells[1].childNodes[0].value);
	    PartSeq = parseInt(table.rows[rowCount-2].cells[3].getElementsByTagName('input')[3].value);
	    //alert("value "+PartSeq);
	   // if (PartSeq == NaN) PartSeq = rowCount;
	   // alert("value +1 --"+(PartSeq+1));
	    }
	      //Added by Umesh For Correcting the Part Seq number - End
	    
	    var element7 = document.createElement("input");
	    element7.type = "hidden";
	    element7.value=PartSeq+1;
	    element7.name="repairpartseq";
	    element7.style.border="0";
	    cell4.appendChild(element7);
	    
	    
		var element8 = document.createElement("input");
	    
		element8.type = "hidden";
	    
		element8.value="";
	    
		element8.name="repairRelLOP";
	    
		element8.id="repairRelLOP";
	    
		cell4.appendChild(element8);
	    
	    
		var element9 = document.createElement("input");
	    
		element9.type = "hidden";
	    
		element9.value="";
	    
		element9.name="repairRelLOPGrp";
	    
		element9.id="repairRelLOPGrp";
	    
		cell4.appendChild(element9);
	    
	    
		var element10 = document.createElement("input");
	    
		element10.type = "hidden";
	    
		element10.value="";
	    
		element10.name="repairRelLOPGrpHier";
	    
		element10.id="repairRelLOPGrpHier";
	   
		cell4.appendChild(element10);
	    
	    
		var element11 = document.createElement("input");
	    
		element11.type = "hidden";
	    
		element11.value="";
	    
		element11.name="repairRelLOPHrs";
	    
		element11.id="repairRelLOPHrs";
	    
		cell4.appendChild(element11);
			
		var element12 = document.createElement("input");
	    
		element12.type = "hidden";
	    
		element12.value="";
	    
		element12.name="repairRelLOPDesc";
	    
		element12.id="repairRelLOPDesc";
	    
		cell4.appendChild(element12);
  
	    //Calculations for total repair cost
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
		   	var rowindex = table.rows[i];
		   	//value=parseFloat(rowindex.cells[3].childNodes[2].value);
		   	value=parseFloat(rowindex.cells[3].getElementsByTagName('input')[2].value); // Modified for calculations fix
	    	count=count+value;
	    	
	   } 

	    //Logic for Default LOPS - start
	    var lopTable = document.getElementById("repairlop");

	    var dlopelement = document.getElementById('defaultRepairLopRow');
	    if(dlopelement==null || typeof(dlopelement)=='undefined'){
	    	
	    	var defaultRepairLopElement = document.getElementById('RepairDefaultLOPCount');
	    	var defaultRepairLopCount=0;
	    	if(defaultRepairLopElement!=null&&typeof(defaultRepairLopElement)!='undefined'){
	    		defaultRepairLopCount = defaultRepairLopElement.value;
	    	}
	    	
	    	for(i=0;i<defaultRepairLopCount;i++){
	    		var dlopnumber = document.getElementById("RepairDLOPNumber"+i);
	    		var dlopdesc = document.getElementById("RepairDLOPDesc"+i);
	    		var dlopHrs = document.getElementById("RepairDLOPHrs"+i);
	    		var dlopType = document.getElementById("RepairDLOPType"+i);
	    		
	    	    var lopRowCount = lopTable.rows.length;
	    		
		    	var lopRow =lopTable.insertRow(lopRowCount);
		    	lopRow.id="defaultRepairLopRow";
	    		
		    	var lopCell1 = lopRow.insertCell(0);
	    	    var element1 = document.createElement("input");
	    	    element1.type = "text";
	    	    element1.value=dlopnumber.value;
	    	    element1.name="lopRepair";
			    element1.readOnly = "true";
			    
				element1.size="8";
	    	    element1.style.border="0";
	    	    lopCell1.appendChild(element1);
	    	    
        	    var lopCell2 = lopRow.insertCell(1);
        	    var element2 = document.createElement("input");
        	    element2.type = "text";
        	    element2.value=dlopdesc.value;
        	    element2.name="lopdescRepair";
				element2.id="lopdescRepair";
				element2.onmouseover = (function (){showTooltip();});
				element2.onmouseout = (function (){hideTooltip();});
				element2.size="45";
				
				element2.readOnly = "true";
        	    element2.style.border="0";
        	    lopCell2.appendChild(element2);
        	    
        	    var element3 = document.createElement("input");
        	    element3.type = "hidden";
        	    element3.value=dlopHrs.value;
        	    element3.style.border="0";
        	    element3.name="lophrRepair";
        	    lopCell2.appendChild(element3);
                
                var element4 = document.createElement("input");
                element4.type = "hidden";
                element4.value="0";
                element4.name="partlopseqRepair";
                element4.style.border="0";
                lopCell2.appendChild(element4);
               
                var element5 = document.createElement("input");
                element5.type = "hidden";
                element5.value=0;
                element5.name="lopseqRepair";
                element5.style.border="0";
                lopCell2.appendChild(element5);
                
                var element6 = document.createElement("input");
                element6.type = "hidden";
                element6.value=dlopType.value;
                element6.name="lopTypRepair";
                element6.style.border="0";
                lopCell2.appendChild(element6);
                
                var element7 = document.createElement("input");
                element7.type = "hidden";
                element7.value="";
                element7.name="lopHierRepair";
                element7.style.border="0";
                lopCell2.appendChild(element7);
                
                var element8 = document.createElement("input");
                element8.type = "hidden";
                element8.value="";
                element8.name="lopGrpRepair";
                element8.style.border="0";
                lopCell2.appendChild(element8);
               
	    	}
	    }
	    
	    //Logic for Default LOPS - end
	    
	    
	    //alert("Count: "+count);
	   //alert(document.getElementById("repairmkuprate").value);
	    document.getElementById("repairpartscost").value=count;
	    //alert("Markup%: "+document.getElementById("repairmkuprate").value);
		
	   var totalrepaircost=count*(1+((parseFloat(document.getElementById("repairmkuprate").value))/100));
	   document.getElementById("totalrepairpartscost").value=totalrepaircost;
	   // alert("totalrepaircost..."+totalrepaircost);
	    //Calculations for total repair cost end
	   //alert("totalrepaircost: "+totalrepaircost);
	   //alert(document.getElementById("totalrepairpartscost").value);
		
	    var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
	    
		var vinValue=document.getElementById("fullvin").value;
	    
	    //var[] primarylops=new array[];
	   // form1.action="/service/writeup/dipap/DIPAPServlet";
		//form1.method="POST";
		//form1.submit();
		//form1.pwtSheet.value="Repair";
		var subcatg=document.pwtwrksheet.subctg.options[document.pwtwrksheet.subctg.options.selectedIndex].innerText;
		var catg=document.pwtwrksheet.ctg.options[document.pwtwrksheet.ctg.options.selectedIndex].innerText;
		var ctggrp=document.pwtwrksheet.grp.value;
		
		var subcatgArr=subcatg.split(" - ");
		var subcatgSel=subcatgArr[0];
		var catgArr=catg.split(" - ");
		var catgSel=catgArr[0];

		//alert("catgSel..."+catgSel);
		//alert("subcatgSel..."+subcatgSel);
		
		var totalRepairCost=0;
		var totalrepairlabor=0;
		if(document.getElementById("totalrepairlaborcost").value != null){
			totalrepairlabor=parseFloat(document.getElementById("totalrepairlaborcost").value);
		}

		
		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}

		totalRepairCost=parseFloat(document.getElementById("totalrepairpartscost").value)+totalrepairlabor+rentalAmt;
		//alert(totalRepairCost+"="+document.getElementById("totalrepairpartscost").value+"+"+totalrepairlabor);
		document.getElementById("TotalRepairCost").value=totalRepairCost;
		calculateAllowance();
		
		var url="/service/writeup/dipap/DIPAPServlet?repairType=Repair&PwtWorksheet=getLOP&vinNum="+vinValue+"&ctggrp="+ctggrp+"&subcategory="+subcatgSel+"&category="+catgSel+"&lopType=primary&pwtSheet=Repair";
		
		//Single PLOP Logic changes - START
/*			var claimType=document.pwtwrksheet.clmtyp.value;
			var odo = document.pwtwrksheet.mlg.value;
			
			if(claimType!=null && claimType!="")
				claimType=claimType.substring(0,1);
			url=url+"&claimType="+claimType+"&mlg="+odo;
			form=document.pwtwrksheet;
			form.action=url;
			form.method="POST";
			form.submit();
				
*/		
		win = window.open(url,"LOPPOPUP","width=750,height=500,top=200,left=300,scrollbars=yes,resizable=yes");
		//Single PLOP Logic changes - END
		
		/*Changes done by T9421HF to make all popup above the screen
		if(window.showModalDialog){
			win = window.showModalDialog(url,"LOPPOPUP","width=500,height=500,top=200,left=300");
		}else{
			win = window.open(url,"LOPPOPUP","width=500,height=500,top=200,left=300");
		}
		//Changes Ends by T9421HF*/
	
	}


	
	function ReplaceList(){
	     // alert("inside Replacelist -1");
		//var form1=document.pwtwrksheet;
		//document.getElementById("defaultreplacepart").style.visibility="visible";
		//document.getElementById("defaultreplacelop").style.visibility="visible";
		//alert("Inside ReplaceList()");
		var table = document.getElementById("replacepart");
		var rowCount = table.rows.length;
	   
		var partnumRef = document.getElementById("partnum");
		var partnumSelVal = partnumRef.options[partnumRef.selectedIndex].value;
		if(partnumSelVal == 0){
			alert(ErrorsDict.selectPartMsg);
	    	return;
		}
		
	    var enteredPart=document.getElementById("part").value;
	    
	    var qtyEntered=document.getElementById("qtyentered").value;
	    
	    if(qtyEntered==null || qtyEntered==""){
	    	alert(ErrorsDict.selectPartQty);
			document.getElementById("qtyentered").focus();
	    	return;
	    }else if(qtyEntered<=0){
			alert(ErrorsDict.validPartQty);
	    	return;
		}
	   // alert("before-3");
	    for(var i=1;i<rowCount;i++){
	
	    	var row1=table.rows[i];
	    	
	    	var existingPart=row1.cells[1].getElementsByTagName('input')[0].value;
	    		    	
	    	if(existingPart==enteredPart){
	    		alert(ErrorsDict.dupPart);
	    		return;
	    		
	    	}
	    }
	    	    	
	    var row = table.insertRow(rowCount);
	    var cell1 = row.insertCell(0);
	    var element1 = document.createElement("input");
	    element1.type = "checkbox";
	    element1.name="replacepart";
		element1.id="replacepartcheckbox"+rowCount;
		element1.onclick=function(){ 
			//var e =document.getElementById("replaceqty"+rowCount);
			var e=row.cells[3].getElementsByTagName('input')[0];
			
			if(e.readOnly){
				e.removeAttribute("readOnly","true");
				e.className= "";
				e.removeAttribute('style');
			}else{
			    e.setAttribute("readOnly","true"); 
				e.className= "readonlyField";
				e.style.border="0";
			}
		} 
		/*element1.onclick=function(){ 
										var e =document.getElementById("replaceqty"+rowCount);
										if(e.readOnly){
											e.removeAttribute("readonly","true");
											e.removeAttribute('style');
										}else{
										    e.setAttribute("readOnly","true"); 
											e.style.border="0";
										}
									}*/
	    cell1.appendChild(element1);
	        
	    var cell2 = row.insertCell(1);
	    var element2 = document.createElement("input");
	    element2.type = "text";
	    element2.name="replacepartnum"
		element2.id="replacepartnum"+rowCount;
	    element2.value=document.getElementById("part").value;
	    element2.style.border="0";
	    element2.size="12";
	    element2.readOnly = "true";
	    cell2.appendChild(element2);
	        
	    var cell3 = row.insertCell(2);
	    var element3 = document.createElement("input");
	    element3.type = "text";
	    element3.name="replacepartdesc"
		//element3.id="replacepartdesc"+rowCount;
		element3.id="replacepartdesc";
	    element3.size="50";
	    element3.value=document.getElementById("desc").value;
	    element3.style.border="0";
		element3.onmouseover = (function (){showTooltip();});
		element3.onmouseout = (function (){hideTooltip();});
	    element3.readOnly = "true";
	    cell3.appendChild(element3);

		var element10 = document.createElement("div");  	
		
		element10.id="replacePartTooltip";
		element10.style.padding = '5px';
		element10.style.display = "none"; 
		element10.style.border = '2px solid #333333';
		element10.style.backgroundColor = '#fffedf';
		element10.style.position = 'absolute';
		element10.style.width='170px';
		element10.style.fontSize = '10px';
		cell3.appendChild(element10);	
	        
	    var cell4 = row.insertCell(3);
	    var element4 = document.createElement("input");
	    element4.type = "text";
	    element4.name="replaceqty"
		element4.id="replaceqty"+rowCount;
	    element4.value=document.getElementById("qtyentered").value;
	    element4.style.border="0";
	    element4.readOnly = "true";
	    element4.size="2";
	    //Changes by t9543un - Start
	    element4.className = "readonlyField";
		element4.onkeypress=(function(){
										if(element4.className != "readonlyField"){
											
											var keyValue = (this.which) ? this.which : event.keyCode
											if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
											{
												alert(ErrorsDict.numericMsg);
											  return false;
											}else{
												
												return true;
											}
										}			
							});
		//Added for Calculations fix when part qty is modified by t9543un -- Start 
		element4.onchange=(function(){
									calulateRepairAmount();
									calulateReplaceAmount();
									calculateAllowance();
						});
		//Added for Calculations fix when part qty is modified by t9543un -- end
		//Changes by t9543un - End
	    element4.maxlength = "2";
	    cell4.appendChild(element4);
	    
	    
	    var element5 = document.createElement("input");
	    element5.type = "hidden";
	//    element5.value=document.getElementById("dlrNetSel").value;
		//element5.value="2.00";
	    //PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
	    element5.value=document.getElementById("partPriceValue").value;
	    //PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
	    element5.name="replacedlrnet"
	    element5.style.border="0";
	    cell4.appendChild(element5);
	  
	    
	    var element6 = document.createElement("input");
	    element6.type = "hidden";
	   // PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
	    element6.value=parseFloat( element5.value)*parseFloat( element4.value);
	    //PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
	    element6.name="partscostX";
	    element6.style.border="0";
	    cell4.appendChild(element6);
	    var PartSeq=rowCount;//Added by Umesh For Correcting the Part Seq number
	    rowCount = table.rows.length;
	   //Added by Umesh For Correcting the Part Seq number - Start
	      if(rowCount >= 3){
	   // alert("Before count "+parseInt(table.rows[rowCount-3].cells[3].childNodes[3].value));
	    	//alert("part-- "+table.rows[rowCount-2].cells[1].childNodes[0].value);
	    PartSeq = parseInt(table.rows[rowCount-2].cells[3].getElementsByTagName('input')[3].value);
	    //alert("value "+PartSeq);
	   // if (PartSeq == NaN) PartSeq = rowCount;
	   // alert("value +1 --"+(PartSeq+1));
	    }
	      //Added by Umesh For Correcting the Part Seq number - End
	    var element7 = document.createElement("input");
	    element7.type = "hidden";
	    element7.value=PartSeq+1;
	    element7.name="replacepartseq"
	    element7.style.border="0";
	    cell4.appendChild(element7);
	    
	    
		var element8 = document.createElement("input");
	    
		element8.type = "hidden";
	    
		element8.value="";
	    
		element8.name="replaceRelLOP";
	    
		element8.id="replaceRelLOP";
	    
		cell4.appendChild(element8);
	    
	    
		var element9 = document.createElement("input");
	    
		element9.type = "hidden";
	    
		element9.value="";
	    
		element9.name="replaceRelLOPGrp";
	    
		element9.id="replaceRelLOPGrp";
	    
		cell4.appendChild(element9);
	    
	    
		var element10 = document.createElement("input");
	    
		element10.type = "hidden";
	    
		element10.value="";
	    
		element10.name="replaceRelLOPGrpHier";
	    
		element10.id="replaceRelLOPGrpHier";
	    
		cell4.appendChild(element10);
	    
	    
		var element11 = document.createElement("input");
	    
		element11.type = "hidden";
	    
		element11.value="";
	    
		element11.name="replaceRelLOPHrs";
	    
		element11.id="replaceRelLOPHrs";
	    
		cell4.appendChild(element11);	
	    
	    
		var element12 = document.createElement("input");
	    
		element12.type = "hidden";
	    
		element12.value="";
	    
		element12.name="replaceRelLOPDesc";
	    
		element12.id="replaceRelLOPDesc";
	    
		cell4.appendChild(element12);
		 
	    //Calculations for total repair cost
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
	    	var rowindex = table.rows[i];
	    	//value=parseInt(rowindex.cells[3].childNodes[2].value);
	    	value=parseFloat(rowindex.cells[3].getElementsByTagName('input')[2].value);//Modified for calculations fix
	    	count=count+value;
	    	
	    } 	
	    
		//Logic for Default LOPS - start
	    var lopTable = document.getElementById("replacelop");
	    var dlopelement = document.getElementById('defaultReplaceLopRow');
	    if(dlopelement==null || typeof(dlopelement)=='undefined'){
	    	
	    	var defaultReplaceLopElement = document.getElementById('ReplaceDefaultLOPCount');
	    	var defaultReplaceLopCount=0;
	    	if(defaultReplaceLopElement!=null&&typeof(defaultReplaceLopElement)!='undefined'){
	    		defaultReplaceLopCount = defaultReplaceLopElement.value;
	    	}
	    	
	    	for(i=0;i<defaultReplaceLopCount;i++){
	    		
	    		var lopRowCount = lopTable.rows.length;
		    	var lopRow =lopTable.insertRow(lopRowCount);
		    	lopRow.id="defaultReplaceLopRow";
		    	
	    		var dlopnumber = document.getElementById("ReplaceDLOPNumber"+i);
	    		var dlopdesc = document.getElementById("ReplaceDLOPDesc"+i);
	    		var dlopHrs = document.getElementById("ReplaceDLOPHrs"+i);
	    		var dlopType = document.getElementById("ReplaceDLOPType"+i);
	    		
   		
		    	var lopCell1 = lopRow.insertCell(0);
	    	    var element1 = document.createElement("input");
	    	    element1.type = "text";
	    	    element1.value=dlopnumber.value;
	    	    element1.name="lopReplace";
			    element1.readOnly = "true";
			    element1.size="8";
	    	    element1.style.border="0";
	    	    lopCell1.appendChild(element1);
	    	    
        	    var lopCell2 = lopRow.insertCell(1);
        	    var element2 = document.createElement("input");
        	    element2.type = "text";
        	    element2.value=dlopdesc.value;
        	    element2.name="lopdescReplace";
				element2.id="lopdescReplace";
				element2.onmouseover = (function (){showTooltip();});
				element2.onmouseout = (function (){hideTooltip();});
			    element2.readOnly = "true";
        	    element2.style.border="0";
				element2.size="45";
        	    lopCell2.appendChild(element2);
        	    
        	    var element3 = document.createElement("input");
        	    element3.type = "hidden";
        	    element3.value=dlopHrs.value;
        	    element3.style.border="0";
        	    element3.name="lophrReplace";
        	    lopCell2.appendChild(element3);
                
                var element4 = document.createElement("input");
                element4.type = "hidden";
                element4.value="0";
                element4.name="partlopseqReplace";
                element4.style.border="0";
                lopCell2.appendChild(element4);
               
                var element5 = document.createElement("input");
                element5.type = "hidden";
                element5.value=0;
                element5.name="lopseqReplace";
                element5.style.border="0";
                lopCell2.appendChild(element5);
                
                var element6 = document.createElement("input");
                element6.type = "hidden";
                element6.value=dlopType.value;
                element6.name="lopTypReplace";
                element6.style.border="0";
                lopCell2.appendChild(element6);
                
                var element7 = document.createElement("input");
                element7.type = "hidden";
                element7.value="";
                element7.name="lopHierReplace";
                element7.style.border="0";
                lopCell2.appendChild(element7);
                
                var element8 = document.createElement("input");
                element8.type = "hidden";
                element8.value="";
                element8.name="lopGrpReplace";
                element8.style.border="0";
                lopCell2.appendChild(element8);
               
	    	}
	    }
	    
	    //Logic for Default LOPS - end

	    
	    
	   document.getElementById("replacepartscost").value=count;
	   //var totalreplacecost=count*parseInt(document.getElementById("replacemkuprate").value);
	   //alert("repairmkuprate::"+document.getElementById("repairmkuprate").value);
	   //alert("count::"+count);
	   var totalreplacecost=count*(1+((parseFloat(document.getElementById("repairmkuprate").value))/100));
	   document.getElementById("totalreplacepartscost").value=totalreplacecost;
	   //alert ("Replace Part Cost " + document.getElementById("totalreplacepartscost").value);
	   	var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
	        
	    var vinValue=document.getElementById("fullvin").value;
	    
	    var subcatg=document.pwtwrksheet.subctg.options[document.pwtwrksheet.subctg.options.selectedIndex].innerText;
		var catg=document.pwtwrksheet.ctg.options[document.pwtwrksheet.ctg.options.selectedIndex].innerText;
		var ctggrp=document.pwtwrksheet.grp.value;
		
		var subcatgArr=subcatg.split(" - ");
		var subcatgSel=subcatgArr[0];
		var catgArr=catg.split(" - ");
		var catgSel=catgArr[0];

		//alert("catgSel..."+catgSel);
		//alert("subcatgSel..."+subcatgSel);
		
		//calculateAllowance();
		var totalReplaceCost=0;
		var totalreplacelabor=0;
		if(document.getElementById("replacelaborhours").value != null){
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			// Commented the line and change the replacelaborhours to totalreplacelaborcost
			//totalreplacelabor=parseFloat(document.getElementById("replacelaborhours").value);
			totalreplacelabor=parseFloat(document.getElementById("totalreplacelaborcost").value);
			//alert("replacelaborhours!=null ::"+totalreplacelabor);
		}
		//alert("totalreplacelabor::"+totalreplacelabor);

		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}


		totalReplaceCost=parseFloat(document.getElementById("totalreplacepartscost").value)+totalreplacelabor + rentalAmt;

		//alert(totalReplaceCost+"="+document.getElementById("totalreplacepartscost").value+"+"+totalreplacelabor);
		document.getElementById("TotalreplaceCost").value=totalReplaceCost;
		calculateAllowance();

	    var url="/service/writeup/dipap/DIPAPServlet?repairType=Replace&PwtWorksheet=getLOP&vinNum="+vinValue+"&ctggrp="+ctggrp+"&subcategory="+subcatgSel+"&category="+catgSel+"&lopType=primary&pwtSheet=Replace";

		win = window.open(url,"LOPPOPUP","width=750,height=500,top=200,left=300");
		/*hanges done by T9421HF to make all popup above the screen
		if(window.showModalDialog){
			win = window.showModalDialog(url,"LOPPOPUP","width=500,height=500,top=200,left=300");
		}else{
			win = window.open(url,"LOPPOPUP","width=500,height=500,top=200,left=300");
		}
		//Changes Ends by T9421HF*/
	
	}
	
	
	
function DeleteRepairList(){
	document.pwtwrksheet.savestatus.value=""; // Added by t9453ss for worksheet status
	//alert("Inside DeleteRepairList()");
		try {
	            var table = document.getElementById("repairpart");
	            var rowCount = table.rows.length;
	 
	            var loptable = document.getElementById("repairlop");
	            var loprowCount = loptable.rows.length;
	            var isCheckBoxSelected=false;//T9874sc 103
			
	            for(var i=1; i<rowCount; i++) {
	                var row = table.rows[i];
	                var chkbox = row.cells[0].getElementsByTagName('input')[0];
	                
	                
	                if(null != chkbox && true == chkbox.checked) {
	                	isCheckBoxSelected=true;//T9874sc 103
	                	
	                	var delloppre=-1;
                    	var prtrowInd = table.rows[i];
                		var hiddenprtLOP=trim(prtrowInd.cells[3].getElementsByTagName('input')[4].value);
                		var hiddenprtlopgrp=trim(prtrowInd.cells[3].getElementsByTagName('input')[5].value);
                		var hiddenprtlopgrphier=trim(prtrowInd.cells[3].getElementsByTagName('input')[6].value);
                		var hiddenprtloppre=-1;
                			//delloppre=trim(deletedLOPHier).indexOf(trim(deletedLOPGrp));
                    	/*if(hiddenprtlopgrphier!='' && hiddenprtlopgrp!='')
                    		hiddenprtloppre=(hiddenprtlopgrphier).indexOf(hiddenprtlopgrp);
                    	
                    	alert("hiddenprtloppre... "+hiddenprtloppre);
                    	*/
                    	table.deleteRow(i);
	                	rowCount=table.rows.length;
	    	           // alert("rowCount... "+rowCount);
	                    
	    				if(rowCount==1){
	    					
	    					loprowCount=loptable.rows.length;
	                    	for(var j=1; j<loprowCount; j++) {
	                    		 
	                    		  loptable.deleteRow(j);
	       	                   
	                    		  loprowCount--;
	     	                      j--;
	                    		  
	                    	  }
	                    	break;
	                   }
	    				if(rowCount==2 && trim(table.rows[1].cells[1].getElementsByTagName('input')[0].value)=='NPN0000000'){
	    					loprowCount=loptable.rows.length;
	                    	for(var j=1; j<loprowCount; j++) {
	                    		 
	                    		  loptable.deleteRow(j);
	       	                   
	                    		  loprowCount--;
	     	                      j--;
	                    		  
	                    	  }
	                    	break;
	    				}
	    				loprowCount=loptable.rows.length;
	    				var x=(i+1).toString();
	    				// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	    				var delPartSeqNum = parseInt(x);
	    				//alert("DeleteRepairList(), Delete Part Line Number i::"+i+" :so Part Seq x::"+x+" :so Int value x is delPartSeqNum::"+delPartSeqNum);
	    				//alert("DeleteRepairList(), Before delPartSeqNum::"+delPartSeqNum);
	    				if(delPartSeqNum < 10){
	    					delPartSeqNum = "0" + delPartSeqNum;
	                	}
	    				delPartSeqNum = delPartSeqNum.toString();
	    				//alert("DeleteRepairList(), After delPartSeqNum::"+delPartSeqNum);
	    				var skipLopIndex = 0;
	    				// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End	    				
	                    for(var k=1;k<loprowCount;k++){
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	                    	//alert("DeleteRepairList(), k::"+k+" :skipLopIndex-1::"+(skipLopIndex-1));
	                    	if(k==(skipLopIndex-1)){
	                    		continue;
	                    	}
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    	var s=0;
	                    	//alert("k... "+k);
	                    	var loprow=loptable.rows[k]; // Modified by t9543un
	                    	var deletedLOP = loprow.cells[0].getElementsByTagName('input')[0].value;//Added by t9543un
	                    	var deletedLOPHier = loprow.cells[1].getElementsByTagName('input')[5].value;//Added by t9543un
	                    	var deletedLOPGrp = loprow.cells[1].getElementsByTagName('input')[6].value;//Added by t9543un
	                    	var lopPrtSeqArr=loprow.cells[1].getElementsByTagName('input');
	                    	var prtlop;
	                    	var deleted=true;
	                    	for(var pr=1; pr<rowCount; pr++){
	                			var prtrw=table.rows[pr];
	                			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46
	                			// Don't know why pr==i check is there... Need to check
	                			if(pr==i){
	                				continue;
	                			}else{
	                				prtlop=trim(prtrw.cells[3].getElementsByTagName('input')[4].value);
	                				
	                				if(prtlop==deletedLOP){
	    	                    		deleted=false;
	    	                    		break;
	    	                    	}
	                			}
	                		}
	                    	
	                    	var lopPartSeq=lopPrtSeqArr[2].value;
	                    	
	                    	var delflag=true;
	                    	var flag=true;
	                    	
	                    	if(k==s){
	                    		k++;
	                    	}
	                    	//alert("DeleteRepairList(),Compare lopPartSeq.substring(1)::"+lopPartSeq.substring(1)+" :delPartSeqNum::"+delPartSeqNum);
	                    	//alert("DeleteRepairList(), i+1::"+(i+1));
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	                    	var lopPartSeqFirstChar=lopPartSeq.substring(0,1);
	                    	var lopPartSeqStr=lopPartSeq.substring(1);
	                    	var lopPartSeqArray = new Array();
	                    	var countArr=0;
	                    	for(var lps=0;lps<=(lopPartSeqStr.length-2);lps=lps+2){
	                    		lopPartSeqArray[countArr]=lopPartSeqStr.substring(lps,lps+2);
	                    		countArr++;
	                    	}
	                    	countArr=0;	                    	
	                    	//if(lopPartSeq.substring(1)==(i+1)){
	                    	if(lopPartSeq.substring(1)==delPartSeqNum){	                    	
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    		//alert("DeleteRepairList(), in if of lopPartSeq.substring(1)==(i+1):: lopPartSeq.substring(1)::"+lopPartSeq.substring(1));
	                    		rowCount=table.rows.length;
	                    		//alert("DeleteRepairList(), part rowCount... "+rowCount);
	                    		for(var r=1; r<rowCount; r++) {
	                    			var prtrowInd = table.rows[r];
	                    			var hiddenLOP=prtrowInd.cells[3].getElementsByTagName('input')[4].value
	                    			if(trim(hiddenLOP)==trim(loptable.rows[k].cells[0].getElementsByTagName('input')[0].value)){
	                    				delflag=false;
	                    			}
	                    		}
	                    		if(trim(loptable.rows[k].cells[1].getElementsByTagName('input')[4].value).substring(0,1)=='P'){
	                    			delflag=false;	                    			
	                    		}
	                    		if(delflag==true ){
	                    			//alert("deletedLOP... "+deletedLOP);
	                    			loptable.deleteRow(k);
	                    			loprowCount--;
	                    			k--;	                    			
	                    		}
	                    		
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start	
	                    	//} else if(lopPartSeq.indexOf(x)>0){
	                    	//} else if(lopPartSeq.indexOf(delPartSeqNum)>0){
	                    	} else if(lopPartSeqArray.indexOf(delPartSeqNum)>=0){
	                    		//alert("DeleteRepairList(), in elseif of lopPartSeq.indexOf(delPartSeqNum)>0:: lopPartSeq before::"+lopPartSeq+" delete delPartSeqNum::"+delPartSeqNum+" :lopPartSeqArray.indexOf(delPartSeqNum)::"+lopPartSeqArray.indexOf(delPartSeqNum));
	                    		//lopPartSeq=lopPartSeq.replace(x,"");
	                    		//lopPartSeq=lopPartSeq.replace(delPartSeqNum,"");
	                    		//alert("DeleteRepairList(), lopPartSeqArray before::"+lopPartSeqArray);
	                    		lopPartSeqArray.removeByValue(delPartSeqNum);
	                    		//alert("DeleteRepairList(), lopPartSeqArray after::"+lopPartSeqArray);
	                    		//var newlopPartSeq=lopPartSeq;
	                    		//var existingpartLOPSeq;
	                    		var newlopPartSeqArray=lopPartSeqArray;
	                    		var existingpartLOPSeqArray = new Array();
	                    		//Added for Lop grp hier requirement by t9543un - start	                    		
	                    		rowCount = table.rows.length;
	                    		//alert("DeleteRepairList(), parseInt(x)::"+parseInt(x)+" :delPartSeqNum::"+delPartSeqNum);
	                    		//var xint=parseInt(x);	                    		
	                    		var xint=parseInt(delPartSeqNum,10);
	                    		//alert("DeleteRepairList(), delPartSeqNum::"+delPartSeqNum+" :xint::"+xint);
	                    		//existingpartLOPSeq=trim(lopPartSeq.substring(1));
	                    		existingpartLOPSeqArray=lopPartSeqArray;
	                    		//alert("DeleteRepairList(), Before for loop, existingpartLOPSeqArray::"+existingpartLOPSeqArray);
	                    		// The below for loop is to rearrange the lop part sequence column of lop table as specific part has been deleted.
		            			//for(var el=1;el<=existingpartLOPSeq.length;el++){
	                    		//for(var e1=1;e1<=existingpartLOPSeq.length/2;e1++){
	                    		for(var e1=1;e1<=existingpartLOPSeqArray.length;e1++){
		            				var index=0;
		            				//index=parseInt(trim(existingpartLOPSeq.substring(el-1,el)));
		            				//index=parseInt(existingpartLOPSeq.substring((e1*2)-2,(e1*2)),10);
		            				index=parseInt(existingpartLOPSeqArray[e1-1],10);
	            					var xint=0;
	            					//alert("DeleteRepairList(), in for loop, new index:: "+index);
	            					//alert("DeleteRepairList(), parseInt(x)::"+parseInt(x)+" :delPartSeqNum::"+delPartSeqNum+" should be same");
	            					//xint=parseInt(x);
	            					xint=parseInt(delPartSeqNum,10);	
	            					//alert("DeleteRepairList(), index:: "+index+" :xint:: "+xint);
	            					if(index>=(xint)){
	            						//alert("DeleteRepairList(), In if of index>=(xint), index:: "+index+" :xint:: "+xint);
	            						var newindex=(index-1).toString();
	            						if(index==xint)
	            							newindex="";
	            						var indexStr=index.toString();
	            						//alert("DeleteRepairList(), Replace Old indexStr:: "+indexStr+" with newindex:: "+newindex+" in Old newlopPartSeq::"+newlopPartSeqArray);
	            						//newlopPartSeq=newlopPartSeq.replace(indexStr,newindex);
	            						if(newindex == ""){
	            							if(parseInt(indexStr,10)<10){
	            								indexStr = "0" + parseInt(indexStr,10);
	            							}
	            							newlopPartSeqArray.remove(indexStr);
	            						} else {
	            							replace(newlopPartSeqArray,indexStr,newindex);
	            						}
	            						//alert("DeleteRepairList(), New newlopPartSeqArray:: "+newlopPartSeqArray);
	            					}	
		            			}			            			
		            			//alert("newlopPartSeq.."+newlopPartSeq);
		            			
                    			//var newlopPartSeqstr=trim(newlopPartSeq.substring(1));
	                    		var newlopPartSeqstrArray=newlopPartSeqArray;
                    			var count=0;
                    			//alert("DeleteRepairList(), newlopPartSeqstrArray:: "+newlopPartSeqstrArray);
                    			// Check if any of the parts tagged to this lop have no related lop. If yes then mark deleted as false 
                    			//for(var el=1;el<=newlopPartSeqstr.length;el++){
                    			//for(var e1=1;e1<=newlopPartSeqstr.length/2;e1++){
                    			for(var e1=1;e1<=newlopPartSeqstrArray.length;e1++){		            				
		            				var index=0;
		            				//index=parseInt(trim(newlopPartSeqstr.substring(el-1,el)));
		            				//index=parseInt(newlopPartSeqstr.substring((e1*2)-2,(e1*2)),10);
		            				index = parseInt(newlopPartSeqstrArray[e1-1],10);
		            				//alert("DeleteRepairList(), newlopPartSeqstr index:: "+index);
		            				
		            				var inti=0;
		            				inti=index-1;
		            				//alert("DeleteRepairList(), newlopPartSeqstr inti(index-1):: "+inti)
		            				var rowindex = table.rows[inti];
		            				
		            				if(rowindex!=undefined){
			            				var relLOP=trim(rowindex.cells[3].getElementsByTagName('input')[4].value);
			            				//alert("DeleteRepairList(), relLOP:: "+relLOP);
			            				if(relLOP==''){
			            					deleted=false;			            					
		    	                    		break;
			            				}
		            				}
		            				
                    			}
                    			//alert("DeleteRepairList(), newlopPartSeqstrArray:: "+newlopPartSeqstrArray);
		            			//for(var el=1;el<=newlopPartSeqstr.length;el++){
                    			//for(var e1=1;e1<=newlopPartSeqstr.length/2;e1++){
                    			for(var e1=1;e1<=newlopPartSeqstrArray.length;e1++){
		            				var index=0;
		            				//index=parseInt(trim(newlopPartSeqstr.substring(el-1,el)));
		            				//index=parseInt(newlopPartSeqstr.substring((e1*2)-2,(e1*2)),10);
		            				index = parseInt(newlopPartSeqstrArray[e1-1],10);
		            			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
		            				var inti=0;
		            				inti=index-1;
		            				//alert("DeleteRepairList(), index:: "+index+" :inti:: "+inti);
		            				var rowindex = table.rows[inti];
			            			var relLOP;
			            			var relLOPGrp;
			            			var relLOPGrpHier;
			            			var relLOPhrs;
			            			var relLOPDesc;
			            			
			            			if(rowindex!=undefined){
			            				relLOP=trim(rowindex.cells[3].getElementsByTagName('input')[4].value);
			            				//alert("relLOP..."+relLOP);
					            		relLOPGrp=trim(rowindex.cells[3].getElementsByTagName('input')[5].value);
					            		//alert("relLOPGrp..."+relLOPGrp);
					            		relLOPGrpHier=trim(rowindex.cells[3].getElementsByTagName('input')[6].value);
					            		//alert("relLOPGrpHier..."+relLOPGrpHier);
					            		relLOPhrs=trim(rowindex.cells[3].getElementsByTagName('input')[7].value);
					            		//alert("relLOPhrs..."+relLOPhrs);
					            		relLOPDesc=trim(rowindex.cells[3].getElementsByTagName('input')[8].value);
					            		//alert("relLOPDesc..."+relLOPDesc);
					            		var relloppre=trim(relLOPGrpHier).indexOf(trim(relLOPGrp));
					            		//alert("DeleteRepairList(), Part having relLOP::"+relLOP);
					            		if(relLOP!=''){
					            		//alert("DeleteRepairList(), deletedLOPHier::"+deletedLOPHier+" ,relLOPGrpHier::"+relLOPGrpHier+" ,deletedLOP::"+deletedLOP+" ,relLOP::"+relLOP);
						            		if(trim(deletedLOPHier)!='' && (trim(deletedLOPHier)==relLOPGrpHier) && (trim(deletedLOP)!=relLOP)){
			            						//alert("DeleteRepairList(), deleted::"+deleted+" :flag::"+flag);
			            						if(deleted==true){
			            							if(flag==true){
			            								//alert("DeleteRepairList(), deleting lop at index::"+k);
			            								loptable.deleteRow(k);
							            		      //loprowCount--;
								     	            	 k--;
								     	            	 deleted=true;
								     	            	 flag=false;
			            							}
								     	           
								     	           // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - Start
								     	           var newlopPartSeq1="";
								     	           for(var e2=0;e2<newlopPartSeqArray.length;e2++){
								     	        	   newlopPartSeq1+=newlopPartSeqArray[e2];
								     	           }
								     	           if(newlopPartSeq1!=""){
								     	        	   newlopPartSeq1=lopPartSeqFirstChar + newlopPartSeq1;
								     	           }
								     	          //alert("DeleteRepairList(), Calling addLOP() relLOP::"+relLOP+" :relLOPGrp::"+relLOPGrp+" :relLOPGrpHier::"+relLOPGrpHier+" :newlopPartSeq1::"+newlopPartSeq1+" :k::"+k);
								     	          //k=addLOP('Repair',relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,newlopPartSeq,k);
								     	          //var lopAddFlag=addLOP('Repair',relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,newlopPartSeq,k);
								     	          var lopAddFlag=addLOP('Repair',relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,newlopPartSeq1,k);
								     	           //alert("DeleteRepairList(), lopAddFlag::"+lopAddFlag);
								     	           if(lopAddFlag==true){
								     	        	  skipLopIndex = loptable.rows.length;
								     	        	  //alert("DeleteRepairList(), skipLopIndex::"+skipLopIndex);
								     	           }
								     	           // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - End
								     	           //alert("DeleteRepairList(), after addlop() k::"+k);
								     	           loprowCount=loptable.rows.length;
			            							// Part Greater than 10 Issue - Commented by T0984NG for PMO# 472.46 - Start
			            							//s=k;
			            							//k--;
			            							// Part Greater than 10 Issue - Commented by T0984NG for PMO# 472.46 - End
			            						}	
						            		}	
					            		}
			            			}
                    			}
                    			
                    			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
                    			var newlopPartSeq2="";
		        				for(var e3=0;e3<newlopPartSeqArray.length;e3++){
		        					newlopPartSeq2+=newlopPartSeqArray[e3];
		        				}
		        				if(newlopPartSeq2!=""){
		        					newlopPartSeq2=lopPartSeqFirstChar + newlopPartSeq2;
		        				}
		        				//alert("DeleteRepairList(), Before adding newlopPartSeq in if loop for line k::"+k+" :newlopPartSeq2::"+newlopPartSeq2+" :flag::"+flag);
                    			if(flag==true){
                    				//loptable.rows[k].cells[1].getElementsByTagName('input')[2].value=newlopPartSeq;	                    		
                    				loptable.rows[k].cells[1].getElementsByTagName('input')[2].value=newlopPartSeq2;
	                    		//Added for Lop grp hier requirement by t9543un - end
                    			}
                    			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    		
	                    	} else {
	                    		//alert("DeleteRepairList(), part seq not found in heirarchy");
	                    		loprowCount=loptable.rows.length;
	                    		
                				var lr=loptable.rows[k];
                				var existinglopPartSeq=lr.cells[1].getElementsByTagName('input')[2].value;
                				// Part Greater than 10 Issue - Modified by T0984NG for PMO# 472.46 - Start
                				var existinglopPartSeqTemp = existinglopPartSeq.substring(1); 
                				var exlopPartSeqCharTemp = existinglopPartSeq.substring(0,1); 
                				var existinglopPartSeqArray =new Array();
                				var countArr=0;
                				for(var ip=0;ip<=existinglopPartSeqTemp.length-2;ip=ip+2){
                					existinglopPartSeqArray[countArr]=existinglopPartSeqTemp.substring(ip,ip+2);
                					countArr++;
                				}                                        
                				countArr=0;
                				//var newlopPartSeq=existinglopPartSeq;
                        		//existingpartLOPSeq=trim(newlopPartSeq.substring(1));
                				var newlopPartSeqArray=existinglopPartSeqArray;
                				var existingpartLOPSeqArray=newlopPartSeqArray;
                        		//alert("DeleteRepairList(), In Else loop existingpartLOPSeqArray:: "+existingpartLOPSeqArray);
    	            			//for(var el=1;el<=existingpartLOPSeq.length;el++){
                        		//for(var e1=1;e1<=existingpartLOPSeq.length/2;e1++){
                        		for(var e1=1;e1<=existingpartLOPSeqArray.length;e1++){
    	            				var index=0;
	            					//index=parseInt(trim(existingpartLOPSeq.substring(el-1,el)));
    	            				//index=parseInt(existingpartLOPSeq.substring((e1*2)-2,(e1*2)),10);
    	            				index=parseInt(existingpartLOPSeqArray[e1-1],10);
    	            				//alert("DeleteRepairList(), parseInt(x)::"+parseInt(x)+" :delPartSeqNum::"+delPartSeqNum+" should be same");
	            					var xint=0
	            					//xint=parseInt(x);
	            					xint=parseInt(delPartSeqNum,10);
	            					//alert("DeleteRepairList(), in else part seq index:: "+index+" :xint:: "+xint);
	            					if(index>=(xint)){
	            						//alert("DeleteRepairList(), in if(index>=(xint)), index:: "+index+" :xint:: "+xint);
	            						var newindex=(index-1).toString();	            						
	            						var indexStr=index.toString()
	            						if(index==xint){
	            							newindex="";
	            						}
	            						//alert("DeleteRepairList(), in else replace indexStr:: "+indexStr+" :with newindex:: "+newindex+" in newlopPartSeqArray::"+newlopPartSeqArray);
	            						//newlopPartSeq=newlopPartSeq.replace(indexStr,newindex);
	            						if(newindex == ""){
	            							if(parseInt(indexStr,10)<10){
	            								indexStr = "0" + parseInt(indexStr,10);
	            							}
	            							newlopPartSeqArray.remove(indexStr);
	            						}else{
	            							replace(newlopPartSeqArray,indexStr,newindex);
	            						}
	            						//alert("DeleteRepairList(), After replace newlopPartSeqArray::"+newlopPartSeqArray);
	            					}
    	            			}
    	            		
                        		//alert("DeleteRepairList(), newlopPartSeqArray:: "+newlopPartSeqArray);
                        		var newlopPartSeqs1="";
    	            			for(var e2=0;e2<newlopPartSeqArray.length;e2++){
    	            				newlopPartSeqs1+=newlopPartSeqArray[e2];
    	            			}
    	            			if(newlopPartSeqs1 != ""){
    	            				newlopPartSeqs1 = exlopPartSeqCharTemp + newlopPartSeqs1;
    	            			}    	            			
    	            			//lr.cells[1].getElementsByTagName('input')[2].value=newlopPartSeq;
    	            			lr.cells[1].getElementsByTagName('input')[2].value=newlopPartSeqs1;
    	            			// Part Greater than 10 Issue - Modified by T0984NG for PMO# 472.46 - End
	                    	}
	                    }
	                     //rowCount--;
	                    i--;
	                   /* */
	                }
	            }
	            rowCount=table.rows.length;
	            //alert("DeleteRepairList(), Rearranging part sequence");
	            for(var i=1; i<rowCount; i++) {
	            	var row = table.rows[i];
	            	//alert("new..."+parseInt(i+1));
                    row.cells[3].getElementsByTagName('input')[3].value=parseInt(i+1);
	            }
	            
	            //T9874sc 103 STARTS
	            if(isCheckBoxSelected == false){
                	alert(ErrorsDict.deletePrtMsg);
                	return ;
	            }
	            //T9874sc 103 ENDS
	            }catch(e) {
	               // alert(e);
	            }
				
				var tableReplacePart = document.getElementById("replacepart");
				var rowCountReplacePart = tableReplacePart.rows.length;


	            var repairparttable=document.getElementById("repairpart");
	    		var repairloptable=document.getElementById("repairlop");
	    		var replaceparttable=document.getElementById("replacepart");
	    		var replaceloptable=document.getElementById("replacelop");
	    		
	    		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
	    		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
	    		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
	    		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;

	    		calulateRepairAmount();
	    		//document.getElementById("repairpart").length
				//alert("table length"+document.getElementById("repairpart").rows.length);
				//if(rowCount == 1 && rowCountReplacePart == 1){
	    		//if(document.getElementById("repairpart").length == 1 && document.getElementById("repairpart").length == 1){
	    		if(document.getElementById("repairpart").rows.length == 1 && document.getElementById("replacepart").rows.length ==1) {		
					document.getElementById("allowance").style.backgroundColor="#FFFFFF";
					// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					document.getElementById("textcolor").value="#FFFFFF";
					document.getElementById("allowance").value = '';
				} else {
		    		calculateAllowance();	    		
				}		    		
	
	}



	function DeleteReplaceList(){
	document.pwtwrksheet.savestatus.value=""; // Added by t9453ss for worksheet status
		
		try {
	            //alert("Inside DeleteReplaceList()");
				var table = document.getElementById("replacepart");
	            var rowCount = table.rows.length;
	 
	            var loptable = document.getElementById("replacelop");
	            var loprowCount = loptable.rows.length;
	            var isCheckBoxSelected=false;//T9874sc 103
			
	            for(var i=1; i<rowCount; i++) {
	                var row = table.rows[i];
	                var chkbox = row.cells[0].getElementsByTagName('input')[0];
	                
	                
	                if(null != chkbox && true == chkbox.checked) {
	                	isCheckBoxSelected=true;//T9874sc 103
	                	
	                	var delloppre=-1;
                    	var prtrowInd = table.rows[i];
                		var hiddenprtLOP=trim(prtrowInd.cells[3].getElementsByTagName('input')[4].value);
                		var hiddenprtlopgrp=trim(prtrowInd.cells[3].getElementsByTagName('input')[5].value);
                		var hiddenprtlopgrphier=trim(prtrowInd.cells[3].getElementsByTagName('input')[6].value);
                		var hiddenprtloppre=-1;
                			//delloppre=trim(deletedLOPHier).indexOf(trim(deletedLOPGrp));
                    	/*if(hiddenprtlopgrphier!='' && hiddenprtlopgrp!='')
                    		hiddenprtloppre=(hiddenprtlopgrphier).indexOf(hiddenprtlopgrp);
                    	
                    	alert("hiddenprtloppre... "+hiddenprtloppre);
                    	*/
                    	table.deleteRow(i);
	                	rowCount=table.rows.length;
	    	            //alert("rowCount... "+rowCount);
	                    
	    				if(rowCount==1){
	    					
	    					loprowCount=loptable.rows.length;
	                    	for(var j=1; j<loprowCount; j++) {
	                    		 
	                    		  loptable.deleteRow(j);
	       	                   
	                    		  loprowCount--;
	     	                      j--;
	                    		  
	                    	  }
	                    	break;
	                   }
	    				if(rowCount==2 && trim(table.rows[1].cells[1].getElementsByTagName('input')[0].value)=='NPN0000000'){
	    					loprowCount=loptable.rows.length;
	                    	for(var j=1; j<loprowCount; j++) {
	                    		 
	                    		  loptable.deleteRow(j);
	       	                   
	                    		  loprowCount--;
	     	                      j--;
	                    		  
	                    	  }
	                    	break;
	    				}
	    				
	    				var x=(i+1).toString();
					// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	    				var delPartSeqNum = parseInt(x);
					if(delPartSeqNum < 10){
	    					delPartSeqNum = "0" + delPartSeqNum;
	                	}
						delPartSeqNum = delPartSeqNum.toString();
	    				var skipLopIndex = 0;
	    				// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End	

	                    for(var k=1;k<loprowCount;k++){
							// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
							                    	if(k==(skipLopIndex-1)){
	                    		continue;
	                    	}
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    	var s=0;
	                    	//alert("k... "+k);
	                    	var loprow=loptable.rows[k]; // Modified by t9543un
	                    	var deletedLOP = loprow.cells[0].getElementsByTagName('input')[0].value;//Added by t9543un
	                    	var deletedLOPHier = loprow.cells[1].getElementsByTagName('input')[5].value;//Added by t9543un
	                    	var deletedLOPGrp = loprow.cells[1].getElementsByTagName('input')[6].value;//Added by t9543un
	                    	var lopPrtSeqArr=loprow.cells[1].getElementsByTagName('input');
	                    	var prtlop;
	                    	var deleted=true;
	                    	for(var pr=1; pr<rowCount; pr++){
	                			var prtrw=table.rows[pr];
	                			
	                			if(pr==i){
	                				continue;
	                			}else{
	                				prtlop=trim(prtrw.cells[3].getElementsByTagName('input')[4].value);
	                				
	                				if(prtlop==deletedLOP){
	    	                    		deleted=false;
	    	                    		break;
	    	                    	}
	                				
	                				
	                				
	                			}
	                		}
	                    	
	                    	var lopPartSeq=lopPrtSeqArr[2].value;
	                    	
	                    	var delflag=true;
	                    	var flag=true;
	                    	
	                    	if(k==s){
	                    		k++;
	                    	}
								                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	                    	var lopPartSeqFirstChar=lopPartSeq.substring(0,1);
	                    	var lopPartSeqStr=lopPartSeq.substring(1);
	                    	var lopPartSeqArray = new Array();
	                    	var countArr=0;
	                    	for(var lps=0;lps<=(lopPartSeqStr.length-2);lps=lps+2){
	                    		lopPartSeqArray[countArr]=lopPartSeqStr.substring(lps,lps+2);
	                    		countArr++;
	                    	}
	                    	countArr=0;	   

	                    	//if(lopPartSeq.substring(1)==(i+1)){
									                    	if(lopPartSeq.substring(1)==delPartSeqNum){	                    	
	                    	// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    		rowCount=table.rows.length;
	                    		//alert("rowCount... "+rowCount);
	                    		for(var r=1; r<rowCount; r++) {
	                    			var prtrowInd = table.rows[r];
	                    			var hiddenLOP=prtrowInd.cells[3].getElementsByTagName('input')[4].value
	                    			if(trim(hiddenLOP)==trim(loptable.rows[k].cells[0].getElementsByTagName('input')[0].value)){
	                    				delflag=false;
	                    			}
	                    		}
	                    		if(trim(loptable.rows[k].cells[1].getElementsByTagName('input')[4].value).substring(0,1)=='P'){
	                    			delflag=false;
	                    			
	                    		}
	                    		if(delflag==true ){
	                    			//alert("deletedLOP... "+deletedLOP);
	                    			loptable.deleteRow(k);
	                    			loprowCount--;
	                    			k--;
	                    			
	                    		}
	                    		
	                    		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start		
	                    	//}else if(lopPartSeq.indexOf(x)>0){
								 	} else if(lopPartSeqArray.indexOf(delPartSeqNum)>=0){
	                    		//alert("deletedLOP..."+deletedLOP);
	                    		
	                    		//lopPartSeq=lopPartSeq.replace(x,"");
								lopPartSeqArray.removeByValue(delPartSeqNum);

	                    		//var newlopPartSeq=lopPartSeq;
	                    		//var existingpartLOPSeq
							   var newlopPartSeqArray=lopPartSeqArray;
	                    		var existingpartLOPSeqArray = new Array();

	                    		//Added for Lop grp hier requirement by t9543un - start
	                    		
	                    		rowCount = table.rows.length;
	                    		
	                    		//alert("rowCount.."+rowCount);
	                    		//var xint=parseInt(x);
								var xint=parseInt(delPartSeqNum,10);
	                    		//alert("xint.."+xint);
	                    		//existingpartLOPSeq=trim(lopPartSeq.substring(1));
								existingpartLOPSeqArray=lopPartSeqArray;
		            			//alert("lopPartSeq.."+existingpartLOPSeq);
		            			//alert("lopPartSeq.length..."+existingpartLOPSeq.length);
	                    		
		            			//for(var el=1;el<=existingpartLOPSeq.length;el++){
									for(var e1=1;e1<=existingpartLOPSeqArray.length;e1++){
		            				var index=0;
		            				//alert("e1.. "+el);
		            					//index=parseInt(trim(existingpartLOPSeq.substring(el-1,el)));
										index=parseInt(existingpartLOPSeqArray[e1-1],10);
		            					//alert("in else new index...."+index);
		            					var xint=0
		            					//xint=parseInt(x);
										xint=parseInt(delPartSeqNum,10);
		            					if(index>=(xint)){
		            						var newindex=(index-1).toString();
		            						if(index==xint)
		            							newindex="";
		            						var indexStr=index.toString()
		            						//alert("newindex..."+newindex);
		            						//alert("indexStr..."+indexStr);
		            						//newlopPartSeq=newlopPartSeq.replace(indexStr,newindex);
		            						//alert("newlopPartSeq... "+newlopPartSeq);
												            						if(newindex == ""){
	            							if(parseInt(indexStr,10)<10){
	            								indexStr = "0" + parseInt(indexStr,10);
	            							}
	            							newlopPartSeqArray.remove(indexStr);
	            						} else {
	            							replace(newlopPartSeqArray,indexStr,newindex);
	            						}
		            					}
		            					
		            			}			            			
		            			//alert("newlopPartSeq.."+newlopPartSeq);
		            			
	                    			//var newlopPartSeqstr=trim(newlopPartSeq.substring(1));
									var newlopPartSeqstrArray=newlopPartSeqArray;
	                    			var count=0;
	                    			//for(var el=1;el<=newlopPartSeqstr.length;el++){
			            				  			for(var e1=1;e1<=newlopPartSeqstrArray.length;e1++){	
			            				var index=0;
			            				//index=parseInt(trim(newlopPartSeqstr.substring(el-1,el)));
										index = parseInt(newlopPartSeqstrArray[e1-1],10);
			            				//alert("index..."+index)
			            				
			            				var inti=0;
			            				inti=index-1;
			            				
			            				var rowindex = table.rows[inti];
			            				
			            				if(rowindex!=undefined){
				            				var relLOP=trim(rowindex.cells[3].getElementsByTagName('input')[4].value);
				            				if(relLOP==''){
				            					deleted=false;
				            					
			    	                    		break;
				            				}
			            				}
			            				
	                    			}
				            			//for(var el=1;el<=newlopPartSeqstr.length;el++){
				            				for(var e1=1;e1<=newlopPartSeqstrArray.length;e1++){
				            				var index=0;
				            				//index=parseInt(trim(newlopPartSeqstr.substring(el-1,el)));
											index = parseInt(newlopPartSeqstrArray[e1-1],10);
				            				//alert("index..."+index)
				            				// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
				            				var inti=0;
				            				inti=index-1;
				            				
				            				var rowindex = table.rows[inti];
					            			var relLOP;
					            			var relLOPGrp;
					            			var relLOPGrpHier;
					            			var relLOPhrs;
					            			var relLOPDesc;
					            			
					            			if(rowindex!=undefined){
					            				relLOP=trim(rowindex.cells[3].getElementsByTagName('input')[4].value);
					            				//alert("relLOP..."+relLOP);
							            		relLOPGrp=trim(rowindex.cells[3].getElementsByTagName('input')[5].value);
							            		//alert("relLOPGrp..."+relLOPGrp);
							            		relLOPGrpHier=trim(rowindex.cells[3].getElementsByTagName('input')[6].value);
							            		//alert("relLOPGrpHier..."+relLOPGrpHier);
							            		relLOPhrs=trim(rowindex.cells[3].getElementsByTagName('input')[7].value);
							            		//alert("relLOPhrs..."+relLOPhrs);
							            		relLOPDesc=trim(rowindex.cells[3].getElementsByTagName('input')[8].value);
							            		//alert("relLOPDesc..."+relLOPDesc);
							            		var relloppre=trim(relLOPGrpHier).indexOf(trim(relLOPGrp));
							            		
							            		if(relLOP!=''){
							            		if(trim(deletedLOPHier)!='' && (trim(deletedLOPHier)==relLOPGrpHier) && (trim(deletedLOP)!=relLOP)){

							            						if(deleted==true){
							            							if(flag==true){
							            								loptable.deleteRow(k);
											            		      //loprowCount--;
												     	            	 k--;
												     	            	 deleted=true;
												     	            	 flag=false;
												     	            	
							            						}
									            				 // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - Start
																 								     	           var newlopPartSeq1="";
								     	           for(var e2=0;e2<newlopPartSeqArray.length;e2++){
								     	        	   newlopPartSeq1+=newlopPartSeqArray[e2];
								     	           }
								     	           if(newlopPartSeq1!=""){
								     	        	   newlopPartSeq1=lopPartSeqFirstChar + newlopPartSeq1;
								     	           }
												     	           //alert("newlopPartSeq..."+newlopPartSeq);
												     	         //  k=addLOP('Replace',relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,newlopPartSeq,k);
																  var lopAddFlag=addLOP('Repair',relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,newlopPartSeq1,k);
																  							     	           if(lopAddFlag==true){
								     	        	  skipLopIndex = loptable.rows.length;
								     	        	  //alert("DeleteRepairList(), skipLopIndex::"+skipLopIndex);
								     	           }
												    // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - End
							            							//alert("after addlop...k"+k);
							            							loprowCount=loptable.rows.length;
							            						//	alert("loprowCount... "+loprowCount);
																// Part Greater than 10 Issue - Commented by T0984NG for PMO# 472.46 - Start
							            							//s=k;
							            							//k--;
																	// Part Greater than 10 Issue - Commented by T0984NG for PMO# 472.46 - End
							            							
							            					}
							            						
							            		}	
									            
							            	}
				            			}
	                    			}
									// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
									                    			var newlopPartSeq2="";
		        				for(var e3=0;e3<newlopPartSeqArray.length;e3++){
		        					newlopPartSeq2+=newlopPartSeqArray[e3];
		        				}
		        				if(newlopPartSeq2!=""){
		        					newlopPartSeq2=lopPartSeqFirstChar + newlopPartSeq2;
		        				}
								if(flag==true){
				        				//alert("after addlop...newlopPartSeq "+newlopPartSeq);
	                    		//loprow.cells[1].getElementsByTagName('input')[2].value=lopPartSeq;
				        		//loptable.rows[k].cells[1].getElementsByTagName('input')[2].value=newlopPartSeq;
	                    		loptable.rows[k].cells[1].getElementsByTagName('input')[2].value=newlopPartSeq2;
								}
	                    		//Added for Lop grp hier requirement by t9543un - end
								// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	                    		
	                    		
	                    	}else{
	                    		//alert("else...... ");
	                    		loprowCount=loptable.rows.length;
	                    		
		                				var lr=loptable.rows[k];
		                				var existinglopPartSeq=lr.cells[1].getElementsByTagName('input')[2].value;
										// Part Greater than 10 Issue - Modified by T0984NG for PMO# 472.46 - Start
										                				var existinglopPartSeqTemp = existinglopPartSeq.substring(1); 
                				var exlopPartSeqCharTemp = existinglopPartSeq.substring(0,1); 
                				var existinglopPartSeqArray =new Array();
                				var countArr=0;
                				for(var ip=0;ip<=existinglopPartSeqTemp.length-2;ip=ip+2){
                					existinglopPartSeqArray[countArr]=existinglopPartSeqTemp.substring(ip,ip+2);
                					countArr++;
                				}                                        
                				countArr=0;
		                				//var newlopPartSeq=existinglopPartSeq;

		    	                    	//alert("existinglopPartSeq "+existinglopPartSeq+" for "+lr.cells[0].getElementsByTagName('input')[0].value);
		                        		//alert("xint.."+xint);
		                        		//existingpartLOPSeq=trim(newlopPartSeq.substring(1));
										                				var newlopPartSeqArray=existinglopPartSeqArray;
                				var existingpartLOPSeqArray=newlopPartSeqArray;
		    	            		//	for(var el=1;el<=existingpartLOPSeq.length;el++){
										                   		for(var e1=1;e1<=existingpartLOPSeqArray.length;e1++){
		    	            				var index=0;
		    	            				//alert("e1.. "+el);
		    	            					//index=parseInt(trim(existingpartLOPSeq.substring(el-1,el)));
		    	            					//alert("in else new index...."+index);
												index=parseInt(existingpartLOPSeqArray[e1-1],10);
		    	            					var xint=0
		    	            					//xint=parseInt(x);
												xint=parseInt(delPartSeqNum,10);
		    	            					if(index>=(xint)){
		    	            						var newindex=(index-1).toString();
		    	            						
		    	            						var indexStr=index.toString()
		    	            						if(index==xint){
		    	            							newindex="";
		    	            						}

		    	            						//newlopPartSeq=newlopPartSeq.replace(indexStr,newindex);
		    	            						//alert("newlopPartSeq... "+newlopPartSeq);
														            						if(newindex == ""){
	            							if(parseInt(indexStr,10)<10){
	            								indexStr = "0" + parseInt(indexStr,10);
	            							}
	            							newlopPartSeqArray.remove(indexStr);
	            						}else{
	            							replace(newlopPartSeqArray,indexStr,newindex);
	            						}
		    	            						
		    	            					}
		    	            					
		    	            			}
		    	            			//alert("newlopPartSeq.."+newlopPartSeq+ " for "+lr.cells[0].getElementsByTagName('input')[0].value);
		    	            			                        		var newlopPartSeqs1="";
    	            			for(var e2=0;e2<newlopPartSeqArray.length;e2++){
    	            				newlopPartSeqs1+=newlopPartSeqArray[e2];
    	            			}
    	            			if(newlopPartSeqs1 != ""){
    	            				newlopPartSeqs1 = exlopPartSeqCharTemp + newlopPartSeqs1;
    	            			}    
										//lr.cells[1].getElementsByTagName('input')[2].value=newlopPartSeq;
										    	            			lr.cells[1].getElementsByTagName('input')[2].value=newlopPartSeqs1;
    	            			// Part Greater than 10 Issue - Modified by T0984NG for PMO# 472.46 - End
		    	           	
	                    		
	                    	}
	                    }
	                   //rowCount--;
	                    i--;
	                   /* */
	                }
	            }
	            rowCount=table.rows.length;
	            for(var i=1; i<rowCount; i++) {
	               // alert("i..."+i);
	            	var row = table.rows[i];
	            	//alert("new..."+parseInt(i+1));
                    row.cells[3].getElementsByTagName('input')[3].value=parseInt(i+1);
	            }
	            
	            //T9874sc 103 STARTS
	            if(isCheckBoxSelected == false){
                	alert(ErrorsDict.deletePrtMsg);
                	return ;
	            }
	            //T9874sc 103 ENDS
	            }catch(e) {
	               // alert(e);
	            }
				
				var tableReplacePart = document.getElementById("replacepart");
				var rowCountReplacePart = tableReplacePart.rows.length;


	            var repairparttable=document.getElementById("repairpart");
	    		var repairloptable=document.getElementById("repairlop");
	    		var replaceparttable=document.getElementById("replacepart");
	    		var replaceloptable=document.getElementById("replacelop");
	    		
	    		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
	    		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
	    		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
	    		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;

	    		calulateReplaceAmount();
	    		//document.getElementById("repairpart").length
				//alert("table length"+document.getElementById("repairpart").rows.length);
				//if(rowCount == 1 && rowCountReplacePart == 1){
	    		//if(document.getElementById("repairpart").length == 1 && document.getElementById("repairpart").length == 1){
	    if(document.getElementById("repairpart").rows.length == 1 && document.getElementById("replacepart").rows.length ==1) {		
					document.getElementById("allowance").style.backgroundColor="#FFFFFF";
					// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
					document.getElementById("textcolor").value="#FFFFFF";
					document.getElementById("allowance").value = '';
				} else {
		    		calculateAllowance();	    		
				}		    		
	
	}
	function AddNPNPart(){
	
		win=window.open("/service/writeup/dipap/jsp/AddPartPOP.jsp","NPNPOPUP","width=700,height=500,top=200,left=200");
	
	}
	function Add00Time(){
	
		win=window.open("/service/writeup/dipap/jsp/open00LOPPOP.jsp","00LOPPOPUP","width=700,height=200,top=200,left=200");
	
	}
	function savesheet(){
		var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
		
		//Added for url fix by t9543un start
	
		if(window.opener && window.opener.document &&  window.opener.document.dcdipap.issue !=undefined && window.opener.document.dcdipap.issue.value !=null)
		document.pwtwrksheet.issue.value=window.opener.document.dcdipap.issue.value;

		if(window.opener && window.opener.document &&  window.opener.document.dcdipap.servaction !=undefined )
		document.pwtwrksheet.servaction.value=window.opener.document.dcdipap.servaction.value;


		//Added for url fix by t9543un End
		
		var replacepartcount=document.getElementById("replacepartcount").value
		var replacelopcount=document.getElementById("replacelopcount").value
		//alert("replacepartcount::"+replacepartcount);
		//alert("replacelopcount::"+replacelopcount);
		//window.opener.document.getElementById("pwtworksheet").style.visibility="hidden";
		//window.opener.document.getElementById("editpwtworksheet").style.visibility="visible";
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		if(window.opener && window.opener.document &&  window.opener.document.dcdipap.requestType !=undefined )
		var reqType = window.opener.document.dcdipap.requestType.value;
		//alert("reqType::"+reqType);
		if(reqType == "addType"){
			if(window.opener && window.opener.document &&  window.opener.document.getElementById("createPWT") !=undefined )
			window.opener.document.getElementById("createPWT").innerText="Edit";
		//window.opener.document.getElementById("createPWT").innerText="Edit";
			//Changes by SUMIT- t8415sk for DIPAP RSA Start
			if(window.opener && window.opener.document &&  window.opener.document.getElementById("createPWTId") !=undefined ){
				if(window.opener.document.getElementById("createPWTId") !=null){
					window.opener.document.getElementById("createPWTId").value="Edit";
				}
			}
			if(window.opener && window.opener.document &&  window.opener.document.getElementById("editPWTId") !=undefined ){
				if(window.opener.document.getElementById("editPWTId") !=null){
				window.opener.document.getElementById("editPWTId").value="Edit";
				}
			}
			//Changes by SUMIT- t8415sk for DIPAP RSA End
		}
		document.pwtwrksheet.savestatus.value="0"; 
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
		
		if(parseInt(replacepartcount)<1 ||  parseInt(replacelopcount)<3){
			//alert("worksheetStatus Incomplete");
			if(window.opener && window.opener.document &&  window.opener.document.getElementById("worksheetStatus") !=undefined )
			window.opener.document.getElementById("worksheetStatus").value="0"; //Incomplete
			document.getElementById("worksheetStatus").value="0"; 
		}else{
			//alert("worksheetStatus Complete");
			if(window.opener && window.opener.document &&  window.opener.document.getElementById("worksheetStatus") !=undefined )
			window.opener.document.getElementById("worksheetStatus").value="1"; //complete
			document.getElementById("worksheetStatus").value="1"; 
		}
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		var catg=document.pwtwrksheet.catgsel.options[document.pwtwrksheet.catgsel.options.selectedIndex].value;
		var subcatg=document.pwtwrksheet.subctg.options[document.pwtwrksheet.subctg.options.selectedIndex].value;
		var vinNum=document.pwtwrksheet.vin8.value;		
		var claimType=document.pwtwrksheet.clmtyp.value;
		var carTypeSel="";
		if(claimType!=null && claimType!="")
			claimType=claimType.substring(0,1);
		if(claimType=="W"){
			carTypeSel=document.pwtwrksheet.carType.options[document.pwtwrksheet.carType.options.selectedIndex].value;
			var rentaldays = document.getElementById("rentaldays").value;
			if(carTypeSel != "0")
			{
				if(rentaldays == null || rentaldays == '' || rentaldays == 0){
					alert(ErrorsDict.rentalCar);
					return;
				}
			}
			
		}
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End

		form=document.pwtwrksheet;
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
		// form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=saveWrkSheet&source=PWTSheet";
		//form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=saveWrkSheet&source=PWTSheet&category="+catg+"&subcategory="+subcatg+"&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&PwtWorksheet=onSaveSheet";
	//	form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=saveWrkSheet&source=PWTSheet&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&PwtWorksheet=onSaveSheet";
	//	form.method="POST";
		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
		ajaxUtil.doAction("/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=saveWrkSheet&source=PWTSheet&carTypeSel="+carTypeSel+"&vinNum="+vinNum+"&claimType="+claimType+"&PwtWorksheet=onSaveSheet", 'pwtwrksheet', 'saveMsg');
		//PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
		
		//Changes for DIPAP RSA  - Start By Ankur Nayak[T8576AN]
		if(window.opener && window.opener.document)
		disableRequiredField(window.opener.document);
		//T4317SK changes for reset disable
		if(window.opener && window.opener.document &&  window.opener.document.getElementById("resetButton") !=undefined )
		window.opener.document.getElementById("resetButton").href="javascript:void( 0 )";
		//T4317SK changes for reset disable
		//Changes for DIPAP RSA - End By Ankur Nayak[T8576AN]
		//form.submit();
		
		//window.close();
		
	
	}
	function submitsheet(){
	
		var parttable = document.getElementById("replacepart");
		var rowCount = parttable.rows.length;
		//var worksheetStatus = document.getElementById("worksheetStatus").value;
		var worksheetStatus = document.pwtwrksheet.savestatus.value;//Modified parameter
		//alert("worksheetStatus..."+worksheetStatus);
		
		var req = document.getElementById("iReq").value;

		//alert('Part row count'+rowCount);
		if (rowCount < 2) {
		alert(ErrorsDict.errMinPart);
		return;
		}
		else{
			 var loptable = document.getElementById("replacelop");
        	 var loprowCount = loptable.rows.length;
             //alert("loprowCount"+loprowCount);
        	// if (loprowCount < 4) {	Changes under PMO 6472.01 - Start
			   if (loprowCount < 3) {
				  //alert(ErrorsDict.errMinLOP);
				  alert("Minimum of two LOPS required in Replacement section");
				  //	Changes under PMO 6472.01 - End
				 return;
			// PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
			 }else{
				 var flag = false;   
				 var newrowcount=loptable.rows.length;
					for(var i=1; i<newrowcount; i++)
				    {
						var rowindex = loptable.rows[i];
						if(trim(rowindex.cells[1].getElementsByTagName('input')[4].value)=="Primary" || trim(rowindex.cells[1].getElementsByTagName('input')[4].value)=="P"){
							flag = true;
						}
				    }	
						
						if(flag == false){	
							alert("There should be minimum one Primary LOP in Replacement Section")
							return;
						}
					
			 }
			 //PMO 472.52 Changes - SeRV01067516 - Ajax Implementation of Powertrain worksheet
		}
		if (worksheetStatus == '' || worksheetStatus != '0') {
			alert(ErrorsDict.saveWork);
			return;
		}
		var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
		
		
		var replacepartcount=document.getElementById("replacepartcount").value;
		var replacelopcount=document.getElementById("replacelopcount").value;

		form=document.pwtwrksheet;
		//form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=submitWrkSheet&source=PWTSheet&replacepartcount="+replacepartcount+"&replacelopcount="+replacelopcount+"&iReq="+req;
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		//form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=submitWrkSheet&source=PWTSheet";
		// form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=submitWrkSheet&source=PWTSheet&iReq="+req;
		var reqType = window.opener.document.dcdipap.requestType.value;
		//alert("reqType::"+reqType);
		if(reqType == "addType"){
			form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=submitWrkSheet&PwtWorksheet=submitWrkSheet&source=PWTSheet&iReq="+req;
		} else {
			form.action="/service/writeup/dipap/DIPAPServlet?targetAction=addReq&pwtSheetAction=submitWrkSheet&source=PWTSheet&PwtWorksheet=submitWrkSheetUpdate&iReq="+req;
		}
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
		//alert("form.action::"+form.action);
		form.method="POST";
		form.submit();
		/*
		// Changes by SUMIT - t8415sk for DIPAP RSA Start
		// window.opener.document.getElementById("createPWT").innerText="Edit";
		if(window.opener.document.getElementById("createPWTId") !=null){
		window.opener.document.getElementById("createPWTId").value="Edit";
		}
		if(window.opener.document.getElementById("editPWTId") !=null){
		window.opener.document.getElementById("editPWTId").value="Edit";
		}
		//Changes by SUMIT - t8415sk for DIPAP RSA End
		/*
		if(parseInt(replacepartcount)<1 ||  parseInt(replacelopcount)<3){
			window.opener.document.getElementById("PwtWorksheetStatus").value="0";//Incomplete
		}else{
			window.opener.document.getElementById("worksheetStatus").value="1"; //complete
		}
		*/
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
		var allowanceColor = document.getElementById("allowance").style.backgroundColor;
		var allowanceTextColor = document.getElementById("textcolor").value;
		//alert("allowanceTextColor::"+allowanceTextColor);
		if(allowanceTextColor == "#00FF00"){
			//window.opener.document.getElementById("actualCostFlag").value="Y";
			var totalreplcost = document.getElementById("TotalreplaceCost").value;
			//alert("totalreplcost::"+totalreplcost);
			window.opener.document.dcdipap.cost.value=totalreplcost;
		}
		window.opener.document.getElementById("worksheetSubmitStatus").value="1";
		// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End
		
		window.close();
	}

	function clearSheet(){
		//document.getElementById("towAllowance").value="0.0";
		document.getElementById("qtyentered").value="";
		//document.getElementById("rentaldays").value="";
		//document.getElementById("carType").options[0].selected = true;
		document.getElementById("ctg").options[0].selected = true;
		document.getElementById("subctg").options[0].selected = true;
		document.getElementById("partnum").options[0].selected = true;
	}

	function printSheet(){
		var form=document.pwtwrksheet;		
		form.action="/service/writeup/dipap/DIPAPServlet?action=Generatepdf";
		form.method="POST";
		var oldtraget = form.target;
		var targetWindow="PDF";
		var targetUrl="/service/writeup/dipap/DIPAPServlet?action=Generatepdf";
		var waitMsg = "Processing, Please Wait......";
		var url = "/portal/toolbox/wait.jsp?qry=" + escape(targetUrl) + "&waitMsg=" + escape(waitMsg);
		win=window.open(url,targetWindow,"width=1000,height=1000,resizable=yes,scrollbars=yes");
		form.target = targetWindow;
		form.submit();
		form.target = oldtraget;
		//form.action = url;
		//this.location.href = url;	
	}
	//end DIPAP Sheet jsp Functions
	//Start Primarylop jsp
	
function submitLOPrequest(repairTyp,ploptableid){
		
		try {
	        
			//alert("ploptableid::"+ploptableid);
			//alert("repairTyp::"+repairTyp);
			//alert("Inside submitLOPrequest()");
			var addFlag="true";
			var table1;
			if(repairTyp=="Repair"){
				table1 = window.opener.document.getElementById("repairlop");
				
			}else{
				table1 = window.opener.document.getElementById("replacelop");
				
			}
			//alert("after else::in submitLOPrequest");
			var partrowcount;
			 if(repairTyp=="Repair"){
     	    	partrowcount=window.opener.document.getElementById("repairpart").rows.length;
     	    	
     	    }else{
     	    	partrowcount=window.opener.document.getElementById("replacepart").rows.length;
     	    	
     	    }
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
			 if(partrowcount<10){
				 partrowcount="0"+partrowcount;
				 //alert("submitLOPrequest() Primary Lop, partrowcount<10 so new partrowcount is::"+partrowcount);
			 }
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
			
			var table = document.getElementById(ploptableid);	
	        var rowCount = table.rows.length;	        
	        var lopSelected;
	        var count=0;
	        
	        for(var i=0; i<rowCount; i++) {
	            var row = table.rows[i];
	            var chkbox = row.cells[0].getElementsByTagName('input')[0];
	            if(null != chkbox && true == chkbox.checked) {
	            	lopSelected=chkbox.value;
	            	count++;
            	}
	        }
	        if(count>1){
    			alert(ErrorsDict.errSinglePrimaryLOP);
    			return;
    		}else  if(count==0){
    			alert(ErrorsDict.errPrimaryLOP);
    			return;
    	
    		}
			//alert("rowCount::"+rowCount);
	        for(var i=0; i<rowCount; i++) {
	            var row = table.rows[i];
	            var chkbox = row.cells[0].getElementsByTagName('input')[0];
	            if(null != chkbox && true == chkbox.checked) {
	            	
	            	lopSelected=chkbox.value;
	            	// PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes Start
	            	//var lopdesctxt=row.cells[1].childNodes[0];
	            	//var lophrs=row.cells[1].childNodes[2];	            	
	            	//var loptyp=row.cells[1].childNodes[4];	            	
	            	//var lopHier=row.cells[1].childNodes[6];
	            	//var lopgrp=row.cells[1].childNodes[8];
	            	//var rLopCnt=row.cells[1].childNodes[10];
	            	var lopdesctxt=row.cells[1].getElementsByTagName('input')[0];
	            	var lophrs=row.cells[1].getElementsByTagName('input')[1];	            	
	            	var loptyp=row.cells[1].getElementsByTagName('input')[2];	            	
	            	var lopHier=row.cells[1].getElementsByTagName('input')[3];
	            	var lopgrp=row.cells[1].getElementsByTagName('input')[4];
	            	var rLopCnt=row.cells[1].getElementsByTagName('input')[5];
	            	// PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes End
	            	//Added by t9543un ---Start
	            	
				//	alert("lophrs::"+lophrs.value);
				//	alert("loptyp::"+loptyp.value);
				//	alert("lopHier::"+lopHier.value);
				//	alert("lopgrp::"+lopgrp.value);
					//Added by t9543un ---End

	            	var rowCount1 = table1.rows.length;
	            	
	            	for(var k=1; k<rowCount1; k++){
	        		
	            		var enteredrow=table1.rows[k];
	            		//alert("enteredrow..."+enteredrow);
	            		//var enteredlopHier=enteredrow.cells[1].childNodes[5].value;
	            	//	alert("enteredlopHier..."+enteredlopHier);
	            		//var enteredlopgrp=enteredrow.cells[1].childNodes[6].value;
	            		//alert("enteredlopgrp..."+enteredlopgrp);
	            		
	            		if(enteredrow.cells[0].getElementsByTagName('input')[0].value==lopSelected){
	            		
	            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
	            			//alert("submitLOPrequest(), plop:: "+lopSelected+" ,new partrowcount::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            			addFlag="false";
	            			//alert("enteredrow.cells[1].childNodes[2].value..."+enteredrow.cells[1].childNodes[2].value);
	            		}	
	            		
	            	}
	            	rowCount1 = table1.rows.length;
	            	//alert("addFlag Value... "+addFlag);
	            	if(addFlag=="true"){
	            	//alert("after addFlag==true submitLOPrequest");
	            		//alert("addFlag==true, adding the lop on rowCount1::"+rowCount1+" ,plop::"+chkbox.value+" ,partrowcount::"+partrowcount);
	            		//alert("i::"+i);
	            		var row1 = table1.insertRow(rowCount1);
		        		
		        		var cell2 = row1.insertCell(0);
		        	    var element2 = window.opener.document.createElement("input");
		        	    element2.type = "text";
		        	    element2.value=chkbox.value;
		        	    element2.name="lop"+repairTyp;
					    element2.readOnly = "true";
					    element2.size="8";
		        	    element2.style.border="0";
		        	    cell2.appendChild(element2);
		        	            
		        	    var cell3 = row1.insertCell(1);
		        	    var element3 = window.opener.document.createElement("input");
		        	    element3.type = "text";
		        	    element3.value=lopdesctxt.value;
		        	    element3.name="lopdesc"+repairTyp;
						element3.id="lopdesc"+repairTyp;
						element3.size="45";
					    
						element3.readOnly = "true";
						element3.onmouseover = (function (){showTooltip();});
						element3.onmouseout = (function (){hideTooltip();});
		        	    element3.style.border="0";
		        	    cell3.appendChild(element3);
		        	    
		        	    
		        	    var element4 = window.opener.document.createElement("input");
		        	    element4.type = "hidden";
		        	    element4.value=lophrs.value;
		        	    element4.style.border="0";
		        	    element4.name="lophr"+repairTyp;
		        	    cell3.appendChild(element4);
						//alert("lophr"+repairTyp);
		        	   	//alert("lophrs::"+lophrs.value);
						
		        	    var element5 = window.opener.document.createElement("input");
		                element5.type = "hidden";
		                element5.value="p"+partrowcount;
		                element5.name="partlopseq"+repairTyp;
		                element5.style.border="0";
		                cell3.appendChild(element5);
		                
		                var element6 = window.opener.document.createElement("input");
		                element6.type = "hidden";
		                element6.value=i+1;
		                element6.name="lopseq"+repairTyp;
		                element6.style.border="0";
		                cell3.appendChild(element6);
		                
		                var element7 = window.opener.document.createElement("input");
		                element7.type = "hidden";
		                element7.value=loptyp.value;
		                element7.name="lopTyp"+repairTyp;
		                element7.style.border="0";
		                cell3.appendChild(element7);
		                
		                var element8 = window.opener.document.createElement("input");
		                element8.type = "hidden";
		                element8.value=lopHier.value;
		                element8.name="lopHier"+repairTyp;
		                element8.style.border="0";
		                cell3.appendChild(element8);
		                
		                var element9 = window.opener.document.createElement("input");
		                element9.type = "hidden";
		                element9.value=lopgrp.value;
		                element9.name="lopGrp"+repairTyp;
		                element9.style.border="0";
		                cell3.appendChild(element9);
						
						
						var cell4 = row1.insertCell(2);
						var element10 = window.opener.document.createElement("div");  	
						if(repairTyp=='Repair'){
							element10.id="repairTooltip";
						}else{
							element10.id="replaceTooltip";
						}
						element10.style.display = "none";
						element10.style.padding = '5px';
						element10.style.border = '2px solid #333333';
						element10.style.backgroundColor = '#fffedf';
						element10.style.position = 'absolute';
						element10.style.width='170px';
						element10.style.fontSize = '10px';
						cell4.appendChild(element10);
	            
	            	}
	            	
	            }
	
	
	        }
	         //alert("^^^^^^^^^^^^^ ");
	        var newrowcount=table1.rows.length;
	        var count1=0
	        var value=0;
	        //alert("newrowcount "+newrowcount);
	        for(var i=1; i<newrowcount; i++){
	            
	        	var rowindex = table1.rows[i];
				// Modified from parseInt to parseFloat by t9543un - Start
	        	//value=parseInt(rowindex.cells[1].childNodes[1].value);
	        	//count1=parseInt(count1)+value;
				//value=parseFloat(rowindex.cells[1].childNodes[1].value);
	        	value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);//Modified for Calculations fix by t9543un
	        	count1=parseFloat(count1)+value;
				// Modified from parseInt to parseFloat by t9543un - End
				//alert("count1 "+count1);
	        	//alert("value "+value);
	        } 
	        var repairparttable=window.opener.document.getElementById("repairpart");
    		var repairloptable=window.opener.document.getElementById("repairlop");
    		var replaceparttable=window.opener.document.getElementById("replacepart");
    		var replaceloptable=window.opener.document.getElementById("replacelop");

			//alert("$$$$$$$$$$$$$$$$ ");
    		
    		
    		window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
    		window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
    		window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
    		window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
    		var totalRepairCost=0;
    		var totalReplaceCost=0;
			 
	        if(repairTyp=="Repair"){
				//alert("count1 "+count1);
	        	window.opener.document.getElementById("repairlaborhours").value=count1;
	        	var totalrepairlabor=0;
	        	totalrepairlabor=count1*parseFloat(window.opener.document.getElementById("repairlabrhrrate").value);
	        	 window.opener.document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
	        	 totalRepairCost=parseFloat(window.opener.document.getElementById("totalrepairpartscost").value);
	        	 totalRepairCost = totalRepairCost + parseFloat(window.opener.document.getElementById("totalrepairlaborcost").value);
	        	 window.opener.document.getElementById("TotalRepairCost").value=totalRepairCost;
	        	 totalReplaceCost = window.opener.document.getElementById("TotalreplaceCost").value;
	        }else{
	        	window.opener.document.getElementById("replacelaborhours").value=count1;
	        	//alert(window.opener.document.getElementById("replacelaborhours").value);
	        	var totalreplacelabor=0;
	        	totalreplacelabor=count1*parseFloat(window.opener.document.getElementById("replacelabrhrrate").value);
	        	//alert(totalreplacelabor);
	        	window.opener.document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
	        	//alert(window.opener.document.getElementById("totalreplacelaborcost").value);	
	        	totalReplaceCost=parseFloat(window.opener.document.getElementById("totalreplacepartscost").value);
	        	totalReplaceCost = totalReplaceCost + parseFloat(window.opener.document.getElementById("totalreplacelaborcost").value);
	        	window.opener.document.getElementById("TotalreplaceCost").value=totalReplaceCost;
	        	totalRepairCost = window.opener.document.getElementById("TotalRepairCost").value;
	           //alert(window.opener.document.getElementById("TotalreplaceCost").value);
	        }
			
			var repAllowance=0.00;
	        var repAllowancepercent=0.00;
	        if(totalReplaceCost!=0){
	        	repAllowance=totalRepairCost/totalReplaceCost;
	        	repAllowancepercent=repAllowance*100;
	        }
			
		    //alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	        var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
			repairThreshold = parseFloat(window.opener.document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42
			if(repAllowancepercent>=repairThreshold){     // Modified by t9453ss for PMO 472.42
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#00FF00";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#00FF00";	
				
				window.opener.document.getElementById("allowance").value=NamesDict.replaceMsg;
	        }else{
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#FF3300";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#FF3300";
				window.opener.document.getElementById("allowance").value=NamesDict.repairMsg;
	
					}
				 window.opener.document.getElementById("toActivateTooltip").click();	 
	        }catch(e) {
	            alert(e);
	        }
	        
	        if(count==1){
			
			//var url="/service/writeup/dipap/DIPAPServlet?pwtSheet=Replace&lopType=related&vinNum="+vinValue;
	        if (rLopCnt.value > 0){
				var url="/service/writeup/dipap/DIPAPServlet?pwtSheet="+repairTyp+"&repairType="+repairTyp+"&lopType=related&lopSelected="+lopSelected+"&PwtWorksheet=getLOP";
				win = window.open(url,"LOPPOPUP","width=750,height=500,top=200,left=300, resizable=yes, scrollbars=yes,status=1");
	        } else {
					window.close();
	        }	
			/*Changes done by T9421HF to make all popup above the screen
			if(window.showModalDialog){
				win = window.showModalDialog(url,"LOPPOPUP","width=700,height=700,top=200,left=300");
			}else{
				win = window.open(url,"LOPPOPUP","width=700,height=700,top=200,left=300");
			}
			//Changes Ends by T9421HF*/
		}
	
	
	}
	function closePLOP(){
		window.close();
	}

	//End Primary lop
	//Start Related lop
	
	
	
	
	function submitrelatedloprequest(x,rloptableid,repairTyp){
		
		try {
			//alert("Inside submitrelatedloprequest()");
			var Prttable;
			//for lop table in main parent page
			var addFlag="true";
			var lopSelected;
			var table1;
			var partLopSeq="";
			
			if(repairTyp=="Repair"){
				table1 = x.parent.window.opener.document.getElementById("repairlop");
			}else{
				table1 = x.parent.window.opener.document.getElementById("replacelop");
			}
				//end: for lop table in main parent page
			var partrowcount;
			 if(repairTyp=="Repair"){
    	    	partrowcount=window.opener.document.getElementById("repairpart").rows.length;
    	    	
    	    }else{
    	    	partrowcount=window.opener.document.getElementById("replacepart").rows.length;
    	    	
    	    }
			 
			 if(repairTyp=="Repair"){
				 Prttable=window.opener.document.getElementById("repairpart");
     	    	
     	    }else{
     	    	Prttable=window.opener.document.getElementById("replacepart");
     	    	
     	    }
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
			 if(partrowcount<10){
				 partrowcount="0"+partrowcount;
				 //alert("Related Lop submitrelatedloprequest(), partrowcount<10 so new partrowcount is::"+partrowcount);
			 }
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
			var table = document.getElementById(rloptableid);
			var rowCount = table.rows.length;
	        var count=0;
			     
	        for(var i=0; i<rowCount; i++) {
	        	partLopSeq="";
	        	addFlag="true";
	            var row = table.rows[i];
	            var chkbox = row.cells[0].getElementsByTagName('input')[0];
	          
	            if(null != chkbox && true == chkbox.checked) {
	            	count++;
	    		// PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes Start
	            /*	var lopdesctxt=row.cells[1].childNodes[0];
	            	var lophrs=row.cells[1].childNodes[2];	            	
	            	var loptyp=row.cells[1].childNodes[4];	            	
	            	var lopHier=row.cells[1].childNodes[6];
	            	var lopgrp=row.cells[1].childNodes[8];*/
	            	var lopdesctxt=row.cells[1].getElementsByTagName('input')[0];
	            	var lophrs=row.cells[1].getElementsByTagName('input')[1];	            	
	            	var loptyp=row.cells[1].getElementsByTagName('input')[2];	            	
	            	var lopHier=row.cells[1].getElementsByTagName('input')[3];
	            	var lopgrp=row.cells[1].getElementsByTagName('input')[4];
	             // PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes End      	
	
	            	lopSelected=chkbox.value;
	            	var rowCount1 = table1.rows.length;
					//alert("lopSelected..."+lopSelected)
	            	for(var k=1; k<rowCount1; k++){
		            	var enteredrow=table1.rows[k];
						// Added by t9543un for LOP group hierarchy logic -- Start
		            	var enteredlopHier=enteredrow.cells[1].getElementsByTagName('input')[5].value;
		            	var enteredlopgrp=enteredrow.cells[1].getElementsByTagName('input')[6].value;
		            	var enteredlopTyp=enteredrow.cells[1].getElementsByTagName('input')[4].value;
		            	
		            	var enteredlopHrs=enteredrow.cells[1].getElementsByTagName('input')[1].value;
		            	var enteredlopDesc=enteredrow.cells[1].getElementsByTagName('input')[0].value;
		            	
	            		if(enteredrow.cells[0].getElementsByTagName('input')[0].value==lopSelected){
	            		
	            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
	            			addFlag="false";
	            			//alert("submitrelatedloprequest(), aleardy exist related lop::"+lopSelected+" ,partrowcount::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            		}	
	            		if(lopHier.value != null && lopHier.value != '' && enteredlopHier!=null && enteredlopHier!='' )
            			{ 
	            			
			            		if(trim(enteredlopTyp)=='R' && trim(loptyp.value)=='R'){
			            			  var lopHierVal=trim(lopHier.value);
			            			  var enteredlopHierVal=trim(enteredlopHier);
					            	if(lopHierVal==enteredlopHierVal){
					            			 
					            		var enteredlopgrpVal=trim(enteredlopgrp);
					            		var lopgrpVal=trim(lopgrp.value);
					            		var entLopPre= (lopHierVal).indexOf(enteredlopgrpVal);
				            			var LopPre=(lopHierVal).indexOf(lopgrpVal);
				            			//alert("submitrelatedloprequest(), lopHierVal:: "+lopHierVal+" ::entLopPre:: "+entLopPre+" ::LopPre:: "+LopPre);
				            			if(entLopPre!=-1 && LopPre!=-1 ){
				            				
				            				if(parseInt(entLopPre)<parseInt(LopPre)){
				            				//Changing part sequence...
					            			
					            			//alert("submitrelatedloprequest(), New Lop is of lower group so updating Prttable...partrowcount:: "+partrowcount.toString());
					            			if(trim(Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value)==''){
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value=lopSelected;
						            			
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[5].value=lopgrp.value;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[6].value=lopHierVal;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[7].value=lophrs.value;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[8].value=lopdesctxt.value;
						            			//alert("--lopdesctxt.value--   "+lopdesctxt.value);
						            			//alert("rellop,...."+Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value);
					            			}
					            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();					            			
					            			addFlag="false";
					            			//alert("submitrelatedloprequest(), new partrowcount:: "+enteredrow.cells[1].getElementsByTagName('input')[2].value);
					            				
					            		}else if(parseInt(entLopPre)>parseInt(LopPre)){
					            			
					            			var existingpartLOPSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value;
					            			existingpartLOPSeq=trim(existingpartLOPSeq.substring(1));
					            			//alert("HERE...");
					            			//alert("submitrelatedloprequest(), existingpartLOPSeq.."+existingpartLOPSeq);
					            			//alert("submitrelatedloprequest(), existingpartLOPSeq.length/2::"+existingpartLOPSeq.length/2);
					            			// Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - Start
					            			//for(var el=1;el<=existingpartLOPSeq.length;el++){
					            			for(var n1=1;n1<=(existingpartLOPSeq.length/2);n1++){	
					            				var index=0;
					            				//if(el==existingpartLOPSeq.length){
					            				if(n1==existingpartLOPSeq.length/2){
					            					//alert("In if");
					            					//alert("existingpartLOPSeq.substring((n1*2)-2)::"+existingpartLOPSeq.substring((n1*2)-2));
					            					//index=parseInt(existingpartLOPSeq.substring(el-1));
					            					index=parseInt(existingpartLOPSeq.substring((n1*2)-2),10);
					            					//alert("submitrelatedloprequest(), index in if..."+index);
					            				}else{
					            					//alert("in Else");
					            					//alert("existingpartLOPSeq.substring((n1*2)-2,(n1*2))::"+existingpartLOPSeq.substring((n1*2)-2,(n1*2)));
					            					//index=parseInt(existingpartLOPSeq.substring(el-1,el));
					            					index=parseInt(existingpartLOPSeq.substring((n1*2)-2,(n1*2)),10);
					            					//alert("submitrelatedloprequest(), index in else..."+index);
					            				}
					            				//alert("submitrelatedloprequest(), index outside:: "+index);
					            				// Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - End
					            				if(trim(Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value)==''){
						            				Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value=enteredrow.cells[0].getElementsByTagName('input')[0].value;
							            			//alert("Entered lop at index-1::"+enteredrow.cells[0].getElementsByTagName('input')[0].value);
							            			//alert("Entered lop group at index-1::"+enteredlopgrpVal);
							            			//alert("Entered lop hier at index-1::"+lopHierVal);
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[5].value=enteredlopgrpVal;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[6].value=lopHierVal;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[7].value=enteredlopHrs;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[8].value=enteredlopDesc;
					            				}
					            			}
					            			//alert("rlop in part..."+Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value);
					            			//alert("beofre partLopSeq...");
					            			//alert("partrowcount::"+partrowcount);
					            			//alert("before partLopSeq::"+partLopSeq);
					            			partLopSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
					            			//alert("after partLopSeq::"+partLopSeq);
					            		//	alert("partLopSeq..."+partLopSeq);
					            			//alert("k..."+k);
					            			table1.deleteRow(k);
					            			rowCount1--;
				            				k--;					            				
					            			//alert("addFlag..."+addFlag)	;					            				
					            		}
				            			}
					            	}
			            		}
			            	
            			}
					// Added by t9543un for LOP group hierarchy logic - End 
	            	}
	            	rowCount1 = table1.rows.length;
		            if(addFlag=="true"){
		            	//alert("submitrelatedloprequest(),Inside addFlag true, partLopSeq:: "+partLopSeq+" :partrowcount:: "+partrowcount);
		            	//alert("Adding lop::"+chkbox.value)
		            	var row1 = table1.insertRow(rowCount1);
		        		
		        		var cell2 = row1.insertCell(0);
		        	    var element2 = x.parent.window.opener.document.createElement("input");
		        	    element2.type = "text";
		        	    element2.value=chkbox.value;
		        	    element2.name="lop"+repairTyp;
		        	    element2.size="8";
		        	    element2.style.border="0";
		        	    cell2.appendChild(element2);
		        	            
		        	    var cell3 = row1.insertCell(1);
		        	    var element3 = x.parent.window.opener.document.createElement("input");
		        	    element3.type = "text";
		        	    element3.value=lopdesctxt.value;
		        	    element3.name="lopdesc"+repairTyp;
						element3.id="lopdesc"+repairTyp;
						element3.size="45";
		    
						element3.style.border="0";

					    cell3.appendChild(element3);

						
		        	    
		        	    var element4 = x.parent.window.opener.document.createElement("input");
		        	    element4.type = "hidden";
		        	    element4.value=lophrs.value;
		        	    element4.style.border="0";
		        	    element4.name="lophr"+repairTyp;
		        	    cell3.appendChild(element4);
		        	    if(repairTyp=="Repair"){
		        	    	partrowcount=x.parent.window.opener.document.getElementById("repairpart").rows.length;
		        	    }else{
		        	    	partrowcount=x.parent.window.opener.document.getElementById("replacepart").rows.length;
		        	    }
		        	    // Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
			   			if(partrowcount<10){
			   				partrowcount="0"+partrowcount;
						}
			   			//alert("submitrelatedloprequest(), partrowcount of new added lop::"+partrowcount);
						// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
		        	    var element5 = x.parent.window.opener.document.createElement("input");
		                element5.type = "hidden";
		                if(partLopSeq==""){
		                	element5.value="p"+partrowcount;
		                }else{
		                	element5.value=partLopSeq;
		                }
		                //alert("submitrelatedloprequest(), partLopSeq:: "+partLopSeq);
		                //alert("submitrelatedloprequest(), element5.value:: "+element5.value);
		                element5.name="partlopseq"+repairTyp;
		                element5.style.border="0";
		                cell3.appendChild(element5);
		                
		                var element6 = x.parent.window.opener.document.createElement("input");
		                element6.type = "hidden";
		                element6.value=i+1;
		                element6.name="lopseq"+repairTyp;
		                element6.style.border="0";
		                cell3.appendChild(element6);
		
		                var element7 = x.parent.window.opener.document.createElement("input");
			            element7.type = "hidden";
			            element7.value=loptyp.value;
			            element7.name="lopTyp"+repairTyp;
			            element7.style.border="0";
			            cell3.appendChild(element7);
			            
			            var element8 = x.parent.window.opener.document.createElement("input");
		                element8.type = "hidden";
		                element8.value=lopHier.value;
		                element8.name="lopHier"+repairTyp;
		                element8.style.border="0";
		                cell3.appendChild(element8);
		                
		                var element9 = x.parent.window.opener.document.createElement("input");
		                element9.type = "hidden";
		                element9.value=lopgrp.value;
		                element9.name="lopGrp"+repairTyp;
		                element9.style.border="0";
		                cell3.appendChild(element9);

						
				
				/*		
				var cell4 = row1.insertCell(2);
						var element10 = x.parent.window.opener.document.createElement("div");  	
						if(repairTyp=='Repair'){
							element10.id="repairTooltip";
						}else{
							element10.id="replaceTooltip";
						}
						element10.style.border = '2px solid #333333';
						element10.style.backgroundColor = '#fffedf';
						element10.style.position = 'absolute';
						element10.style.width='170px';
						element10.style.fontSize = '10px';
					//	element10.setAttribute('style','font-size:small');
		        	    cell4.appendChild(element10);*/
					
		        	//    var element10 = row1.insertCell(1);
					var cell4 = row1.insertCell(2);
					var element10 = x.parent.window.opener.document.createElement("div");  	
						if(repairTyp=='Repair'){
							element10.id="repairTooltip";
						}else{
							element10.id="replaceTooltip";
						}
						element10.style.padding = '5px';
						element10.style.display = 'none';
						element10.style.border = '2px solid #333333';
						element10.style.backgroundColor = '#fffedf';
						element10.style.position = 'absolute';
						element10.style.width='170px';
						element10.style.fontSize = '10px';
						cell4.appendChild(element10);
		        	    
		            }
	            
	        }
	        }
	        var newrowcount=table1.rows.length;
	        var count1=0
	        var value=0;
	        //alert("newrowcount "+newrowcount);
	        for(var i=1; i<newrowcount; i++){
	            
	        	var rowindex = table1.rows[i];
	        	//alert("rowindex... "+rowindex);
	        	//alert(rowindex.cells[1].childNodes[1].value);
				// Modified from parseInt to parseFloat by t9543un - Start
	        	//value=parseInt(rowindex.cells[1].childNodes[1].value);
				value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);				
	        	//alert("value... "+value);
	        	//count1=parseInt(count1)+value;
				count1=parseFloat(count1)+value; 
				//alert("count1..."+count1);
				// Modified from parseInt to parseFloat by t9543un - End	        	
	        } 
	        var repairparttable=x.parent.window.opener.document.getElementById("repairpart");
    		var repairloptable=x.parent.window.opener.document.getElementById("repairlop");
    		var replaceparttable=x.parent.window.opener.document.getElementById("replacepart");
    		var replaceloptable=x.parent.window.opener.document.getElementById("replacelop");
    		
    		
    		x.parent.window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
    		x.parent.window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
    		x.parent.window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
    		x.parent.window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
    		var totalRepairCost=0;
    		var totalReplaceCost=0;
			//alert("repairTyp::"+repairTyp);
	        if(repairTyp=="Repair"){
	        	
	        	x.parent.window.opener.document.getElementById("repairlaborhours").value=count1;
	        	// alert(document.getElementById("repairlaborhours").value);
	        	var totalrepairlabor=0;
	        	totalrepairlabor=count1*parseFloat(x.parent.window.opener.document.getElementById("repairlabrhrrate").value);
	        	 //alert(totalrepairlabor);
	        	x.parent.window.opener.document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
	        	 //alert(document.getElementById("totalrepairlaborcost").value);
	        	 
	        	totalRepairCost=parseFloat(x.parent.window.opener.document.getElementById("totalrepairpartscost").value)+parseInt(x.parent.window.opener.document.getElementById("totalrepairlaborcost").value);
	        	// alert(totalRepairCost);
	            x.parent.window.opener.document.getElementById("TotalRepairCost").value=totalRepairCost;
	            totalReplaceCost = x.parent.window.opener.document.getElementById("TotalreplaceCost").value;
	          //  alert(document.getElementById("TotalRepairCost").value);
	            	
	        }else{
	            	
	        	x.parent.window.opener.document.getElementById("replacelaborhours").value=count1;
	        	//alert(document.getElementById("replacelaborhours").value);
	        	var totalreplacelabor=0;
	        	totalreplacelabor=count1*parseFloat(x.parent.window.opener.document.getElementById("replacelabrhrrate").value);
	        	//alert(totalreplacelabor);
	        	x.parent.window.opener.document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
	        	//alert(x.parent.window.opener.document.getElementById("totalreplacelaborcost").value);
	        	
	        
	        	totalReplaceCost=parseFloat(x.parent.window.opener.document.getElementById("totalreplacepartscost").value)+parseInt(x.parent.window.opener.document.getElementById("totalreplacelaborcost").value);
	        	x.parent.window.opener.document.getElementById("TotalreplaceCost").value=totalReplaceCost;
	        	totalRepairCost = x.parent.window.opener.document.getElementById("TotalRepairCost").value;
	           // alert(document.getElementById("TotalreplaceCost").value);
	        	
	        }
	        //alert("Before calculateWorksheetAllowance");
	        //calculateWorksheetAllowance(totalRepairCost, totalReplaceCost);
	        //alert("After calculateWorksheetAllowance");
	       
			
			var repAllowance=0.00;
	        var repAllowancepercent=0.00;
	        if(totalReplaceCost!=0){
	        
	        	repAllowance=totalRepairCost/totalReplaceCost;
	        	repAllowancepercent=repAllowance*100;
				//alert("totalRepairCost:"+x.parent.window.opener.document.getElementById("TotalRepairCost").value+ "::totalReplaceCost"+x.parent.window.opener.document.getElementById("TotalRepairCost").value+":: Allowance ::"+ repAllowancepercent);
	        	
	        }
		    //alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	        //alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);
			var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
			repairThreshold = parseFloat(x.parent.window.opener.document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42
	        if(repAllowancepercent>=repairThreshold){	   // Modified by t9453ss for PMO 472.42
				
	        	x.parent.window.opener.document.getElementById("allowance").style.backgroundColor="#00FF00";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				x.parent.window.opener.document.getElementById("textcolor").value="#00FF00";
				x.opener.document.getElementById("allowance").value=NamesDict.replaceMsg;
	        }else{
	        	x.parent.window.opener.document.getElementById("allowance").style.backgroundColor="#FF3300";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				x.parent.window.opener.document.getElementById("textcolor").value="#FF3300";
				x.opener.document.getElementById("allowance").value=NamesDict.repairMsg;
	      
						
				}
				//alert(x.opener.document.getElementById("allowance").value);
				x.parent.window.opener.document.getElementById("toActivateTooltip").click();
	        }catch(e) {
	          //  alert(e);
	        }
		if(count==0){
	
			alert(ErrorsDict.errRelatedLOP);
			return;
	
		}else{
		//	window.opener.getElementById("toActivateTooltip").click();
			window.close();	
		}
			


		//x.parent.window.opener.document.getElementById("part").value="";
	
	    //x.parent.window.opener.document.getElementById("desc").value="";
	    //x.parent.window.opener.document.getElementById("qty").value="";
		
	
	}

	
	function closeRLOP(){
		
		window.close();
		
	}
	//End Related lop
	//Start NPN Part jsp
	
	
	/*
	function addNPNRepairList()
	{
		if(validateNPNData())
		{
		
			var table = window.opener.document.getElementById("repairpart");
			var rowCount = table.rows.length;
	        var row = table.insertRow(rowCount);
	        //row.id="repairRow";
	 
	        var cell1 = row.insertCell(0);
	        var element1 = window.opener.document.createElement("input");
	        element1.type = "checkbox";
	        //element1.id="part1"
	        
	        cell1.appendChild(element1);
	            
	        var cell2 = row.insertCell(1);
	        var element2 = window.opener.document.createElement("input");
	        element2.type = "text";
	        //element2.id="partnum1"
	         element2.value=window.opener.document.getElementById("partNumber").value;
	        element2.style.border="0";
	        cell2.appendChild(element2);
	            
	        var cell3 = row.insertCell(2);
	        var element3 = window.opener.document.createElement("input");
	        element3.type = "text";
	        //element3.id="partdesc1";
	        element3.value=window.opener.document.getElementById("partDescritpion").value;
	        element3.style.border="0";
	        cell3.appendChild(element3);
	            
	        var cell4 = row.insertCell(3);
	        var element4 = window.opener.document.createElement("input");
	        element4.type = "text";
	        //element4.id="qty1";
	         element4.value=window.opener.document.getElementById("partQuantity").value;
	        element4.style.border="0";
	        cell4.appendChild(element4);
		
	        calculateWorksheetAllowance();

			
			var repairparttable=window.opener.document.getElementById("repairpart");
			var repairloptable=window.opener.document.getElementById("repairlop");
			var replaceparttable=window.opener.document.getElementById("replacepart");
			var replaceloptable=window.opener.document.getElementById("replacelop");
			
			alert("Before NPN add : " + window.opener.document.getElementById("repairpartcount").value);
			alert("After NPN add : " + repairparttable.rows.length);

			window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
			window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
			window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
			window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
	        
	        window.close();
		
			
		}
		
	}
	*/
	function addNPNRepairList()
	 {
		 if(validateNPNData())
		 {
		 	window.opener.document.getElementById("npnPartDesc").value= document.getElementById("partDescritpion").value;
			window.opener.document.getElementById("npnPartQty").value = document.getElementById("partQuantity").value;
			window.opener.document.getElementById("npnPartAmt").value = document.getElementById("partCost").value;;

		    window.opener.document.getElementById("addNPNRepairList").click(); 
			window.close();
		 }
	}

	function addNPNToReplaceList(){
		var table = document.getElementById("replacepart");
		var rowCount = table.rows.length;
		var enteredPart="NPN0000000";
	    for(var i=1;i<rowCount;i++){
	
	    	var row1=table.rows[i];
	    	
	    	var existingPart=row1.cells[1].getElementsByTagName('input')[0].value;
	    		    	
	    	if(existingPart==enteredPart){
	    		alert(ErrorsDict.dupPart);
	    		return;
	    		
	    	}
	    }
	    	    	
	    var row = table.insertRow(rowCount);
	    var cell1 = row.insertCell(0);
	    var element1 = document.createElement("input");
	    element1.type = "checkbox";
	    element1.name="replacepart";
		element1.id="replacepartcheckbox"+rowCount;
		element1.onclick=function(){ 
			//var e =document.getElementById("replaceqty"+rowCount);
			var e=row.cells[3].getElementsByTagName('input')[0];
			
			if(e.readOnly){
				e.removeAttribute("readOnly","true");
				e.className= "";
				e.removeAttribute('style');
			}else{
			    e.setAttribute("readOnly","true"); 
				e.className= "readonlyField";
				e.style.border="0";
			}
		} 
		/*element1.onclick=function(){ 
										var e =document.getElementById("replaceqty"+rowCount);
										if(e.readOnly){
											e.removeAttribute("readonly","true");
											e.removeAttribute('style');
										}else{
										    e.setAttribute("readOnly","true"); 
											e.style.border="0";
										}
									}*/
	    cell1.appendChild(element1);
	        
	    var cell2 = row.insertCell(1);
	    var element2 = document.createElement("input");
	    element2.type = "text";
	    element2.name="replacepartnum"
		element2.id="replacepartnum"+rowCount;
	    element2.value="NPN0000000";
	    element2.style.border="0";
	    element2.size="12";
	    element2.readOnly = "true";
	    cell2.appendChild(element2);
	        
	    var cell3 = row.insertCell(2);
	    var element3 = document.createElement("input");
	    element3.type = "text";
	    element3.name="replacepartdesc"
		//element3.id="replacepartdesc"+rowCount;
		element3.id="replacepartdesc";
	    element3.size="50";
	    element3.value=document.getElementById("npnPartDesc").value;
	    element3.style.border="0";
		element3.onmouseover = (function (){showTooltip();});
		element3.onmouseout = (function (){hideTooltip();});
	    element3.readOnly = "true";
	    cell3.appendChild(element3);

		var element10 = document.createElement("div");  	
		
		element10.id="replacePartTooltip";
		element10.style.padding = '5px';
		element10.style.display = "none"; 
		element10.style.border = '2px solid #333333';
		element10.style.backgroundColor = '#fffedf';
		element10.style.position = 'absolute';
		element10.style.width='170px';
		element10.style.fontSize = '10px';
		cell3.appendChild(element10);	
	        
	    var cell4 = row.insertCell(3);
	    var element4 = document.createElement("input");
	    element4.type = "text";
	    element4.name="replaceqty"
		element4.id="replaceqty"+rowCount;
	    element4.value=document.getElementById("npnPartQty").value;
	    element4.style.border="0";
	    element4.readOnly = "true";
	    element4.size="2";
	    //Changes by t9543un - Start
	    element4.className = "readonlyField";
		element4.onkeypress=(function(){
										if(element4.className != "readonlyField"){
											
											var keyValue = (this.which) ? this.which : event.keyCode
											if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
											{
												alert(ErrorsDict.numericMsg);
											  return false;
											}else{
												
												return true;
											}
										}			
							});
		//Added for Calculations fix when part qty is modified by t9543un -- Start 
		element4.onchange=(function(){
									calulateRepairAmount();
									calulateReplaceAmount();
									calculateAllowance();
						});
		//Added for Calculations fix when part qty is modified by t9543un -- end
		//Changes by t9543un - End
	    element4.maxlength = "2";
	    cell4.appendChild(element4);
	    
	    
	    var element5 = document.createElement("input");
	    element5.type = "hidden";
	    element5.value=document.getElementById("npnPartAmt").value;
		//element5.value="2.00";
	    element5.name="replacedlrnet"
	    element5.style.border="0";
	    cell4.appendChild(element5);
	    
	    
	    var element6 = document.createElement("input");
	    element6.type = "hidden";
	    element6.value=parseInt( element5.value)*parseInt( element4.value);
	    element6.name="partscostX";
	    element6.style.border="0";
	    cell4.appendChild(element6);
	    var PartSeq=rowCount;//Added by Umesh For Correcting the Part Seq number
	    rowCount = table.rows.length;
	   //Added by Umesh For Correcting the Part Seq number - Start
	      if(rowCount >= 3){
	   // alert("Before count "+parseInt(table.rows[rowCount-3].cells[3].childNodes[3].value));
	    	//alert("part-- "+table.rows[rowCount-2].cells[1].childNodes[0].value);
	    PartSeq = parseInt(table.rows[rowCount-2].cells[3].getElementsByTagName('input')[3].value);
	    //alert("value "+PartSeq);
	   // if (PartSeq == NaN) PartSeq = rowCount;
	   // alert("value +1 --"+(PartSeq+1));
	    }
	      //Added by Umesh For Correcting the Part Seq number - End
	    var element7 = document.createElement("input");
	    element7.type = "hidden";
	    element7.value=PartSeq+1;
	    element7.name="replacepartseq"
	    element7.style.border="0";
	    cell4.appendChild(element7);
		
		// Added for LOP grp hier requirement -- by T0984NG - Start
		var element8 = document.createElement("input");    
		element8.type = "hidden";
		element8.value="";
		element8.name="replaceRelLOP";
		element8.id="replaceRelLOP";
		cell4.appendChild(element8);


		var element9 = document.createElement("input");
		element9.type = "hidden";
		element9.value="";
		element9.name="replaceRelLOPGrp";
		element9.id="replaceRelLOPGrp";
		cell4.appendChild(element9);


		var element10 = document.createElement("input");
		element10.type = "hidden";
		element10.value="";
		element10.name="replaceRelLOPGrpHier";
		element10.id="replaceRelLOPGrpHier";
		cell4.appendChild(element10);


		var element11 = document.createElement("input");
		element11.type = "hidden";
		element11.value="";
		element11.name="replaceRelLOPHrs";
		element11.id="replaceRelLOPHrs";
		cell4.appendChild(element11);	


		var element12 = document.createElement("input");
		element12.type = "hidden";
		element12.value="";
		element12.name="replaceRelLOPDesc";
		element12.id="replaceRelLOPDesc";
		cell4.appendChild(element12);
		// Added for LOP grp hier requirement -- by T0984NG - End
		 
	    //Calculations for total repair cost
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
	    	var rowindex = table.rows[i];
	    	//value=parseInt(rowindex.cells[3].childNodes[2].value);
	    	value=parseFloat(rowindex.cells[3].getElementsByTagName('input')[2].value);//Modified for calculations fix
	    	count=count+value;
	    	
	    } 	

	  document.getElementById("replacepartscost").value=count;
	    //alert("Markup%: "+document.getElementById("repairmkuprate").value);
		
	   var totalrepaircost=count*(1+((parseFloat(document.getElementById("replacemkuprate").value))/100));
	   document.getElementById("totalreplacepartscost").value=totalrepaircost;

		var totalReplaceCost=0;
		var totalreplacelabor=0;
		if(document.getElementById("replacelaborhours").value != null){
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			// Commented the line and change the replacelaborhours to totalreplacelaborcost
			//totalreplacelabor=parseFloat(document.getElementById("replacelaborhours").value);
			totalreplacelabor=parseFloat(document.getElementById("totalreplacelaborcost").value);
			//alert("replacelaborhours!=null ::"+totalreplacelabor);
		}
		//alert("totalreplacelabor::"+totalreplacelabor);

		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}


		totalReplaceCost=parseFloat(document.getElementById("totalreplacepartscost").value)+totalreplacelabor + rentalAmt;

		//alert(totalReplaceCost+"="+document.getElementById("totalreplacepartscost").value+"+"+totalreplacelabor);
		document.getElementById("TotalreplaceCost").value=totalReplaceCost;
		calculateAllowance();

	}

	function addNPNToRepairList(){

		var table = document.getElementById("repairpart");
		var rowCount = table.rows.length;
		var enteredPart = "NPN0000000";	
	    for(var i=1;i<rowCount;i++){
	
	    	var row1=table.rows[i];
	    	
	    	var existingPart=row1.cells[1].getElementsByTagName('input')[0].value;
	    	
	    	if(existingPart==enteredPart){
	    		alert(ErrorsDict.dupPart);
	    		return;
	    		
	    	}
	    }
		
	    var row = table.insertRow(rowCount);
	    var cell1 = row.insertCell(0);
	    var element1 = document.createElement("input");
	    element1.type = "checkbox";
	    element1.name="repairpart"
		element1.id="repairpartcheckbox"+rowCount;
		element1.onclick=function(){ 
										//var e =document.getElementById("repairqty"+rowCount);
			                            // alert('RepairList');
										var e=row.cells[3].getElementsByTagName('input')[0];
			
										if(e.readOnly){
											e.removeAttribute("readOnly","true");
											//Changes by Ankur Nayak [T8576AN] - Start
											e.className= "";
											//Changes by Ankur Nayak [T8576AN] - End											
											e.removeAttribute('style');
										}else{
										    e.setAttribute("readOnly","true"); 
											//Changes by Ankur Nayak [T8576AN] - Start
											e.className= "readonlyField";
											//Changes by Ankur Nayak [T8576AN] - End
											e.style.border="0";
										}
									} 
	    cell1.appendChild(element1);

	    //alert("id is:"+document.getElementById("repairpartcheckbox"+rowCount).id);    

	    var cell2 = row.insertCell(1);
	    var element2 = document.createElement("input");
	    element2.type = "text";
	    element2.name="repairpartnum"
	    element2.value="NPN0000000";
	    element2.style.border="0";
	    element2.size="12";
	    element2.readOnly = "true";
		element2.id="repairpartnum"+rowCount;
	    cell2.appendChild(element2);
	        
	    var cell3 = row.insertCell(2);
	    var element3 = document.createElement("input");
	    element3.type = "text";
	    element3.name="repairpartdesc";
	    element3.size="50";
	    element3.value=document.getElementById("npnPartDesc").value;
		//element3.id="repairpartdesc"+rowCount;
		element3.id="repairpartdesc";
		element3.onmouseover = (function (){showTooltip();});
		element3.onmouseout = (function (){hideTooltip();});
	    element3.style.border="0";
	    element3.readOnly = "true";
	    cell3.appendChild(element3);
	   
	
		var element10 = document.createElement("div");  	
		
		element10.id="repairPartTooltip";
		
		element10.style.display = "none"; 
		element10.style.border = '2px solid #333333';
		element10.style.backgroundColor = '#fffedf';
		element10.style.position = 'absolute';
		element10.style.width='170px';
		element10.style.fontSize = '10px';
		element10.style.padding = '5px';
		cell3.appendChild(element10);	


	    var cell4 = row.insertCell(3);
	    var element4 = document.createElement("input");
	    element4.type = "text";
	    element4.name="repairqty";
	    element4.maxlength = "2";
		element4.id="repairqty"+rowCount;
		element4.size="2";
	    element4.value=document.getElementById("npnPartQty").value;
	    element4.style.border="0";
	    element4.readOnly = "true";
		//Changes by Ankur Nayak [T8576AN] - Start
		/*
		element4.onkeypress=(function(){
										var keyValue = (this.which) ? this.which : event.keyCode
								        if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
						                {
									        alert("Please Enter valid numeric value");
						                  return;
								        }else{
									        return true;
								        }
			
							});
		*/
		element4.className = "readonlyField";
		element4.onkeypress=(function(){
										if(element4.className != "readonlyField"){
											
											var keyValue = (this.which) ? this.which : event.keyCode
											if (keyValue >31 &&(keyValue < 48 || keyValue > 57))
											{
												alert(ErrorsDict.numericMsg);
											  return false;
											}else{
												return true;
											}
										}			
							});
		//Changes by Ankur Nayak [T8576AN] - End
		//Added for Calculations fix when part qty is modified by t9543un -- Start 
		element4.onchange=(function(){
									
									calulateRepairAmount();
									calulateReplaceAmount();
									calculateAllowance();
						});
		//Added for Calculations fix when part qty is modified by t9543un -- end
		
	    cell4.appendChild(element4);
	    
	  
	    var element5 = document.createElement("input");
	    element5.type = "hidden";
	    element5.value=document.getElementById("npnPartAmt").value;
	    //element5.value=4.00;
	    element5.name="repairdlrnet";
	    element5.style.border="0";
	    cell4.appendChild(element5);
	    
	    
	    var element6 = document.createElement("input");
	    element6.type = "hidden";
	    element6.value=parseInt( element5.value)*parseFloat( element4.value);
	    element6.name="partscostR";
	    element6.style.border="0";
	    cell4.appendChild(element6);
	    
	   // alert("element6.value "+element6.value);
	    
	    var PartSeq=rowCount;//Added by Umesh For Correcting the Part Seq number
	    rowCount = table.rows.length;
	   //Added by Umesh For Correcting the Part Seq number - Start
	      if(rowCount >= 3){
	   // alert("Before count "+parseInt(table.rows[rowCount-3].cells[3].childNodes[3].value));
	    	//alert("part-- "+table.rows[rowCount-2].cells[1].childNodes[0].value);
	    PartSeq = parseInt(table.rows[rowCount-2].cells[3].getElementsByTagName('input')[3].value);
	    //alert("value "+PartSeq);
	   // if (PartSeq == NaN) PartSeq = rowCount;
	   // alert("value +1 --"+(PartSeq+1));
	    }
	      //Added by Umesh For Correcting the Part Seq number - End
	      
	    var element7 = document.createElement("input");
	    element7.type = "hidden";
	    element7.value=PartSeq+1;
	    element7.name="repairpartseq";
	    element7.style.border="0";
	    cell4.appendChild(element7);
		
		// Added for LOP grp hier requirement -- by T0984NG - Start
		var element8 = document.createElement("input");
		element8.type = "hidden";
		element8.value="";
		element8.name="repairRelLOP";
		element8.id="repairRelLOP";
		cell4.appendChild(element8);


		var element9 = document.createElement("input");
		element9.type = "hidden";
		element9.value="";
		element9.name="repairRelLOPGrp";
		element9.id="repairRelLOPGrp";
		cell4.appendChild(element9);


		var element10 = document.createElement("input");
		element10.type = "hidden";
		element10.value="";
		element10.name="repairRelLOPGrpHier";
		element10.id="repairRelLOPGrpHier";
		cell4.appendChild(element10);


		var element11 = document.createElement("input");
		element11.type = "hidden";
		element11.value="";
		element11.name="repairRelLOPHrs";
		element11.id="repairRelLOPHrs";
		cell4.appendChild(element11);
			
		var element12 = document.createElement("input");
		element12.type = "hidden";
		element12.value="";
		element12.name="repairRelLOPDesc";
		element12.id="repairRelLOPDesc";
		cell4.appendChild(element12);
		// Added for LOP grp hier requirement -- by T0984NG - End

	    //Calculations for total repair cost
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
		   	var rowindex = table.rows[i];
		   	//value=parseFloat(rowindex.cells[3].childNodes[2].value);
		   	value=parseFloat(rowindex.cells[3].getElementsByTagName('input')[2].value); // Modified for calculations fix
	    	count=count+value;
	   } 

	    document.getElementById("repairpartscost").value=count;
	    //alert("Markup%: "+document.getElementById("repairmkuprate").value);
		
	   var totalrepaircost=count*(1+((parseFloat(document.getElementById("repairmkuprate").value))/100));
	   document.getElementById("totalrepairpartscost").value=totalrepaircost;

	    var totalRepairCost=0;
		var totalrepairlabor=0;
		if(document.getElementById("totalrepairlaborcost").value != null){
			totalrepairlabor=parseFloat(document.getElementById("totalrepairlaborcost").value);
		}

		
		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}

		totalRepairCost=parseFloat(document.getElementById("totalrepairpartscost").value)+totalrepairlabor+rentalAmt;
		//alert(totalRepairCost+"="+document.getElementById("totalrepairpartscost").value+"+"+totalrepairlabor);
		document.getElementById("TotalRepairCost").value=totalRepairCost;
		calculateAllowance();
	}

	
	/*function addNPNReplaceList()
	{
		if(validateNPNData())
		{
		
			var table = window.opener.document.getElementById("replacepart");
			var rowCount = table.rows.length;
	        var row = table.insertRow(rowCount);
	        row.id="npnpart_replaceRow";
	 
	        var cell1 = row.insertCell(0);
	        var element1 = window.opener.document.createElement("input");
	        element1.type = "checkbox";
	        element1.id="npnpartcheckbox_replace"+rowCount;
	 		element1.onclick=function(){ 
	 							var e =document.getElementById("npnpartqty_replace"+rowCount);
	 							if(e.readOnly){
	 									e.removeAttribute("readonly","true");
	 									e.className= "";
	 									e.removeAttribute('style');
	 							}else{
	 									e.setAttribute("readOnly","true"); 
	 									e.className= "readonlyField";
	 									e.style.border="0";
	 							}
	 						}; 
	        
	        cell1.appendChild(element1);
	            
	        var cell2 = row.insertCell(1);
	        var element2 = window.opener.document.createElement("input");
	        element2.type = "text";
	        element2.id="npnpartnumber_replace"+rowCount;
	        element2.value=document.getElementById("partNumber").value;
	        element2.style.border="0";
		    element2.readOnly = "true";
	        cell2.appendChild(element2);
	            
	        var cell3 = row.insertCell(2);
	        var element3 = window.opener.document.createElement("input");
	        element3.type = "text";
	        element3.id="npnpartdesc_replace"+rowCount;
	        element3.value=document.getElementById("partDescritpion").value;
	        element3.style.border="0";
		    element3.readOnly = "true";
	        cell3.appendChild(element3);
	            
	        var cell4 = row.insertCell(3);
	        var element4 = window.opener.document.createElement("input");
	        element4.type = "text";
	        element4.id="npnpartqty_replace"+rowCount;
	        element4.value=document.getElementById("partQuantity").value;
	        element4.style.border="0";
		    element4.readOnly = "true";
	        cell4.appendChild(element4);
		
	        calculateWorksheetAllowance();
			window.close();
		
			
		}
		
		var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
		
	}
	*/
	
	function addNPNReplaceList()
	 {
		alert("Inside validateNPNData()");
		if(validateNPNData())
		 {
			window.opener.document.getElementById("npnPartDesc").value= document.getElementById("partDescritpion").value;
			window.opener.document.getElementById("npnPartQty").value = document.getElementById("partQuantity").value;
			window.opener.document.getElementById("npnPartAmt").value = document.getElementById("partCost").value;;

		    window.opener.document.getElementById("addNPNReplaceList").click(); 
			window.close();
		 }
		 }
	
	function validateNPNData()
	{
	
		if((document.getElementById("partNumber").value=="")&& (document.getElementById("partNumber").value.length == 0))
		{
			//checkValue('"+ val.replace(/\\/g,  "\%") + "'," + nameexpr +");
			alert(ErrorsDict.npnPartMsg);
			return;
		}
		if((document.getElementById("partDescritpion").value=="" )&& (document.getElementById("partDescritpion").value.length == 0))
		{
			alert(ErrorsDict.npnPartDescMsg);
			return;
		}
		if((document.getElementById("partQuantity").value=="" )&& (document.getElementById("partQuantity").value.length == 0))
		{
			alert(ErrorsDict.npnPartQty);
			return;
		}
		if((document.getElementById("partCost").value=="" )&& (document.getElementById("partCost").value.length == 0))
		{
			alert(ErrorsDict.npnPartCost);
			return;
		}
		return true;
		
	}
	
	function clear(){
		//document.getElementById("partNumber").value="NPN";
		document.getElementById("partDescritpion").value="";
		document.getElementById("partQuantity").value="";
		
		document.getElementById("partCost").value="";
	}
	function closefn(){
		window.close();
	
	}
	//End NPN Part jsp
	//Start OPEN 00 TIME
	
	
	
	function add00RepairList(){
		alert("Inside add00RepairList()");
		var repairtable = window.opener.document.getElementById("repairpart");
		var SLopRepairList=window.opener.document.getElementById('straightLopRowRepairList');
		window.opener.document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status

		if((document.getElementById("00lophrs").value=="" ) || (document.getElementById("00lophrs").value==null)){
				
				alert("Please Enter Labor Hours");
			
		}else if(repairtable.rows.length == 1){ // Modified from 0 to 1 by t9543un
			alert("Please Enter atleast one Part for entering Straight Time LOP in Repair List.");
			return;
		}else if(SLopRepairList!=null && typeof(SLopRepairList)!='undefined'){
			alert("00 LOP already added to the Repair List.");
			return;
		}else{
			
				var table = window.opener.document.getElementById("repairlop");
				
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);
				row.id="straightLopRowRepairList"; //Vijay's Changes
				
				var cell2 = row.insertCell(0);
			    var element2 = window.opener.document.createElement("input");
			    element2.type = "text";
			   	element2.value="85410000";
			   	element2.name="lopRepair";
			    element2.readOnly = "true";
			    element2.style.border="0";
			    cell2.appendChild(element2);
			            
			    var cell3 = row.insertCell(1);
			    var element3 = window.opener.document.createElement("input");
			    element3.type = "text";
			    element3.readOnly = "true";
			    element3.name="lopdescRepair";
			    element3.value="00 Punch Time";
			    element3.style.border="0";
			    cell3.appendChild(element3);
			
			  //Start: Modified for Straight time LOP by t9453ss
			    var element9 = window.opener.document.createElement("input");
			    element9.type = "hidden";
			    element9.value=document.getElementById("00lophrs").value;
			    element9.style.border="0";
			    element9.name="lophrRepair";
        	    cell3.appendChild(element9);
                
                var element4 = window.opener.document.createElement("input");
                element4.type = "hidden";
                element4.value="";
                element4.name="partlopseqRepair";
                element4.style.border="0";
                cell3.appendChild(element4);
               
                var element5 = window.opener.document.createElement("input");
                element5.type = "hidden";
                element5.value=0;
                element5.name="lopseqRepair";
                element5.style.border="0";
                cell3.appendChild(element5);
                
                var element6 = window.opener.document.createElement("input");
                element6.type = "hidden";
                element6.value="";
                element6.name="lopTypRepair";
                element6.style.border="0";
                cell3.appendChild(element6);
                
                var element7 = window.opener.document.createElement("input");
                element7.type = "hidden";
                element7.value="";
                element7.name="lopHierRepair";
                element7.style.border="0";
                cell3.appendChild(element7);
                
                var element8 = window.opener.document.createElement("input");
                element8.type = "hidden";
                element8.value="";
                element8.name="lopGrpRepair";
                element8.style.border="0";
                cell3.appendChild(element8);
                
		               
                var repairparttable=window.opener.document.getElementById("repairpart");
        		var repairloptable=window.opener.document.getElementById("repairlop");
        		var replaceparttable=window.opener.document.getElementById("replacepart");
        		var replaceloptable=window.opener.document.getElementById("replacelop");
        		
        		window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
        		window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
        		window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
        		window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
        		
        		//End: Modified for Straight time LOP by t9453ss
        		
				window.close();
			}
	
	}

//T4573RR Changes for Delete 00 Time
	function Delete00Time(){
		alert("Inside validateNPNData()");
		var table = document.getElementById("repairlop");
		document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status
		
		rowCount= table.rows.length;
		var flag= false;
		for(var i=1; i<rowCount; i++) {
						var row = table.rows[i];
						var lopPrtSeqArr=row.cells[0].getElementsByTagName('input');
					//	alert(lopPrtSeqArr[0].value);
						
						if(lopPrtSeqArr[0].value=='85410000'){
									table.deleteRow(i);
								   rowCount--;
									i--;
									flag = true;
							}
				if(i== rowCount-1 && flag == false){
					alert("No 00 time LOP is present which can be deleted");
				}
			}

			
			if(rowCount==1){
				alert("No 00 time LOP is present which can be deleted");
			}
	  }



	
	function add00ReplaceList(){
		alert("Inside validateNPNData()");
		var replacetable = window.opener.document.getElementById("replacepart");
		var SLopReplaceList=window.opener.document.getElementById('straightLopRowReplaceList');
		
		window.opener.document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status
	
		if((document.getElementById("00lophrs").value=="" ) || (document.getElementById("00lophrs").value==null)){
			
				alert("Please Enter Labor Hours");
			
			}
		else if(replacetable.rows.length == 1) // Modified from 0 to 1 by t9543un
		{
			alert("Please Enter atleast one Part for entering Straight Time LOP in Replace List.");
			return;
		}else if(SLopReplaceList!=null && typeof(SLopReplaceList)!='undefined'){
			alert("00 LOP already added to Replace List");
			return;
		}else{
	
				var table = window.opener.document.getElementById("replacelop");
				
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);
				row.id="straightLopRowReplaceList"; //Vijay's Changes
				
				var cell2 = row.insertCell(0);
			    var element2 = window.opener.document.createElement("input");
			    element2.type = "text";
			   	element2.value="85410000";
			   	element2.name="lopReplace";
			    element2.readOnly = "true";
			    element2.style.border="0";
			    cell2.appendChild(element2);
			            
			    var cell3 = row.insertCell(1);
			    var element3 = window.opener.document.createElement("input");
			    element3.type = "text";
			    element3.readOnly = "true";
			    element3.name="lopdescReplace";
			    element3.value="00 Punch Time";
			    element3.style.border="0";
			    cell3.appendChild(element3);
			    
			  //Start: Modified for Straight time LOP by t9453ss
			    var element9 = window.opener.document.createElement("input");
			    element9.type = "hidden";
			    element9.value=document.getElementById("00lophrs").value;
			    element9.style.border="0";
			    element9.name="lophrReplace";
        	    cell3.appendChild(element9);
                
                var element4 = window.opener.document.createElement("input");
                element4.type = "hidden";
                element4.value="";
                element4.name="partlopseqReplace";
                element4.style.border="0";
                cell3.appendChild(element4);
               
                var element5 = window.opener.document.createElement("input");
                element5.type = "hidden";
                element5.value=0;
                element5.name="lopseqReplace";
                element5.style.border="0";
                cell3.appendChild(element5);
                
                var element6 = window.opener.document.createElement("input");
                element6.type = "hidden";
                element6.value="";
                element6.name="lopTypReplace";
                element6.style.border="0";
                cell3.appendChild(element6);
                
                var element7 = window.opener.document.createElement("input");
                element7.type = "hidden";
                element7.value="";
                element7.name="lopHierReplace";
                element7.style.border="0";
                cell3.appendChild(element7);
                
                var element8 = window.opener.document.createElement("input");
                element8.type = "hidden";
                element8.value="";
                element8.name="lopGrpReplace";
                element8.style.border="0";
                cell3.appendChild(element8);
                
			                
                var repairparttable=window.opener.document.getElementById("repairpart");
        		var repairloptable=window.opener.document.getElementById("repairlop");
        		var replaceparttable=window.opener.document.getElementById("replacepart");
        		var replaceloptable=window.opener.document.getElementById("replacelop");
        		
        		
        		window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
        		window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
        		window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
        		window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
				window.close();
				
				//End: Modified for Straight time LOP by t9453ss
			}
		
	}


	//T4573RR changes for Delete 00 Time
	function DeleteReplace00Time(){
		alert("Inside validateNPNData()");
		var table = document.getElementById("replacelop");
		document.pwtwrksheet.savestatus.value="";  // Added by t9453ss for worksheet status
		rowCount= table.rows.length;
		var flag= false;
		for(var i=1; i<rowCount; i++) {
						var row = table.rows[i];
						var lopPrtSeqArr=row.cells[0].getElementsByTagName('input');
					//	alert(lopPrtSeqArr[0].value);
						
						if(lopPrtSeqArr[0].value=='85410000'){
									table.deleteRow(i);
								   rowCount--;
									i--;
									flag = true;
							}
				if(i== rowCount-1 && flag == false){
					alert("No 00 time LOP is present which can be deleted");
				}
			}

			if(rowCount==1){
				alert("No 00 time LOP is present which can be deleted");
			}
		//if null disable the delete button with alert box.
	}


	
	function clearopenlop(){
		document.getElementById("00lophrs").value="";
	
	}
	function closefnopenlop(){
	
		window.close();
	
	}
	//End OPEN 00 LOP
	
        function getModelYear()
        {
                var vin = document.dcdipap.vinNum.value;
                //T4317SK - Special character check in VIN 
				var specialChars = "~*|,\":<>[]{}`\';()@&$#%!";
                 for (var i = 0; i < vin.length; i++)
			     {
				        if (specialChars.indexOf(vin.charAt(i)) != -1){
                         eval(document.dcdipap.vinNum.select());				
                         eval(document.dcdipap.vinNum.focus());
                         alert ("Please Enter Valid VIN no."); 
						 document.dcdipap.modelYear.value='';
						 return;
						}
				 }
				 //T4317SK - Special character check in VIN 
                // PMO472.42 Check VIN is not 8 or 17 digit - T0984NG - Start
				if(vin.length != 0 && vin.length != 8 && vin.length != 17){
					eval(document.dcdipap.vinNum.select());				
                    eval(document.dcdipap.vinNum.focus());
                    alert (ErrorsDict.vinNum); 
					document.dcdipap.modelYear.value='';
					return;
				}
				// PMO472.42 Check VIN is not 8 or 17 digit - T0984NG - End

                var response;
                var model;
                $.ajax({
                        url: "/service/writeup/dipap/DIPAPServlet?getModel=modelYear&vinNum="+vin,
                        async: 'true',
                        type: 'POST',
                        success: function (data, textStatus, jqXHR)
                        {
                                
                                response = data;
                                var firstpos = response.indexOf("[");
                                var lastpos = response.indexOf("]");
                                
                                vin = response.substring(firstpos+1, firstpos+18);
                                model = response.substring(firstpos+18, lastpos);
                                if (vin.length == 17 && model.length==4){
									document.dcdipap.vinNum.value=vin;
	                                document.dcdipap.modelYear.value=model;
									//T4317K Changes for Browse worksheet issue
									document.dcdipap.browseFlag.value = '';
									//T4317K Changes for Browse worksheet issue
                                } else {
									//T4317SK code changes 
									//document.dcdipap.vinNum.value = vin;
									eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());
                                    document.dcdipap.modelYear.value='';
								//T4317K Changes for Browse worksheet issue
									document.dcdipap.browseFlag.value = '';
                               //T4317K Changes for Browse worksheet issue 
									//T4317SK code changes
                                	alert(ErrorsDict.vinnotFoundMsg);
                                }	
                                //Changes by Ankur Nayak [T8576AN] - Start
								/*
								//TO disable the "Browse" button
                                var browsebtnObj = document.getElementById('browseRepWorksheet');
								//alert("browsebtnObj = "+browsebtnObj);
								//alert("model = "+model);
								if(browsebtnObj != null && model != null){
									//alert("Checking the model year ");
									if(model >= 2008){
										//alert("model > = 2010 new ");
										browsebtnObj.className = "buttonDisabledLabel";
										browsebtnObj.setAttribute("onclick","this.removeAttribute('href')");
									}
									*/
									/*}else{
										//alert("model > = 2010");
										browsebtnObj.className = "buttonLabel";
										browsebtnObj.setAttribute ("onclick", "if(validate())document.getElementById('realfile4').click();return false;");
									}*/
								//}								
								//Changes by Ankur Nayak [T8576AN] - End
                                
                        },
                     error:function(jqXHR, textStatus, errorThrown){  
                         }           
                   });
        
                
        }

	//Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 Start
        function getTCRVin()
        {
                var vin = document.dcdipap.vinNum.value;
                
				var specialChars = "~*|,\":<>[]{}`\';()@&$#%!";
                 for (var i = 0; i < vin.length; i++)
			     {
				        if (specialChars.indexOf(vin.charAt(i)) != -1){
                         eval(document.dcdipap.vinNum.select());				
                         eval(document.dcdipap.vinNum.focus());
                         alert ("Please Enter Valid VIN no."); 
						 document.dcdipap.modelYear.value='';
						 return;
						}
				 }
				
				if(vin.length != 0 && vin.length != 8 && vin.length != 17){
					eval(document.dcdipap.vinNum.select());				
                    eval(document.dcdipap.vinNum.focus());
                    alert (ErrorsDict.vinNum); 
					document.dcdipap.modelYear.value='';
					return;
				}
				

                var response;
                var model;
                $.ajax({
                	url: "/service/writeup/dipap/DIPAPServlet?getModel=getFullVIN&vinNum="+vin,
                        async: 'true',
                        type: 'POST',
                        success: function (data, textStatus, jqXHR)
                        {                                
                                response = data;
                                var firstpos = response.indexOf("[");
                                var lastpos = response.indexOf("]");
                                
                                vin = response.substring(firstpos+1, firstpos+18);
								model = response.substring(firstpos+18, lastpos);
								 //alert("VIN is "+vin);
                                if (vin.length == 17 && model.length==4){
									if(model == 'YDUP')
									{
									eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());  
									document.dcdipap.vinNotFoundFlag.value = 'D';
									document.dcdipap.browseFlag.value = '';   
                                     alert("Duplicate VIN.Please enter Full 17 digit VIN ");
									}
									else if (model == 'NDUP' )
									{
									document.dcdipap.vinNum.value=vin;								
	                                document.dcdipap.vinNotFoundFlag.value = 'Y';									
									document.dcdipap.browseFlag.value = '';	
									}
                                  else {
									eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());                                    
									document.dcdipap.vinNotFoundFlag.value = 'N';
									document.dcdipap.browseFlag.value = '';                              
                                	alert(ErrorsDict.vinnotFoundMsg);
                                }	
								}
								else
							{
								eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());                                    
									document.dcdipap.vinNotFoundFlag.value = 'N';
									document.dcdipap.browseFlag.value = '';                              
                                	alert(ErrorsDict.vinnotFoundMsg);
								
								}
                                 
                        },
                     error:function(jqXHR, textStatus, errorThrown){  
                         }           
                   });
        
                
        }
        
        function getVehVin()
        {
                var vin = document.dcdipap.vinNum.value;
                //alert("Inside Get Vehicle Ajax Call");
				var specialChars = "~*|,\":<>[]{}`\';()@&$#%!";
                 for (var i = 0; i < vin.length; i++)
			     {
				        if (specialChars.indexOf(vin.charAt(i)) != -1){
                         eval(document.dcdipap.vinNum.select());				
                         eval(document.dcdipap.vinNum.focus());
                         alert ("Please Enter Valid VIN no."); 
						 document.dcdipap.modelYear.value='';
						 return;
						}
				 }
				//alert("Inside Get Vehicle Ajax Call2");
				if(vin.length != 0 && vin.length != 8 && vin.length != 17){
					eval(document.dcdipap.vinNum.select());				
                    eval(document.dcdipap.vinNum.focus());
                    alert (ErrorsDict.vinNum); 
					document.dcdipap.modelYear.value='';
					return;
				}
				
           // alert("Inside Get Vehicle Ajax Call3");
                var response;
                var model;
				//alert("Inside Get Vehicle Ajax Call4");
                $.ajax({
                	url: "/service/writeup/dipap/DIPAPServlet?getModel=getFullVIN&vinNum="+vin,
                        async: 'true',
                        type: 'POST',
                        success: function (data, textStatus, jqXHR)
                        {
                                //alert("Inside Get Vehicle Ajax Call5");
                                response = data;
                                //alert (response);
                                var firstpos = response.indexOf("[");
                                var lastpos = response.indexOf("]");
                                
                                vin = response.substring(firstpos+1, firstpos+18);
								model = response.substring(firstpos+18, lastpos);
                                if (vin.length == 17 && model.length==4){
									if(model == 'YDUP')
									{
									eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());  
									document.dcdipap.vinNotFoundFlag.value = 'D';
									document.dcdipap.browseFlag.value = '';   
                                     alert("Duplicate VIN.Please enter Full 17 digit VIN ");
									}
									else if (model == 'NDUP' )
									{
									document.dcdipap.vinNum.value=vin;								
	                                document.dcdipap.vinNotFoundFlag.value = 'Y';									
									document.dcdipap.browseFlag.value = '';	
									}
                                  else {
									eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());                                    
									document.dcdipap.vinNotFoundFlag.value = 'N';
									document.dcdipap.browseFlag.value = '';                              
                                	alert(ErrorsDict.vinnotFoundMsg);
                                }	
                                }
							else
							{
								eval(document.dcdipap.vinNum.select());				
                                    eval(document.dcdipap.vinNum.focus());                                    
									document.dcdipap.vinNotFoundFlag.value = 'N';
									document.dcdipap.browseFlag.value = '';                              
                                	alert(ErrorsDict.vinnotFoundMsg);
								
								}
                        },
                     error:function(jqXHR, textStatus, errorThrown){  
                         }           
                   });      
                
        }
        
      //Changes by t8415sk for DIPAP TCR RSA PMO 472.45 - SeRV00726187 End
	
function addPLOP(flag,lopCd,lopdesc,lophr,loptyp,lopgrp,lophier,repairTyp,x){
		//alert("Inside addPLOP");
		if(flag==true){
			//alert("adding lop, lopCd::"+lopCd+" :lophier::"+lophier);
			var table1;
			if(repairTyp=="Repair"){
				table1 = window.opener.document.getElementById("repairlop");
			}else{
				table1 = window.opener.document.getElementById("replacelop");
			}
			
			var rowCount1 = table1.rows.length;
    		var row1 = table1.insertRow(rowCount1);
    		
    		var cell2 = row1.insertCell(0);
    	    var element2 = window.opener.document.createElement("input");
    	    element2.type = "text";
    	    element2.value=lopCd;
    	    element2.name="lop"+repairTyp;
    	    element2.style.border="0";
    	    cell2.appendChild(element2);
    	            
    	    var cell3 = row1.insertCell(1);
    	    var element3 = window.opener.document.createElement("input");
    	    element3.type = "text";
    	    element3.value=lopdesc;
    	    element3.name="lopdesc"+repairTyp;
    	    element3.style.border="0";
    	    cell3.appendChild(element3);
    	    
    	    var partrowcount
    	    var element4 = window.opener.document.createElement("input");
    	    element4.type = "hidden";
    	    element4.value=lophr;
    	    element4.style.border="0";
    	    element4.name="lophr"+repairTyp;
    	    cell3.appendChild(element4);
    	    if(repairTyp=="Repair"){
    	    	partrowcount=window.opener.document.getElementById("repairpart").rows.length;
    	    }else{
    	    	partrowcount=window.opener.document.getElementById("replacepart").rows.length;
    	    }	
    	    // Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
    		if(partrowcount<10){
    			partrowcount="0"+partrowcount;
    			//alert("addPLop(), partrowcount<10 so new partrowcount is::"+partrowcount);
    		}
    		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
    	    var element5 = window.opener.document.createElement("input");
            element5.type = "hidden";
            element5.value="p"+partrowcount;
            element5.name="partlopseq"+repairTyp;
            element5.style.border="0";
            cell3.appendChild(element5);
            
            var element6 = window.opener.document.createElement("input");
            element6.type = "hidden";
            element6.value=rowCount1+1;
            element6.name="lopseq"+repairTyp;
            element6.style.border="0";
            cell3.appendChild(element6);

			var element7 = window.opener.document.createElement("input");
            element7.type = "hidden";
            element7.value=loptyp;
            element7.name="lopTyp"+repairTyp;
            element7.style.border="0";
            cell3.appendChild(element7);
            
            var element8 = window.opener.document.createElement("input");
            element8.type = "hidden";
            element8.value=lophier;
            element8.name="lopHier"+repairTyp;
            element8.style.border="0";
            cell3.appendChild(element8);
            
            var element9 = window.opener.document.createElement("input");
            element9.type = "hidden";
            element9.value=lopgrp;
            element9.name="lopGrp"+repairTyp;
            element9.style.border="0";
            cell3.appendChild(element9);
		}
		
		var repairparttable=window.opener.document.getElementById("repairpart");
		var repairloptable=window.opener.document.getElementById("repairlop");
		var replaceparttable=window.opener.document.getElementById("replacepart");
		var replaceloptable=window.opener.document.getElementById("replacelop");
		
		
		window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
    	
	}
	
	function calculateWorksheetAllowance(repairTyp){
	   		//alert("Inside calculateWorksheetAllowance");
			var totalRepairCost=0;
			var totalReplaceCost=0;
			//alert("totalRepairCost " + totalRepairCost);
			//alert("totalReplaceCost " + totalReplaceCost);
			if (window.opener.document.getElementById("TotalreplaceCost").value != null){
				totalReplaceCost = window.opener.document.getElementById("TotalreplaceCost").value;
			}
			if (window.opener.document.getElementById("TotalRepairCost").value != null){
				totalRepairCost = window.opener.document.getElementById("TotalRepairCost").value;
			}
			totalReplaceCost = window.opener.document.getElementById("TotalreplaceCost").value;
			totalRepairCost = window.opener.document.getElementById("TotalRepairCost").value;
			var tot = 0.0;
			 tot = parseFloat(document.getElementById("partCost").value) * parseInt(document.getElementById("partQuantity").value);
		
			if(repairTyp=='Repair'){
				totalRepairCost = parseFloat(totalRepairCost) + parseFloat(tot);
			}else{
				totalReplaceCost= parseFloat(totalReplaceCost) + parseFloat(tot);
			}

			//alert("totalRepairCost " + totalRepairCost);
			//alert("totalReplaceCost " + totalReplaceCost);
			var repAllowance=0.00;
	        var repAllowancepercent=0.00;

		

	        if(totalReplaceCost!=0){
	        
	        	repAllowance=totalRepairCost/totalReplaceCost;
	        	repAllowancepercent=repAllowance*100;
	        	
	        }
			
			window.opener.document.getElementById("TotalRepairCost").value = 	totalRepairCost;
			window.opener.document.getElementById("TotalreplaceCost").value = 	totalReplaceCost;
		    //alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	        //alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);
			var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
			repairThreshold = parseFloat(window.opener.document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42
	        if(repAllowancepercent>=repairThreshold){	   // Modified by t9453ss for PMO 472.42        	
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#00FF00";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#00FF00";
				window.opener.document.getElementById("allowance").value=NamesDict.replaceMsg;
	      
				
				
				}else{
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#FF3300";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#FF3300";
				window.opener.document.getElementById("allowance").value=NamesDict.repairMsg;
	        }
	}
	
	function calculateAllowance(){

   		//alert("Inside calculateWorksheetAllowance");
		var totalRepairCost=0;
		var totalReplaceCost=0;
		//alert("totalRepairCost " + totalRepairCost);
		//alert("totalReplaceCost " + totalReplaceCost);
		if (document.getElementById("TotalreplaceCost").value != null){
			totalReplaceCost = document.getElementById("TotalreplaceCost").value;
			//alert("TotalreplaceCost!=null " + totalReplaceCost);
		}
		if (document.getElementById("TotalRepairCost").value != null){
			totalRepairCost = document.getElementById("TotalRepairCost").value;
		}
		totalReplaceCost = document.getElementById("TotalreplaceCost").value;
		totalRepairCost = document.getElementById("TotalRepairCost").value;
		//alert("totalRepairCost " + totalRepairCost);
		//alert("totalReplaceCost " + totalReplaceCost);
		var repAllowance=0.00;
        var repAllowancepercent=0.00;
        if(totalReplaceCost!=0){
        	repAllowance=totalRepairCost/totalReplaceCost;
        	repAllowancepercent=repAllowance*100;
        	
        }
	   // alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
        //alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);
		 if(document.getElementById("repairpart").rows.length == 1 && document.getElementById("replacepart").rows.length ==1 && document.getElementById("rentalDays").value == 0) {		
			document.getElementById("allowance").style.backgroundColor="#FFFFFF";
					// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			document.getElementById("textcolor").value="#FFFFFF";
			document.getElementById("allowance").value = '';
			return false;
		} 
        var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
		repairThreshold = parseFloat(document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42
		//alert("---repAllowancepercent--"+repAllowancepercent);
		
        if(repAllowancepercent>=repairThreshold){    // Modified by t9453ss for PMO 472.42     	
        	document.getElementById("allowance").style.backgroundColor="#00FF00";
			document.getElementById("allowance").value=NamesDict.replaceMsg;
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			document.getElementById("textcolor").value="#00FF00";
        }else{
        	document.getElementById("allowance").style.backgroundColor="#FF3300";
			// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
			document.getElementById("textcolor").value="#FF3300";
			document.getElementById("allowance").value=NamesDict.repairMsg;
        }

	
	}
	
	//Changes for DIPAP RSA  - Start By Ankur Nayak[T8576AN]
	function openRepairWorksheet(modyrList){
		
		//alert("Inside openRepairWorksheet - Start");
		if(modyrList != null){
			var model=document.dcdipap.modelYear.value;
			var prog=document.dcdipap.prgType;
			var progSelected=prog.options[prog.selectedIndex].value;
			var category = document.dcdipap.catg;
			var catgSelectedvalue = category.options[category.selectedIndex].value;
			var browseFlag = document.dcdipap.browseFlag.value;
			
			//alert("browseFlag = "+browseFlag);
			//alert("modelYearList = "+modyrList);
			var modfirst=modyrList.indexOf("[");
			var modlast=modyrList.indexOf("]");
			var modelYR=modyrList.substring(modfirst+1, modlast);
			var modelArray=modelYR.split(",");
			var count = 0;
			for(var i=0;i<modelArray.length;i++){
			
				//Modified if condition by t9543un
				if((model >= parseInt(modelArray[i]) && progSelected=='P' && (catgSelectedvalue=='U' || catgSelectedvalue=='L')) && browseFlag != 'true'){
					alert(ErrorsDict.createMsg);
					count++;
					break;
				}			
			}

			if(count==0){
				if(count==0){
				if(validate())
					preview(what, '4');//T1787NM chage
				return false;
				
			}
				
			}
		}
	}

	function disableRequiredField(docObj){
		var catg = docObj.dcdipap.catg;	
		var prgType = docObj.dcdipap.prgType;
		var vinNum = docObj.dcdipap.vinNum;
		var lops = docObj.getElementById("lopDescription");
		var claimType = docObj.dcdipap.claimType;

		if(catg){
			catg.disabled=true;
		}

		if(prgType){
			prgType.disabled=true;
		}
		
		if(vinNum){
			vinNum.readOnly = true;
			vinNum.className= "readOnlyField";	
		}
		
		if(lops){
			lops.disabled=true;
		}
		
		if(claimType){
			claimType.disabled=true;
		}

	}

	function enableRequiredField(docObj){
		var catg = docObj.dcdipap.catg;	
		var prgType = docObj.dcdipap.prgType;
		var vinNum = docObj.dcdipap.vinNum;
		var lops = docObj.getElementById("lopDescription");
		var claimType = docObj.dcdipap.claimType;
		        //T4317SK need info changes   
		var ncost = docObj.dcdipap.cost;
         var statval = 	document.dcdipap.statusInfo.value ; 
		 			 if(statval == 'NEEDINFO')
                       {
						 //alert("Inside Needinfo");
                           if(ncost)
						   {
                              ncost.disabled = false ;
						   }
	                  }
		//T4317SK need info changes

		if(catg){
			catg.disabled=false;
		}

		if(prgType){
			prgType.disabled=false;
		}
		
		if(vinNum){
			vinNum.readOnly = false;
			vinNum.className= "";	
		}
		
		if(lops){
			lops.disabled=false;
		}
		
		if(claimType){
			claimType.disabled=false;
		}

	}

	function enablePartQty(obj, num){
		var partQtyObj = document.getElementById('repairqty'+num);
		if(obj && partQtyObj){
			if(obj.checked){
				//alert('checked');
				partQtyObj.removeAttribute("readonly","true");
				partQtyObj.className= "";
				partQtyObj.removeAttribute('style');
			} else {
				//alert('not checked');
				partQtyObj.setAttribute("readOnly","true");
				partQtyObj.className= "readonlyField";
				partQtyObj.style.border="0";
			}
	  }
 }
	
	
	//Changes for DIPAP RSA - End By Ankur Nayak[T8576AN]
	//Added by t9543un -- Start
	function enableReplPartQty(obj, num){
		var partQtyObj = document.getElementById('replaceqty'+num);
		if(obj && partQtyObj){
			if(obj.checked){
				partQtyObj.removeAttribute("readonly","true");
				partQtyObj.className= "";
				partQtyObj.removeAttribute('style');
			} else {
				partQtyObj.setAttribute("readOnly","true");
				partQtyObj.className= "readonlyField";
				partQtyObj.style.border="0";
			}
	  }
 }
	//Added by t9543un -- End
	// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - Start
	function validateOdometer(event){
		var event = event || window.event; // for trans-browser compatibility
		var liCharCode = event.which || event.keyCode;

		if(onlyNumericValues(event)){
			  var odometer = document.getElementById('odom').value;
			  var charVal = String.fromCharCode(liCharCode);
			  if(liCharCode == 46 && (odometer.length == 0 || odometer.indexOf('.') > -1)){
					return false;     
			  }

			  if( (charVal == '#') || (charVal == '$') || (charVal == '%') || (charVal == '&') || 
					(charVal == '(') ){
					return false;     
			  }
			  return true;
		}else{
			  return false;
		}
	}

	function  onlyNumericValues(foEvent) {
            var loEvent = foEvent || window.event; // for trans-browser compatibility
            var liCharCode = loEvent.which || loEvent.keyCode;
            
            return ((liCharCode >= 46 && liCharCode <= 57 && liCharCode != 47) ||
                  (liCharCode >= 35 && liCharCode <= 40) ||
                  liCharCode == 35 || liCharCode == 8);
                        
	}

	function calulateRepairAmount() {
		//alert("Inside calulateRepairAmount");
		var table = document.getElementById("repairpart");
		var table1 = document.getElementById("repairlop");
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
		   	var rowindex = table.rows[i];
		  //Modified for Calculations fix..Start by t9543un
		  //value=parseFloat(rowindex.cells[3].childNodes[2].value);
		   	var prtQty=parseInt(rowindex.cells[3].getElementsByTagName('input')[0].value);
		   	var dlrNet=parseFloat(rowindex.cells[3].getElementsByTagName('input')[1].value);
		   	var prtCost=parseInt(prtQty)*parseFloat(dlrNet);
		   	value=parseFloat(prtCost);	
		    //Modified for Calculations fix..Start by t9543un
	    	count=count+value;
	    	
	    } 	
	    //alert("Count: "+count);
	    document.getElementById("repairpartscost").value=count;
	    //alert("Markup%: "+document.getElementById("repairmkuprate").value);
		
	    var totalrepairpartcost=count*(1+((parseFloat(document.getElementById("repairmkuprate").value))/100));
	    //alert("totalrepairpartcost: "+totalrepairpartcost);

	   
       var newrowcount=table1.rows.length;
       var count1=0
       value=0;
       for(var i=1; i<newrowcount; i++){
           
    	   var rowindex = table1.rows[i];
    	 //value=parseFloat(rowindex.cells[1].childNodes[1].value);
			value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);//Modified for Calculations fix
			count1=parseFloat(count1)+value;
       } 
       totalrepairlabor=count1*parseFloat(document.getElementById("repairlabrhrrate").value);

	   //alert("totalrepairlabor: "+totalrepairlabor);
		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}
	

	   var totalrepaircost = totalrepairpartcost + totalrepairlabor + rentalAmt  ;
	   //alert("totalrepaircost: "+totalrepaircost);
		document.getElementById("totalrepairpartscost").value=totalrepairpartcost;
		document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
		document.getElementById("TotalRepairCost").value=totalrepaircost;
		
		//alert("totalrepaircost: "+document.getElementById("TotalRepairCost").value + " = "+document.getElementById("totalrepairpartscost").value+" + "+document.getElementById("totalrepairlaborcost").value);

	}	
	
	function  calulateReplaceAmount() {
		//alert("Inside calulateReplaceAmount");
		var table = document.getElementById("replacepart");
		var table1 = document.getElementById("replacelop");
	    var newrowcount=table.rows.length;
	    var count=0
	    var value=0;
	    for(var i=1; i<newrowcount; i++){
	        
		   	var rowindex = table.rows[i];
		   	//Modified for Calculations fix..Start by t9543un
			//value=parseFloat(rowindex.cells[3].childNodes[2].value);
			var prtQty=parseInt(rowindex.cells[3].getElementsByTagName('input')[0].value);
			var dlrNet=parseFloat(rowindex.cells[3].getElementsByTagName('input')[1].value);
			var prtCost=parseInt(prtQty)*parseFloat(dlrNet);
			value=parseFloat(prtCost);	
			//Modified for Calculations fix..Start by t9543un
	    	count=count+value;
	    	
	    } 	
	    //alert("Count: "+count);
	    document.getElementById("replacepartscost").value=count;
	    //alert("Markup%: "+document.getElementById("replacemkuprate").value);
		
	    var totalreplacepartcost=count*(1+((parseFloat(document.getElementById("replacemkuprate").value))/100));
	    //alert("totalreplacepartcost: "+totalreplacepartcost);

	   
       var newrowcount=table1.rows.length;
       var count1=0
       value=0;
       for(var i=1; i<newrowcount; i++){
           
    	   var rowindex = table1.rows[i];
    	 //value=parseFloat(rowindex.cells[1].childNodes[1].value);
			value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);//Modified for Calculations fix
			count1=parseFloat(count1)+value;
       } 
       var totalreplacelabor=count1*parseFloat(document.getElementById("replacelabrhrrate").value);
		var rentalAmt= 0;
		if(document.getElementById('rentaldays').value != '' && document.getElementById('rentaldays').value != 0){
			rentalAmt = parseFloat(document.getElementById("rentalamount").value) * parseInt(document.getElementById('rentaldays').value);

		}

		if(document.getElementById('towAllowance').value != '' && document.getElementById('towAllowance').value != 0){
			rentalAmt = parseFloat(document.getElementById("towAllowance").value);
		}

	   //alert("totalreplacelabor: "+totalreplacelabor);
	   var totalreplacecost = totalreplacepartcost + totalreplacelabor + rentalAmt;
	   //alert("totalreplacecost: "+totalreplacecost);
		document.getElementById("totalreplacepartscost").value=totalreplacepartcost;
		document.getElementById("replacelaborhours").value=totalreplacelabor;
		document.getElementById("TotalreplaceCost").value=totalreplacecost;
		
		//alert("totalreplacecost: "+document.getElementById("TotalreplaceCost").value + " = "+document.getElementById("totalreplacepartscost").value+" + "+document.getElementById("replacelaborhours").value);
	}	
	
	// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG - End

	/*
	 function calculateAllowance(){
		
		var repairprttable=document.getElementById("repairpart");
		var repairlptable=document.getElementById("repairlop");
		var replaceprttable=document.getElementById("replacepart");
		var replacelptable=document.getElementById("replacelop");
		
		var repPrtCount=parseInt(repairprttable.rows.length)-1;
		var repLbrCount=parseInt(repairlptable.rows.length)-1;
		
		var replPrtCount=parseInt(replaceprttable.rows.length)-1;
		var replLbrCount=parseInt(replacelptable.rows.length)-1;
		
		var mkuprt=parseFloat(document.getElementById("repairmkuprate").value);
		var lbrRt=parseFloat(document.getElementById("repairlabrhrrate").value);
		
		var mkupPerCent=1+mkuprt/100;
		
		var totRepPrtsCost=0.00;
		
		var TotalRepPrtCost=0.00
		
		for(var i=1;i<repPrtCount;i++){
			 
	           
			var row=repairprttable.rows[i];
			var qty=parseFloat(row.cells[3].childNodes[0].value);
			var dlrNet=parseFloat(row.cells[3].childNodes[1].value);
			var repPrtCost=qty*dlrNet;
			
			totRepPrtsCost=parseFloat(totRepPrtsCost)+parseFloat(repPrtCost);
		}
		
		TotalRepPrtCost=totRepPrtsCost*mkupPerCent;
		
	
		var totRepLbr=0.00;
				
		for(var i=1;i<repLbrCount;i++){
			var row=repairlptable.rows[i];
			var lbrHr=parseFloat(row.cells[2].childNodes[0].value);
			totRepLbr=totRepLbr+lbrHr;
			
		}
		
		var totRepLbrCost=totRepLbr*lbrRt;
		
		var TotalRepCost=TotalRepPrtCost+totRepLbrCost;
		
		var totReplPrtsCost=0.00;
		
		var TotalReplPrtCost=0.00
		
		for(var i=1;i<replPrtCount;i++){
			 
	           
			var row=replaceprttable.rows[i];
			var qty=parseFloat(row.cells[3].childNodes[0].value);
			var dlrNet=parseFloat(row.cells[3].childNodes[1].value);
			var replPrtCost=qty*dlrNet;
			
			totReplPrtsCost=parseFloat(totReplPrtsCost)+parseFloat(replPrtCost);
		}
		
		TotalReplPrtCost=totReplPrtsCost*mkupPerCent;
		
		
		var totReplLbr=0.00;
		var lbrRt=parseFloat(document.getElementById("repairlabrhrrate").value);
		
		for(var i=1;i<replLbrCount;i++){
			var row=replacelptable.rows[i];
			var lbrHr=parseFloat(row.cells[2].childNodes[0].value);
			totReplLbr=totReplLbr+lbrHr;
			
		}
		
		var totReplLbrCost=totReplLbr*lbrRt;
		
		var TotalReplCost=TotalReplPrtCost+totReplLbrCost;
		
		var repAllowance=0.00;
		var replAllowancePer=0.00;
		if(TotalReplCost!=0.00){
			repAllowance=TotalRepCost/TotalReplCost;
			replAllowancePer=repAllowance/100;
		
		}
		alert("---repAllowancepercent---   "+replAllowancePer);
		if(replAllowancePer==0){
			document.getElementById("allowance").style.backgroundColor="none";
		}
		
		else if(repAllowancepercent>=80){
	    	alert("---repAllowancepercent in if ---   ");
	    	document.getElementById("allowance").style.backgroundColor="#00FF00";
	    
	    }else{
	    	document.getElementById("allowance").style.backgroundColor="#FF3300";
	    }
	}
	*/

	//End: Added for PMO472.42

	// Single PLOP Logic changes by T0984NG - Start
	function loadPrimRelatedLop(){
		//alert("Inside loadPrimRelatedLop()");
		var pLopRepairTyp = document.getElementById("pLopRepairTyp").value;
		var bothSingleLop = document.getElementById("bothSingleLop").value;
		var relatedSingleLop = document.getElementById("relatedSingleLop").value;
		
		// Get the Primary Lop Values
		var pLopNum=document.getElementById("pLopNum").value;
		var pLopDesc=document.getElementById("pLopDesc").value;
		var pLopHrs=document.getElementById("pLopHrs").value;
		var pLopTyp=document.getElementById("pLopTyp").value;      
		var pLopGrpHier=document.getElementById("pLopGrpHier").value;
		var pLopGrp=document.getElementById("pLopGrp").value;
		
		
		// Get the Related Lop Values
		var rLopNum=document.getElementById("rLopNum").value;
		var rLopDesc=document.getElementById("rLopDesc").value;
		var rLopHrs=document.getElementById("rLopHrs").value;
		var rLopTyp=document.getElementById("rLopTyp").value;      
		var rLopGrpHier=document.getElementById("rLopGrpHier").value;
		var rLopGrp=document.getElementById("rLopGrp").value;
		
		
		if(bothSingleLop == "yes"){
			//alert("In if of bothSingleLop==yes, calling loadPrimaryLop()");
			loadPrimaryLop(pLopRepairTyp, pLopNum, pLopDesc, pLopHrs, pLopTyp, pLopGrpHier, pLopGrp);
			//alert("Calling loadRelatedLop()");
			loadRelatedLop(pLopRepairTyp, rLopNum, rLopDesc, rLopHrs, rLopTyp, rLopGrpHier, rLopGrp);
			//alert("End of if bothSingleLop==yes");
		}
		if(relatedSingleLop == "yes"){
			//alert("In if of relatedSingleLop==yes, calling loadRelatedLop()");
			loadRelatedLop(pLopRepairTyp, rLopNum, rLopDesc, rLopHrs, rLopTyp, rLopGrpHier, rLopGrp);
			//alert("End of if loadRelatedLop==yes");
		}
	}
	
	function loadPrimaryLop(pLopRepairTyp, pLopNum, pLopDesc, pLopHrs, pLopTyp, pLopGrpHier, pLopGrp){
		//alert("Inside loadPrimaryLop()");
		var addFlag="true";
		var table1;
		var partrowcount;
		var repairTyp;
		if(pLopRepairTyp=="REPAIR"){		
			table1 = document.getElementById("repairlop");
			partrowcount=document.getElementById("repairpart").rows.length; 
			repairTyp = "Repair";
		} else {
			table1 = document.getElementById("replacelop");
			partrowcount=document.getElementById("replacepart").rows.length;
			repairTyp = "Replace";
		}
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
		if(partrowcount<10){
			partrowcount="0"+partrowcount;
			//alert("loadPrimaryLop(), partrowcount<10 so new partrowcount is::"+partrowcount);
		}		
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
		//alert("pLopRepairTyp::"+pLopRepairTyp);
		//alert("pLopNum::"+pLopNum);
		//alert("pLopDesc::"+pLopDesc);
		//alert("pLopHrs::"+pLopHrs);
		//alert("pLopTyp::"+pLopTyp);
		//alert("pLopGrpHier::"+pLopGrpHier);
		//alert("pLopGrp::"+pLopGrp);


    	var rowCount1 = table1.rows.length;
    	for(var k=1; k<rowCount1; k++){  
    		var enteredrow=table1.rows[k];
    		//alert("enteredrow..."+enteredrow);
    		//var enteredlopHier=enteredrow.cells[1].childNodes[5].value;
    		//alert("enteredlopHier..."+enteredlopHier);
    		//var enteredlopgrp=enteredrow.cells[1].childNodes[6].value;
    		//alert("enteredlopgrp..."+enteredlopgrp);
    		//alert("loadPrimaryLop(), pLopNum::"+pLopNum+" :PrimaryLop::"+enteredrow.cells[0].getElementsByTagName('input')[0].value);
    		if(enteredrow.cells[0].getElementsByTagName('input')[0].value==pLopNum){
    			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
    			//alert("loadPrimaryLop(), both primary lop equals, new partrowcount is ::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
    			addFlag="false";
    			//alert("enteredrow.cells[1].childNodes[2].value..."+enteredrow.cells[1].childNodes[2].value);
    		}	
    	}
		rowCount1 = table1.rows.length;
		//alert("addFlag Value... "+addFlag);
    	if(addFlag=="true"){
    		//alert("after addFlag==true loadPrimaryLop(), pLopNum::"+pLopNum+" :partrowcount::"+partrowcount);
    		var row1 = table1.insertRow(rowCount1);
    		var cell2 = row1.insertCell(0);
    	    var element2 = document.createElement("input");
    	    element2.type = "text";
    	    element2.value=pLopNum;
    	    element2.name="lop"+repairTyp;
		    element2.readOnly = "true";
    	    element2.style.border="0";
    	    cell2.appendChild(element2);

    	    var cell3 = row1.insertCell(1);
    	    var element3 = document.createElement("input");
    	    element3.type = "text";
    	    element3.value=pLopDesc;
    	    element3.name="lopdesc"+repairTyp;
		    element3.readOnly = "true";
    	    element3.style.border="0";
    	    cell3.appendChild(element3);
    	    
    	    var element4 = document.createElement("input");
    	    element4.type = "hidden";
    	    element4.value=pLopHrs;
    	    element4.style.border="0";
    	    element4.name="lophr"+repairTyp;
    	    cell3.appendChild(element4);
			//alert("lophr"+repairTyp);
    	   	//alert("lophrs::"+lophrs.value);

    	    var element5 = document.createElement("input");
            element5.type = "hidden";
            element5.value="p"+partrowcount;
            element5.name="partlopseq"+repairTyp;
            element5.style.border="0";
            cell3.appendChild(element5);		                

            var element6 = document.createElement("input");
            element6.type = "hidden";
            element6.value=1;
            element6.name="lopseq"+repairTyp;
            element6.style.border="0";
            cell3.appendChild(element6);		                

            var element7 = document.createElement("input");
            element7.type = "hidden";
            element7.value=pLopTyp;
            element7.name="lopTyp"+repairTyp;
            element7.style.border="0";
            cell3.appendChild(element7);		                

            var element8 = document.createElement("input");
            element8.type = "hidden";
            element8.value=pLopGrpHier;
            element8.name="lopHier"+repairTyp;
            element8.style.border="0";
            cell3.appendChild(element8);              

            var element9 = document.createElement("input");
            element9.type = "hidden";
            element9.value=pLopGrp;
            element9.name="lopGrp"+repairTyp;
            element9.style.border="0";
            cell3.appendChild(element9);
    	} 
        var newrowcount=table1.rows.length;
        var count1=0
        var value=0;
        //alert("loadPrimaryLop(), part newrowcount "+newrowcount);
        for(var i=1; i<newrowcount; i++){   
        	var rowindex = table1.rows[i];
        	value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);
        	count1=parseFloat(count1)+value;
			//alert("count1 "+count1);
        	//alert("value "+value);
        } 
        var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");    		

		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;

		var totalRepairCost=0;
		var totalReplaceCost=0;

	    if(repairTyp=="Repair"){
			//alert("count1 "+count1);
        	document.getElementById("repairlaborhours").value=count1;
        	var totalrepairlabor=0;
        	totalrepairlabor=count1*parseFloat(window.opener.document.getElementById("repairlabrhrrate").value);
        	 document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
        	 totalRepairCost = totalRepairCost + parseFloat(document.getElementById("totalrepairlaborcost").value);
        	 document.getElementById("TotalRepairCost").value=totalRepairCost;
        	 totalReplaceCost = document.getElementById("TotalreplaceCost").value;
        }else{
        	document.getElementById("replacelaborhours").value=count1;
	        //alert(document.getElementById("replacelaborhours").value);
	        var totalreplacelabor=0;
	        totalreplacelabor=count1*parseFloat(document.getElementById("replacelabrhrrate").value);
	        //alert(totalreplacelabor);
	        document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
	        //alert(document.getElementById("totalreplacelaborcost").value);        	
	        
	        totalReplaceCost = totalReplaceCost + parseFloat(document.getElementById("totalreplacelaborcost").value);
	        document.getElementById("TotalreplaceCost").value=totalReplaceCost;
	        totalRepairCost = document.getElementById("TotalRepairCost").value;
	    }

		
	    var repAllowance=0.00;
	    var repAllowancepercent=0.00;
        if(totalReplaceCost!=0){        
        	repAllowance=totalRepairCost/totalReplaceCost;
        	repAllowancepercent=repAllowance*100;        	
        }
		//alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	    
		var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
		repairThreshold = parseFloat(document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42

		if(repAllowancepercent>=repairThreshold){     // Modified by t9453ss for PMO 472.42
    	document.getElementById("allowance").style.backgroundColor="#00FF00";
		document.getElementById("textcolor").value="#00FF00";	        
		document.getElementById("allowance").value=NamesDict.replaceMsg;
    	}else{
    	document.getElementById("allowance").style.backgroundColor="#FF3300";
		document.getElementById("textcolor").value="#FF3300";
		document.getElementById("allowance").value=NamesDict.repairMsg;
    	}
	        
	}
	
	function loadRelatedLop(pLopRepairTyp, rLopNum, rLopDesc, rLopHrs, rLopTyp, rLopGrpHier, rLopGrp){
		//alert("Inside loadRelatedLop()");
		var addFlag="true";
		var lopSelected;			
		var table1;
		var partLopSeq="";
		var partrowcount;
			
		if(pLopRepairTyp=="REPAIR") {	
			table1 = document.getElementById("repairlop");
			partrowcount=document.getElementById("repairpart").rows.length;
			repairTyp = "Repair";
		} else {
			table1 = document.getElementById("replacelop");
			partrowcount=document.getElementById("replacepart").rows.length;
			repairTyp = "Replace";
		} 	  	
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
		if(partrowcount<10){
			partrowcount="0"+partrowcount;
			//alert("loadRelatedLop(), partrowcount<10 so new partrowcount is::"+partrowcount);
		}
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	    var rowCount1 = table1.rows.length;
					
        for(var k=1; k<rowCount1; k++){
            var enteredrow=table1.rows[k];
			// Added by t9543un for LOP group hierarchy logic -- Start
            var enteredlopHier=enteredrow.cells[1].getElementsByTagName('input')[5].value;
            var enteredlopgrp=enteredrow.cells[1].getElementsByTagName('input')[6].value;
            var enteredlopTyp=enteredrow.cells[1].getElementsByTagName('input')[4].value;
            //alert("loadRelatedLop(), Entered lop::"+enteredrow.cells[0].getElementsByTagName('input')[0].value+" :rLopNum::"+rLopNum);
        	if(enteredrow.cells[0].getElementsByTagName('input')[0].value==rLopNum){	            		
        		enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
        		//alert("loadRelatedLop(), New lop part seq::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
        		addFlag="false";
        	}	
        	// LOP group hierarchy logic - Start
    		if(rLopGrpHier != null && rLopGrpHier != '' )
			{	            			
        		if(trim(enteredlopTyp)=='R' && trim(rLopTyp)=='R') {
        			var lopHierVal=trim(rLopGrpHier);
        			var enteredlopHierVal=trim(enteredlopHier);
        			//alert("loadRelatedLop(), lopHierVal::"+lopHierVal+" :enteredlopHierVal::"+enteredlopHierVal);
	            	if(lopHierVal==enteredlopHierVal) {					            			 
	            		var enteredlopgrpVal=trim(enteredlopgrp);
	            		var lopgrpVal=trim(rLopGrp);
	            		var entLopPre= (lopHierVal).indexOf(enteredlopgrpVal);
            			var LopPre=(lopHierVal).indexOf(lopgrpVal);
            			//alert("loadRelatedLop(), lopHierVal:: "+lopHierVal+" :entLopPre::"+entLopPre+" :LopPre::+"+LopPre);
	            		if(parseInt(entLopPre)<parseInt(LopPre)) {
	            			//Changing part sequence...
	            			//alert("loadRelatedLop(), Changing the part seq, before  ::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            			//alert("loadRelatedLop(), adding partrowcount::"+partrowcount);
	            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
	            			//alert("loadRelatedLop(), Changing the part seq, after  ::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            			addFlag="false";	
	            		} else if(parseInt(entLopPre)>parseInt(LopPre)) {
	            			partLopSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString()
	            			//alert("loadRelatedLop(), replacing with new lop, new partLopSeq..."+partLopSeq);
	            			table1.deleteRow(k);
	            			rowCount1--;
            				k--;
	            		}
	            	}
        		}
			}
			// LOP group hierarchy logic - End
	     } // End of For Loop
	     
	    rowCount1 = table1.rows.length;
        if(addFlag=="true"){
    		//alert("loadRelatedLop(), adding new related lop, rLopNum::"+rLopNum+" :partLopSeq::"+partLopSeq);
        	var row1 = table1.insertRow(rowCount1);
    		
    		var cell2 = row1.insertCell(0);
    	    var element2 = document.createElement("input");
    	    element2.type = "text";
    	    element2.value=rLopNum;
    	    element2.name="lop"+repairTyp;
    	    element2.size="8";
    	    element2.style.border="0";
    	    cell2.appendChild(element2);
    	            
    	    var cell3 = row1.insertCell(1);
    	    var element3 = document.createElement("input");
    	    element3.type = "text";
    	    element3.value=rLopDesc;
    	    element3.name="lopdesc"+repairTyp;
    	    element3.style.border="0";
    	    cell3.appendChild(element3);
    	    
    	    
    	    var element4 = document.createElement("input");
    	    element4.type = "hidden";
    	    element4.value=rLopHrs;
    	    element4.style.border="0";
    	    element4.name="lophr"+repairTyp;
    	    cell3.appendChild(element4);
    	    if(repairTyp=="Repair"){
    	    	partrowcount=document.getElementById("repairpart").rows.length;
    	    }else{
    	    	partrowcount=document.getElementById("replacepart").rows.length;
    	    }	
    	    // Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
    		if(partrowcount<10){
    			partrowcount="0"+partrowcount;
    			//alert("loadRelatedLop(), partrowcount<10 so new partrowcount is::"+partrowcount);
    		}
    		//alert("loadRelatedLop(), partLopSeq::"+partLopSeq);
    		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
    	    var element5 = document.createElement("input");
            element5.type = "hidden";
            if(partLopSeq==""){
            	element5.value="p"+partrowcount;
            }else{
            	element5.value=partLopSeq;
            }
            element5.name="partlopseq"+repairTyp;
            element5.style.border="0";
            cell3.appendChild(element5);
            
            var element6 = document.createElement("input");
            element6.type = "hidden";
            element6.value=1;
            element6.name="lopseq"+repairTyp;
            element6.style.border="0";
            cell3.appendChild(element6);

            var element7 = document.createElement("input");
            element7.type = "hidden";
            element7.value=rLopTyp;
            element7.name="lopTyp"+repairTyp;
            element7.style.border="0";
            cell3.appendChild(element7);
            
            var element8 = document.createElement("input");
            element8.type = "hidden";
            element8.value=rLopGrpHier;
            element8.name="lopHier"+repairTyp;
            element8.style.border="0";
            cell3.appendChild(element8);
            
            var element9 = x.parent.window.opener.document.createElement("input");
            element9.type = "hidden";
            element9.value=rLopGrp;
            element9.name="lopGrp"+repairTyp;
            element9.style.border="0";
            cell3.appendChild(element9);
        }
        var newrowcount=table1.rows.length;
        var count1=0
        var value=0;
        //alert("newrowcount "+newrowcount);
        for(var i=1; i<newrowcount; i++){            
        	var rowindex = table1.rows[i];
        	//alert("rowindex... "+rowindex);
        	//alert(rowindex.cells[1].childNodes[1].value);
			value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);				
        	//alert("value... "+value);
			count1=parseFloat(count1)+value; 
			//alert("count1..."+count1);  	
        } 
        var repairparttable=document.getElementById("repairpart");
		var repairloptable=document.getElementById("repairlop");
		var replaceparttable=document.getElementById("replacepart");
		var replaceloptable=document.getElementById("replacelop");
		
		document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
		document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
		document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
		document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
		var totalRepairCost=0;
		var totalReplaceCost=0;
		// alert("repairTyp::"+repairTyp);
        if(repairTyp=="Repair"){        	
        	document.getElementById("repairlaborhours").value=count1;
        	// alert(document.getElementById("repairlaborhours").value);
        	var totalrepairlabor=0;
        	totalrepairlabor=count1*parseFloat(document.getElementById("repairlabrhrrate").value);
        	// alert(totalrepairlabor);
        	document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
        	// alert(document.getElementById("totalrepairlaborcost").value);
        	 
        	totalRepairCost=parseFloat(document.getElementById("totalrepairpartscost").value)+parseInt(document.getElementById("totalrepairlaborcost").value);
        	// alert(totalRepairCost);
            document.getElementById("TotalRepairCost").value=totalRepairCost;
            totalReplaceCost = document.getElementById("TotalreplaceCost").value;
          	// alert(document.getElementById("TotalRepairCost").value);            	
        }else{            	
        	document.getElementById("replacelaborhours").value=count1;
        	// alert(document.getElementById("replacelaborhours").value);
        	var totalreplacelabor=0;
        	totalreplacelabor=count1*parseFloat(document.getElementById("replacelabrhrrate").value);
        	// alert(totalreplacelabor);
        	document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
        	// alert(document.getElementById("totalreplacelaborcost").value);        	
        
        	totalReplaceCost=parseFloat(document.getElementById("totalreplacepartscost").value)+parseInt(document.getElementById("totalreplacelaborcost").value);
        	document.getElementById("TotalreplaceCost").value=totalReplaceCost;
        	totalRepairCost = document.getElementById("TotalRepairCost").value;
            // alert(document.getElementById("TotalreplaceCost").value);        	
        }
        var repAllowance=0.00;
        var repAllowancepercent=0.00;
        if(totalReplaceCost!=0) {        
        	repAllowance=totalRepairCost/totalReplaceCost;
        	repAllowancepercent=repAllowance*100;        	
        }
        // alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	    // alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);

		var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
		repairThreshold = parseFloat(document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42

        if(repAllowancepercent>=repairThreshold){    // Modified by t9453ss for PMO 472.42	        	
        	document.getElementById("allowance").style.backgroundColor="#00FF00";
			document.getElementById("textcolor").value="#00FF00";
			document.getElementById("allowance").value=NamesDict.replaceMsg;
        }else{
        	document.getElementById("allowance").style.backgroundColor="#FF3300";
			document.getElementById("textcolor").value="#FF3300";
			document.getElementById("allowance").value=NamesDict.repairMsg;
        }
        
	}
	// Single PLOP Logic changes by T0984NG - End


	function toActivateTooltip(){

	var table = document.getElementById("repairlop");
    var newrowcount=table.rows.length;
	for(var i=1; i<newrowcount; i++)
    {
		var rowindex = table.rows[i];
		rowindex.cells[1].getElementsByTagName('input')[0].onmouseover = function(){showTooltip()};
		rowindex.cells[1].getElementsByTagName('input')[0].onmouseout = function(){hideTooltip()};
		
	}

	
	var table = document.getElementById("replacelop");
    var newrowcount=table.rows.length;
	for(var i=1; i<newrowcount; i++)
    {
		var rowindex = table.rows[i];
		rowindex.cells[1].getElementsByTagName('input')[0].onmouseover = function(){showTooltip()};
		rowindex.cells[1].getElementsByTagName('input')[0].onmouseout = function(){hideTooltip()};
		
	}

	var table = document.getElementById("repairpart");
    var newrowcount=table.rows.length;
	for(var i=1; i<newrowcount; i++)
    {
		var rowindex = table.rows[i];
		rowindex.cells[2].getElementsByTagName('input')[0].onmouseover = function(){showTooltip()};
		rowindex.cells[2].getElementsByTagName('input')[0].onmouseout = function(){hideTooltip()};
		
	}

	var table = document.getElementById("replacepart");
    var newrowcount=table.rows.length;
	for(var i=1; i<newrowcount; i++)
    {
		var rowindex = table.rows[i];
		rowindex.cells[2].getElementsByTagName('input')[0].onmouseover = function(){showTooltip()};
		rowindex.cells[2].getElementsByTagName('input')[0].onmouseout = function(){hideTooltip()};
		
	}

	}
	function checkLOPSize(repairTyp,primaryloptableId){
		var table=document.getElementById(primaryloptableId);
		var rowCount=table.rows.length;
		if(rowCount==2){
			 var row = table.rows[1];
		     var checkboxObject = row.cells[0].getElementsByTagName('input')[0];
		     checkboxObject.checked=true;
		     submitLOPrequest(repairTyp,primaryloptableId);
		}
		if(rowCount==1){
			closePLOP()	
		}
		
	
	}
	
	function checkRLOPSize(obj,relatedlopid,repairTyp){
		//alert("Inside checkRLOPSize()");
		var table=document.getElementById(relatedlopid);
		var rowCount=table.rows.length;
		//alert("checkRLOPSize, Related lop rowCount::"+rowCount);
		if(rowCount==2){
			 var row = table.rows[1];
		     var checkboxObject = row.cells[0].getElementsByTagName('input')[0];
		     checkboxObject.checked=true;
		     //alert("checkRLOPSize(), rowCount==2, Calling addRelatedLOP()");
		     addRelatedLOP(relatedlopid,repairTyp);
		}
		if(rowCount==1){
			closeRLOP();
		}
		if(rowCount>2){
			//alert("checkRLOPSize(), rowCount>2, Calling loadTable()");
			loadTable(repairTyp,relatedlopid);
			rowCount=table.rows.length;
			/*if(rowCount<=2){
				checkRLOPSize(obj,relatedlopid,repairTyp);
			}*/
			if(rowCount==1){
				closeRLOP();
			}
			
		}
	}
	
	function loadTable(repairTyp,rloptableid){
		//alert("Inside loadTable()");
		var loptable;
		
		if(repairTyp=="Repair"){
			loptable = window.opener.document.getElementById("repairlop");
		}else{
			loptable = window.opener.document.getElementById("replacelop");
		}
		
		var Prttable;

		if(repairTyp=="Repair"){
			Prttable=window.opener.document.getElementById("repairpart");
		     	    	
		 }else{
		    Prttable=window.opener.document.getElementById("replacepart");
		     	    	
		 }
		var partrowcount=Prttable.rows.length;
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
		if(partrowcount<10){
			partrowcount="0"+partrowcount;
			//alert("Related Lop loadTable(), partrowcount<10 so new partrowcount is::"+partrowcount);
		}
		// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
		var lopcount=loptable.rows.length;
		var table = document.getElementById(rloptableid);
		var rowCount = table.rows.length;
		for(var j=1; j<rowCount; j++){
			var row=table.rows[j];
			var lopCd=row.cells[0].getElementsByTagName('input')[0].value;
			
			for(var i=1; i<lopcount; i++){
				
				var loprow=loptable.rows[i];
				var existinglopCd=loprow.cells[0].getElementsByTagName('input')[0].value;
				if(trim(lopCd)==trim(existinglopCd)){
					table.deleteRow(j);
					rowCount--;
    				j--;
    				loprow.cells[1].getElementsByTagName('input')[2].value=loprow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString()
				}
			}
		}
	}
	
function addRelatedLOP(rloptableid,repairTyp){
		//alert("Inside addRelatedLOP()");
		try {
			//Added for LOP grp hier requirement -- by t9543un - Start
			var Prttable;

			if(repairTyp=="Repair"){
				Prttable=window.opener.document.getElementById("repairpart");
			     	    	
			 }else{
			    Prttable=window.opener.document.getElementById("replacepart");
			     	    	
			 }
			//Added for LOP grp hier requirement -- by t9543un - End
			//for lop table in main parent page
			var addFlag="true";
			var lopSelected;			
			var table1;
			var partLopSeq="";
			if(repairTyp=="Repair"){
				table1 = window.opener.document.getElementById("repairlop");
			}else{
				table1 = window.opener.document.getElementById("replacelop");
			}
				//end: for lop table in main parent page
			var partrowcount;
			 if(repairTyp=="Repair"){
    	    	partrowcount=window.opener.document.getElementById("repairpart").rows.length;
    	    	
    	    }else{
    	    	partrowcount=window.opener.document.getElementById("replacepart").rows.length;
    	    	
    	    }
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
			if(partrowcount<10){
				partrowcount="0"+partrowcount;
				//alert("Related Lop addRelatedLOP(), partrowcount<10 so new partrowcount is::"+partrowcount);
			}
			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End 
			var table = document.getElementById(rloptableid);
			var rowCount = table.rows.length;
	        var count=0;
			     
	        for(var i=0; i<rowCount; i++) {
	        	partLopSeq="";
	        	addFlag="true";
	            var row = table.rows[i];
	            var chkbox = row.cells[0].getElementsByTagName('input')[0];
	          
	            if(null != chkbox && true == chkbox.checked) {
	            	count++;
	            	// PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes Start
	            	var lopdesctxt=row.cells[1].getElementsByTagName('input')[0];
	            	var lophrs=row.cells[1].getElementsByTagName('input')[1];	            	
	            	var loptyp=row.cells[1].getElementsByTagName('input')[2];	            	
	            	var lopHier=row.cells[1].getElementsByTagName('input')[3];
	            	var lopgrp=row.cells[1].getElementsByTagName('input')[4];
	            	//alert("row.cells[1].childNodes[0].lopdesctxt::"+lopdesctxt.value);
					//alert("row.cells[1].childNodes[2].lophrs::"+lophrs.value);
					//alert("row.cells[1].childNodes[4].loptyp::"+loptyp.value);
					//alert("row.cells[1].childNodes[6].lopHier::"+lopHier.value);
					//alert("row.cells[1].childNodes[8].lopgrp::"+lopgrp.value);      
					// PMO 472.53 Changes - SeRV01134252 - DIPAP DC IE10 Changes End
					
	            	
	            	lopSelected=chkbox.value;
	            	var rowCount1 = table1.rows.length;
					
	            	for(var k=1; k<rowCount1; k++){
		            	var enteredrow=table1.rows[k];
						// Added by t9543un for LOP group hierarchy logic -- Start
		            	var enteredlopHier=enteredrow.cells[1].getElementsByTagName('input')[5].value;
		            	var enteredlopgrp=enteredrow.cells[1].getElementsByTagName('input')[6].value;
		            	var enteredlopTyp=enteredrow.cells[1].getElementsByTagName('input')[4].value;
		            	var enteredlopHrs=enteredrow.cells[1].getElementsByTagName('input')[1].value;
		            	var enteredlopDesc=enteredrow.cells[1].getElementsByTagName('input')[0].value;
		            	//alert("--enteredlopDesc--   "+enteredlopDesc);
	            		if(enteredrow.cells[0].getElementsByTagName('input')[0].value==lopSelected){
	            			//alert("addRelatedLOP(), lop already exist, lopSelected::"+lopSelected);
	            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
	            			//alert("addRelatedLOP(), New partlopcount::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            			addFlag="false";
	            		}	
	            		if(lopHier.value != null && lopHier.value != '' )
            			{ 
	            				
			            		if(trim(enteredlopTyp)=='R' && trim(loptyp.value)=='R'){
			            			  var lopHierVal=trim(lopHier.value);
			            			  var enteredlopHierVal=trim(enteredlopHier);
					            	if(lopHierVal==enteredlopHierVal){
					            			 
					            		var enteredlopgrpVal=trim(enteredlopgrp);
					            		var lopgrpVal=trim(lopgrp.value);
					            		var entLopPre= (lopHierVal).indexOf(enteredlopgrpVal);
				            			var LopPre=(lopHierVal).indexOf(lopgrpVal);
				            			//alert("addRelatedLOP(), lopHierVal:: "+lopHierVal+" ::entLopPre:: "+entLopPre+" ::LopPre:: "+LopPre);
					            		if(parseInt(entLopPre)<parseInt(LopPre)){
					            			//Changing part sequence...					            			
					            			//alert("addRelatedLOP(), New Lop is of lower group so updating Prttable...partrowcount:: "+partrowcount+" :partrowcount-1:: "+(partrowcount-1));
					            			if(trim(Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value)==''){
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value=lopSelected;						            			
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[5].value=lopgrp.value;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[6].value=lopHierVal;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[7].value=lophrs.value;
						            			Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[8].value=lopdesctxt.value;
						            			//alert("--lopdesctxt.value--   "+lopdesctxt.value);
						            			//alert("rellop,...."+Prttable.rows[partrowcount-1].cells[3].getElementsByTagName('input')[4].value);					            			
					            			}				            			
					            			
					            			enteredrow.cells[1].getElementsByTagName('input')[2].value=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
					            			//alert("addRelatedLOP(), New partlopcount::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
					            			addFlag="false";
					            				
					            				
					            		}else if(parseInt(entLopPre)>parseInt(LopPre)){
					            			
					            			var existingpartLOPSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value;
					            			existingpartLOPSeq=trim(existingpartLOPSeq.substring(1));
					            			//alert("addRelatedLOP(), replacing the lop, existingpartLOPSeq.."+existingpartLOPSeq);
					            			//alert("addRelatedLOP(), existingpartLOPSeq.length/2::"+existingpartLOPSeq.length/2);
					            			//alert("existingpartLOPSeq.length..."+existingpartLOPSeq.length);
					            			// Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - Start
					            			//for(var i=1;i<=existingpartLOPSeq.length;i++){
					            			for(var n1=1;n1<=(existingpartLOPSeq.length/2);n1++){
					            				var index=0;
					            				//alert("n1::"+n1);
					            				//if(i==existingpartLOPSeq.length){
					            				if(n1==(existingpartLOPSeq.length/2)){
					            					//alert("In if, existingpartLOPSeq.substring((n1*2)-2)::"+existingpartLOPSeq.substring((n1*2)-2));
					            					//index=parseInt(existingpartLOPSeq.substring(i-1));
					            					index=parseInt(existingpartLOPSeq.substring((n1*2)-2),10);
					            					//alert("addRelatedLOP(), index in if..."+index);
					            				}else{
					            					//alert("In Else, existingpartLOPSeq.substring((n1*2)-2,(n1*2))::"+existingpartLOPSeq.substring((n1*2)-2,(n1*2)));
					            					//index=parseInt(existingpartLOPSeq.substring(i-1,i));
					            					index=parseInt(existingpartLOPSeq.substring((n1*2)-2,(n1*2)),10);
					            					//alert("addRelatedLOP(), index in else..."+index);
					            				}
					            				//alert("addRelatedLOP(), index outside:: "+index);
					            				// Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - End
					            				if(trim(Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value)==''){
						            				Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value=enteredrow.cells[0].getElementsByTagName('input')[0].value;							            			
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[5].value=enteredlopgrpVal;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[6].value=lopHierVal;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[7].value=enteredlopHrs;
							            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[8].value=enteredlopDesc;
					            				}
					            			}
					            			//alert("rlop in part..."+Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value);
					            			partLopSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value+partrowcount.toString();
					            			//alert("addRelatedLOP(), partLopSeq::"+partLopSeq);
					            			//alert("k..."+k);
					            			table1.deleteRow(k);
					            			rowCount1--;
				            				k--;
					            				
					            			//alert("addFlag..."+addFlag)	;
					            				
					            		}
					            	
					            	}
			            		}
			            	
            			}
					// Added by t9543un for LOP group hierarchy logic - End 
	            	}
	            	rowCount1 = table1.rows.length;
		            if(addFlag=="true"){
		            	//alert("addRelatedLOP(), Inside addFlag true, lop::"+chkbox.value+" :partLopSeq:: "+partLopSeq+" :partrowcount:: "+partrowcount);
		            	var row1 = table1.insertRow(rowCount1);
		        		
		        		var cell2 = row1.insertCell(0);
		        	    var element2 = window.opener.document.createElement("input");
		        	    element2.type = "text";
		        	    element2.value=chkbox.value;
		        	    element2.name="lop"+repairTyp;
		        	    element2.size="8";
		        	    element2.style.border="0";
		        	    cell2.appendChild(element2);
		        	            
		        	    var cell3 = row1.insertCell(1);
		        	    var element3 = window.opener.document.createElement("input");
		        	    element3.type = "text";
		        	    element3.value=lopdesctxt.value;
		        	    element3.onmouseover = (function (){showTooltip();});
						element3.onmouseout = (function (){hideTooltip();});
		        	    element3.name="lopdesc"+repairTyp;
						element3.id="lopdesc"+repairTyp;
						element3.size="45";
		    
						element3.style.border="0";

					    cell3.appendChild(element3);

						
		        	    
		        	    var element4 = window.opener.document.createElement("input");
		        	    element4.type = "hidden";
		        	    element4.value=lophrs.value;
		        	    element4.style.border="0";
		        	    element4.name="lophr"+repairTyp;
		        	    cell3.appendChild(element4);
		        	    if(repairTyp=="Repair"){
		        	    	partrowcount=window.opener.document.getElementById("repairpart").rows.length;
		        	    }else{
		        	    	partrowcount=window.opener.document.getElementById("replacepart").rows.length;
		        	    }	
		        	    // Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
		    			if(partrowcount<10){
		    				partrowcount="0"+partrowcount;
		    				//alert("Related Lop addRelatedLOP() adding lop, partrowcount<10 so new partrowcount is::"+partrowcount);
		    			}
		    			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End 
		        	    var element5 = window.opener.document.createElement("input");
		                element5.type = "hidden";
		                if(partLopSeq==""){
		                	element5.value="p"+partrowcount;
		                }else{
		                	element5.value=partLopSeq;
		                }
		                element5.name="partlopseq"+repairTyp;
		                element5.style.border="0";
		                cell3.appendChild(element5);
		                
		                var element6 = window.opener.document.createElement("input");
		                element6.type = "hidden";
		                element6.value=i+1;
		                element6.name="lopseq"+repairTyp;
		                element6.style.border="0";
		                cell3.appendChild(element6);
		
		                var element7 = window.opener.document.createElement("input");
			            element7.type = "hidden";
			            element7.value=loptyp.value;
			            element7.name="lopTyp"+repairTyp;
			            element7.style.border="0";
			            cell3.appendChild(element7);
			            
			            var element8 = window.opener.document.createElement("input");
		                element8.type = "hidden";
		                element8.value=lopHier.value;
		                element8.name="lopHier"+repairTyp;
		                element8.style.border="0";
		                cell3.appendChild(element8);
		                
		                var element9 = window.opener.document.createElement("input");
		                element9.type = "hidden";
		                element9.value=lopgrp.value;
		                element9.name="lopGrp"+repairTyp;
		                element9.style.border="0";
		                cell3.appendChild(element9);

						
				
				/*		
				var cell4 = row1.insertCell(2);
						var element10 = window.opener.document.createElement("div");  	
						if(repairTyp=='Repair'){
							element10.id="repairTooltip";
						}else{
							element10.id="replaceTooltip";
						}
						element10.style.border = '2px solid #333333';
						element10.style.backgroundColor = '#fffedf';
						element10.style.position = 'absolute';
						element10.style.width='170px';
						element10.style.fontSize = '10px';
					//	element10.setAttribute('style','font-size:small');
		        	    cell4.appendChild(element10);*/
					
		        	//    var element10 = row1.insertCell(1);
					var cell4 = row1.insertCell(2);
					var element10 = window.opener.document.createElement("div");  	
						if(repairTyp=='Repair'){
							element10.id="repairTooltip";
						}else{
							element10.id="replaceTooltip";
						}
						element10.style.padding = '5px';
						element10.style.display = 'none';
						element10.style.border = '2px solid #333333';
						element10.style.backgroundColor = '#fffedf';
						element10.style.position = 'absolute';
						element10.style.width='170px';
						element10.style.fontSize = '10px';
						cell4.appendChild(element10);
		        	    
		            }
	            
	        }
	        }
	        var newrowcount=table1.rows.length;
	        var count1=0
	        var value=0;
	        //alert("newrowcount "+newrowcount);
	        for(var i=1; i<newrowcount; i++){
	            
	        	var rowindex = table1.rows[i];
	        	//alert("rowindex... "+rowindex);
	        	//alert(rowindex.cells[1].childNodes[1].value);
				// Modified from parseInt to parseFloat by t9543un - Start
	        	//value=parseInt(rowindex.cells[1].childNodes[1].value);
				value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);				
	        	//alert("value... "+value);
	        	//count1=parseInt(count1)+value;
				count1=parseFloat(count1)+value; 
				//alert("count1..."+count1);
				// Modified from parseInt to parseFloat by t9543un - End	        	
	        } 
	        var repairparttable=window.opener.document.getElementById("repairpart");
    		var repairloptable=window.opener.document.getElementById("repairlop");
    		var replaceparttable=window.opener.document.getElementById("replacepart");
    		var replaceloptable=window.opener.document.getElementById("replacelop");
    		
    		
    		window.opener.document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
    		window.opener.document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
    		window.opener.document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
    		window.opener.document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
    		var totalRepairCost=0;
    		var totalReplaceCost=0;
			//alert("repairTyp::"+repairTyp);
	        if(repairTyp=="Repair"){
	        	
	        	window.opener.document.getElementById("repairlaborhours").value=count1;
	        	// alert(document.getElementById("repairlaborhours").value);
	        	var totalrepairlabor=0;
	        	totalrepairlabor=count1*parseFloat(window.opener.document.getElementById("repairlabrhrrate").value);
	        	 //alert(totalrepairlabor);
	        	window.opener.document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
	        	 //alert(document.getElementById("totalrepairlaborcost").value);
	        	 
	        	totalRepairCost=parseFloat(window.opener.document.getElementById("totalrepairpartscost").value)+parseInt(window.opener.document.getElementById("totalrepairlaborcost").value);
	        	//alert(totalRepairCost);
	            window.opener.document.getElementById("TotalRepairCost").value=totalRepairCost;
	            totalReplaceCost = window.opener.document.getElementById("TotalreplaceCost").value;
	          //  alert(document.getElementById("TotalRepairCost").value);
	            	
	        }else{
	            	
	        	window.opener.document.getElementById("replacelaborhours").value=count1;
	        	//alert(document.getElementById("replacelaborhours").value);
	        	var totalreplacelabor=0;
	        	totalreplacelabor=count1*parseFloat(window.opener.document.getElementById("replacelabrhrrate").value);
	        	//alert(totalreplacelabor);
	        	window.opener.document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
	        	//alert(window.opener.document.getElementById("totalreplacelaborcost").value);
	        	
	        
	        	totalReplaceCost=parseFloat(window.opener.document.getElementById("totalreplacepartscost").value)+parseInt(window.opener.document.getElementById("totalreplacelaborcost").value);
	        	window.opener.document.getElementById("TotalreplaceCost").value=totalReplaceCost;
	        	totalRepairCost = window.opener.document.getElementById("TotalRepairCost").value;
	           // alert(document.getElementById("TotalreplaceCost").value);
	        	
	        }
	        //alert("Before calculateWorksheetAllowance");
	        //calculateWorksheetAllowance(totalRepairCost, totalReplaceCost);
	        //alert("After calculateWorksheetAllowance");
	        //alert("totalRepairCost::"+totalRepairCost);
	       // alert("totalReplaceCost::"+totalReplaceCost);
			
			var repAllowance=0.00;
	        var repAllowancepercent=0.00;
	        if(totalReplaceCost!=0){
	        
	        	repAllowance=totalRepairCost/totalReplaceCost;
	        	repAllowancepercent=repAllowance*100;
				//alert("totalRepairCost:"+window.opener.document.getElementById("TotalRepairCost").value+ "::totalReplaceCost"+window.opener.document.getElementById("TotalRepairCost").value+":: Allowance ::"+ repAllowancepercent);
	        	
	        }
		    //alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	        //alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);
			var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
		    repairThreshold = parseFloat(window.opener.document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42

	        if(repAllowancepercent>=repairThreshold){	   // Modified by t9453ss for PMO 472.42
				
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#00FF00";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#00FF00";
				window.opener.document.getElementById("allowance").value=NamesDict.replaceMsg;
	        }else{
	        	window.opener.document.getElementById("allowance").style.backgroundColor="#FF3300";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				window.opener.document.getElementById("textcolor").value="#FF3300";
				window.opener.document.getElementById("allowance").value=NamesDict.repairMsg;
	      
						
				}
				//alert(x.opener.document.getElementById("allowance").value);
				window.opener.document.getElementById("toActivateTooltip").click();
	        }catch(e) {
	            //alert(e);
	        }
		if(count==0){
	
			alert(ErrorsDict.errRelatedLOP);
			return;
	
		}else{
		//	window.opener.getElementById("toActivateTooltip").click();
			window.close();	
		}
			


		//x.parent.window.opener.document.getElementById("part").value="";
	
	    //x.parent.window.opener.document.getElementById("desc").value="";
	    //x.parent.window.opener.document.getElementById("qty").value="";
		
	
	}
function addLOP(repairTyp,relLOP,relLOPDesc,relLOPGrp,relLOPGrpHier,relLOPhrs,lopPartSeq,xx){
	try{
		//alert("Inside addLOP(), relLOP::"+relLOP+" having lopPartSeq::"+lopPartSeq+" with relLOPGrpHier::"+relLOPGrpHier+" and relLOPGrp::"+relLOPGrp);
		//alert("--relLOPGrpHier in addLOP--   "+relLOPGrpHier);
		//alert("--relLOPGrp in addLOP--   "+relLOPGrp);
		var table1;
		var Prttable;
		var addFlag=true;
		
		if(repairTyp=="Repair"){
			table1 = document.getElementById("repairlop");
			Prttable = document.getElementById("repairpart");
		}else{
			table1 = document.getElementById("replacelop");
			Prttable = document.getElementById("replacepart");
		}
		//alert("table1..."+table1);
		var rowCount1 =	table1.rows.length;
		
		//alert("row1..."+row1);
		//alert("lopPartSeq..."+lopPartSeq);
		for(var k=1; k<rowCount1; k++){
			addFlag=true;
			var enteredrow=table1.rows[k];
        	
        	var oldLOP=enteredrow.cells[0].getElementsByTagName('input')[0].value;
        	var oldLOPDesc=enteredrow.cells[1].getElementsByTagName('input')[0].value;
        	var oldLOPHrs=enteredrow.cells[1].getElementsByTagName('input')[1].value;
        	var oldLOPPartSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value;
        	var oldLOPSeq=enteredrow.cells[1].getElementsByTagName('input')[3].value;
        	var oldLOPTyp=enteredrow.cells[1].getElementsByTagName('input')[4].value;
        	var oldLOPGrpHier=enteredrow.cells[1].getElementsByTagName('input')[5].value;
        	var oldLOPGrp=enteredrow.cells[1].getElementsByTagName('input')[6].value;
        	//alert("addLOP(), oldLOP::"+oldLOP+" :relLOP::"+relLOP+" :lopPartSeq::"+lopPartSeq);
        	if(oldLOP==relLOP){
        		
        		enteredrow.cells[1].getElementsByTagName('input')[2].value=lopPartSeq;
        		addFlag=false;
        	}
        	//alert("addLOP(), relLOPGrpHier::"+relLOPGrpHier+" :oldLOPGrpHier::"+oldLOPGrpHier);
        	if(relLOPGrpHier!=null && trim(relLOPGrpHier)!='' && oldLOPGrpHier!=null && trim(oldLOPGrpHier)!=''){
        		if(trim(oldLOPTyp)=='R' ){
        			if(trim(relLOPGrpHier)==trim(oldLOPGrpHier)){
	        			var oldLopPre= (trim(oldLOPGrpHier)).indexOf(trim(oldLOPGrp));
	        			var RelLopPre=(trim(relLOPGrpHier)).indexOf(trim(relLOPGrp));
	        			var lopPartSeqsub=lopPartSeq.substring(1);
	        		//	alert("addLOP(), oldLOPGrpHier::"+oldLOPGrpHier+" :oldLopPre::"+oldLopPre+" :RelLopPre::"+RelLopPre);
	        			//alert("addLOP(), lopPartSeqsub..."+lopPartSeqsub);
	        			if(oldLopPre!=-1 && RelLopPre!=-1){
	        			if(parseInt(oldLopPre)<parseInt(RelLopPre)){
	        				//alert("addLOP(), lower precedence lop, lopPartSeq::"+lopPartSeq);
	        				enteredrow.cells[1].getElementsByTagName('input')[2].value=lopPartSeq;
	            			addFlag=false;
	        				
	        			}else if(parseInt(oldLopPre)>parseInt(RelLopPre)){
	        				var existingpartLOPSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value;
	            			existingpartLOPSeq=trim(existingpartLOPSeq.substring(1));
	            			//alert("addLOP(), higher precedence lop, replacing old lop, existingpartLOPSeq::"+existingpartLOPSeq);
	            			// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - Start
	            			//for(var el=1;el<=existingpartLOPSeq.length;el++){
	            			for(var e1=1;e1<=existingpartLOPSeq.length/2;e1++){
	            				var index=0;
	            				//if(el==existingpartLOPSeq.length){
	            					//index=parseInt(existingpartLOPSeq.substring(el-1));
	            				if(e1==existingpartLOPSeq.length/2){
	            					index=parseInt(existingpartLOPSeq.substring((e1*2)-2),10);	            					
	            				}else{
	            					//index=parseInt(existingpartLOPSeq.substring(el-1,el));
	            					index=parseInt(existingpartLOPSeq.substring((e1*2)-2,(e1*2)),10);
	            				}
	            				//alert("addLOP(), higher precedence lop, index::"+index);
	            				// Part Greater than 10 Issue - Added by T0984NG for PMO# 472.46 - End
	            				if(trim(Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value)==''){
		            			//	alert("addLOP(), adding old lop::"+oldLOP+" in Part table with oldLOPGrp::"+oldLOPGrp+" and oldLOPGrpHier::"+oldLOPGrpHier+" at partseq::"+index);
	            					Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value=oldLOP;
			            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[5].value=oldLOPGrp;
			            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[6].value=oldLOPGrpHier;
			            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[7].value=oldLOPHrs;
			            			Prttable.rows[index-1].cells[3].getElementsByTagName('input')[8].value=oldLOPDesc;
	            				}
		            		}
	            			//alert("rlop in part..."+Prttable.rows[index-1].cells[3].getElementsByTagName('input')[4].value);
	            			//alert("addLOP(), Before lop seq::"+enteredrow.cells[1].getElementsByTagName('input')[2].value);
	            			lopPartSeq=enteredrow.cells[1].getElementsByTagName('input')[2].value+lopPartSeqsub.toString()
	            			//alert("addLOP() After lop seq::"+lopPartSeq);
	            			
	            			table1.deleteRow(k);
	            			rowCount1--;
	        				k--;
	            			}
	        			}
	        			}
        			}
        		}
			}
		//alert("--addFlag in addLOP--   "+addFlag);
			if(addFlag==true){
				var rowCount1 =	table1.rows.length;
				var row1 = table1.insertRow(rowCount1);
				xx++;
				//alert("addLOP(), Inside addFlag true, Adding relLOP:: "+relLOP+" :lopPartSeq:: "+lopPartSeq+" :relLOPGrpHier:: "+relLOPGrpHier);
				var cell2 = row1.insertCell(0);
		 	    var element2 = document.createElement("input");
		 	    element2.type = "text";
		 	    element2.value=relLOP;
		 	    element2.name="lop"+repairTyp;
		 	    element2.size="8";
		 	    element2.style.border="0";
		 	    cell2.appendChild(element2);
		 	            
		 	    var cell3 = row1.insertCell(1);
		 	    var element3 = document.createElement("input");
		 	    element3.type = "text";
		 	    element3.value=relLOPDesc;
		 	    element3.name="lopdesc"+repairTyp;
				element3.id="lopdesc"+repairTyp;
				element3.onmouseover = (function (){showTooltip();});
				element3.onmouseout = (function (){hideTooltip();});
				element3.size="45";
				element3.style.border="0";
			    cell3.appendChild(element3);
			   
		 	    var element4 = document.createElement("input");
		 	    element4.type = "hidden";
		 	    element4.value=relLOPhrs;
		 	    element4.style.border="0";
		 	    element4.name="lophr"+repairTyp;
		 	    cell3.appendChild(element4);
		 	    	
		 	    var element5 = document.createElement("input");
		        element5.type = "hidden";
		        element5.value=lopPartSeq;
		        element5.name="partlopseq"+repairTyp;
		        element5.style.border="0";
		        cell3.appendChild(element5);
		         
		        var element6 = document.createElement("input");
		        element6.type = "hidden";
		        element6.value=rowCount1+1;
		        element6.name="lopseq"+repairTyp;
		        element6.style.border="0";
		        cell3.appendChild(element6);
		
		        var element7 = document.createElement("input");
		        element7.type = "hidden";
		        element7.value="R";
		        element7.name="lopTyp"+repairTyp;
		        element7.style.border="0";
		        cell3.appendChild(element7);
		         
		        var element8 = document.createElement("input");
		        element8.type = "hidden";
		        element8.value=relLOPGrpHier;
		        element8.name="lopHier"+repairTyp;
		        element8.style.border="0";
		        cell3.appendChild(element8);
		         
		        var element9 = document.createElement("input");
		        element9.type = "hidden";
		        element9.value=relLOPGrp;
		        element9.name="lopGrp"+repairTyp;
		        element9.style.border="0";
		        cell3.appendChild(element9);
		        
		        var cell4 = row1.insertCell(2);
				var element10 = document.createElement("div");  	
				if(repairTyp=='Repair'){
					element10.id="repairTooltip";
				}else{
					element10.id="replaceTooltip";
				}
				element10.style.padding = '5px';
				element10.style.display = 'none';
				element10.style.border = '2px solid #333333';
				element10.style.backgroundColor = '#fffedf';
				element10.style.position = 'absolute';
				element10.style.width='170px';
				element10.style.fontSize = '10px';
				cell4.appendChild(element10);
				 
			
			}
			//alert("after adding... ");
			var newrowcount=table1.rows.length;
	        var count1=0
	        var value=0;
	        //alert("newrowcount "+newrowcount);
	        for(var i=1; i<newrowcount; i++){
	            
	        	var rowindex = table1.rows[i];
	        	//alert("rowindex... "+rowindex);
	        	//alert(rowindex.cells[1].childNodes[1].value);
				// Modified from parseInt to parseFloat by t9543un - Start
	        	//value=parseInt(rowindex.cells[1].childNodes[1].value);
				value=parseFloat(rowindex.cells[1].getElementsByTagName('input')[1].value);				
	        	//alert("value... "+value);
	        	//count1=parseInt(count1)+value;
				count1=parseFloat(count1)+value; 
				//alert("count1..."+count1);
				// Modified from parseInt to parseFloat by t9543un - End	        	
	        } 
	        var repairparttable=document.getElementById("repairpart");
			var repairloptable=document.getElementById("repairlop");
			var replaceparttable=document.getElementById("replacepart");
			var replaceloptable=document.getElementById("replacelop");
			
			
			document.getElementById("repairpartcount").value=parseInt(repairparttable.rows.length)-1;
			document.getElementById("repairlopcount").value=parseInt(repairloptable.rows.length)-1;
			document.getElementById("replacepartcount").value=parseInt(replaceparttable.rows.length)-1;
			document.getElementById("replacelopcount").value=parseInt(replaceloptable.rows.length)-1;
			var totalRepairCost=0;
			var totalReplaceCost=0;
			//alert("repairTyp::"+repairTyp);
	        if(repairTyp=="Repair"){
	        	
	        	document.getElementById("repairlaborhours").value=count1;
	        	// alert(document.getElementById("repairlaborhours").value);
	        	var totalrepairlabor=0;
	        	totalrepairlabor=count1*parseFloat(document.getElementById("repairlabrhrrate").value);
	        	 //alert(totalrepairlabor);
	        	document.getElementById("totalrepairlaborcost").value=totalrepairlabor;
	        	 //alert(document.getElementById("totalrepairlaborcost").value);
	        	 
	        	totalRepairCost=parseFloat(document.getElementById("totalrepairpartscost").value)+parseInt(document.getElementById("totalrepairlaborcost").value);
	        	// alert(totalRepairCost);
	            document.getElementById("TotalRepairCost").value=totalRepairCost;
	            totalReplaceCost = document.getElementById("TotalreplaceCost").value;
	          //  alert(document.getElementById("TotalRepairCost").value);
	            	
	        }else{
	            	
	        	document.getElementById("replacelaborhours").value=count1;
	        	//alert(document.getElementById("replacelaborhours").value);
	        	var totalreplacelabor=0;
	        	totalreplacelabor=count1*parseFloat(document.getElementById("replacelabrhrrate").value);
	        	//alert(totalreplacelabor);
	        	document.getElementById("totalreplacelaborcost").value=totalreplacelabor;
	        	//alert(document.getElementById("totalreplacelaborcost").value);
	        	
	        
	        	totalReplaceCost=parseFloat(document.getElementById("totalreplacepartscost").value)+parseInt(document.getElementById("totalreplacelaborcost").value);
	        	document.getElementById("TotalreplaceCost").value=totalReplaceCost;
	        	totalRepairCost = document.getElementById("TotalRepairCost").value;
	           // alert(document.getElementById("TotalreplaceCost").value);
	        	
	        }
	        //alert("Before calculateWorksheetAllowance");
	        //calculateWorksheetAllowance(totalRepairCost, totalReplaceCost);
	        //alert("After calculateWorksheetAllowance");
	       
			
			var repAllowance=0.00;
	        var repAllowancepercent=0.00;
	        if(totalReplaceCost!=0){
	        
	        	repAllowance=totalRepairCost/totalReplaceCost;
	        	repAllowancepercent=repAllowance*100;
				//alert("totalRepairCost:"+document.getElementById("TotalRepairCost").value+ "::totalReplaceCost"+document.getElementById("TotalRepairCost").value+":: Allowance ::"+ repAllowancepercent);
	        	
	        }
		    //alert("totalRepairCost - "+ totalRepairCost + " totalReplaceCost - " + totalReplaceCost + " " + " repAllowancepercent - " +  repAllowancepercent);
	        //alert(totalRepairCost + " "+ totalReplaceCost + " " + repAllowancepercent);
	        var repairThreshold=0.00;  // Modified by t9453ss for PMO 472.42
		    repairThreshold = parseFloat(document.getElementById("thresholdValue").value);  // Modified by t9453ss for PMO 472.42

			if(repAllowancepercent>=repairThreshold){	// Modified by t9453ss for PMO 472.42
				
	        	document.getElementById("allowance").style.backgroundColor="#00FF00";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				document.getElementById("textcolor").value="#00FF00";
				document.getElementById("allowance").value=NamesDict.replaceMsg;
	        }else{
	        	document.getElementById("allowance").style.backgroundColor="#FF3300";
				// DIPAP WorkSheet PDF Changes for PMO472.42 - T0984NG
				document.getElementById("textcolor").value="#FF3300";
				document.getElementById("allowance").value=NamesDict.repairMsg;
	      
						
				}
				//alert(x.opener.document.getElementById("allowance").value);
				document.getElementById("toActivateTooltip").click();
        }catch(e) {
           // alert("In addlop,,, "+e);
        }
        // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - Start
        //return xx;
        return addFlag;
        // Part Greater than 10 Issue - Commented and Modified by T0984NG for PMO# 472.46 - End
	}