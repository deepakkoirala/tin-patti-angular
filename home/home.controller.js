import { distribute } from "./table";
import { checkCard, getWinner } from "./rule";
import { printCardNumber } from "./cards";
import * as _ from "lodash";

class HomeCtrl {
  table = [];
  tableCheck = [];
  totalPlayers = 2;
  winner;

  constructor($scope) {
    "ngInject";

    this.initCards();
  }

  convert(i) {
    return printCardNumber(i);
  }

  initCards() {
    let arr = [
      // "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "14"
    ];

    let cardType = ["♥", "♦", "♣", "♠"];

    let deck = [];
    cardType.map((d, i) => {
      arr.map(d => {
        deck.push({ type: i + 1, val: d });
      });
    });
    deck = _.shuffle(deck);
    // console.log(deck);
    // console.log(deck.length);

    this.table = distribute(deck, this.totalPlayers);
    console.log("table", this.table);

    this.table = [
      [{ type: 2, val: 5 }, { type: 4, val: 6 }, { type: 4, val: 6 }],
      [{ type: 2, val: 7 }, { type: 3, val: 6 }, { type: 3, val: 6 }],
      [{ type: 2, val: 5 }, { type: 1, val: 8 }, { type: 1, val: 2 }]
    ];

    this.tableCheck = this.table.map(d => {
      let i = checkCard(arr, d);
      i["items"] = Object.assign([], i.items.reverse());
      return i;
    });

    this.winner = getWinner(
      this.table.map((d, i) => {
        let ob = checkCard(arr, d);
        ob["player"] = i + 1;
        return ob;
      })
    );
    console.log("winner", this.winner);
  }
}

export default HomeCtrl;
