var tracery = require('tracery-grammar');

var rawGrammar = 
{
	"origin": [
		"... take the #ordinal# #direction# after #landmark# ...",
		"... continue past #landmark#, then turn #direction# ...",
		"... you should go past #landmark# ...",
		"... be on the lookout for #landmark# ...",
		"... cut through to the #direction# ...",
		"... carry on for #distance# ...",
		"(if you see #landmark# #too far#)",
		"... carry on past #landmark# ...",
		"... go past #landmark# ...",
		"... then under #bridge# ...",
		"... there'll be #landmark# to your #direction# ...",
		"... then past #landmark# ...",
		"... take the #ordinal# #direction# ...",
		"... continue for #distance# ...",
		"... after #distance#, turn #direction# ...",
		"... then turn #direction# ...",
		"... turn #direction# here ...",
		"... #ordinal# #direction# ...",
		"... #direction# ...",
		"... veer #direction# #possiblejunction# ...",
		"... keep going til you see #landmark# ..."
	],
	"direction": [
		"left",
		"right"
	],
	"ordinal": [
		"first",
		"second",
		"third"
	],
	"landmark": [
		"the McDonalds",
		"a rather nice pub",
		"the petrol station",
		"the old church",
		"a little church",
		"a small copse",
		"the roundabout",
		"a rather pretty little village green",
		"the motorway",
		"the canal",
		"a pub",
		"the signpost",
		"a massive oak tree",
		"a white building",
		"the town center",
		"a corner shop",
		"the Co-op",
		"the big Tescos",
		"Morrisons",
		"a multistorey",
		"that italian restaurant we went to that one time",
		"the river",
		"boats",
		"the fairground",
		"the park",
		"a pizza place"
	],
	"distance": [
		"half a mile",
		"a few hundred meters",
		"a few more minutes",
		"a little bit further",
		"a few miles",
		"one and a half miles",
		"a while",
		"3 miles",
		"a few more turnings",
		"a few blocks",
		"most of the way down",
		"about a kilometer",
		"a mile",
		"a bit",
		"- well, it's about 10 minutes on foot",
		"half a kilometer",
		"nearly ten miles",
		"just under four miles"
	],
	"bridge": [
		"the bridge",
		"the motorway",
		"a railway line",
		"the bypass"
	],
	"too far": [
		"you've went too far",
		"you should double back",
		"you're nearly there",
		"turn round",
		"keep going"
	],
	"possiblejunction": [
		" ",
		"at the junction",
		"by the #landmark#",
		"when you meet the road coming down from #landmark#",
		" ",
		"at the roundabout"
	]
}

var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

var tweet = processedGrammar.flatten("#origin#");
//console.log(tweet);


var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  //console.log(data)
})



