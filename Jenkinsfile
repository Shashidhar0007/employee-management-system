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

        stage('Scan Backend') {

            steps {
                sh 'trivy image employee-backend:1.0'
            }
        }

        stage('Scan Frontend') {

            steps {
                sh 'trivy image employee-frontend:1.0'
            }
        }

        stage('Push Images') {

            steps {

                sh '''
                docker tag employee-backend:1.0 YOUR_DOCKERHUB_USER/employee-backend:1.0
                docker tag employee-frontend:1.0 YOUR_DOCKERHUB_USER/employee-frontend:1.0

                docker push YOUR_DOCKERHUB_USER/employee-backend:1.0
                docker push YOUR_DOCKERHUB_USER/employee-frontend:1.0
                '''
            }
        }
    }
}