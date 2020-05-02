function calculateTip()
{
  var billamt=document.getElementById('billamt').value;
  var servicequality=document.getElementById('servicequality').value;
  //var tipTotal=document.getElementById('tiptotal').value;
  //var billtotal=document.getElementById('billtotal').value;


  var total=billamt*servicequality;
  var entire=parseFloat(billamt)+parseFloat(total);


  document.getElementById('tiptotal').innerHTML=total;
  document.getElementById('billtotal').innerHTML=entire;

}
document.getElementById('calculate').onclick=function()
{
  calculateTip();
};
