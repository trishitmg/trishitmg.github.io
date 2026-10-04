// Image comparison, figure enlargement, and citation copying. No dependencies.
document.querySelectorAll('[data-comparison]').forEach(group=>{
  const range=group.querySelector('input[type="range"]');
  const overlay=group.querySelector('.overlay');
  const divider=group.querySelector('.divider');
  const output=group.querySelector('output');
  const update=()=>{const n=Number(range.value);overlay.style.clipPath=`inset(0 ${100-n}% 0 0)`;divider.style.left=`${n}%`;output.textContent=`${n}%`;};
  range.addEventListener('input',update);update();
});
const viewer=document.querySelector('.lightbox');
if(viewer){
  document.querySelectorAll('[data-enlarge]').forEach(button=>button.addEventListener('click',()=>{
    viewer.querySelector('img').src=button.querySelector('img').src;
    viewer.querySelector('img').alt=button.querySelector('img').alt;
    viewer.querySelector('.lightbox-title').textContent=button.dataset.enlarge;
    viewer.showModal();
  }));
  viewer.querySelector('[data-close]').addEventListener('click',()=>viewer.close());
  viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
  const text=document.getElementById(button.dataset.copy).textContent;
  const status=button.parentElement.querySelector('[role="status"]');
  try{await navigator.clipboard.writeText(text);status.textContent='Citation copied.';}
  catch{status.textContent='Select the citation above and copy it manually.';}
}));
