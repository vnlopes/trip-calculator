let input = document.querySelector("#email");
let dollar = document.querySelector("#dollar");
let valorFinal = document.querySelector("#valor-final");
let preco = 0
let emailFinal = document.querySelector('.email-final')
let alertaMail = document.querySelector('.alert-digite-mail')
let alertaDollar = document.querySelector('.alert-digite-money')
let alertaArroba = document.querySelector('.alert-digite-arroba')

const butt = () => {
  if (input.value == "") {
    alertaMail.style.display = 'flex';
  }else{
    alertaMail.style.display = 'none';
  };

  if (dollar.value == '') {
    alertaDollar.style.display = 'flex';
  }else{
    alertaDollar.style.display = 'none';
    preco = dollar.value / 4.93;
    preco = preco.toFixed(2)
    valorFinal.innerHTML ='Você tem ' + preco + ' dollars para gastar!';
    
  };

  if (input.value.includes("@")) {
    // input.value = "";
    // dollar.value = "";
    alert("Email enviado");
    emailFinal.innerHTML = 'Seu e-mail informado é: ' + input.value + '';
    alertaArroba.style.display = 'none';
  } else {
    alertaArroba.style.display = 'flex';
    // alert('Você deve adicionar "@"! ')
  }
};


const rst = () => {
  input.value = "";
  dollar.value = "";
};