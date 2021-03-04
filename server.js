const favoriteFood = process.env.FAVORITE_FOOD || 'Pizza';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Microservices rock! With ${favoriteFood} it gets even better!!!`);
    await sleep(5000);
  }
}

main();
