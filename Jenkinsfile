pipeline {
    agent any
    tools {
      nodejs "18"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
