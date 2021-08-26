import {
  RakutenTravelHotelBasicInfo,
  RakutenTravelHotelDetailInfo,
  RakutenTravelHotelFacilitiesInfo,
  RakutenTravelHotelPolicyInfo,
  RakutenTravelHotelRatingInfo,
} from '../../../models/rakuten-travel/rakutenTravelHotelInfo';
import {
  RakutenTravelHotelBasicInfoInterface,
  RakutenTravelHotelDetailInfoInterface,
  RakutenTravelHotelFacilitiesInfoInterface,
  RakutenTravelHotelPolicyInfoInterface,
  RakutenTravelHotelRatingInfoInterface,
} from '../../../models/rakuten-travel/rakutenTravelHotelInfoInterface';
import {
  RakutenTravelHotelResponseTypeLarge,
  RakutenTravelHotelResponseTypeMiddle,
  RakutenTravelHotelResponseTypeSmall,
} from '../../../models/rakuten-travel/rakutenTravelHotel';
import {
  RakutenTravelHotelResponseTypeLargeInterface,
  RakutenTravelHotelResponseTypeMiddleInterface,
  RakutenTravelHotelResponseTypeSmallInterface,
} from '../../../models/rakuten-travel/rakutenTravelHotelInterface';

import { find } from 'lodash';

type parsedJson = {
  [key: string]: any;
};

export const parseRakutenTravelHotelResponseTypeSmall = (
  rows: object[]
): RakutenTravelHotelResponseTypeSmallInterface[] => {
  return rows.map((hotel) => {
    return new RakutenTravelHotelResponseTypeSmall(
      parseRakutenTravelHotelBasicInfo(hotel)
    );
  });
};

export const parseRakutenTravelHotelResponseTypeMiddle = (
  rows: object[]
): RakutenTravelHotelResponseTypeMiddleInterface[] => {
  return rows.map((hotel) => {
    return new RakutenTravelHotelResponseTypeMiddle(
      parseRakutenTravelHotelBasicInfo(hotel),
      parseRakutenTravelHotelRatingInfo(hotel)
    );
  });
};

export const parseRakutenTravelHotelResponseTypeLarge = (
  rows: object[]
): RakutenTravelHotelResponseTypeLargeInterface[] => {
  return rows.map((hotel) => {
    return new RakutenTravelHotelResponseTypeLarge(
      parseRakutenTravelHotelBasicInfo(hotel),
      parseRakutenTravelHotelRatingInfo(hotel),
      parseRakutenTravelHotelDetailInfo(hotel),
      parseRakutenTravelHotelFacilitiesInfo(hotel),
      parseRakutenTravelHotelPolicyInfo(hotel)
    );
  });
};

const parseRakutenTravelHotelBasicInfo = (
  hotel: parsedJson
): RakutenTravelHotelBasicInfoInterface => {
  // todo
  return new RakutenTravelHotelBasicInfo();
};

const parseRakutenTravelHotelRatingInfo = (
  hotel: parsedJson
): RakutenTravelHotelRatingInfoInterface => {
  // todo
  return new RakutenTravelHotelRatingInfo();
};

const parseRakutenTravelHotelDetailInfo = (
  hotel: parsedJson
): RakutenTravelHotelDetailInfoInterface => {
  // todo
  return new RakutenTravelHotelDetailInfo();
};

const parseRakutenTravelHotelFacilitiesInfo = (
  hotel: parsedJson
): RakutenTravelHotelFacilitiesInfoInterface => {
  // todo
  return new RakutenTravelHotelFacilitiesInfo();
};

const parseRakutenTravelHotelPolicyInfo = (
  hotel: parsedJson
): RakutenTravelHotelPolicyInfoInterface => {
  // todo
  return new RakutenTravelHotelPolicyInfo();
};
