export function simulateFetch(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject('Error: Data not found');
      }
    }, delay);
  });
}
