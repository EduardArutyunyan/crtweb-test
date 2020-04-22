function task3(...array) {
    const longestArray = array[0].length > array[1].length ? array[0] : array[1];
    const shortestArray = array[0].length > array[1].length ? array[1] : array[0];

    let result =[];
    let maxMatch = result.length;
    let step = 0;

    for (let i = 0; i < shortestArray.length; i++) {
        maxMatch = result.length;
        let matches = 0;
        if(longestArray.includes(shortestArray.slice(step, step + i + 1))) {
            matches = shortestArray.slice(step, step + i).length;
            if(matches > maxMatch) result = shortestArray.slice(step, step + i + 1);            
        } else {
            step += 1;
            i = 0;
        }
    }
    console.log('Входной массив:', array);
    console.log('Результат:', result)
}