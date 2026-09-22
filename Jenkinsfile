pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building and preparing the application...'
                sh 'ls -la'
            }
        }
        stage('Test / Validate') {
            steps {
                echo 'Validating application files...'
                // Validates that essential files exist
                sh 'test -f extension/popup.html'
                sh 'test -f Dockerfile'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building the Docker image...'
                sh 'docker build -t fenrir3008/ghost-cart:latest .'
            }
        }
    }
    post {
        always {
            echo 'Reporting pipeline outcome...'
        }
        success {
            echo 'SUCCESS: Docker image built and validated!'
        }
        failure {
            echo 'FAILURE: Pipeline failed. Check the console output.'
        }
    }
}
