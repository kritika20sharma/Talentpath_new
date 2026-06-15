import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'talentpath',
  title: 'TalentPath CMS',
  projectId: 'nqczmxpl',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
