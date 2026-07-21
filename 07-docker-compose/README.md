# 🚀 Lab 07 – Docker Compose

## 📌 Overview

This lab demonstrates how to use **Docker Compose** to manage multiple containers using a single configuration file. A Node.js application and a MongoDB database are defined as separate services and started together with one command.

---

## 🎯 Objectives

* Learn Docker Compose fundamentals
* Manage multiple containers with Docker Compose
* Build a custom Docker image for a Node.js application
* Run a MongoDB container alongside the application
* Understand container networking and service communication

---

## 📂 Project Structure

```text
07-docker-compose/
│
├── app/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
└── commands.md
```

---

## 🏗️ Architecture

```text
Browser
   │
localhost:3000
   │
Node.js Container
   │
MongoDB Container
```

---

## 🛠️ Technologies Used

* Docker
* Docker Compose
* Node.js
* Express.js
* MongoDB

---

## ▶️ How to Run

Build and start all services:

```bash
docker compose up --build
```

View running containers:

```bash
docker ps
```

Stop and remove containers:

```bash
docker compose down
```

---

## 🌐 Application

Open the application in your browser:

```text
http://localhost:3000
```

Expected output:

```text
Docker Compose Lab Working 🚀
```

---

## 📚 Key Concepts Learned

* Docker Compose
* Multi-container applications
* Services
* Build vs Image
* Port Mapping
* Container Networking
* `depends_on`
* Docker Compose lifecycle commands

---

## ✅ Outcome

Successfully deployed a multi-container application using Docker Compose. The Node.js application and MongoDB database were managed through a single `docker-compose.yml` file, demonstrating a common workflow used in modern DevOps environments.
