# project07_adventure_game

* Text-Based Adventure-Game in TypeScript and Node.js
* Details About project 👇 

# DeadZone

Welcome to DeadZone, an interactive command-line role-playing game where you battle against various enemies in a post-apocalyptic world. Test your survival skills by fighting enemies, managing your health, and using health potions wisely.

## Gameplay

In DeadZone, you encounter random enemies such as Skeletons, Zombies, Warriors, and Assassins. Each enemy has a random health value and can inflict damage on you. You, as the player, have several actions to choose from in each encounter:

1. **Attack**: Strike the enemy with a random damage value.
2. **Take Health Potion**: Use a health potion to restore some of your health. Health potions are limited and can be dropped by defeated enemies.
3. **Run**: Attempt to flee from the current enemy, avoiding further damage.

Your goal is to defeat as many enemies as possible while managing your health and resources. After each battle, you will be prompted to either continue your adventure or exit the game.

## Features

- Randomly generated enemy types and health values.
- Player actions include attacking, using health potions, and running away.
- Health potion drops from defeated enemies based on a random chance.
- Simple command-line interface using `inquirer` for user interaction.
- Colorful and engaging text output using `chalk`.