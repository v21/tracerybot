This is a version of [Cheap Bots, Done Quick!](http://cheapbotsdonequick.com/) that runs as a single bot.

Basic instructions for usage:
- clone this repo to a Linux server
- create a Twitter app on the developer site, register a Twitter account, do that OAuth dance (maybe using [http://v21.io/iwilldancetheoauthdanceforyou/](http://v21.io/iwilldancetheoauthdanceforyou/) ?)
- put the values you get from that into a file called `.env` (as in `.env_EXAMPLE`)
- add your Tracery code into the `rawGrammar` variable within `bot.js`
- call `run_bot.sh` whenever you want the bot to tweet (ie via `cron`)
