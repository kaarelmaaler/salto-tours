import {defineArrayMember, defineField, defineType} from 'sanity'

export const priceRow = defineType({
  name: 'priceRow',
  title: 'Price row',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'price', title: 'Price', type: 'string'}),
  ],
  preview: {
    select: {title: 'label', subtitle: 'price'},
  },
})

export const priceGroup = defineType({
  name: 'priceGroup',
  title: 'Price group',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'priceRows',
      title: 'Prices',
      type: 'array',
      of: [defineArrayMember({type: 'priceRow'})],
    }),
  ],
  preview: {
    select: {title: 'heading', rows: 'priceRows'},
    prepare({title, rows}) {
      const count = Array.isArray(rows) ? rows.length : 0
      return {
        title: title || 'Prices',
        subtitle: count === 1 ? '1 price' : `${count} prices`,
      }
    },
  },
})
