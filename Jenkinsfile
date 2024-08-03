pipeline {
    agent any
    tools {
      nodejs "18"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
