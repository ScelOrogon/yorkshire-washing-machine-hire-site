const page=document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach((a)=>{if(a.dataset.nav===page){a.classList.add('is-active');a.setAttribute('aria-current','page');}});

const menuToggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#primary-menu');
if(menuToggle && menu){
  menuToggle.addEventListener('click',()=>{
    const open=menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  menu.querySelectorAll('a').forEach((link)=>link.addEventListener('click',()=>{
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Open menu');
  }));
}

const quoteProduct=document.getElementById('quote-product');
const quoteQty=document.getElementById('quote-qty');
const quoteOutput=document.getElementById('quote-output');
if(quoteProduct && quoteQty && quoteOutput){
  const DEPOSIT_PER_UNIT=20;
  const calc=()=>{
    const weeklyRate=Number(quoteProduct.value||0);
    const qty=Math.max(1,Number(quoteQty.value||1));
    const weekly=weeklyRate*qty;
    const monthly=weekly*4;
    const deposit=DEPOSIT_PER_UNIT*qty;
    quoteOutput.textContent=`Estimated: £${weekly.toFixed(2)}/week · £${monthly.toFixed(2)}/month + £${deposit.toFixed(2)} deposit`;
  };
  quoteProduct.addEventListener('change',calc);
  quoteQty.addEventListener('input',calc);
  calc();
}
