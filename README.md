# HOT miner

A script to automatically mine HOT every 2 hours.

## Setup

- Install Nodejs
- Install yarn via `npm i -g yarn`
- Install pm2 via `npm i -g pm2`
- Install dependencies via running `yarn`
- Copy the `.env.example` file and rename it to `.env`. Paste your account ID and private key without the `ed25519:` prefix.

## Run

Run via pm2:

```sh
# run script
pm2 start hot-miner.config.js
```
