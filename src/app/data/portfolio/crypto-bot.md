---
order: 3
title: Crypto Bot
slug: crypto-bot
url: github
source: https://github.com/SystemInfected/crypto-bot
responsibilities: developement, design
tags: trading bot, algorithm-based, open source
tech: node, typescript
images:
  [
    { src: crypto-bot_mac.png, aspectRatio: 3840/2897 },
    { src: crypto-bot_terminal.png, aspectRatio: 822/637 },
  ]
---

This is an open source trading bot for trading cryptocurrency.

The algorithm is based on the <a href="https://en.wikipedia.org/wiki/Coppock_curve" target="_blank">Coppock Curve</a> for buy indications and ATR (WMA of TR) for sell indication.
The bot is a Node server written in typescript and it runs a React front-end with graphs to visualize the data.

CCXT is used to get current price data and connect to exchanges.

_ATT: This is built mostly for fun. I am no trading expert, use this at your own risk._
