
// get all the input fields
const inputs = document.querySelectorAll('input');
// maybe use a Set instead of a Map
const inputValuesMap = new Map();


function updateValue(e) 
{
    // get the name of the input generating this function call
    inputName = e.target.getAttribute("name");

    // get inputs and put them in a set
    getInputsValues(inputName);

    // substituteFormula(inputValuesMap);
    mainCalculate(inputValuesMap);
}

// loop through all the inputs and store their values in the inputValuesMap
function getInputsValues()
{
    inputs.forEach(input => {
        
        // console.log(input.name + " | " + input.value);

        inputValuesMap.set(input.name, input.value);
    });
    // console.log(inputValuesMap);
    return inputValuesMap;
}

// returns amount of empty input fields
function checkEmptyInputs()
{
    var counter = 0;

    inputs.forEach(input => {
        if (input.value == "") counter++;
    });
    return counter;
    // console.log(counter);
}

function setInputValue(name, value) 
{
    console.log("setInputValue name " + name + " | " + value);
    inputs.forEach(input=> {
        if (input.name == name)
        {
            input.value = value;
        }
    });
}


// assigns the events to each of the input fields
function init()
{
    console.log("loaded inputhandler.js");

    inputs.forEach(input => 
    {

        // when there is new input call the updateValue function
        input.addEventListener('input', updateValue);
        // input.addEventListener('change', updateValue);
    });
}



init();