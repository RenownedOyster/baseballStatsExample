// Haven't checked if this code runs, but this is an example of what the 3 layers of the stats logic might
// look like :thumbs-up:

const dummyData = [
  {
    name: 'John McBally',
    gamesPerSeason: 122,
    averageHitsPerGame: 22,
    fartsPerMinute: 10
  },
    {
    name: 'Bob McBaseballbat',
    gamesPerSeason: 122,
    averageHitsPerGame: 22,
    fartsPerMinute: 10
  },
    {
    name: 'Alfonse McStrikey',
    gamesPerSeason: 122,
    averageHitsPerGame: 22,
    fartsPerMinute: 10
  },
];

// First layer: Drawing the data we want

const getData = (fieldName, individualData) => [fieldName]individualData;

// Second layer: Looping through the data structure

  // Mapper loop function (`.map` loops through array and spits out array of the results)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const mapThroughApiResponse = (fieldName, getterFunction, apiResponse) => apiResponse.map(individualData => getterFunction(fieldName, individualData));

  // As a loop function
  const loopThroughResponse = (fieldName, getterFunction, apiResponse) => {
    for (let iterator = 0; iterator < apiResponse.length; iterator + 1) {
      getterFunction(fieldName, apiResponse[iterator]);
    }
  };


// Third layer: Looping and data aggregation (in this example averaging)

const mapThroughAndAverage = newDataCollection => {
  // Reducer function (`.reduce` accumulates all loop iteration results into a single data structure, in this case a number)
  // This is pretty much the most complex looping function out there, so dw if it doesn't immediately make sense lol. Use
  // a traditional loop function if you need. It does the same thing just looks different.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const totalOfAllValues = newDataCollection.reduce(
    (accumulator, individualStatistic) => {
    accumulator + individualStatistic
    }, 0);
  const dataLength = newDataCollection.length;

  return totalOfAllValues / dataLength;
}

// Call the function & log result
// I've seperated the call into different lines for the sake of readibility but it's just logging the result of the `mapThroughAndAverage()` 
// function that's being fed the result of the `mapThroughApiResonse` function. See below line.
// console.log(mapThroughAndAverage(mapThroughApiResponse('gamesPerSeason', getData(), dummyData)));

console.log(
  mapThroughAndAverage(
    mapThroughApiResponse('gamesPerSeason', getData(), dummyData)
    )
);