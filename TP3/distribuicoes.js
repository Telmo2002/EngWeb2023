exports.distribuicao = function(people, type){
    let counts = {}

    for (let person in people){
        let x = people[person][type]
        if (typeof(x) == "string"){
                if(!counts[x]){
                    counts[x] = 1
                }else counts[x]++
        }else {
            for (let i = 0; i < x.length; i++) {
                if(!counts[x[i]]){
                    counts[x[i]] = 1
                }else counts[x[i]]++
            }
        }
    
    }
    return counts
}

exports.filter = function(people, tipoGeral, tipo){
    let countsType = []

    for(let person in people) {
        if (typeof(people[person][tipoGeral]) == "string"){
            if(people[person][tipoGeral] == tipo){
                countsType.push(people[person])
            }
        } else {
            let x = people[person][tipoGeral]
                if(x.includes(tipo)){
                    countsType.push(people[person])
                }
            }
        }
    return countsType
}

exports.top10Prof = function(dict) {
    // Convert dictionary to array of key-value pairs
    const entries = Object.entries(dict);
    
    // Sort array by value in descending order
    entries.sort((a, b) => b[1] - a[1]);
    
    // Extract the first 10 elements of the sorted array
    const top10 = entries.slice(0, 10);
    
    // Convert the top 10 array back to a dictionary and return it
    return Object.fromEntries(top10);
  }