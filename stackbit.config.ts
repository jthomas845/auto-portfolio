import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

const config = defineStackbitConfig({
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: allModels,
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    siteMap: ({ documents, models }) => {
      const pageModels = Object.values(models).filter(model => model.type === 'page');
      return documents
        .filter(doc => pageModels.some(model => model.name === doc.type))
        .map(doc => ({
          urlPath: doc.fields.slug ? `/${doc.fields.slug}` : '/',
          document: doc,
          isHomePage: doc.fields.slug === 'home' || doc.fields.slug === ''
        }));
    },
    presetSource: {
        type: 'files',
        presetDirs: ['./.stackbit/presets']
    },
    styleObjectModelName: 'ThemeStyle'
});
export default config;
