function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {}
    
    const words = str.toLowerCase().split(/\s+/)
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (pronouns.includes(word)) {
        if (!result[word]) {
          result[word] = { word: [], count: 0 }
        }
        
        result[word].count++
        
        if (i + 1 < words.length && !pronouns.includes(words[i + 1])) {
          const cleanWord = words[i + 1].replace(/[.,\/#!$%\^&\*:{}=\-_`~()]/g, "")
          if (cleanWord && !result[word].word.includes(cleanWord)) {
            result[word].word.push(cleanWord)
          }
        }
      }
    }
    
    return result;
  }