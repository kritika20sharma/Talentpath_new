import { defineField, defineType } from 'sanity';

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Permanent', value: 'Permanent' },
          { title: 'Temporary', value: 'Temporary' },
          { title: 'Contract', value: 'Contract' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'division',
      title: 'Division',
      type: 'string',
      options: {
        list: [
          'Accounting & Finance',
          'Technology',
          'Sales',
          'Marketing & Digital',
          'Human Resources',
          'Customer Experience',
          'Business Services',
          'Projects & Change',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'Salary / Rate',
      type: 'string',
      description: 'e.g. $120,000 – $140,000 + super  or  $75/hour',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Active (show on jobs page)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
    },
  },
});
