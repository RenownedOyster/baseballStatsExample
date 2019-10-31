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

const getData = (fieldName, individualData) => [fieldName]individualData;
const mapThroughApiResponse = (fieldName, getterFunction, apiResponse) => apiResponse.map(individualData => getterFunction(fieldName, individualData));
const mapThroughAndAverage = newDataCollection => {
  const totalOfAllValues = newDataCollection.reduce(
    (accumulator, individualStatistic) => {
    accumulator + individualStatistic
    }, 0);
  const dataLength = newDataCollection.length;

  return totalOfAllValues / dataLength;
}

console.log(
  mapThroughAndAverage(
    mapThroughApiResponse('gamesPerSeason', getData(), dummyData)
  )
);