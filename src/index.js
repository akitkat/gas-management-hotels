import {
  fetchAllByHotelNos,
  fetchAllFacilitiesByHotelNos,
} from './fetch-rakuten-travel'
import { fetchAllOtherDataByIds, fetchAllOtherIds } from './fetch-other-site'

import { onOpen } from './reserved-methods'

global.onOpen = (e) => onOpen(e)
global.fetchAllByHotelNos = () => fetchAllByHotelNos()
global.fetchAllOtherIds = () => fetchAllOtherIds()
global.fetchAllOtherDataByIds = () => fetchAllOtherDataByIds()
global.fetchAllFacilitiesByHotelNos = () => fetchAllFacilitiesByHotelNos()
