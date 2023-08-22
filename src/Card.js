

const BASE_CARD_URL = 'https://deckofcardsapi.com/static/img/';


/** accepts a card as a string in the format: 9H
 * and returns an image of that card
 */

function Card({ card }) {

  return (
    <img src={`${BASE_CARD_URL}/${card}.png`}></img>
  );
}



export default Card;