// Register cloud functions here ! 
import "bot"

//example
Parse.Cloud.define('hello', function(req, res) {
  return 'Hi';
});

Parse.Cloud.define('Bot', function(req, res){
  return 'Bot saying usefull stuff (or not)'
});