import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Salto')
    .items([
      S.documentTypeListItem('trip').title('Trips'),
      S.listItem().title('Site settings').singleton('siteSettings'),
    ])
