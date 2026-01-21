const chars = "01ABCDEF#$@*&";
const container = document.body;

// 1. 生成坠落效果
function createParticle() {
    const el = document.createElement('div');
    el.className = 'particle';
    el.innerText = chars[Math.floor(Math.random() * chars.length)];
    
    // 随机初始位置
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '-50px';
    el.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // 关键：有的快有的慢（随机重力加速度感）
    const duration = Math.random() * 3 + 2; 
    el.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-in`;
    
    container.appendChild(el);

    // 触发下降动画
    setTimeout(() => {
        el.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
        el.style.opacity = '0';
    }, 50);

    // 移除废弃元素
    setTimeout(() => { el.remove(); }, duration * 1000);
}

// 持续产生坠落
const interval = setInterval(createParticle, 40);

// 2. 5秒后停止坠落，显示铺展开来的主界面
setTimeout(() => {
    clearInterval(interval);
    document.getElementById('overlay').style.opacity = '1';
}, 3000);

