import Card from "./Card";

/**  input is a deck of cards and returns two card components
 * calls hand twice
 */

function Hand({ deck }) {
  const cards = ['JH', 'AH'];

  return (
    <div>
      {cards.map(card => <Card card={card} />)}
    </div>
  );
}




export default Hand;