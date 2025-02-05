
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output1");
    const userInput = document.getElementById("user-input1");
    let typewriterQueue = Promise.resolve(); // Initialize a queue
    function typewriterEffect(text, callback) {
      typewriterQueue = typewriterQueue.then(() => {
        return new Promise((resolve) => {
          let index = 0;
          const interval = setInterval(() => {
            output.textContent += text.charAt(index);
            index++;
            if (index === text.length) {
              clearInterval(interval);
              if (callback) callback();
              resolve(); // Move to the next queued call
            }
          }, 10); // The speed of the typewriter effect
        });
      });
    }
  
    // Function to print to terminal and keep scrolling down
    function printToTerminal(text) {
      typewriterEffect(text, () => {
        output.scrollTop = output.scrollHeight;
      });
    }
  
    // Function to set the terminal prompt format (user_number@squidgame$:)
    function setTerminalPrompt() {
      const promptText = `${userNumber}@squidgame$: `;
      userInput.placeholder = promptText;
    }
  
    // function askForRegistrationNumber() {
    //   const text =
    //   "Welcome to the Squid Game. I am the Front Man. You did not arrive here by chance. Whether it was ambition, desperation, or sheer fate, you now stand in a world where the rules are simple, yet the consequences are absolute.\n\n" + 
    //   "Here, every player is given the same chance. No privilege, no shortcuts—only the game, fair and unyielding. Unlike the real world, where fate favors some more than others, in this arena, your choices alone determine your survival. Every mind starts equal, but only those who adapt, learn, and push beyond their limits will succeed.\n\n"+ 
    //   "You will face trials that test your skill, wit, and determination. Some will falter. Some will rise. But in the end, it is not strength or luck that defines the winner—it is the will to persist and the mind to outthink.\n\n" + 
    //   "The game has begun. Are you ready to play?";
    //   printToTerminal(text);
    // }
    function askForRegistrationNumber() {
      const text = 
      "Welcome to the Squid Game.I am the Front Man.\n\n" +
      
      "You did not arrive here by chance. Whether it was ambition, desperation, or sheer fate, you now stand in a world where the rules are simple, yet the consequences are absolute.\n\n" +
      
      "Here, every player is given the same chance. No privilege, no shortcuts—only the game, fair and unyielding. Unlike the real world, where fate favors some more than others, in this arena, your choices alone determine your survival.\n\n" +
      
      "Every mind starts equal, but only those who adapt, learn, and push beyond their limits will succeed.\n\n" +
      
      "You will face trials that test your skill, wit, and determination. Some will falter. Some will rise. But in the end, it is not strength or luck that defines the winner—it is the will to persist and the mind to outthink.\n\n" +
      
      "The game has begun. Are you ready to play?";
  
      printToTerminal(text);
  }
  
    // Ask for the registration number initially
    askForRegistrationNumber();
  });
  


