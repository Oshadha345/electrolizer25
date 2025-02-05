// Dual-path JavaScript Game

let currentHint = 1;

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const userInput = document.getElementById("user-input");
    const hintButton = document.getElementById("hint-button-terminal");
    let stage = 1;
    let userNumber = "";
    let userGroup = "";
    let pathChosen = "";

    const users = [
        { E_Num: "E/22/001", group: "Group 01"},{E_Num: "E/22/228", group: "Group 01" },{ E_Num: "E/22/362", group: "Group 01" },{ E_Num: "E/22/004", group: "Group 01" },{ E_Num: "E/22/052", group: "Group 01" },{ E_Num: "E/22/130", group: "Group 01" },{ E_Num: "E/22/176", group: "Group 01" },{ E_Num: "E/22/227", group: "Group 01" },{ E_Num: "E/22/303", group: "Group 01" },{ E_Num: "E/22/378", group: "Group 01" },
        { E_Num: "E/22/018", group: "Group 02" },{ E_Num: "E/22/233", group: "Group 02" },{ E_Num: "E/22/366", group: "Group 02" },{ E_Num: "E/22/008", group: "Group 02" },{ E_Num: "E/22/054", group: "Group 02" },{ E_Num: "E/22/131", group: "Grop 02" },{ E_Num: "E/22/179", group: "Group 02" },{ E_Num: "E/22/232", group: "Group 02" },{ E_Num: "E/22/320", group: "Group 02"},{ E_Num: "E/22/382", group: "Group 02"},
        { E_Num: "E/22/027", group: "Group 03" },{ E_Num: "E/22/260", group: "Group 03" },{ E_Num: "E/22/372", group: "Group 03" },{ E_Num: "E/22/010", group: "Group 03" },{ E_Num: "E/22/056", group: "Group 03" },{ E_Num: "E/22/132", group: "Group 03" },{ E_Num: "E/22/180", group: "Group 03" },{ E_Num: "E/22/237", group: "Group 03" },{ E_Num: "E/22/322", group: "Group 03" },{ E_Num: "E/22/385", group: "Group 03" },
        { E_Num: "E/22/058", group: "Group 04" },{ E_Num: "E/22/261", group: "Group 04" },{ E_Num: "E/22/381", group: "Group 04" },{ E_Num: "E/22/014", group: "Group 04" },{ E_Num: "E/22/061", group: "Group 04" },{ E_Num: "E/22/135", group: "Group 04" },{ E_Num: "E/22/182", group: "Group 04" },{ E_Num: "E/22/248", group: "Group 04" },{ E_Num: "E/22/323", group: "Group 04" },{ E_Num: "E/22/396", group: "Group 04" },
        { E_Num: "E/22/060", group: "Group 05" },{ E_Num: "E/22/269", group: "Group 05" },{ E_Num: "E/22/402", group: "Group 05" },{ E_Num: "E/22/032", group: "Group 05" },{ E_Num: "E/22/074", group: "Group 05" },{ E_Num: "E/22/138", group: "Group 05" },{ E_Num: "E/22/184", group: "Group 05" },{ E_Num: "E/22/250", group: "Group 05" },{ E_Num: "E/22/328", group: "Group 05" },{ E_Num: "E/22/397", group: "Group 05" },
        { E_Num: "E/22/120", group: "Group 06" },{ E_Num: "E/22/280", group: "Group 06" },{ E_Num: "E/22/419", group: "Group 06" },{ E_Num: "E/22/034", group: "Group 06" },{ E_Num: "E/22/084", group: "Group 06" },{ E_Num: "E/22/141", group: "Group 06" },{ E_Num: "E/22/193", group: "Group 06" },{ E_Num: "E/22/253", group: "Group 06" },{ E_Num: "E/22/336", group: "Group 06" },{ E_Num: "E/22/400", group: "Group 06" },
        { E_Num: "E/22/121", group: "Group 07" },{ E_Num: "E/22/291", group: "Group 07" },{ E_Num: "E/22/425", group: "Group 07" },{ E_Num: "E/22/035", group: "Group 07" },{ E_Num: "E/22/102", group: "Group 07" },{ E_Num: "E/22/142", group: "Group 07" },{ E_Num: "E/22/203", group: "Group 07" },{ E_Num: "E/22/271", group: "Group 07" },{ E_Num: "E/22/353", group: "Group 07" },{ E_Num: "E/22/405", group: "Group 07" },
        { E_Num: "E/22/127", group: "Group 08" },{ E_Num: "E/22/324", group: "Group 08" },{ E_Num: "E/22/443", group: "Group 08" },{ E_Num: "E/22/036", group: "Group 08" },{ E_Num: "E/22/124", group: "Group 08" },{ E_Num: "E/22/151", group: "Group 08" },{ E_Num: "E/22/205", group: "Group 08" },{ E_Num: "E/22/288", group: "Group 08" },{ E_Num: "E/22/354", group: "Group 08" },{ E_Num: "E/22/409", group: "Group 08" },
        { E_Num: "E/22/157", group: "Group 09" },{ E_Num: "E/22/330", group: "Group 09" },{ E_Num: "E/22/449", group: "Group 09" },{ E_Num: "E/22/044", group: "Group 09" },{ E_Num: "E/22/125", group: "Group 09" },{ E_Num: "E/22/154", group: "Group 09" },{ E_Num: "E/22/211", group: "Group 09" },{ E_Num: "E/22/296", group: "Group 09" },{ E_Num: "E/22/364", group: "Group 09" },{ E_Num: "E/22/421", group: "Group 09" },
        { E_Num: "E/22/188", group: "Group 10" },{ E_Num: "E/22/337", group: "Group 10" },{ E_Num: "E/22/452", group: "Group 10" },{ E_Num: "E/22/051", group: "Group 10" },{ E_Num: "E/22/126", group: "Group 10" },{ E_Num: "E/22/159", group: "Group 10" },{ E_Num: "E/22/214", group: "Group 10" },{ E_Num: "E/22/301", group: "Group 10" },{ E_Num: "E/22/373", group: "Group 10" },{ E_Num: "E/22/427", group: "Group 10" },
    ];

    let typewriterQueue = Promise.resolve();
    function typewriterEffect(text, callback) {
        typewriterQueue = typewriterQueue.then(() => {
            return new Promise((resolve) => {
                let index = 0;
                const interval = setInterval(() => {
                    output.innerText += text.charAt(index);
                    index++;
                    if (index === text.length) {
                        clearInterval(interval);
                        if (callback) callback();
                        resolve();
                    }
                }, 30);
            });
        });
    }

    function printToTerminal(text) {
        typewriterEffect(text, () => {
            output.scrollTop = output.scrollHeight;
        });
    }

    function setTerminalPrompt() {
        const promptText = `${userNumber}@squidgame$: `;
        userInput.placeholder = promptText;
    }

    function askForRegistrationNumber() {
        printToTerminal("Enter your registration number:\n");
    }

    function validateRegistrationNumber(regNum) {
        return users.find(user => user.E_Num === regNum) || null;
    }

    function choosePath() {
        printToTerminal("Choose your path:\n1. The Logic Path\n2. The Mystery Path\n");
    }

    function handlePathChoice(input) {
        if (input === "1") {
            pathChosen = "logic";
            printToTerminal("Welcome to The Logic Path!\n");
            stage = 2;
            startLogicPath();
        } else if (input === "2") {
            pathChosen = "mystery";
            printToTerminal("Welcome to The Mystery Path!\n");
            stage = 2;
            startMysteryPath();
        } else {
            printToTerminal("Invalid choice. Enter 1 or 2:\n");
        }
    }

    function startLogicPath() {
        printToTerminal("Challenge 1: What is the output of 3 + '3' in JavaScript?\n");
    }

    function handleLogicPath(input) {
        if (stage === 2 && input === "33") {
            printToTerminal("Correct! \nNext challenge:\nWhat is the output of typeof NaN?\n");
            stage = 3;
        } else if (stage === 3 && input.toLowerCase() === "number") {
            printToTerminal("Correct! \nFinal Logic Challenge:\nDecode this - 01001000 01100101 01101100 01101100 01101111\n");
            stage = 4;
        } else if (stage === 4 && input.toLowerCase() === "hello") {
            printToTerminal(`\nCongratulations! You've completed The Logic Path. Your group is: ${userGroup}\n Remember this group number on the welcome day`);
            stage = 5;
        } else {
            printToTerminal("Incorrect. Try again.\n");
        }
    }

    function startMysteryPath() {
        printToTerminal("Challenge 1: Solve the riddle - The more you take, the more you leave behind. What am I?\n");
    }

    function handleMysteryPath(input) {
        if (stage === 2 && input.toLowerCase() === "footsteps" || stage === 2 && input.toLowerCase() === "Footsteps") {
            printToTerminal("Correct! \nNext challenge:\nWhat comes once in a minute, twice in a moment, but never in a thousand years?\n");
            stage = 3;
        } else if (stage === 3 && input.toLowerCase() === "m") {
            printToTerminal("Correct! \nFinal Mystery Challenge:\nI’m tall when I’m young, and I’m short when I’m old. What am I?\n");
            stage = 4;
        } else if (stage === 4 && input.toLowerCase() === "candle") {
            printToTerminal(`\nCongratulations! You've completed The Mystery Path. Your group is: ${userGroup}\n Remember this group number on the welcome day`);
            stage = 5;
        } else {
            printToTerminal("Incorrect. Try again.\n");
        }
    }

    hintButton.addEventListener("click", () => {
        const hints = {
            logic: [
                "Hint: JavaScript treats numbers and strings differently.",
                "Hint: typeof NaN is not what you expect.",
                "Hint: Binary to ASCII reveals words."
            ],
            mystery: [
                "Hint: When you walk you leave these behind",
                "Hint: Think about the alphabet.",
                "Hint: When the flame is gone, so am I."
            ]
        };

        const hintText = pathChosen ? hints[pathChosen][stage - 2] : "Enter your Enumber in the E/22/XXX format and Choose your path first.";
        addMorpheusCharacter(hintText);
    });
    function addMorpheusCharacter(hintText = "I am Morpheus", position = "bottom", offset = "20px") {
        const existingContainer = document.getElementById("neo-container");
        if (existingContainer) existingContainer.remove();

        const morpheusContainer = document.createElement("div");
        morpheusContainer.id = "neo-container";
        morpheusContainer.style.zIndex = "1000";
        morpheusContainer.style.position = "fixed";
        morpheusContainer.style.top = "20px";
        morpheusContainer.style.right = "-350px";
        morpheusContainer.style.transition = "right 1s ease-out";
        document.body.appendChild(morpheusContainer);

        const morpheusImage = document.createElement("img");
        morpheusImage.src = "doll.png";
        morpheusImage.style.width = "60px";
        morpheusImage.style.height = "auto";
        morpheusContainer.appendChild(morpheusImage);

        const hintBubble = document.createElement("div");
        hintBubble.textContent = hintText;
        hintBubble.style.position = "absolute";
        hintBubble.style.top = "85%";
        hintBubble.style.left = "100%";
        hintBubble.style.transform = "translateX(-100%)";
        hintBubble.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        hintBubble.style.color = "#ed09ed";
        hintBubble.style.padding = "20px 30px";
        hintBubble.style.borderRadius = "10px";
        hintBubble.style.fontSize = "18px";
        hintBubble.style.lineHeight = "1.6";
        hintBubble.style.textAlign = "center";
        hintBubble.style.width = "300px";
        hintBubble.style.opacity = "0";
        hintBubble.style.transition = "opacity 0.5s ease-in-out";
        hintBubble.style.boxShadow = "0 0 10px rgba(78, 18, 69, 0.9)";
        morpheusContainer.appendChild(hintBubble);

        setTimeout(() => morpheusContainer.style.right = "20px", 100);
        setTimeout(() => hintBubble.style.opacity = "1", 500);
        setTimeout(() => {
            hintBubble.style.opacity = "0";
            setTimeout(() => morpheusContainer.remove(), 500);
        }, 5000);
    }
    userInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const input = userInput.value.trim();
            userInput.value = "";

            if (!userNumber) {
                const student = validateRegistrationNumber(input);
                if (student) {
                    userNumber = student.E_Num;
                    userGroup = student.group;
                    setTerminalPrompt();
                    printToTerminal(`Welcome ${userNumber}! Let's begin...\n`);
                    choosePath();
                } else {
                    printToTerminal("Invalid registration number. Try again.\n");
                }
            } else if (!pathChosen) {
                handlePathChoice(input);
            } else if (pathChosen === "logic") {
                handleLogicPath(input);
            } else if (pathChosen === "mystery") {
                handleMysteryPath(input);
            }
        }
    });

    askForRegistrationNumber();
});
