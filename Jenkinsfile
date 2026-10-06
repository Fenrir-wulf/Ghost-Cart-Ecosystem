pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "fenrir3008/ghost-cart"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Automated Test / Validate') {
            steps {
                echo 'Running automated validation checks...'
                // Fails the pipeline and stops deployment if files are missing
                sh 'test -f extension/popup.html'
                sh 'test -f Dockerfile'
            }
        }
        stage('Docker Build & Tag') {
            steps {
                echo 'Building and uniquely tagging the Docker image...'
                sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} ."
                sh "docker build -t ${DOCKER_IMAGE}:latest ."
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh "echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${IMAGE_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:latest"
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application to target environment...'
                // Stops and removes the previous version
                sh "docker rm -f ghost-cart-compose || true"
                // Deploys the newly tagged version
                sh "docker run -d --name ghost-cart-compose -p 8081:3000 ${DOCKER_IMAGE}:${IMAGE_TAG}"
            }
        }
    }
    post {
        success {
            echo "SUCCESS: Application successfully tested, packaged, and deployed!"
        }
        failure {
            echo "FAILURE: Pipeline failed. Deployment aborted."
        }
    }
}
