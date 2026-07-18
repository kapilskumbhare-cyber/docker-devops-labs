# Docker Networking - Commands

This file contains all the commands used in **Lab 06 - Docker Networking**.

---

## 1. List Existing Docker Networks

```bash
docker network ls
```

---

## 2. Create a Custom Bridge Network

```bash
docker network create my-network
```

---

## 3. Verify the Network

```bash
docker network ls
```

---

## 4. Inspect the Network

```bash
docker network inspect my-network
```

---

## 5. Run First Nginx Container

```bash
docker run -d --name web1 --network my-network nginx
```

---

## 6. Run Second Nginx Container

```bash
docker run -d --name web2 --network my-network nginx
```

---

## 7. Verify Running Containers

```bash
docker ps
```

---

## 8. Access the First Container

```bash
docker exec -it web1 bash
```

If `bash` is unavailable:

```bash
docker exec -it web1 sh
```

---

## 9. Update Package Repository

```bash
apt update
```

---

## 10. Install Ping Utility

```bash
apt install iputils-ping -y
```

---

## 11. Test Container-to-Container Communication

```bash
ping web2
```

Press **Ctrl + C** to stop the ping.

---

## 12. Display Container IP Address

```bash
hostname -i
```

---

## 13. Inspect Container Details

```bash
docker inspect web1
```

```bash
docker inspect web2
```

---

## 14. Disconnect a Container from the Network

```bash
docker network disconnect my-network web2
```

---

## 15. Reconnect the Container

```bash
docker network connect my-network web2
```

---

## 16. Remove Running Containers

```bash
docker rm -f web1 web2
```

---

## 17. Remove the Custom Network

```bash
docker network rm my-network
```

---

## 18. Verify Network Removal

```bash
docker network ls
```

