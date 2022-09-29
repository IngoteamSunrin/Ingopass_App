import { contentsDesign } from '@/theme/theme'
import { atom } from 'recoil'
import { itManagement, softWare, infoSec } from '../theme/theme'

const themeState = atom({
  key: 'themeState',
  default: itManagement,
})

export default themeState
