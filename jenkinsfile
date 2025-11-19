pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Rajesh-210/school-node.git'
            }
        }

        stage('Check Required Tools') {
            steps {
                sh "docker --version"
                sh "node -v || true"
                sh "npm -v || true"
            }
        }

        stage('Navigate & List Files') {
            steps {
                sh """
                    echo "Listing project files..."
                    ls -la
                """
            }
        }

        stage('Docker Build Image') {
            steps {
                sh """
                    echo "Building Docker image for school-node..."
                    docker build -t school-node-image .
                """
            }
        }

        stage('Docker Run Container') {
            steps {
                sh """
                    echo "Stopping existing container if running..."
                    docker rm -f school-node-container || true

                    echo "Starting new container..."
                    docker run -d --name school-node-container -p 3000:3000 school-node-image
                """
            }
        }

    }
}
