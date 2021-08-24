import {
  RakutenTravelHotelBasicInfoInterface,
  RakutenTravelHotelDetailInfoInterface,
  RakutenTravelHotelFacilitiesInfoInterface,
  RakutenTravelHotelPolicyInfoInterface,
  RakutenTravelHotelRatingInfoInterface,
} from './rakutenTravelHotelInfoInterface';
import {
  RakutenTravelHotelResponseTypeLargeInterface,
  RakutenTravelHotelResponseTypeMiddleInterface,
  RakutenTravelHotelResponseTypeSmallInterface,
} from './rakutenTravelHotelInterface';

export class RakutenTravelHotelResponseTypeSmall
  implements RakutenTravelHotelResponseTypeSmallInterface
{
  constructor(public basicInfo: RakutenTravelHotelBasicInfoInterface) {}
}

export class RakutenTravelHotelResponseTypeMiddle
  implements RakutenTravelHotelResponseTypeMiddleInterface
{
  constructor(
    public basicInfo: RakutenTravelHotelBasicInfoInterface,
    public ratingInfo: RakutenTravelHotelRatingInfoInterface
  ) {}
}

export class RakutenTravelHotelResponseTypeLarge
  implements RakutenTravelHotelResponseTypeLargeInterface
{
  constructor(
    public basicInfo: RakutenTravelHotelBasicInfoInterface,
    public ratingInfo: RakutenTravelHotelRatingInfoInterface,
    public detailInfo: RakutenTravelHotelDetailInfoInterface,
    public facilitiesInfo: RakutenTravelHotelFacilitiesInfoInterface,
    public policyInfo: RakutenTravelHotelPolicyInfoInterface
  ) {}
}
