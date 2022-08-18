n = 3;

let testSlides = [0,4,5,6,7,8]
let tempArray = [] ;
    for(let i = n;i<testSlides.length;i++){
        tempArray.push(testSlides[i]);

    }
    for(let i = 0;i<n;i++){
        tempArray.push(testSlides[i]);
    }
    testSlides = tempArray;
    console.log(testSlides)