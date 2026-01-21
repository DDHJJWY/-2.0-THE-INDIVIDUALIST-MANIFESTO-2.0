<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DECODING MANIFESTO 2.0</title>
    <style>
        body {
            background-color: #000;
            color: #ff3e3e;
            font-family: 'Courier New', monospace;
            margin: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        /* 坠落动画 */
        .char {
            position: absolute;
            top: -50px;
            font-size: 20px;
            opacity: 0;
            animation: drop 2.5s ease-in forwards;
        }

        @keyframes drop {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* 中央解密框 */
        #main-frame {
            z-index: 100;
            text-align: center;
            border: 1px solid #ff3e3e;
            padding: 40px;
            background: rgba(0, 0, 0, 0.9);
            box-shadow: 0 0 20px #ff3e3e;
            display: none; /* 初始隐藏，等坠落一会儿再显示 */
        }

        .glitch {
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            position: relative;
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff;
            animation: glitch 500ms infinite;
        }

        @keyframes glitch {
            0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff; }
            15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff; }
            16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff; }
            49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff; }
            50% { text-shadow: 0.035em 0.035em 0 #00fffc, 0.05em 0.05em 0 #fc00ff; }
            99% { text-shadow: 0.035em 0.035em 0 #00fffc, 0.05em 0.05em 0 #fc00ff; }
            100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff; }
        }

        .btn-group { margin-top: 30px; display: flex; gap: 20px; justify-content: center; }
        .btn {
            border: 1px solid #ff3e3e;
            padding: 10px 20px;
            color: #ff3e3e;
            text-decoration: none;
            transition: 0.3s;
            cursor: pointer;
        }
        .btn:hover { background: #ff3e3e; color: #000; }
    </style>
</head>
<body>

    <div id="main-frame">
        <div class="glitch">MANIFESTO 2.0 DECODED</div>
        <p>SYSTEM ACCESS GRANTED</p>
        <div class="btn-group">
            <a href="index_zh.html" class="btn">ZH/BILINGUAL</a>
            <a href="index_en.html" class="btn">ENGLISH ONLY</a>
        </div>
    </div>

    <script>
        // 1. 生成不断下降的乱码字符
        const characters = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
        function createChar() {
            const char = document.createElement('div');
            char.innerText = characters.charAt(Math.floor(Math.random() * characters.length));
            char.classList.add('char');
            char.style.left = Math.random() * 100 + "vw";
            char.style.animationDuration = (Math.random() * 2 + 1) + "s";
            document.body.appendChild(char);
            
            setTimeout(() => { char.remove(); }, 3000);
        }

        // 持续生成坠落效果
        const rain = setInterval(createChar, 50);

        // 2. 延迟 2 秒后展现解密后的中央入口
        setTimeout(() => {
            document.getElementById('main-frame').style.display = 'block';
        }, 2000);

        // 3. 语言自动识别跳转（如果你不想让用户手动选，可以取消下面代码的注释）
        /*
        setTimeout(() => {
            const lang = navigator.language || navigator.userLanguage;
            window.location.href = lang.startsWith('en') ? 'index_en.html' : 'index_zh.html';
        }, 5000);
        */
    </script>
</body>
</html>
