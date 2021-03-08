const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = {
  components: () => {
    return glob.sync('components/**/*.{ts,tsx}').filter((file) => {
      // Take only connect component if exists, ignore others.
      if (file.match(/connect.tsx$/)) {
        return true;
      }
      const pathObject = path.parse(file);
      pathObject.ext = `.connect${pathObject.ext}`;
      const { root, dir, ext, name } = pathObject;
      return !fs.existsSync(path.format({ root, dir, ext, name }));
    });
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    compilerOptions: { noEmit: false }
  }).parse,
  webpackConfig: Object.assign({}, require('./webpack.config'), {}),
  styleguideDir: 'docs',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `import { ${name} } from '${dir}';`;
  },
  sections: [
    {
      name: 'Calendar',
      description: 'Components used in /calendar page',
      components: function () {
        return glob
          .sync(path.resolve(__dirname, 'components/calendar/*.tsx'))
          .filter(function (module) {
            return /\/[A-Z]\w*\.tsx$/.test(module);
          });
      }
    },
    {
      name: 'Auth',
      description: 'Components used in /auth page. That includes register & login forms',
      components: function () {
        return glob
          .sync(path.resolve(__dirname, 'components/auth/**/*.tsx'))
          .filter(function (module) {
            return /\/[A-Z]\w*\.tsx$/.test(module);
          });
      }
    },
    {
      name: 'Home',
      description: 'Components used in /home page.',
      components: function () {
        return glob
          .sync(path.resolve(__dirname, 'components/home/**/*.tsx'))
          .filter(function (module) {
            return /\/[A-Z]\w*\.tsx$/.test(module);
          });
      }
    },
    {
      name: 'My Courses',
      description: 'Components used in /myCourses page.',
      components: function () {
        return glob
          .sync(path.resolve(__dirname, 'components/my-courses/**/*.tsx'))
          .filter(function (module) {
            return /\/[A-Z]\w*\.tsx$/.test(module);
          });
      }
    }
  ]
};
