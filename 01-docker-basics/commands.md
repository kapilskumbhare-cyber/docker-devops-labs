# Commands Used

## Build Image

```bash
docker build -t docker-lab01 .
```

## List Images

```bash
docker images
```

## Run Container

```bash
docker run -d -p 8080:80 --name docker-lab01 docker-lab01
```

## List Running Containers

```bash
docker ps
```

## Stop Container

```bash
docker stop docker-lab01
```

## Remove Container

```bash
docker rm docker-lab01
```

## Remove Image

```bash
docker rmi docker-lab01
```
