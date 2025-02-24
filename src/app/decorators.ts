function Log(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value; // Reference to the original method
  descriptor.value = function (...args: any[]) {
    if (propertyKey === "rollSavingThrow") {
      console.log(`Rolling a ${args[0].type} saving throw... \n
        DC: ${args[0].difficultyClass} \n
        Rolling a d20...`);
    }
    if (propertyKey === "rollAttackRoll") {
      console.log(`Rolling an attack roll... \n
        AC: ${args[0].armorClass} \n
        Rolling a d20...`);
    }
    const result = originalMethod.apply(this, args); // Call the original method
    console.log(result ? "Success!" : "Failure!"); // result is the return value of the original method
    return result;
  }
  return descriptor;
}

export { Log };