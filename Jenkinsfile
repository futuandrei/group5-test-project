pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    git branch: env.BRANCH_NAME, url: 'https://github.com/futuandrei/group5-test-project.git'
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building branch: ${env.BRANCH_NAME}"
            }
        }
        stage('Test') {
            steps {
                echo "Running tests on branch: ${env.BRANCH_NAME}"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying branch: ${env.BRANCH_NAME}"
            }
        }
    }
}