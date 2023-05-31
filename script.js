function castSpell(spellName, callback) {
    console.log(`Casting ${spellName}...`);
    setTimeout(() => { // built-in JavaScript function that schedules a function to be called after a certain amount of time.
      console.log(`Finished casting ${spellName}!`);
      callback();
    }, 2000); //schedules the arrow function to be called after 2000ms (2 secs)
  }
  
  function playSoundEffect() {
    console.log("Playing sound effect...");
  }
  
  castSpell("Fireball", playSoundEffect);