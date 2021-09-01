import {
  RakutenTravelHotelBasicInfo,
  RakutenTravelHotelDetailInfo,
  RakutenTravelHotelFacilitiesInfo,
  RakutenTravelHotelPolicyInfo,
  RakutenTravelHotelRatingInfo,
} from '../../../models/rakuten-travel/rakutenTravelHotel';

import { RakutenTravelHotel } from '../../../models/rakuten-travel/rakutenTravelHotel';

export const parseRakutenTravelHotel = (hotel) => {
  return new RakutenTravelHotel(
    parseRakutenTravelHotelBasicInfo(hotel[0]),
    parseRakutenTravelHotelRatingInfo(hotel[1]),
    parseRakutenTravelHotelDetailInfo(hotel[2]),
    parseRakutenTravelHotelFacilitiesInfo(hotel[3]),
    parseRakutenTravelHotelPolicyInfo(hotel[4])
  );
};

const parseRakutenTravelHotelBasicInfo = (hotel) => {
  return new RakutenTravelHotelBasicInfo(
    hotel.hotelBasicInfo?.hotelNo,
    hotel.hotelBasicInfo?.hotelName,
    hotel.hotelBasicInfo?.hotelInformationUrl,
    hotel.hotelBasicInfo?.planListUrl,
    hotel.hotelBasicInfo?.dpPlanListUrl,
    hotel.hotelBasicInfo?.reviewUrl,
    hotel.hotelBasicInfo?.hotelKanaName,
    hotel.hotelBasicInfo?.hotelSpecial,
    hotel.hotelBasicInfo?.hotelMinCharge,
    hotel.hotelBasicInfo?.latitude,
    hotel.hotelBasicInfo?.longitude,
    hotel.hotelBasicInfo?.postalCode,
    hotel.hotelBasicInfo?.address1,
    hotel.hotelBasicInfo?.address2,
    hotel.hotelBasicInfo?.telephoneNo,
    hotel.hotelBasicInfo?.faxNo,
    hotel.hotelBasicInfo?.access,
    hotel.hotelBasicInfo?.parkingInformation,
    hotel.hotelBasicInfo?.nearestStation,
    hotel.hotelBasicInfo?.hotelImageUrl,
    hotel.hotelBasicInfo?.hotelThumbnailUrl,
    hotel.hotelBasicInfo?.roomImageUrl,
    hotel.hotelBasicInfo?.roomThumbnailUrl,
    hotel.hotelBasicInfo?.hotelMapImageUrl,
    hotel.hotelBasicInfo?.reviewCount,
    hotel.hotelBasicInfo?.reviewAverage,
    hotel.hotelBasicInfo?.userReview
  );
};

const parseRakutenTravelHotelRatingInfo = (hotel) => {
  return new RakutenTravelHotelRatingInfo(
    hotel.hotelRatingInfo?.serviceAverage,
    hotel.hotelRatingInfo?.locationAverage,
    hotel.hotelRatingInfo?.roomAverage,
    hotel.hotelRatingInfo?.equipmentAverage,
    hotel.hotelRatingInfo?.bathAverage,
    hotel.hotelRatingInfo?.mealAverage
  );
};

const parseRakutenTravelHotelDetailInfo = (hotel) => {
  return new RakutenTravelHotelDetailInfo(
    hotel.hotelDetailInfo?.reserveTelephoneNo,
    hotel.hotelDetailInfo?.middleClassCode,
    hotel.hotelDetailInfo?.smallClassCode,
    hotel.hotelDetailInfo?.areaName,
    hotel.hotelDetailInfo?.hotelClassCode,
    hotel.hotelDetailInfo?.checkinTime,
    hotel.hotelDetailInfo?.checkoutTime,
    hotel.hotelDetailInfo?.lastCheckinTime
  );
};

const parseRakutenTravelHotelFacilitiesInfo = (hotel) => {
  return new RakutenTravelHotelFacilitiesInfo(
    hotel.hotelFacilitiesInfo?.hotelRoomNum,
    hotel.hotelFacilitiesInfo?.roomFacilities,
    hotel.hotelFacilitiesInfo?.hotelFacilities,
    hotel.hotelFacilitiesInfo?.aboutBath,
    hotel.hotelFacilitiesInfo?.aboutLeisure,
    hotel.hotelFacilitiesInfo?.handicappedFacilities,
    hotel.hotelFacilitiesInfo?.linguisticLevel
  );
};

const parseRakutenTravelHotelPolicyInfo = (hotel) => {
  return new RakutenTravelHotelPolicyInfo(
    hotel.hotePpolicyInfo?.note,
    hotel.hotePpolicyInfo?.cancelPolicy,
    hotel.hotePpolicyInfo?.availableCreditCard,
    hotel.hotePpolicyInfo?.aboutCreditCardNote,
    hotel.hotePpolicyInfo?.aboutPointAdd,
    hotel.hotePpolicyInfo?.aboutMileageAdd
  );
};
