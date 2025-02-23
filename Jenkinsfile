pipeline {
        agent any

        stages {
            stage('Checkout Code') {
                steps {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        userRemoteConfigs: [[
                            credentialsId: 'supervanilla85',
                            url: 'https://github.com/vanilla85DT/CICD.git'
                        ]]
                    ])
                }
            }

            stage('Build Docker Image') {
                steps {
                    script {
                        sh 'docker build -t csi402-app-image .'

                        sh 'docker run -d --name csi-container -p 54100:3000 csi402-app-image:latest'
                    }
                }
            }
        }
    }
