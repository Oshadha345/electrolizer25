const caesarShift = (text, shift) => {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
};

const autobotAlphabet = {
    'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E',
    'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J',
    'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O',
    'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T',
    'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y',
    'Z': 'Z', ' ': ' '
};



const playerInfo = [
    { regNum: "286", groupName: "Bumblebee" },
    { regNum: "389", groupName: "Bumblebee" },
    { regNum: "68", groupName: "Bumblebee" },
    { regNum: "156", groupName: "Bumblebee" },
    { regNum: "134", groupName: "Bumblebee" },
    { regNum: "116", groupName: "Bumblebee" },
    { regNum: "80", groupName: "Bumblebee" },
    { regNum: "164", groupName: "Bumblebee" },
    { regNum: "417", groupName: "Bumblebee" },
    { regNum: "66", groupName: "Bumblebee" },
    { regNum: "415", groupName: "Bumblebee" },

    { regNum: "77", groupName: "optimusprime" },
    { regNum: "363", groupName: "optimusprime" },
    { regNum: "215", groupName: "optimusprime" },
    { regNum: "316", groupName: "optimusprime" },
    { regNum: "107", groupName: "optimusprime" },
    { regNum: "79", groupName: "optimusprime" },
    { regNum: "128", groupName: "optimusprime" },
    { regNum: "133", groupName: "optimusprime" },
    { regNum: "426", groupName: "optimusprime" },
    { regNum: "287", groupName: "optimusprime" },
    { regNum: "177", groupName: "optimusprime" },

    { regNum: "26", groupName: "Ironhide" },
    { regNum: "108", groupName: "Ironhide" },
    { regNum: "245", groupName: "Ironhide" },
    { regNum: "218", groupName: "Ironhide" },
    { regNum: "347", groupName: "Ironhide" },
    { regNum: "146", groupName: "Ironhide" },
    { regNum: "22", groupName: "Ironhide" },
    { regNum: "326", groupName: "Ironhide" },
    { regNum: "394", groupName: "Ironhide" },
    { regNum: "319", groupName: "Ironhide" },
    { regNum: "161", groupName: "Ironhide" },

    { regNum: "430", groupName: "Sideswip" },
    { regNum: "139", groupName: "Sideswip" },
    { regNum: "453", groupName: "Sideswip" },
    { regNum: "422", groupName: "Sideswip" },
    { regNum: "309", groupName: "Sideswip" },
    { regNum: "365", groupName: "Sideswip" },
    { regNum: "390", groupName: "Sideswip" },
    { regNum: "91", groupName: "Sideswip" },
    { regNum: "86", groupName: "Sideswip" },
    { regNum: "281", groupName: "Sideswip" },
    { regNum: "113", groupName: "Sideswip" },

    { regNum: "371", groupName: "Jetfire" },
    { regNum: "114", groupName: "Jetfire" },
    { regNum: "6", groupName: "Jetfire" },
    { regNum: "367", groupName: "Jetfire" },
    { regNum: "387", groupName: "Jetfire" },
    { regNum: "28", groupName: "Jetfire" },
    { regNum: "7", groupName: "Jetfire" },
    { regNum: "201", groupName: "Jetfire" },
    { regNum: "276", groupName: "Jetfire" },
    { regNum: "270", groupName: "Jetfire" },
    { regNum: "357", groupName: "Jetfire" },

    { regNum: "289", groupName: "Rollbar" },
    { regNum: "416", groupName: "Rollbar" },
    { regNum: "241", groupName: "Rollbar" },
    { regNum: "315", groupName: "Rollbar" },
    { regNum: "242", groupName: "Rollbar" },
    { regNum: "442", groupName: "Rollbar" },
    { regNum: "368", groupName: "Rollbar" },
    { regNum: "311", groupName: "Rollbar" },
    { regNum: "341", groupName: "Rollbar" },
    { regNum: "45", groupName: "Rollbar" },
    { regNum: "348", groupName: "Rollbar" },

    { regNum: "145", groupName: "Depthcharge" },
    { regNum: "2", groupName: "Depthcharge" },
    { regNum: "158", groupName: "Depthcharge" },
    { regNum: "85", groupName: "Depthcharge" },
    { regNum: "435", groupName: "Depthcharge" },
    { regNum: "41", groupName: "Depthcharge" },
    { regNum: "352", groupName: "Depthcharge" },
    { regNum: "329", groupName: "Depthcharge" },
    { regNum: "217", groupName: "Depthcharge" },
    { regNum: "420", groupName: "Depthcharge" },
    { regNum: "321", groupName: "Depthcharge" },

    { regNum: "199", groupName: "Ratchet" },
    { regNum: "221", groupName: "Ratchet" },
    { regNum: "202", groupName: "Ratchet" },
    { regNum: "361", groupName: "Ratchet" },
    { regNum: "143", groupName: "Ratchet" },
    { regNum: "265", groupName: "Ratchet" },
    { regNum: "307", groupName: "Ratchet" },
    { regNum: "123", groupName: "Ratchet" },
    { regNum: "356", groupName: "Ratchet" },
    { regNum: "243", groupName: "Ratchet" },

    { regNum: "238", groupName: "Chromia" },
    { regNum: "258", groupName: "Chromia" },
    { regNum: "90", groupName: "Chromia" },
    { regNum: "88", groupName: "Chromia" },
    { regNum: "355", groupName: "Chromia" },
    { regNum: "344", groupName: "Chromia" },
    { regNum: "438", groupName: "Chromia" },
    { regNum: "297", groupName: "Chromia" },
    { regNum: "403", groupName: "Chromia" },
    { regNum: "21", groupName: "Chromia" },
    { regNum: "437", groupName: "Chromia" },

    { regNum: "313", groupName: "Knockout" },
    { regNum: "23", groupName: "Knockout" },
    { regNum: "267", groupName: "Knockout" },
    { regNum: "300", groupName: "Knockout" },
    { regNum: "229", groupName: "Knockout" },
    { regNum: "345", groupName: "Knockout" },
    { regNum: "76", groupName: "Knockout" },
    { regNum: "431", groupName: "Knockout" },
    { regNum: "418", groupName: "Knockout" },
    { regNum: "73", groupName: "Knockout" },
    { regNum: "204", groupName: "Knockout" }
    ];

