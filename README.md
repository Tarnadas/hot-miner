# HOT miner

A script to automatically mine HOT every 2 hours.

## Setup

Copy the `.env.example` file and rename it to `.env`. Paste your account ID and private key without the `ed25519:` prefix.

## Run

Run via pm2:

```sh
# install pm2
npm i -g pm2

# run script
pm2 start hot-miner.config.js
```
