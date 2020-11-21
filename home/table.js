let distribute = (deck, players) => {
  let cards = 3;
  let cardLocation = 0;
  // let _tr = [[], [], []];
  let _tr = [];
  for (i = 0; i < players; i++) _tr.push([]);
  for (var i = 1; i <= cards; i++) {
    let p = 2;
    for (var j = 1; j <= players; j++) {
      _tr[p - 1].push(deck[cardLocation]);
      if (p < players) {
        p++;
      } else p = 1;
      cardLocation++;
    }
  }
  return _tr;
};

export { distribute };
