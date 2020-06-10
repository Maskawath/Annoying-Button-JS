


const annoyingBtn= document.querySelector('button');
annoyingBtn.addEventListener('mouseover',function(){

      const bgColor=['green', 'lightgreen','yellow', 'blue', 'black', 'lavender', 'orange', 'cyan', 'crimson'];
      const pickColor= bgColor[Math.floor(Math.random()*bgColor.length)];
      console.log(pickColor);


    const height= Math.floor(Math.random()*window.innerHeight);
    const width= Math.floor(Math.random()*window.innerWidth);
    annoyingBtn.style.left=`${height}px`;
    annoyingBtn.style.top=`${width}px`;
    document.body.style.backgroundColor=`${pickColor}`;

});
