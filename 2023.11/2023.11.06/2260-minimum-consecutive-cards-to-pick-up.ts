function minimumCardPickup(cards: number[]): number {
  const map = new Map<number, number>();

  let minimumCards = Infinity;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    if (map.has(card)) {
      minimumCards = Math.min(minimumCards, i - map.get(card)! + 1);
    }

    map.set(card, i);
  }

  return minimumCards === Infinity ? -1 : minimumCards;
}
