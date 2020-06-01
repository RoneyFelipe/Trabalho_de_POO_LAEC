class Mascara {
    Data(campoData) {
      var data=campoData;
      if (data.length==2){
        data=data+'/';
        document.forms[0].data.value=data;
        return true;              
      }
      if (data.length==5){
        data=data+'/';
        document.forms[0].data.value=data;
        return true;
      }
    }
    CPF(campoCPF) {
      var cpf=campoCPF;
      if(cpf.length==3){
        cpf=cpf+'.';
        document.forms[0].cpf.value=cpf;
        return true;              
      }
      if(cpf.length==7){
        cpf=cpf+'.';
        document.forms[0].cpf.value=cpf;
        return true;
      }
      if(cpf.length==11){
        cpf=cpf+'-';
        document.forms[0].cpf.value=cpf;
        return true;
      }
    }
    Telefone(campoFone) {
      var telefone=campoFone;
      if(telefone.length==0) {
        telefone=telefone+"(";
        document.forms[0].telefone.value=telefone;
        return true;
      }
      if(telefone.length==3) {
        telefone=telefone+") ";
        document.forms[0].telefone.value=telefone;
        return true;
      }
      if(telefone.length==6) {
        telefone=telefone+"-";
        document.forms[0].telefone.value=telefone;
        return true;
      }
      if(telefone.length==11) {
        telefone=telefone+"-";
        document.forms[0].telefone.value=telefone;
        return true;
      }
    }
  }
  var y=new Mascara();
  var cont=0;
class Efeitos {
	constructor() {
	}
	Parallax() {
	  var scrollPos;
	  var headerText=document.querySelector('#inicio');
	  scrollPos=window.scrollY;
	  if(scrollPos<=600) {
	      headerText.style.transform="translateY("+(-scrollPos/15)+"px"+")";
	  }
	  var scrollPos2;
	  var headerText2=document.querySelector('#img1');
	  scrollPos2=window.scrollY;

	  if(scrollPos<=570) {
	      headerText2.style.transform="translateX("+(-scrollPos2*0.2)+"px"+")";
	  }
	}
	Cabecalho() {
		 var localM;
		 var localM=window.scrollY;
		 if(localM>250) {
       document.getElementById('barra').className='mudancas';
       document.getElementById('barra3').className='mudancas3';
		 	cont++
		 } else if(cont>0){
       document.getElementById('barra').className='mudancas2';
       document.getElementById('barra3').className='mudancas4';
		 }
	}
	Descer(event) {
		event.preventDefault();
		var elementos=event.target.hash;
		console.log(event.target.hash);
		var ids=elementos;
		var destino=document.querySelector(ids).offsetTop;
		window.scroll({
			top:destino-50,
			behavior: "smooth",
		})
	}
}
var x=new Efeitos();
window.addEventListener('scroll', x.Parallax);
window.addEventListener('scroll', x.Cabecalho);
var itens=document.querySelectorAll('.rolar a');
itens.forEach(item=> {
	item.addEventListener('click',x.Descer);
})