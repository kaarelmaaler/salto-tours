import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Paragraphs, bold, and links only. Presentation stays in the frontend.
 */
export const portableText = defineType({
  name: 'portableText',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Schedule', value: 'schedule'},
      ],
      lists: [],
      marks: {
        decorators: [{title: 'Bold', value: 'strong'}],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) => rule.required(),
              }),
            ],
          },
        ],
      },
    }),
  ],
})
