pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/phoenix30coder/QA-LAB.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --headless'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'cypress/reports',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}
