pipeline {
    agent any
    tools {
        nodejs "Node22"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/chiru7949/tournament-frontend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build Angular App') {
            steps {
                sh 'npx ng build --configuration production'
            }
        }
        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
        stage('Deploy to Nginx') {
            steps {
                sh 'rm -rf /var/www/html/*'
				sh 'cp -r dist/tournament-frontend/* /var/www/html/'

            }
        }
    }
}