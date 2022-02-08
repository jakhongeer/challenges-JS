const promise = new Promise((resolve, reject) => {
    const mark = Math.floor(Math.random() * 100);
    console.log(mark)
    setTimeout(
        () => {
            if (mark > 40) {
                resolve("You've passed from the exam succesffully")
            }
            else {
                reject("Oops.. You failed.")
            } 

        }
    );
});

promise 
        .then(mark => console.log(mark))
        .catch(error => console.log(error));

