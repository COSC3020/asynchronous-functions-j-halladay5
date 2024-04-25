function countOccurrencesAsync(array, key) 
{
  return new Promise((resolve) => {
    setTimeout(() => {
      if (array.length < 1) {
        resolve(0);
      } else {
        const count = array.filter((i) => i === key).length;
        resolve(count);
      }
    }, 0);
  });
}
