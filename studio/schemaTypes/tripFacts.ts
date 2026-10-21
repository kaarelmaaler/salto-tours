import {defineField, defineType} from 'sanity'

export const tripFacts = defineType({
  name: 'tripFacts',
  title: 'Trip facts',
  type: 'object',
  fields: [
    defineField({name: 'destination', title: 'Destination', type: 'string'}),
    defineField({name: 'datesDisplay', title: 'Dates', type: 'string'}),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({name: 'activity', title: 'Activity', type: 'string'}),
    defineField({name: 'highestPoint', title: 'Highest point', type: 'string'}),
    defineField({name: 'accommodation', title: 'Accommodation', type: 'string'}),
    defineField({name: 'catering', title: 'Catering', type: 'string'}),
    defineField({name: 'guide', title: 'Guide', type: 'string'}),
    defineField({name: 'instruction', title: 'Instruction', type: 'string'}),
    defineField({name: 'childcare', title: 'Childcare', type: 'string'}),
    defineField({name: 'priceFrom', title: 'Price from', type: 'string'}),
  ],
})
