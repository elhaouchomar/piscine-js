function getURL(dataSet) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlRegex) || [];
  }
  
  function greedyQuery(dataSet) {
    const greedyRegex = /https?:\/\/[^\s?]+\?([^&]+&){3,}[^\s]+/g;
    return dataSet.match(greedyRegex) || [];
  }
  
  function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s?]+\?([^&]+&){1,2}[^&]+(?=\s|$)/g;
    return dataSet.match(notSoGreedyRegex) || [];
  }
  
//   const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&som&test1=1&test2=2&test3=3 qhttps://test.com/path?param1=one&param2=two&param3=three&param4=four`;
  
//   console.log("getURL:", getURL(dataSet));
//   console.log("greedyQuery:", greedyQuery(dataSet)); 
//   console.log("notSoGreedy:", notSoGreedy(dataSet));
  