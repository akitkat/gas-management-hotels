import fetchAllByHotelNoList from './func/fetchAllByHotelNoList';
import fetchAllOtherData from './func/fetchAllOtherData';
import onOpen from './func/onOpen';

global.onOpen = (e) => onOpen(e);
global.fetchAllByHotelNoList = () => fetchAllByHotelNoList();
global.fetchAllOtherData = () => fetchAllOtherData();
