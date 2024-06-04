#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Games variables

let enemies: string[] = ["Skeleton", "Zombie", "warrior", "Assassin"];
let mexEnemyHealth: number = 75; // Maximum health an enemy can have
let enemyAttackDamagToHero: number = 25; // Maximum damage an enemy can inflict

// player variable

let playerHealth: number = 100;
let playerAttackDamagToEnemy: number = 50; // Maximum damage the player can inflict
let numHealthPotion: number = 3; // Initial number of health potions
let healthPotionHealAmount: number = 30; // Amount of health restored by a health potion
let healthPotionDropChance: number = 50; // Percentage chance of a health potion dropping after defeating an enemy

// while loop condition

let gameRunning = true;

console.log(chalk.bold.bgBlue("\n\t\tWelcome to DeadZone!"));

// Main game loop
Game: while (gameRunning) {
  let enemyHealth: number = Math.floor(Math.random() * mexEnemyHealth + 1); // randomly genrat enemyHealth
  let enemyIndex: number = Math.floor(Math.random() * enemies.length); // Select a random enemy
  let enemy: string = enemies[enemyIndex]; // Get enemy name
  console.log(chalk.italic.magenta(`\n# ${enemy} has appeared #\n`));

  while (enemyHealth > 0) {
    console.log(chalk.green(`your Health: ${playerHealth}`));
    console.log(chalk.red(`${enemy} Health: ${enemyHealth}\n`));

    // Prompt player for action
    let options = await inquirer.prompt({
      name: "ans",
      type: "list",
      message: "What Would you like to do?",
      choices: ["1. Attack", "2. Take Health potion", "3. Run"],
    });
    // Handle player's action
    if (options.ans === "1. Attack") {
      let damagToEnemy = Math.floor(Math.random() * playerAttackDamagToEnemy + 1); // randomly genrat player Attack damag power
      let damagPlayer = Math.floor(Math.random() * enemyAttackDamagToHero + 1);

      enemyHealth -= damagToEnemy;
      playerHealth -= damagPlayer;

      console.log(
        chalk.magenta(`you strike the ${enemy} for ${damagToEnemy} Damage.`)
      );
      console.log(
        chalk.blue(`${enemy}  strike you for ${damagPlayer} Damage.`)
      );
      // Check if player is defeated
      if (playerHealth < 1) {
        console.log(
          chalk.green("you have too much damage. you are to weak to continue.")
        );
        break;
      }
    } else if (options.ans === "2. Take Health potion") {
      // Use health potion if available
      if (numHealthPotion > 0) {
        playerHealth += healthPotionHealAmount;
        numHealthPotion--;
        console.log(chalk.blue(`you use health potion for ${healthPotionHealAmount}`));
        console.log(chalk.cyan(`you now have ${playerHealth} health`));
        console.log(
          chalk.magenta(`you have ${numHealthPotion} health potion left.`)
        );
      } else {
        console.log(chalk.green(`you have no health potion left. defeat enemy for a chance get health potion`));
      }
    } else if (options.ans === "3. Run") {
      // Player chooses to run away from the enemy
      console.log(chalk.blue(`you run a way from ${enemy}`));
      continue Game;
    }
  }
  if (playerHealth < 1) {
    console.log(chalk.green(`you are out from battle. you are too weak.`));
    break;
  }
  console.log(chalk.red(`${enemy} was defeated!`));
  console.log(chalk.green(`you have ${playerHealth} health.`));

  let randomNumber = Math.floor(Math.random() * 100 + 1);
  if (randomNumber < healthPotionDropChance) {
    numHealthPotion++;

    console.log(chalk.magenta(`enemy give you health potion`));
    console.log(chalk.green(`your health is ${playerHealth}`));
    console.log(chalk.cyan(`your health potion is ${numHealthPotion}`));
  }

  // Ask player if they want to continue or exit
  let userOption = await inquirer.prompt({
    name: "ans",
    type: "list",
    message: "What would you like to do now",
    choices: ["1. continue", "2. Exit"],
  });

  if (userOption.ans === "1. continue") {
    console.log(chalk.italic.magenta("you are continue on your advanture"));
  } else {
    console.log(chalk.italic.blue("you successfuly Exit from DeadZone"));
    break;
  }
  console.log(chalk.bold.bgGreen("Thank you for playing. \n"));
}
