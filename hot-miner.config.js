module.exports = {
  apps: [
    {
      name: 'hot-miner',
      script: 'yarn',
      args: 'start',
      cwd: '.',
      cron_restart: '0 */2 * * *'
    }
  ]
};
