# Building and Running a Next.js App with Docker

## Prerequisites

-   Docker installed on your machine
-   Node.js and pnpm installed globally (optional)

## Instructions

1. **Clone the repository**:

    - Open a terminal or command prompt.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command to clone the repository:
        ```
        git clone https://github.com/Tnmy1996/rate-radar.git
        ```

2. **Navigate to the project directory**:

    - After cloning the repository, navigate to the project directory using the following command:
        ```
        cd rate-radar
        ```

3. **Build the Docker image**:

    - In the project directory, run the following command to build the Docker image:
        ```
        docker build -t rate-radar-img .
        ```

4. **Run the Docker container**:

    - After the image is built successfully, run the following command to start the Docker container:
        ```
        docker run -p 3000:3000 rate-radar-img
        ```
        This command maps the container's port 3000 to the host's port 3000, allowing you to access the Next.js app in your web browser.

5. **Access the Next.js app**:

    - Open your web browser and navigate to `http://localhost:3000` to see your Next.js application running inside the Docker container.

6. **Stop the container (optional)**:
    - If you want to stop the running container, open a new terminal or command prompt window and run the following command:
        ```
        docker ps
        ```
        This will list all running containers. Find the container ID or name of your Next.js app container.
    - Stop the container by running the following command:
        ```
        docker stop <container_id_or_name>
        ```
        Replace `<container_id_or_name>` with the ID or name of your Next.js app container.
