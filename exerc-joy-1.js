let numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (let i = 0; i < numerosDaSorte.length; i++){
  let resposta = numerosDaSorte[i];
  
  if (resposta < 50){
    
    if (resposta % 2 == 0 && resposta < 50){
    
    console.log('O número', resposta,'  é par e menor que 50');
    
    
    
  } else{
    console.log('O número', resposta,'  é menor que 50');
    
  }
    

  }
  if  (resposta > 50){
   
    console.log('O número', resposta,'  é maior que 50');
  }
  
  
  
  
  
}