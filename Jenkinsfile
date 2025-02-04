pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", url: 'https://github.com/futuandrei/group5-test-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}