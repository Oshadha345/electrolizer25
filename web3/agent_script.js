document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output1");
  const userInput = document.getElementById("user-input1");
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

  // Function to set the terminal prompt format (translator@squidgame$:)
  function setTerminalPrompt() {
    const promptText = `translator@squidgame$: `;
    userInput.placeholder = promptText;
  }

  // The new introduction for the game (language translation theme)
  function askForPhrase() {
    const text =
      "Welcome to the Transformer Game.\n\n" +
      "In this game, you will be provided with phrases in transformer languages, and your task is to translate them into English.\n\n" +
      "You must think a lot.\n" +
      "Prepare yourself." +
      "Let's begin the translation challenge. Are you ready?\n\n";

    printToTerminal(text);
  }

  // New game phrase to translate (in a foreign language)
  function showTranslationPrompt() {
    const foreignPhrase = "Hola, ¿cómo estás?"; // A phrase in Spanish
    const text = `Your first phrase to translate: \n\n"${foreignPhrase}"\n\nTranslate this to English: `;
    printToTerminal(text);
    setTerminalPrompt();
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

  


