document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output1");
  let typewriterQueue = Promise.resolve(); // Initialize a queue

  // Function to simulate the typewriter effect
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

  // The new introduction for the game (language translation theme)
  function askForPhrase() {
    const text =
      "Welcome to the Transformer Game.\n" +
      "In this game, you will be provided a phrase in transformer language, and your task is to translate it into English." +
      "Let's begin the translation challenge. Are you ready?\n\n"+
      "Enter your Registration Number:\n"+
      "(only last 3 digits)";

    printToTerminal(text);
  }



  // Trigger the translation game steps
  function startGame() {
    askForPhrase();
    setTimeout(() => {
      showTranslationPrompt();
    }, 3000); // Wait for 3 seconds before showing the translation prompt
  }

  // Start the game on load
  startGame();
});

  


