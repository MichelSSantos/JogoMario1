const jump = () => {
    mario.classList.add('jump');    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
}

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const loop = setInterval(() => {   
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')    
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "./imagens/mario2.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clearInterval(loop);
        
    }
    
},10);

document.addEventListener('keydown', jump);