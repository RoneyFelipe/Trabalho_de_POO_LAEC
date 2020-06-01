var vetor = new Array();
class Banco {
    salvar_banco(objeto,email) {
        if(localStorage.length == 0) {
            vetor.push(objeto);
            localStorage.setItem('Usuario',JSON.stringify(vetor));
            aquii()
        }
        else {
            vetor = JSON.parse(localStorage.getItem('Usuario'));;
            var aux = true;
            for(var cont = 0;cont < vetor.length; cont ++) {
                if(vetor[cont].email == email) {
                    //modal Usuario já cadastrado, acesse sua corta por favor
                    alert('Email já cadastrato')
                    aux = false;
                }
            }
            if(aux) {
                vetor.push(objeto);
                localStorage.setItem('Usuario',JSON.stringify(vetor));
                aquii()
                
            }
            else {
                aquii2();
            }
        }
    }
    buscar_banco(email,senha) {
        vetor = JSON.parse(localStorage.getItem('Usuario'));
        var aux = true;
        for(var cont = 0;vetor.length > cont; cont++) {
            if((vetor[cont].email==email)&&(vetor[cont].senha==senha)) {
                //modal
                aquii();
                aux = false;
            }
        }
        if(aux) {
            aquii3();
        }
    }
}
function salvar(nome,nasc,email,senha) {
    var Usuario = new Cadastro();
    Usuario.entrada(nome,nasc,email,senha);
    var banco= new Banco();
    banco.salvar_banco(Usuario,email);
    
}
function buscar(email,senha23) {
    var buscando = new Banco();
    buscando.buscar_banco(email,senha23);
}
function login(a) {
    if(a =='a') {
         document.getElementById('cadas').className = 'inv';
         document.getElementById('login1').className = 'vis';
    }
    else if(a == 'b') {
        document.getElementById('cadas').className = 'vis';
        document.getElementById('login1').className = 'inv';
    }
   
}