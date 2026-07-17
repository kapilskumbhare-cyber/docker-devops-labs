const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Docker DevOps Lab 03</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0f172a,#1e3a8a,#0ea5e9);
    overflow:hidden;
    color:#fff;
}

body::before{
    content:"";
    position:absolute;
    width:250px;
    height:250px;
    border-radius:50%;
    background:rgba(255,255,255,.08);
    top:-80px;
    left:-80px;
    animation:float 8s ease-in-out infinite;
}

body::after{
    content:"";
    position:absolute;
    width:320px;
    height:320px;
    border-radius:50%;
    background:rgba(255,255,255,.08);
    bottom:-100px;
    right:-100px;
    animation:float 8s ease-in-out infinite 2s;
}

@keyframes float{
    50%{
        transform:translateY(-25px);
    }
}

.container{
    width:900px;
    max-width:92%;
    padding:45px;
    text-align:center;
    border-radius:20px;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(12px);
    border:1px solid rgba(255,255,255,.15);
    box-shadow:0 25px 60px rgba(0,0,0,.35);
    position:relative;
    z-index:1;
}

.logo{
    font-size:75px;
    margin-bottom:10px;
}

h1{
    font-size:42px;
    margin-bottom:8px;
}

.subtitle{
    color:#7dd3fc;
    font-size:22px;
    margin-bottom:20px;
}

.description{
    color:#e2e8f0;
    font-size:18px;
    line-height:1.8;
    margin-bottom:35px;
}

.status{
    display:inline-block;
    padding:12px 28px;
    background:#22c55e;
    color:white;
    border-radius:30px;
    font-weight:bold;
    margin-bottom:35px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
}

.card{
    background:rgba(255,255,255,.08);
    border-radius:15px;
    padding:25px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
    background:rgba(255,255,255,.15);
}

.card h3{
    color:#38bdf8;
    margin-bottom:12px;
}

.card p{
    color:#dbeafe;
    font-size:15px;
}

.tech{
    margin-top:35px;
}

.tech span{
    display:inline-block;
    padding:10px 18px;
    margin:8px;
    border-radius:25px;
    background:#1d4ed8;
    font-size:14px;
}

.footer{
    margin-top:35px;
    color:#cbd5e1;
}

.footer strong{
    color:white;
}

@media(max-width:850px){

.cards{
grid-template-columns:repeat(2,1fr);
}

h1{
font-size:34px;
}

}

@media(max-width:550px){

.cards{
grid-template-columns:1fr;
}

.container{
padding:30px;
}

.logo{
font-size:60px;
}

}

</style>

</head>

<body>

<div class="container">

<div class="logo">🐳</div>

<h1>Docker DevOps Lab 03</h1>

<div class="subtitle">
Node.js + Express + Docker
</div>

<div class="description">
This application is successfully running inside a Docker container.<br>
Built as part of my <strong>Docker DevOps Labs</strong> portfolio.
</div>

<div class="status">
✅ Container Running Successfully
</div>

<div class="cards">

<div class="card">
<h3>🚀 Runtime</h3>
<p>Node.js 22</p>
</div>

<div class="card">
<h3>⚡ Framework</h3>
<p>Express.js</p>
</div>

<div class="card">
<h3>🐳 Container</h3>
<p>Docker Engine</p>
</div>

<div class="card">
<h3>📦 Purpose</h3>
<p>DevOps Learning</p>
</div>

</div>

<div class="tech">
<span>Docker</span>
<span>Node.js</span>
<span>Express</span>
<span>DevOps</span>
<span>Linux</span>
<span>GitHub</span>
</div>

<div class="footer">
Created by <strong>Kapil Kumbhare</strong>
</div>

</div>

</body>

</html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
