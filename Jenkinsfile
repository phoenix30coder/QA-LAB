pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                 git branch: 'main', url: 'https://github.com/phoenix30coder/QA-LAB'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
    npm cache clean --force
    rmdir /s /q node_modules
    del /f /q package-lock.json
    npm install
'''
            }
        }

        stage('Run Cypress Tests and report generation') {
            steps {
                bat 'npm run test'
            }
        }



    }
}
