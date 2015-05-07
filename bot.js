console.log("hello");

var tracery = require('tracery');

var rawGrammar = {
        move : ["flock", "race", "glide", "dance", "flee", "lie"],

        bird : ["swan", "heron", "sparrow", "swallow", "wren", "robin"],
        agent : ["cloud", "wave", "#bird#", "boat", "ship"],

        transVerb : ["forget", "plant", "greet", "remember", "embrace", "feel", "love"],
        emotion : ["sorrow", "gladness", "joy", "heartache", "love", "forgiveness", "grace"],
        substance : ["#emotion#", "mist", "fog", "glass", "silver", "rain", "dew", "cloud", "virtue", "sun", "shadow", "gold", "light", "darkness"],
        adj : ["fair", "bright", "splendid", "divine", "inseparable", "fine", "lazy", "grand", "slow", "quick", "graceful", "grave", "clear", "faint", "dreary"],
        doThing : ["come", "move", "cry", "weep", "laugh", "dream"],

        verb : ["fleck", "grace", "bless", "dapple", "touch", "caress", "smooth", "crown", "veil"],
        ground : ["glen", "river", "vale", "sea", "meadow", "forest", "glade", "grass", "sky", "waves"],

        poeticAdj : ["#substance#-#verb.ed#"],
        poeticDesc : ["#poeticAdj#", "by #substance# #verb#'d", "#adj# with #substance#", "#verb.ed# with #substance#"],

        ah : ["ah", "alas", "oh", "yet", "but", "and"],
        on : ["on", "in", "above", "beneath", "under", "by"],

punctutation: [",", ":", " ", "!", ".", "?"],

        noun : ["#ground#", "#agent#"],
        line : ["My #noun#, #poeticDesc#, my #adj# one", "More #adj# than #noun# #poeticDesc#", "#move.capitalize# with me #on# #poeticAdj# #ground#", "The #agent.s# #move#, #adj# and #adj#", "#poeticDesc.capitalize#, #poeticDesc#, #ah#, #poeticDesc#", "How #adj# is the #poeticDesc# #sub#", "#poeticDesc.capitalize# with #emotion#, #transVerb.s# the #noun#"],
      poem: ["#line##punctutation#<br>#line##punctutation#<br>#line##punctutation#<br>#line#."],
        origin : "#[sub:#noun#]poem#",
    };

var processedGrammar = tracery.createGrammar(rawGrammar);




var Twit = require('twit');


var T = new Twit({
    consumer_key:         '...'
  , consumer_secret:      '...'
  , access_token:         '...'
  , access_token_secret:  '...'
})


T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

var tweet = processedGrammar.flatten("#origin#");
console.log(tweet);


