const array = [1,2,3,4,5]

function task2(array, step) {
    console.log('Исходный массив:', array);

    for(let i = 0; i < step; i++) {
        array.unshift(array.pop())
    }

    console.log('Новый массив:', array);
}
