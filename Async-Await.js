function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('wait for ' + ms + ' ms');
        }, ms);
    });
}

async function delayM(time) {
  const wait1 = await wait(time);
  console.log(wait1);
}

console.log("start");
async delayM(5000);
console.log("end");
