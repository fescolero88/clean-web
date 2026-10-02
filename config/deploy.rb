# config valid only for current version of Capistrano
set :application, 'clean-web'
set :repo_url, 'git@github.com:WirelessAnalytics/clean-web.git'

# Slack Notifications
set :slackistrano, {
    klass: Slackistrano::CustomMessaging,
    team: "wirelessanalytics",
    webhook: ENV['SLACK_WEBHOOK_URL'],
    token: ENV['SLACK_API_TOKEN'],
    channel:'#dev-ops'
}
# Compile

