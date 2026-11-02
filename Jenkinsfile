pipeline {

    agent any

    stages {

        stage('Build Backend') {

            steps {
                sh 'docker build -t employee-backend:1.0 ./backend'
            }
        }

        stage('Build Frontend') {

            steps {
                sh 'docker build -t employee-frontend:1.0 ./frontend'
            }
        }
    }
}
