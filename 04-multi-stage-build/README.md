# 🐳 Docker Multi-stage Build

A hands-on DevOps project demonstrating **Docker Multi-stage Builds** to create lightweight, production-ready container images for a Node.js application.

---

## 📌 Project Overview

This project compares two Docker image build approaches:

- **Normal Docker Build** using a single-stage Dockerfile
- **Multi-stage Docker Build** using separate Builder and Runtime stages

The objective is to understand how Multi-stage Builds help optimize Docker images for production deployments.

---

## 🚀 Features

- Dockerize a Node.js + Express application
- Standard Docker build
- Multi-stage Docker build
- Alpine Linux runtime image
- Production-ready Dockerfile
- Optimized container deployment

---

## 🛠️ Tech Stack

- Docker
- Node.js
- Express.js
- Alpine Linux

---

## 📂 Project Structure

```text
04-multi-stage-build/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Dockerfile.normal
├── .dockerignore
├── README.md
└── screenshots/
    ├── 01-project-structure.png
    ├── 02-build-normal-image.png
    ├── 03-build-multistage-image.png
    ├── 04-docker-images.png
    ├── 05-running-containers.png
    └── 06-browser-output.png
```

---

## ⚙️ Build & Run

### Normal Docker Build

Build the image

```bash
docker build -f Dockerfile.normal -t node.normal .
```

Run the container

```bash
docker run -d -p 3001:3000 --name normal-node-container node.normal
```

---

### Multi-stage Docker Build

Build the image

```bash
docker build -t node-multistage .
```

Run the container

```bash
docker run -d -p 3002:3000 --name node-multistage-container node-multistage
```

---

## 🌐 Access the Application

| Build Type | URL |
|------------|-----|
| Normal Build | http://localhost:3001 |
| Multi-stage Build | http://localhost:3002 |

---

## 📷 Screenshots

### 📁 Project Structure

Shows the complete project directory.

---

### 🏗️ Normal Docker Build

Building the application using a standard Dockerfile.

---

### 🚀 Multi-stage Docker Build

Building the application using a Multi-stage Dockerfile.

---

### 📦 Docker Images

Comparison of generated Docker images.

---

### 🐳 Running Containers

Both containers running successfully.

---

### 🌐 Browser Output

Application running successfully inside the Docker container.

---

## 📚 Key Concepts Demonstrated

- Dockerfile
- Multi-stage Docker Builds
- Builder Stage
- Runtime Stage
- Docker Image Optimization
- Alpine Linux
- Docker Image Management
- Container Deployment

---

## 🎯 Learning Outcomes

After completing this project, I gained practical experience with:

- Writing production-ready Dockerfiles
- Building Docker images
- Running Docker containers
- Using Multi-stage Builds
- Optimizing container images
- Working with Alpine-based images
- Understanding Builder and Runtime stages

---

## 👨‍💻 Author

**Kapil Kumbhare**

