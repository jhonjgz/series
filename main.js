const series = (inicio, final) => {
    const emptyArray = new Array(Math.abs(inicio-final)).fill(null)
    return emptyArray.reduce((acc)=>{
        const lastValue = acc[acc.length-1]
        const newValue = inicio < final? 1 : -1
        return [...acc, lastValue+newValue]
    }, [inicio])
}

const newSeries = (inicio, final)=>{
    const diference = inicio - final
    return new Array(Math.abs(diference)).fill().reduce(acc=>{
        return [...acc, acc[acc.length-1] + (diference < 1? 1:-1)]
    }, [inicio])
}

console.log(newSeries(1,10));
series(22,1)