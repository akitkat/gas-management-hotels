import fetchAllByHotelNoList from './func/fetchAllByHotelNoList';
import onOpen from './func/onOpen';

global.onOpen = (e) => onOpen(e);
global.fetchAllByHotelNoList = () => fetchAllByHotelNoList();
