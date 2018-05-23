function theBeatlesPlay(musicians, instruments) {
  var rockstars = [];
  for (var x in musicians) {
    rockstars.push(musicians[x] + " plays " + instruments[x]);
}
  return rockstars;
}

function johnLennonFacts(facts) {
  var x = 0;
  while (facts[x]) {
    facts[x] = facts[x] + "!!!";
    x++;
}
return facts;
}

function iLoveTheBeatles(numbers){
  var allyouneedislove = [];
  do {
    allyouneedislove.push("I love the Beatles!");
    numbers++;
}
  while (numbers < 15); {
}
  return allyouneedislove;
}
