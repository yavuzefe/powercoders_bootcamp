// Create an array to hold your top choices (colors, presidents, whatever).
let topChoices = ["black", "Ozzy", "Kiwi"];
// For each choice, log to the screen a string like: "My #1 choice is blue."
for(let i=0; i<topChoices.length; i++) {
    console.log(`My #${i} choice is ${topChoices[i]}`);
};

// Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
for(let i=0; i<topChoices.length; i++) {
    let suffix;
    
    console.log(`My ${i}${suffix} choice is ${topChoices[i]}`);
};