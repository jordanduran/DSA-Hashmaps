 const HashMap = require(`./HashMap`);

function main(){
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lor = new HashMap;
  
  lor.set(`Hobbit`, `Bilbo`);
  lor.set(`Hobbit`, `Frodo`);
  lor.set(`Wizard`, `Gandolf`);
  lor.set(`Human`, `Aragon`);
  lor.set(`Elf`, `Legolas`);
  lor.set(`Maiar`, `The Necromancer`);
  lor.set(`Maiar`, `Sauron`);
  lor.set(`RingBearer`, `Gollum`);
  lor.set(`LadyOfLight`, `Galadriel`);
  lor.set(`HalfElven`, `Arwen`);
  lor.set(`Ent`, `Treebeard`);

  console.log(lor);
  console.log(lor.get('Maiar'));
  console.log(lor.get('Hobbit'));

}

main();