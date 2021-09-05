import doGet from './func/doGet';
import doPost from './func/doPost';
import fetchAllByHotelKeywordList from './func/fetchAllByHotelKeywordList';
import fetchAllByHotelNoList from './func/fetchAllByHotelNoList';
import fetchAllOtherData from './func/fetchAllOtherData';
import fetchAllOtherSiteUrl from './func/fetchAllOtherSiteUrl';
import onOpen from './func/onOpen';
import updatePublishedHotelList from './func/updatePublishedHotelList';

global.doGet = (e) => doGet(e);
global.doPost = (e) => doPost(e);
global.fetchAllByHotelKeywordList = () => fetchAllByHotelKeywordList();
global.fetchAllByHotelNoList = () => fetchAllByHotelNoList();
global.fetchAllOtherData = () => fetchAllOtherData();
global.fetchAllOtherSiteUrl = () => fetchAllOtherSiteUrl();
global.onOpen = (e) => onOpen(e);
global.updatePublishedHotelList = () => updatePublishedHotelList();
