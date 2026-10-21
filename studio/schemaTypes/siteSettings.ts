import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'About text',
      type: 'portableText',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      initialValue: 'hei@salto.tours',
      validation: (rule) => rule.email(),
    }),
  ],
})
