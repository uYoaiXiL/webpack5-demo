const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx'];

function resolveModule(resolveFn, filePath) {
  const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.ts`);
}

module.exports = {
  public: resolveApp('public'),
  src: resolveApp('src'),
  build: resolveApp('build'),
  tsConfig: resolveApp('tsconfig.json'),
  proxy: resolveModule(resolveApp, 'config/proxy'),
  env: resolveModule(resolveApp, 'config/.env'),
};
