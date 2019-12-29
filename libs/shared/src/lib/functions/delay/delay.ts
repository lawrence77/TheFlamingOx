/**
 * Delays the execution of code
 * @param seconds How long to delay execution
 */
export function delay(seconds: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

/**
 * Randomly delays the execution of code between 0 seconds and the set parameter
 * @param seconds Max amount of time to delay execution
 */
export function randomDelay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Math.floor(Math.random() * 1000 * seconds))
  })
}
