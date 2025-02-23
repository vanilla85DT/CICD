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
                        sh '/usr/local/bin/docker/docker pull --disable-content-trust=false node:20-alpine'
                        sh '/usr/local/bin/docker/docker build -t csi402-app-image .'

                        sh '/usr/local/bin/docker/docker run -d --name csi-container -p 54100:3000 csi402-app-image:latest'
                    }
                }
            }
        }
    }
