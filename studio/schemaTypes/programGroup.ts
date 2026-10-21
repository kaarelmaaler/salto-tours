import {defineArrayMember, defineField, defineType} from 'sanity'

export const programRow = defineType({
  name: 'programRow',
  title: 'Program row',
  type: 'object',
  fields: [
    defineField({name: 'dateLabel', title: 'Date', type: 'string'}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'dateLabel', subtitle: 'description'},
  },
})

export const programGroup = defineType({
  name: 'programGroup',
  title: 'Program group',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Optional. For example, “Reis 1”.',
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [defineArrayMember({type: 'programRow'})],
    }),
  ],
  preview: {
    select: {title: 'label', rows: 'rows'},
    prepare({title, rows}) {
      const count = Array.isArray(rows) ? rows.length : 0
      return {
        title: title || 'Program',
        subtitle: count === 1 ? '1 row' : `${count} rows`,
      }
    },
  },
})
