const inpltTag = document.querySelector('input');
const historyValue = document.querySelector('.textArea-History');

function calulateNumber(e) {
        inpltTag.value += e
}

function Del() {
    inpltTag.value= inpltTag.value === 'Undefined' || inpltTag.value === "Infinity" ? "" : inpltTag.value.slice(0,-1);
}

function AddCalculate(){
  try{
    inpltTag.value = eval(inpltTag.value)
  }catch(err){
    inpltTag.value = 'Undefined';
  }
}
function ALLClear(){
    inpltTag.value='';
}