function getURL(dataSet) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlRegex) || [];
  }
  
  function greedyQuery(dataSet) {
    const greedyRegex = /https?:\/\/[^\s?]+\?([^&]+&){3,}[^&]+/g;
    return dataSet.match(greedyRegex) || [];
  }
  
  function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s?]+\?([^&]+&){1,2}[^&]+/g;
    return dataSet.match(notSoGreedyRegex) || [];
  }
  
  