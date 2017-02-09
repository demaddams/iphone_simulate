function maxlength_textarea(id, crid, max)
	{
	    var txtarea = document.getElementById(id);
	    document.getElementById(crid).innerHTML=max-txtarea.value.length;
	    document.getElementById('nbres').innerHTML=0;
	    txtarea.onkeypress=function(){
		    
		    eval('v_maxlength("'+id+'","'+crid+'",'+max+');');
		    document.querySelector('#typeSms').innerHTML=txtarea.value.replace(/\r?\n/g, '<br />');
		    };
	    txtarea.onblur=function(){eval('v_maxlength("'+id+'","'+crid+'",'+max+');');document.querySelector('#typeSms').innerHTML=txtarea.value.replace(/\r?\n/g, '<br />');};
	    txtarea.onkeyup=function(){eval('v_maxlength("'+id+'","'+crid+'",'+max+');');document.querySelector('#typeSms').innerHTML=txtarea.value.replace(/\r?\n/g, '<br />');};
	    txtarea.onkeydown=function(){eval('v_maxlength("'+id+'","'+crid+'",'+max+');');document.querySelector('#typeSms').innerHTML=txtarea.value.replace(/\r?\n/g, '<br />');};
	}

	function v_maxlength(id, crid, max)
	{

	    var txtarea = document.getElementById(id);
	    var crreste = document.getElementById(crid);

	    var nbre = document.getElementById('nbres');
	    var nbres = document.getElementById('nbresms');
	    var len = txtarea.value.length;

	    if(len>max)
	    {
	        txtarea.value=txtarea.value.substr(0,max);

	    }

	    len = txtarea.value.length;
	    crreste.innerHTML=max-len;
	    //nbre.innerHTML=0;

	    if(len>160)
	    {
	        nbre.innerHTML=2;
	        nbres.value=2;

	    }
	    else if (len<=160 && len>0 )
	    {
	        nbre.innerHTML=1;
	        nbres.value=1;

	    }
	    else if (len==0 )
	    {
	        nbre.innerHTML=0;
	        nbres.value=0;

	    }
	}