function generateCryptogram() {
    const regNum = document.getElementById('user-input').value;
    if (!/^[0-9]+$/.test(regNum)) {
        document.getElementById('output').innerHTML = "Please enter a valid registration number.";
        return;
    }

    let player = playerInfo.find(player => player.regNum === regNum);
    if (!player) {
        document.getElementById('output').innerHTML = "Registration number not found.";
        return;
    }

    let shift = regNum.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    shift = shift % 9 + 1; // Ensuring shift is between 1 and 9

    let cipheredName = caesarShift(player.groupName, shift);
    let autobotMessage = cipheredName.split('').map(char => autobotAlphabet[char.toUpperCase()] || char).join(' ');

    document.getElementById('output').innerHTML = `<span class="autobot-symbol">${autobotMessage}</span>`;
}

function checkGroupName() {
    const regNum = document.getElementById('user-input').value;
    const groupNameInput = document.getElementById('group-name-input').value;
    const outputElement = document.getElementById('group-name-check');

    let player = playerInfo.find(player => player.regNum === regNum);
    if (!player) {
        outputElement.innerHTML = "Registration number not found.";
        return;
    }

    if (player.groupName.toLowerCase() === groupNameInput.toLowerCase()) {
        outputElement.innerHTML = "This is your group name.We will send you the QR via mail.";
        outputElement.style.color = "green";
    } else {
        outputElement.innerHTML = "Incorrect.";
        outputElement.style.color = "red";
    }
}

document.getElementById('group-name-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGroupName();
    }
});