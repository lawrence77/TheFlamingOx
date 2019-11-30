module.exports = {
  name: 'the-flaming-ox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/the-flaming-ox',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
