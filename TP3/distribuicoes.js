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
            for (let i = 0; i < x.length; i++) {
                if(people[person][tipoGeral][i] == tipo){
                    countsType.push(people[person])
                    break
                }
            }
        }
    }
    return countsType
}