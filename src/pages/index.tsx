import Button from "../components/button";
import { RollMethods } from "app/classes/RollMethods";
import { SAVING_THROW_TYPES } from "app/constant";

export default function Page() {
  const rollMethods = new RollMethods();
  return (
    <div>
      <h1>Decorators</h1>
      <div>
        <Button
          onClick={() =>
            rollMethods.rollSavingThrow({
              type: SAVING_THROW_TYPES.FORTITUDE,
              difficultyClass: 12,
              baseSaveBonus: 10,
              abilityModifier: 3,
            })
          }
        >
          Roll Fortitude Saving Throw
        </Button>
      </div>
      <div></div>
      <Button
        onClick={() =>
          rollMethods.rollAttack({
            armorClass: 18,
            baseAttackBonus: 5,
            abilityModifier: 3,
          })
        }
      >
        Roll Attack Throw
      </Button>
    </div>
  );
}
