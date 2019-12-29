module.exports = {
  name: 'log-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/log-service',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
