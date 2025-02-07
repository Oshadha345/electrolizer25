
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-box .button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        let allowedENumbers = ['E/22/286',
            'E/22/389',
            'E/22/068',
            'E/22/156',
            'E/22/134',
            'E/22/116',
            'E/22/080',
            'E/22/164',
            'E/22/417',
            'E/22/066',
            'E/22/415',
            'E/22/077',
            'E/22/363',
            'E/22/215',
            'E/22/316',
            'E/22/107',
            'E/22/079',
            'E/22/128',
            'E/22/133',
            'E/22/426',
            'E/22/287',
            'E/22/177',
            'E/22/026',
            'E/22/108',
            'E/22/245',
            'E/22/218',
            'E/22/347',
            'E/22/146',
            'E/22/022',
            'E/22/326',
            'E/22/394',
            'E/22/319',
            'E/22/161',
            'E/22/430',
            'E/22/139',
            'E/22/453',
            'E/22/422',
            'E/22/309',
            'E/22/365',
            'E/22/390',
            'E/22/091',
            'E/22/086',
            'E/22/281',
            'E/22/113',
            'E/22/371',
            'E/22/114',
            'E/22/006',
            'E/22/367',
            'E/22/387',
            'E/22/028',
            'E/22/007',
            'E/22/201',
            'E/22/276',
            'E/22/270',
            'E/22/357',
            'E/22/289',
            'E/22/416',
            'E/22/241',
            'E/22/315',
            'E/22/242',
            'E/22/442',
            'E/22/368',
            'E/22/311',
            'E/22/341',
            'E/22/045',
            'E/22/348',
            'E/22/145',
            'E/22/002',
            'E/22/158',
            'E/22/085',
            'E/22/435',
            'E/22/041',
            'E/22/352',
            'E/22/329',
            'E/22/217',
            'E/22/420',
            'E/22/321',
            'E/22/199',
            'E/22/221',
            'E/22/202',
            'E/22/361',
            'E/22/143',
            'E/22/265',
            'E/22/307',
            'E/22/123',
            'E/22/356',
            'E/22/243',
            'E/22/238',
            'E/22/258',
            'E/22/090',
            'E/22/088',
            'E/22/355',
            'E/22/344',
            'E/22/438',
            'E/22/297',
            'E/22/403',
            'E/22/021',
            'E/22/437',
            'E/22/313',
            'E/22/023',
            'E/22/267',
            'E/22/300',
            'E/22/229',
            'E/22/345',
            'E/22/076',
            'E/22/431',
            'E/22/418',
            'E/22/073',
            'E/22/204'     ];
        let inputField = document.querySelector("#eNumberInput");
        let errorMessage = document.querySelector("#errorMessage");
        let userENumber = inputField.value.trim();

        if (allowedENumbers.includes(userENumber)) {
            errorMessage.style.display = "none"; // Hide error if valid
            
            // -------------------------------------
            localStorage.setItem("userENumber", userENumber);

            window.location.href = "web3/index.html";
        } else {
            errorMessage.style.display = "block"; // Show error if invalid
        }
        
        function getValue() {
            return userENumber;
        }


    });
});
