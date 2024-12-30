# Dice Game
The **Dice Game** is a simple and interactive React-based application that simulates a dice-rolling game. Players select a number and try to predict the outcome of the dice roll, while also adjusting the difficulty level to make the game more challenging.

## Features
- **Dynamic Difficulty Levels**: Players can choose from `Easy`, `Medium`, `Difficult`, `Hard`, and `Hell` modes, each with unique dice probabilities and rewards.
- **Score Management**: Earn points based on the correctness of predictions or lose points for incorrect guesses.
- **Dice Animation**: Realistic dice rolling animation enhances the gameplay experience.
- **Pop-ups**: Engaging pop-ups to provide feedback, rules, or warnings for invalid actions.
- **Reset Functionality**: Quickly reset the game and start over.
- **Rules Display**: Easy access to the game rules.

## Project Structure
### Components
- **DiceGame**: The main game component that handles the gameplay and UI.
- **PopUp**: A reusable pop-up component for displaying messages.
- **RulesPopUp**: A dedicated component for showing the game rules.

### Assets
- **CSS**: The `dicegame.css` file contains the styling for the game interface.
- **Dice Images**: Images for dice faces (`dice_1.png`, `dice_2.png`, ..., `dice_6.png`) located in the `/dices/` directory.

## Gameplay
### Rules
1. Select a number from 1 to 6.
2. Roll the dice by clicking on it.
3. Earn or lose points based on the result:
   - If the rolled dice matches the selected number, gain points based on the `difficulty`.
   - If it doesn't match, lose 2 points.
4. Change the difficulty to experience different probabilities and rewards.

## Difficulty Levels
Each difficulty level adjusts the probabilities of rolling specific dice numbers and the corresponding rewards:

| Difficulty  | Probabilities Distribution (Face 1 to 6) | Rewards  |
|-------------|------------------------------------------|----------|
| Easy        | Equal (1/6 each)                        | +1 to +6 |
| Medium      | Skewed towards 1                        | +1 to +6 |
| Difficult   | Heavily skewed                          | Varies   |
| Hard        | Very challenging                        | Varies   |
| Hell        | Almost impossible to score high         | High Risk/Reward |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dice-game.git
   cd dice-game
2. Install dependencies:
   ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
4. Open your browser and navigate to `http://localhost:3000` to play the game.

## File Structure
    .
    ├── public/
    │   ├── dices/
    │   │   ├── dice_1.png
    │   │   ├── dice_2.png
    │   │   └── ...
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   ├── DiceGame.js
    │   │   ├── home.js
    │   │   └── PopUp.js
    │   ├── css/
    │   │   ├── dicegame.css
    │   │   └── ...
    │   ├── App.js
    │   ├── index.js
    │   └── ...
    ├── package.json
    ├── ...
    └── README.md

## Future Enhancements
1. **Leaderboard**: Add a leaderboard to track high scores.
2. **Multiplayer Mode**: Introduce a competitive multiplayer mode.
3. **Sound Effects**: Enhance the game with dice-rolling sound effects.
4. **Custom Difficulty**: Allow players to configure their probabilities and rewards.

## License
This project is licensed under the [MIT License](https://github.com/MayurVadhadiya360/dice-game/blob/main/LICENSE).  
Enjoy playing! 🎲