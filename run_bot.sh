#!/bin/bash
while read line; do export "$line";
done < .env

node bot.js