function Story (name, adj, adv, verb) {
        this.name = name;
        this.adj = adj;
        this.adv = adv;
        this.verb = verb;
    }

// WITH FUNCTION
let karolinastory = ["Karolina", "nice", "fastly", "go"];
function newStory(mywords) {
return `Many years ago in Denmark there was a prince called ${mywords[0]}. One day Hamlet's father, the king, dies suddenly and Hamlet is very ${mywords[1]}. After this, Hamlet's mother, Gertrude, gets married again very ${mywords[2]}. She ${mywords[3]} her husband's brother, Claudius, and Claudius is now the king! 'Aargh! How could you do this to me!'`;
}
console.log(newStory(karolinastory));

// WITH OBJECT
// let myStory = new Story("Yavuz", "good","fully","make")

// let shotStory = `Many years ago in Denmark there was a prince called ${myStory.name}. One day Hamlet's father, the king, dies suddenly and Hamlet is very ${myStory.adj}. After this, Hamlet's mother, Gertrude, gets married again very ${myStory.adv}. She ${myStory.verb} her husband's brother, Claudius, and Claudius is now the king! 'Aargh! How could you do this to me!'`;


// console.log(shotStory);