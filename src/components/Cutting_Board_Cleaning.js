import React, { Component } from 'react';
import './Cutting_Board_Cleaning.css';
import Header from './Header.js';
class Cutting_Board_Cleaning extends Component {

  render() {
    const questionList = [
      {description: 'Wooden cutting boards should never be submerged in water for extended periods of time. NEVER place your wooden cutting board in the dishwasher. Wash your cutting board with soap and warm water and scrub well.', key: 0},
      {description: 'Wipe down the board and let it dry thoroughly overnight, either sitting on a wire rack or upright.  Laying it flat will restrict air flow and could lead to warping.', key: 1},
      {description: 'Once dried overnight, use your hands, a small bar towel, or new paint brush to apply a generous layer of mineral oil (do not use vegetable or nut-based oil on your cutting board for the simple reason that it will spoil and become rancid) to the sides, top, bottom, and any groove, grip, or handle. It is extremely important to give your cutting board a good oiling on all surfaces every 3-4 weeks, more often with frequent use.', key: 2},
      {description: 'A few times a year, or more with heavier use, we recommend seasoning your cutting board using a beeswax & mineral oil wood conditioning paste, which is supplied with each board. When your board becomes lighter in color and feels \'dry\' to the touch, that\'s when you know it\'s time to re-season your board.' , key: 3},
      {description: 'To apply board cream, wait until the board is dry after washing or oiling, then apply a small amount of cream onto the board. Using a soft cloth, buff the cream/wax into the wood in a circular pattern, forming a thin coat. Repeat over the entire surface of the board and especially the sides.', key: 4}
    ];

    return (

      <div class='pageContainer'>
        <Header />
        <h1>Cutting Board Cleaning and Maintenance</h1>
        <ol>
          {questionList.map(question => {
            return (
              <li key={question.key}>{question.description}</li>
            );
          })}
        </ol>
        <h2>Tips</h2>
        <h3>Disinfect & deodorize using vinegar</h3>
        <p>We recommend keeping a spray bottle of vinegar handy to disinfect & deodorize your wood cutting board. Acetic acid (white vinegar) is an excellent disinfectant for E. coli, Salmonella and other household bacteria. Spray vinegar on the wood cutting board, let sit for a few minutes and wipe it with a damp warm cloth.</p>
        <h3>Remove stains & deodorize with baking soda</h3>
        <p>Combine 2 tablespoons of baking soda, 1 tablespoon of salt and 3 tablespoons of hot water to create a non-toxic cleaning agent. Mix these ingredients together to form a paste, and scrub the entire surface of the cutting board. Finally, wipe it with a warm wet cloth and dry with a dish towel.</p>
      </div>
    );
  }
}



export default Cutting_Board_Cleaning;







// Wooden cutting boards should never be submerged in water for extended periods of time. NEVER place your wooden cutting board in the dishwasher. Wash your cutting board with soap and warm water and scrub well.
// Wipe down the board and let it dry thoroughly overnight, either sitting on a wire rack or upright.  Laying it flat will restrict air flow and could lead to warping.
// Once dried overnight, use your hands, a small bar towel, or new paint brush to apply a generous layer of mineral oil (do not use vegetable or nut-based oil on your cutting board for the simple reason that it will spoil and become rancid) to the sides, top, bottom, and any groove, grip, or handle. It is extremely important to give your cutting board a good oiling on all surfaces every 3-4 weeks, more often with frequent use.
// A few times a year, or more with heavier use, we recommend seasoning your cutting board using a beeswax & mineral oil wood conditioning paste, which is supplied with each board. When your board becomes lighter in color and feels 'dry' to the touch, that's when you know it's time to re-season your board.
// To apply board cream, wait until the board is dry after washing or oiling, then apply a small amount of cream onto the board. Using a soft cloth, buff the cream/wax into the wood in a circular pattern, forming a thin coat. Repeat over the entire surface of the board and especially the sides.
// Tips
// Disinfect & deodorize using vinegar
// We recommend keeping a spray bottle of vinegar handy to disinfect & deodorize your wood cutting board. Acetic acid (white vinegar) is an excellent disinfectant for E. coli, Salmonella and other household bacteria. Spray vinegar on the wood cutting board, let sit for a few minutes and wipe it with a damp warm cloth.
// Remove stains & deodorize with baking soda
// Combine 2 tablespoons of baking soda, 1 tablespoon of salt and 3 tablespoons of hot water to create a non-toxic cleaning agent. Mix these ingredients together to form a paste, and scrub the entire surface of the cutting board. Finally, wipe it with a warm wet cloth and dry with a dish towel.
