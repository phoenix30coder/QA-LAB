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
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --headless --browser chrome'
            }
        }
        stage("Generate Report"){
            steps{
                bat "npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json"
                bat "npx marge cypress/reports/report.json -o cypress/reports --inline "
                bat "start cypress/reports/cypress/reports/report.html"

            }


    }
}
