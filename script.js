const msg = (countdown) => 
    new Promise((resolve, reject) => {
        if(countdown>=1) {   
            setTimeout(() => {
                document.querySelector(".countdown").innerText=countdown;
                resolve(countdown)
            }, 1000)
        }
        else {
            reject("Try again");
        }
    });

    msg(9)
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .then(n => msg(--n))
        .catch(() => {
            setTimeout(() => {
                document.querySelector(".countdown").innerText="HAPPY INDEPENDENCE DAY";
            }, 1000)  
        })