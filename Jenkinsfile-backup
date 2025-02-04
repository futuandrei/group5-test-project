pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    def branchName = env.GIT_BRANCH ?: 'main'  // Default to 'main' if GIT_BRANCH is not set
                    git branch: branchName, url: 'https://github.com/futuandrei/group5-test-project.git'
                }
            }
        }
    }
}