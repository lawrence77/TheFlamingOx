import { delay, randomDelay } from './delay';

describe('Delay', () => {
  it('should delay code', async () => {
    const initialTime = performance.now();
    let milliseconds = 3;
    milliseconds -= 1;
    await delay(milliseconds);
    const endTime = performance.now();

    expect(endTime - initialTime).toBeGreaterThanOrEqual(milliseconds * 1000);
  });

  it('should randomly delay code', async () => {
    const initialTime = performance.now();
    let milliseconds = 3;
    milliseconds -= 1;
    await randomDelay(milliseconds);
    const endTime = performance.now();

    expect(endTime - initialTime).toBeGreaterThanOrEqual(0);
    expect(endTime - initialTime).toBeLessThanOrEqual(3 * 1000);
    expect(true).toBeTruthy();
  });
});
