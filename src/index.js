import doGet from './func/doGet';
import fetchAllByHotelNoList from './func/fetchAllByHotelNoList';
import fetchAllOtherData from './func/fetchAllOtherData';
import onOpen from './func/onOpen';
import updatePublishedHotelList from './func/updatePublishedHotelList';

global.onOpen = (e) => onOpen(e);
global.doGet = (e) => doGet(e);
global.fetchAllByHotelNoList = () => fetchAllByHotelNoList();
global.fetchAllOtherData = () => fetchAllOtherData();
global.updatePublishedHotelList = () => updatePublishedHotelList();
