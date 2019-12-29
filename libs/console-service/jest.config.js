module.exports = {
  name: 'console-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/console-service',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
