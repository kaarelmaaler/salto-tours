import {defineField, defineType} from 'sanity'

export const articleSection = defineType({
  name: 'articleSection',
  title: 'Article section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'portableText'}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Untitled section'}
    },
  },
})
