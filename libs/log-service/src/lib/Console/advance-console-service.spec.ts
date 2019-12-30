import { LogLevel } from '@shared';

import { AdvancedConsole } from './advance-console-service';

describe('Console', () => {
  const testArray = [false, 5, 'test', { innerObject: 'test' }, ['foo', 'bar'], undefined];

  let testLog: jest.SpyInstance<void, [any?, ...any[]]>;
  let testWarn: jest.SpyInstance<void, [any?, ...any[]]>;
  let testError: jest.SpyInstance<void, [any?, ...any[]]>;

  beforeEach(() => {
    testLog = jest.spyOn(console, 'log');
    testWarn = jest.spyOn(console, 'warn');
    testError = jest.spyOn(console, 'error');

    testLog.mockReset();
    testWarn.mockReset();
    testError.mockReset();
  });

  it('should print everything when log level is set to ALL', () => {
    const output = new AdvancedConsole(LogLevel.All);
    expect(testLog.mock.calls.length).toBe(0);

    output.log(LogLevel.Error, testArray[0]);
    output.log(LogLevel.Warn, testArray[1]);
    output.log(LogLevel.Info, testArray[2]);
    output.log(LogLevel.Config, testArray[3]);
    output.log(LogLevel.Trace, testArray[4]);
    output.log(LogLevel.All, testArray[5]);

    expect(testLog.mock.calls.length).toBe(4);
    expect(testWarn.mock.calls.length).toBe(1);
    expect(testError.mock.calls.length).toBe(1);
  });

  it('should print nothing when log level is set to NONE', () => {
    const output = new AdvancedConsole(LogLevel.None);
    expect(testLog.mock.calls.length).toBe(0);

    output.log(LogLevel.Error, testArray[0]);
    output.log(LogLevel.Warn, testArray[1]);
    output.log(LogLevel.Info, testArray[2]);
    output.log(LogLevel.Config, testArray[3]);
    output.log(LogLevel.Trace, testArray[4]);
    output.log(LogLevel.All, testArray[5]);

    expect(testLog.mock.calls.length).toBe(0);
    expect(testWarn.mock.calls.length).toBe(0);
    expect(testError.mock.calls.length).toBe(0);
  });

  it('should filter logs when log level is set to INFO', () => {
    const output = new AdvancedConsole(LogLevel.Info);
    expect(testLog.mock.calls.length).toBe(0);

    output.log(LogLevel.Error, testArray[0]);
    output.log(LogLevel.Warn, testArray[1]);
    output.log(LogLevel.Info, testArray[2]);
    output.log(LogLevel.Config, testArray[3]);
    output.log(LogLevel.Trace, testArray[4]);
    output.log(LogLevel.All, testArray[5]);

    expect(testLog.mock.calls.length).toBe(1);
    expect(testWarn.mock.calls.length).toBe(1);
    expect(testError.mock.calls.length).toBe(1);
  });

  xit('should print highlighted code', () => {
    // TODO
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
