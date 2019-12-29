# Log service
Create a logging service and a stdout service

## Requirements
- Use a decorator to log a message
- Use a static class to log a message
- Use a constructed class to log a message


# Additional
## Service Configuration 
- Set **MAX_LOGS_COUNT**: maximum number of logs stored in the repo
- Set **MAX_LOG_SIZE**: set the maximum size for a log file: once the size limit is reached, then stop logging
- Set **LogLevel**: Filter for log message by the log level. LogLevel types
  - None
  - error
  - warn
  - info 
  - config
  - trace 
  - all 

## Running unit tests

Run `nx test log-service` to execute the unit tests.
