import {articleSection} from './articleSection'
import {portableText} from './portableText'
import {priceGroup, priceRow} from './priceGroup'
import {programGroup, programRow} from './programGroup'
import {siteSettings} from './siteSettings'
import {trip} from './trip'
import {tripFacts} from './tripFacts'

export const schemaTypes = [
  portableText,
  tripFacts,
  programRow,
  programGroup,
  priceRow,
  priceGroup,
  articleSection,
  trip,
  siteSettings,
]
