$(document).ready(function(){
  $('span').click(function(){
    if($(this).attr('id') === "clear"){
      $('#screen').text('');
    }
    else if($(this).attr('id') === "equals"){
      doItMeow();
    }
    else{
      $('#screen').append($(this).text());
    }
  })
  function doItMeow(){
    if($('#screen').text() === ''){
    }
    else{
      var inner = $('#screen').text();
      var operator = '';
      var op2Index;
      var op1 = '';
      var op2 = '';
      var result;
      for(var i = 0; i < inner.length; i++){
        if(inner[i] !== '÷' && inner[i] !== 'x' && inner[i] !== '+' && inner[i] !== '-'){
          op1 += inner[i];
        }
        else{
          operator = inner[i];
          op2Index = i+1;
          break;
        }
      }
      op2 = inner.substring(op2Index);
      op1 = parseInt(op1);
      op2 = parseInt(op2);
      if(operator === "÷"){
        result = op1 / op2;
        check(result);
      }
      else if(operator === "x"){
        result = op1 * op2;
        check(result);
      }
      else if(operator === "+"){
        result = op1 + op2;
        check(result);
      }
      else{
        result = op1 - op2;
        check(result);
      }
    }
  }
  function check(result){
    if(isNaN(result) || result === Infinity){
      $('#screen').text('ERROR');
    }else{
      $('#screen').text(result);
    }
  }
});
