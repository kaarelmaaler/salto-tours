import {defineConfig, defineSingleton} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const siteSettingsSingleton = defineSingleton({
  id: 'siteSettings',
  documentId: 'siteSettings',
  schemaType: 'siteSettings',
  title: 'Site settings',
  initialValue: {
    contactEmail: 'hei@salto.tours',
  },
})

export default defineConfig({
  name: 'default',
  title: 'Salto',

  projectId: 'yb1iafqe',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    singletons: [siteSettingsSingleton],
  },
})
