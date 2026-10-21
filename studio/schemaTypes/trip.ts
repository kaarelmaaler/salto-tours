import {defineArrayMember, defineField, defineType} from 'sanity'

const statusLabels: Record<string, string> = {
  published: 'Published',
  draft: 'Draft',
  archived: 'Archived',
}

export const trip = defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'draft',
      description:
        'Archived trips stay editable here. The website will leave them off the homepage and the next-trip link.',
      options: {
        list: [
          {title: 'Published', value: 'published'},
          {title: 'Draft', value: 'draft'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'date',
    }),
    defineField({
      name: 'monthLabel',
      title: 'Month label',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'facts',
      title: 'Trip facts',
      type: 'tripFacts',
      description: 'Leave unused facts empty.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      description: 'Homepage trip card. If empty, the site uses the first gallery image.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'array',
      of: [defineArrayMember({type: 'programGroup'})],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing',
      type: 'array',
      of: [defineArrayMember({type: 'priceGroup'})],
    }),
    defineField({
      name: 'includedText',
      title: 'Included',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'excludedText',
      title: 'Excluded',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'articleSections',
      title: 'Article sections',
      type: 'array',
      of: [defineArrayMember({type: 'articleSection'})],
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      status: 'status',
    },
    prepare({title, startDate, status}) {
      const statusLabel = status ? statusLabels[status] || status : undefined
      return {
        title: title || 'Untitled trip',
        subtitle: [startDate, statusLabel].filter(Boolean).join(' · '),
      }
    },
  },
})
