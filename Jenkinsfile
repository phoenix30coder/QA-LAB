pipeline {
    agent any
triggers {
cron('H/30 * * * *') // Runs every 30 minutes
}
environment {
CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
}
stages { // ✅ Missing "stages" block added
stage('Checkout') {
steps {
checkout([$class: 'GitSCM',
branches: [[name: '*/v1']], // Ensure correct branch
userRemoteConfigs: [[url:
'https://github.com/phoenix30coder/QA-LAB.git']]
])
}
}
stage('Install Dependencies') {
steps {
bat 'npm install'
bat 'npx cypress install' // Ensure Cypress binary is
installed

}
}
stage('Run Cypress Tests') { // ✅ Added a test execution stage
steps {
bat 'npx cypress run --reporter junit --reporter-options
"mochaFile=results/results.xml,toConsole=true"'
}
}
}
}
