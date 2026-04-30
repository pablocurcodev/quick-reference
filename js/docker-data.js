export const data = [
  {
    cat: "system & status",
    cmds: [
      { cmd: "docker version", desc: "Check client + server version" },
      { cmd: "docker info", desc: "System-wide info, containers, images" },
      { cmd: "service docker status", desc: "Linux daemon status" },
      { cmd: "systemctl is-active docker", desc: "Linux systemd active check" },
    ],
  },
  {
    cat: "images",
    cmds: [
      { cmd: "docker images", desc: "Lists all local images" },
      {
        cmd: "docker images --digests",
        desc: "Lists all local images. Show SHA256 hashes",
      },
      { cmd: "docker images --digests alpine", desc: "Shows SHA256 hashes" },
      {
        cmd: "docker pull nginx:latest",
        desc: "Download images from remote registries. It defaults to Docker Hub",
        example: "docker pull node:latest",
      },
      { cmd: "docker pull redis:8.0-M02", desc: "Pull specific tag" },
      {
        cmd: "docker pull ghcr.io/OWNER/IMAGE_NAME:TAG",
        desc: "Pulls from GitHub Container Registry",
      },
      {
        cmd: "docker inspect node:latest",
        desc: "Full image metadata as JSON",
      },
      {
        cmd: "docker history [image-name]",
        desc: "Layer-by-layer build history",
      },
      {
        cmd: "docker manifest inspect golang | grep 'architecture\\|os'",
        desc: "Inspects multi-arch manifest",
      },
      {
        cmd: "docker scout quickview alpine:latest",
        desc: "Vulnerability summary",
      },
      { cmd: "docker scout cves alpine:latest", desc: "Detailed CVE list" },
      { cmd: "docker login", desc: "Authenticate with Docker Hub" },
      {
        cmd: "docker tag [image-name] [registry-hostname]/[image-name]",
        desc: "Retag image for remote registry",
        example:
          "create a new alias (tag) for an existing local image, specifically preparing it to be pushed to a private or remote registry",
      },
      {
        cmd: "docker push [registry-hostname]/[image-name]",
        desc: "Push image to Docker Hub",
      },
      { cmd: "docker rmi redis:latest", desc: "Delete image by tag" },
      { cmd: "docker rmi c69f4e0640e5", desc: "Delete image by ID" },
      {
        cmd: "docker rmi $(docker images -q) -f",
        desc: "Force delete all images",
      },
    ],
  },
  {
    cat: "containers",
    cmds: [
      {
        cmd: "docker run -d --name web1 -p 8080:80 nginx:latest",
        desc: "Runs detached -in the background , -p/--publish maps localhost:container port",
      },
      {
        cmd: "docker run -it ubuntu:24.04 bash",
        desc: "Runs interactive terminal session",
        example:
          "Use Ctrl+P Ctrl+Q to detach (container keeps running), Ctrl+D or exit to stop it",
      },
      {
        cmd: "docker run --name my-ubuntu -it ubuntu:24.04 bash",
        desc: "Creates and starts a new interactive Docker container using the Ubuntu 24.04 image",
      },
      {
        cmd: "docker run --rm -d alpine sleep 60",
        desc: "Sleeps 60seconds, the auto-remove container on exit",
      },
      {
        cmd: "docker run --restart always --name c1 -it alpine sh",
        desc: "Always restart on exit",
      },
      {
        cmd: "docker run --restart unless-stopped ...",
        desc: "Restart unless manually stopped",
      },
      { cmd: "docker ps", desc: "List running containers" },
      { cmd: "docker ps -a", desc: "List all containers including stopped" },
      {
        cmd: "docker stop [container]",
        desc: "Graceful stop (SIGTERM, then SIGKILL after 10s)",
      },
      {
        cmd: "docker restart [container]",
        desc: "Restart a stopped container",
      },
      { cmd: "docker rm [container] -f", desc: "Force remove container" },
      {
        cmd: "docker inspect [container]",
        desc: "Detailed config and runtime info",
      },
      {
        cmd: "docker inspect c1 | grep RestartCount",
        desc: "Check how many times container restarted",
      },
      {
        cmd: "docker exec -it web1 bash",
        desc: "Open new shell inside running container, -t tty, -i interactive, bash, bs...",
      },
      {
        cmd: "docker exec [container] [command]",
        desc: "Run command in container without shell",
        example: "docker exec web1 ps; docker exec webserver cat text.txt",
      },
      {
        cmd: "docker attach [container]",
        desc: "Reattach terminal to container PID 1",
      },
      {
        cmd: "docker debug [container]",
        desc: "Debug shell with extra tools (Pro+ required)",
      },
    ],
  },
  {
    cat: "build",
    cmds: [
      {
        cmd: "docker build -t [name]:[tag] .",
        desc: "Build image from Dockerfile in current directory, tag is optional",
        example: "docker build -t test:latest .",
      },
      {
        cmd: "docker build -t multi:client --target prod-client -f Dockerfile-final .",
        desc: "Multistage build targeting specific stage",
      },
      { cmd: "docker init", desc: "Scaffold a Dockerfile for your project" },
    ],
  },
  {
    cat: "compose",
    cmds: [
      { cmd: "docker compose up -d", desc: "Start services in detached mode" },
      {
        cmd: "docker compose up --build -d",
        desc: "Rebuild images and start services",
      },
      { cmd: "docker compose down", desc: "Stop and remove containers" },
      {
        cmd: "docker compose down -v",
        desc: "Stop and remove containers + volumes",
      },
      {
        cmd: "docker compose down --remove-orphans",
        desc: "Also remove orphaned containers",
      },
      {
        cmd: "docker compose logs server",
        desc: "View logs for a specific service",
      },
      { cmd: "docker compose ps", desc: "List running compose services" },
    ],
  },
  {
    cat: "networking",
    cmds: [
      {
        cmd: "docker network create my-network",
        desc: "Create a custom network",
      },
      { cmd: "docker network prune", desc: "Remove unused networks" },
      {
        cmd: "docker inspect blog-server-1 --format '{{json .NetworkSettings.Networks}}'",
        desc: "Inspect container network config",
      },
      {
        cmd: "docker run --network my-network ...",
        desc: "Attach container to a network",
      },
    ],
  },
  {
    cat: "volumes & cleanup",
    cmds: [
      {
        cmd: "docker run -v mongo_data:/data/db mongo:7.0",
        desc: "Mount named volume",
      },
      { cmd: "docker container prune", desc: "Remove all stopped containers" },
      { cmd: "docker image prune", desc: "Remove dangling images" },
      { cmd: "docker image prune -a", desc: "Remove all unused images" },
      { cmd: "docker volume prune", desc: "Remove unused volumes" },
      { cmd: "docker system prune", desc: "Prune everything except volumes" },
      {
        cmd: "docker system prune -f",
        desc: "Prune everything -f",
        warn: true,
      },
      {
        cmd: "docker system prune --volumes",
        desc: "Prune everything including volumes",
      },
    ],
  },
  {
    cat: "proc: run mongodb (persistent + secure)",
    cmds: [
      {
        cmd: "docker run -d --name mongodb -p 127.0.0.1:27017:27017 --restart unless-stopped -v mongo_data:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=<password> mongo:7.0",
        desc: "Run MongoDB container with persistence, restart policy, and local-only port binding",
        example: "Database accessible at localhost:27017",
      },
      {
        cmd: "docker volume ls",
        desc: "Verify volume was created",
        example: "mongo_data persists database files",
      },
      {
        cmd: "docker logs mongodb",
        desc: "Check MongoDB startup logs",
        example: "Confirm initialization completed",
      },
      {
        cmd: "docker exec -it mongodb mongosh",
        desc: "Connect to MongoDB shell inside container",
        example: "Use admin credentials to log in",
      },
    ],
  },
  {
    cat: "proc: containerize and run a Node.js app",
    cmds: [
      {
        cmd: "docker init",
        desc: "Generate Dockerfile and related config for the project",
        example: "Bootstraps a Node.js container setup",
      },
      {
        cmd: "docker build -t myapp:1.0 .",
        desc: "Build Docker image from Dockerfile in current directory",
        example: "Creates image tagged as myapp:1.0",
      },
      {
        cmd: "docker images",
        desc: "Verify the image was created",
        example: "Look for myapp in the list",
      },
      {
        cmd: "docker run -d --name myapp-container -p 5005:8080 myapp:1.0",
        desc: "Run container in background and expose app",
        example: "Access app at http://localhost:5005",
      },
      {
        cmd: "docker ps",
        desc: "Check running containers",
        example: "Confirm myapp-container is up",
      },
      {
        cmd: "docker logs myapp-container",
        desc: "View application logs",
        example: "Useful for debugging startup issues",
      },
      {
        cmd: "docker tag myapp:1.0 <dockerhub-user>/myapp:1.0",
        desc: "Tag image for pushing to Docker Hub",
        example: "Prepares image for remote registry",
      },
      {
        cmd: "docker push <dockerhub-user>/myapp:1.0",
        desc: "Upload image to Docker Hub",
        example: "Makes image available to others",
      },
    ],
  },
];
