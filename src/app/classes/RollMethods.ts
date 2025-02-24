import { rollDice } from "../utils";
import { Modifier, SavingThrowType } from "../types";
import { Log } from "../decorators";

// When calling rollSavingThrow or rollAttackRoll, the method will log the arguments and the result
// of the roll

class RollMethods {
  @Log // Prints logs before and after the method is called
  rollSavingThrow({
    type,
    difficultyClass,
    baseSaveBonus,
    abilityModifier,
  }: {
    type: SavingThrowType;
    difficultyClass: number;
    baseSaveBonus: number;
    abilityModifier: Modifier;
  }) {
    const d20 = rollDice(20);
    console.log(`Dice roll: ${d20}`);
    const total = d20 + baseSaveBonus + abilityModifier;
    console.log(
      `Roll: ${d20} + ${baseSaveBonus} (base) + ${abilityModifier} (ability) = ${total}`
    );
    return total >= difficultyClass;
  }

  @Log
  rollAttack({
    armorClass,
    baseAttackBonus,
    abilityModifier,
  }: {
    armorClass: number;
    baseAttackBonus: number;
    abilityModifier: Modifier;
  }) {
    const d20 = rollDice(20);
    console.log(`Dice roll: ${d20}`);
    const total = d20 + baseAttackBonus + abilityModifier;
    console.log(
      `Roll: ${d20} + ${baseAttackBonus} (base) + ${abilityModifier} (ability) = ${total}`
    );
    return total >= armorClass;
  }
}

export { RollMethods };
