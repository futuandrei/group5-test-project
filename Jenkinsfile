pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/futuandrei/group5-test-project.git'
                }
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