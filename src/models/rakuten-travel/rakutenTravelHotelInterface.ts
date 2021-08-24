import {
  RakutenTravelHotelBasicInfoInterface,
  RakutenTravelHotelDetailInfoInterface,
  RakutenTravelHotelFacilitiesInfoInterface,
  RakutenTravelHotelPolicyInfoInterface,
  RakutenTravelHotelRatingInfoInterface,
} from './rakutenTravelHotelInfoInterface';

export interface RakutenTravelHotelResponseTypeSmallInterface {
  basicInfo: RakutenTravelHotelBasicInfoInterface;
}

export interface RakutenTravelHotelResponseTypeMiddleInterface {
  basicInfo: RakutenTravelHotelBasicInfoInterface;
  ratingInfo: RakutenTravelHotelRatingInfoInterface;
}

export interface RakutenTravelHotelResponseTypeLargeInterface {
  basicInfo: RakutenTravelHotelBasicInfoInterface;
  ratingInfo: RakutenTravelHotelRatingInfoInterface;
  detailInfo: RakutenTravelHotelDetailInfoInterface;
  facilitiesInfo: RakutenTravelHotelFacilitiesInfoInterface;
  policyInfo: RakutenTravelHotelPolicyInfoInterface;
}
