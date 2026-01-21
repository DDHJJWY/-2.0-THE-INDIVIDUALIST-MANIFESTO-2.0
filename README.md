<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>THE INDIVIDUALIST MANIFESTO 2.0</title>
    <style>
        :root {
            --primary-red: #ff3e3e;
            --bg-black: #0a0a0a;
            --text-gray: #b0b0b0;
            --glass-bg: rgba(255, 255, 255, 0.05);
        }

        body {
            background-color: var(--bg-black);
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            width: 90%;
            max-width: 800px;
            padding: 40px 20px;
        }

        /* 头部装饰 */
        header {
            border-left: 4px solid var(--primary-red);
            padding-left: 20px;
            margin-bottom: 50px;
        }

        h1 {
            font-size: 2rem;
            letter-spacing: 2px;
            margin: 0;
            text-transform: uppercase;
        }

        .quote {
            color: var(--primary-red);
            font-style: italic;
            margin-top: 10px;
            font-size: 1.1rem;
        }

        /* 区块修饰 */
        section {
            background: var(--glass-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
        }

        h2 {
            color: var(--primary-red);
            font-size: 1.4rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 10px;
            margin-top: 0;
        }

        .concept-item {
            margin-bottom: 20px;
        }

        .concept-item strong {
            display: block;
            color: #fff;
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .concept-item p {
            color: var(--text-gray);
            margin: 0;
        }

        /* 按钮与表格优化 */
        .channel-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .channel-table td {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .btn-link {
            color: var(--primary-red);
            text-decoration: none;
            border: 1px solid var(--primary-red);
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 0.9rem;
            transition: 0.3s;
        }

        .btn-link:hover {
            background: var(--primary-red);
            color: white;
        }

        /* 底部信息 */
        footer {
            text-align: center;
            padding: 40px;
            color: #444;
            font-size: 0.8rem;
            letter-spacing: 1px;
        }

        .address-box {
            font-family: 'Courier New', monospace;
            background: #000;
            padding: 10px;
            font-size: 0.85rem;
            word-break: break-all;
            border-radius: 4px;
            color: #00ff00; /* 绿色地址，更有极客感 */
        }

        /* 响应式调整 */
        @media (max-width: 600px) {
            h1 { font-size: 1.5rem; }
            .container { padding: 20px 10px; }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>THE INDIVIDUALIST MANIFESTO 2.0</h1>
        <div class="quote">“逻辑是唯一的权威。实力定义你的正义。”</div>
    </header>

    <section>
        <h2>📖 核心阅览通道</h2>
        <table class="channel-table">
            <tr>
                <td><strong>English Edition</strong><br><small>Pure English version</small></td>
                <td style="text-align: right;"><a href="index_en.html" class="btn-link">VIEW</a></td>
            </tr>
            <tr>
                <td><strong>PDF Document</strong><br><small>Offline version</small></td>
                <td style="text-align: right;"><a href="manifesto_v2.pdf" class="btn-link">DOWNLOAD</a></td>
            </tr>
            <tr>
                <td><strong>𝕏 Social</strong><br><small>Thought dynamics</small></td>
                <td style="text-align: right;"><a href="https://x.com/rule_supremacy" class="btn-link">FOLLOW</a></td>
            </tr>
        </table>
    </section>

    <section>
        <h2>⚡ 宣言核心 / Core Concepts</h2>
        <div class="concept-item">
            <strong>1. 认知主权 / Cognitive Sovereignty</strong>
            <p>你并不拥有你无法防御的东西。在信息的荒原中，只有逻辑是你的防线。</p>
        </div>
        <div class="concept-item">
            <strong>2. 逻辑权威 / Logical Authority</strong>
            <p>剥离一切情感的寄生，拒绝道德绑架。因果律是宇宙中唯一的审判官。</p>
        </div>
        <div class="concept-item">
            <strong>3. 实力正义 / Power Justice</strong>
            <p>放弃对虚伪契约的幻想。在个体之间，实力的平衡才是最稳固的和平协议。</p>
        </div>
    </section>

    <section>
        <h2>🛡️ 审计与支持</h2>
        <p style="font-size: 0.9rem; color: var(--text-gray);">如果你认为你的逻辑与我共鸣，可通过以下地址支持：</p>
        <p><strong>BTC:</strong> <div class="address-box">bc1q7vnkdpwt3z65ww5efmylwakwkl0x80e2g600sl</div></p>
        <p><strong>ETH:</strong> <div class="address-box">0xB8aEd09a8849b8C709823c9F2277A4aDe0418Cb5</div></p>
    </section>

    <footer>
        "In this wasteland, everyone is their own God."
    </footer>
</div>

</body>
</html>
