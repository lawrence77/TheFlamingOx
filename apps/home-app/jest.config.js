module.exports = {
  name: 'home-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/home-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
