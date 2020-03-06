const { join } = require('path');
const fs = require('fs');

module.exports = function(ctx) {
  const pathToManifest = join(ctx.opts.projectRoot, 'platforms', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
  const content = fs.readFileSync(pathToManifest, 'utf8');
  const newContent = content.replace(/<data android:host=" " android:pathPrefix="\/" android:scheme=" " \/>/g, '');

  fs.writeFileSync(pathToManifest, newContent, 'utf8');
};
