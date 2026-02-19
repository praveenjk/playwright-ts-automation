pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        CI = 'true'
        BASE_URL = "${env.BRANCH_NAME == 'QA' ? 'https://www.google.com/' : 'https://www.youtube.com/'}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test --grep @smoke'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            }
        }
    }

    post {
        always {
            junit 'test-results/results.xml'
        }
    }
}
