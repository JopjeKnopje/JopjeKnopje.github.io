const VOLTAGE_DIVIDER = "(vs * r2) / (r1 + r2) = vout"



function mainCalculate(inputValuesMap)
{
    calculateV2(inputValuesMap);
    calculateV1(getInputsValues());
}


function substituteFormula(inputValueMap)
{
    tmpFormula = VOLTAGE_DIVIDER;

    for (const [key, value] of inputValueMap.entries())
    {
        // console.log(key + " | " + value);
        if ((!value == 0) || (!value == ''))
        {
            tmpFormula = tmpFormula.replaceAll(key, value);
        }
        // Temporary fix for the V2 calculation
        // tmpFormula = tmpFormula.replaceAll('r2', 'x');
        // tmpFormula = tmpFormula.replaceAll('r1', 'x');
    }
    return tmpFormula;
}

function calculateV1(inputValueMap)
{
    var reqFields = ['vs', 'v1', 'r2', 'r3']

    if(AreFieldsSet(reqFields, inputValueMap))
    {
        console.log("calculateV1");

        // console.log("true");
        subMap = new Map();
        subMap.set('vs', inputValuesMap.get('vs'));
        subMap.set('vout', inputValuesMap.get('v1'));
        
        // put the inputFields's r2 into r1 in the formula
        r2Sum = parseInt(inputValuesMap.get('r2')) + parseInt(inputValuesMap.get('r3'));

        // console.log("r2Sum " + r2Sum);

        subMap.set('r2', r2Sum);

        // generate the string used for the calculation
        var tmp = substituteFormula(subMap);
        tmp = tmp.replaceAll('r1', 'x');
        console.log(tmp);


        // run the calculation for r3
        var value = actualCalculate(tmp);
        console.log("V1: " + value);
        setInputValue('r1', value);

    }
}

//this thing works
function calculateV2(inputValueMap)
{
    // check if all the required values are present
    var reqFields = ['vs', 'v1', 'v2', 'r2'];
    
    if(AreFieldsSet(reqFields, inputValueMap)) 
    {
        console.log("calculateV2");
        
        // console.log("true");
        subMap = new Map();
        subMap.set('vs', inputValuesMap.get('v1'));
        subMap.set('vout', inputValuesMap.get('v2'));
        // put the inputFields's r2 into r1 in the formula
        subMap.set('r1', inputValuesMap.get('r2'));

        // generate the string used for the calculation
        var tmp = substituteFormula(subMap);
        tmp = tmp.replaceAll('r2', 'x');
        console.log(tmp);
        // run the calculation for r3


        var value = actualCalculate(tmp);
        setInputValue('r3', value);
    }
}

function actualCalculate(equation)
{
    // for some reason you cannot return mid function,
    // thats why we use this variable.
    returnVal = -1;

    var sol = nerdamer
        .solveEquations(equation)
        .map(solution => nerdamer(solution).evaluate().text());
    
    // loop through both results to find the positive one
    sol.forEach(element => 
    {
        if (element > 0) returnVal = element;
        // console.log("calculations: " + element);
    });
    return returnVal;  
    // console.log(returnVal);
}


function AreFieldsSet(fieldNames, inputValueMap)
{
    var counter = 0;

    fieldNames.forEach(val => {
        // check if those fields are set
        if (inputValueMap.get(val) > 0) counter++;
    });

    return (counter >= fieldNames.length);
}


function init()
{
    console.log("loaded calculate.js");
    
}
init();
