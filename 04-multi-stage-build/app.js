const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Docker Multi-stage Build | Lab 4</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:Arial, Helvetica, sans-serif;
            }

            body{
                background:linear-gradient(135deg,#0f172a,#1e293b,#334155);
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .card{
                width:700px;
                background:rgba(255,255,255,0.08);
                backdrop-filter:blur(12px);
                border-radius:18px;
                padding:40px;
                text-align:center;
                box-shadow:0 15px 35px rgba(0,0,0,.35);
            }

            h1{
                font-size:42px;
                margin-bottom:15px;
            }

            h2{
                color:#38bdf8;
                margin-bottom:20px;
            }

            p{
                font-size:18px;
                color:#e2e8f0;
                line-height:1.7;
            }

            .info{
                margin-top:30px;
                display:grid;
                grid-template-columns:repeat(2,1fr);
                gap:15px;
            }

            .box{
                background:#1e293b;
                border-radius:12px;
                padding:18px;
            }

            .box h3{
                color:#38bdf8;
                margin-bottom:8px;
            }

            .footer{
                margin-top:30px;
                font-size:15px;
                color:#cbd5e1;
            }

            .btn{
                margin-top:25px;
                display:inline-block;
                padding:12px 25px;
                background:#38bdf8;
                color:#0f172a;
                text-decoration:none;
                border-radius:8px;
                font-weight:bold;
            }

            .btn:hover{
                background:#0ea5e9;
            }
        </style>

    </head>

    <body>

        <div class="card">

            <h1>🐳 Docker DevOps Labs</h1>

            <h2>Lab 4 - Multi-stage Docker Build</h2>

            <p>
                Welcome to my Docker DevOps portfolio.<br>
                This application demonstrates a production-ready
                <strong>Multi-stage Docker Build</strong> for creating
                lightweight, secure, and optimized container images.
            </p>

            <div class="info">

                <div class="box">
                    <h3>⚡ Faster</h3>
                    <p>Smaller images download and deploy quickly.</p>
                </div>

                <div class="box">
                    <h3>🔒 Secure</h3>
                    <p>Only runtime files are included in production.</p>
                </div>

                <div class="box">
                    <h3>📦 Optimized</h3>
                    <p>Build dependencies are removed from the final image.</p>
                </div>

                <div class="box">
                    <h3>🚀 DevOps Ready</h3>
                    <p>Suitable for CI/CD pipelines and cloud deployments.</p>
                </div>

            </div>

            <a class="btn" href="#">Docker Multi-stage Build</a>

            <div class="footer">
                Built with ❤️ using Node.js, Express & Docker
            </div>

        </div>

    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
