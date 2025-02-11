pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm  // This auto-checks out the correct branch in Multibranch Pipelines
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}