// TODO: Why do I have to set each enum to its string? If I don't, the value
// of the Suits/Ranks from HTTP are neither strings nor Suit/Rank.
export enum Suit {
  Heart = 'Heart',
  Diamond = 'Diamond',
  Club = 'Club',
  Spade = 'Spade'
}

export enum Rank {
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
  Six = 'Six',
  Seven = 'Seven',
  Eight = 'Eight',
  Nine = 'Nine',
  Ten = 'Ten',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
  Ace = 'Ace',
  Joker = 'Joker'
}

export class Card {
  suit: Suit;
  rank: Rank;

  constructor(suit:Suit, rank:Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getDisplayCard(): string {
    let displayString: string = "";
    switch(this.rank) {
      case Rank.Two:
        displayString += "2";
        break;
      case Rank.Three:
        displayString += "3";
        break;
      case Rank.Four:
        displayString += "4";
        break;
      case Rank.Five:
        displayString += "5";
        break;
      case Rank.Six:
        displayString += "6";
        break;
      case Rank.Seven:
        displayString += "7";
        break;
      case Rank.Eight:
        displayString += "8";
        break;
      case Rank.Nine:
        displayString += "9";
        break;
      case Rank.Ten:
        displayString += "10";
        break;
      case Rank.Jack:
        displayString += "J";
        break;
      case Rank.Queen:
        displayString += "Q";
        break;
      case Rank.King:
        displayString += "K";
        break;
      case Rank.Ace:
        displayString += "A";
        break;
      case Rank.Joker:
        displayString += "*";
        break;
    }

    if (this.rank != Rank.Joker) {
      switch(this.suit) {
        case Suit.Diamond:
          displayString += "&diams;";
          break;
        case Suit.Heart:
          displayString += "&hearts;";
          break;
        case Suit.Spade:
          displayString += "&spades;";
          break;
        case Suit.Club:
          displayString += "&clubs;";
          break;
      }
    }

    return displayString;
  }

  getDisplayColor(): string {
    switch(this.suit) {
      case Suit.Diamond:
      case Suit.Heart:
        return "red";
        break;
      default:
        return "black";
        break;
    }
  }
}
