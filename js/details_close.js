let summary = document.querySelectorAll('summary'); 
let btn_close = Array(summary.length);
for (let i = 0; i < summary.length; i++) {
  btn_close[i] = document.getElementById('close'+i);
  btn_close[i].addEventListener('click', () => { summary[i].click(); }, false);
}