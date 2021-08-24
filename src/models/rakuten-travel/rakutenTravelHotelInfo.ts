import {
  RakutenTravelBathType,
  RakutenTravelCreditCardItem,
  RakutenTravelHotelBasicInfoInterface,
  RakutenTravelHotelDetailInfoInterface,
  RakutenTravelHotelFacilitiesInfoInterface,
  RakutenTravelHotelPolicyInfoInterface,
  RakutenTravelHotelRatingInfoInterface,
  RakutenTravelItem,
} from './rakutenTravelHotelInfoInterface';

export class RakutenTravelHotelBasicInfo
  implements RakutenTravelHotelBasicInfoInterface
{
  constructor(
    public hotelNo: number,
    public hotelName: string,
    public hotelInformationUrl: string,
    public planListUrl: string,
    public dpPlanListUrl: string,
    public reviewUrl: string,
    public hotelKanaName: string,
    public hotelSpecial: string,
    public hotelMinCharge: number,
    public latitude: number,
    public longitude: number,
    public postalCode: string,
    public address1: string,
    public address2: string,
    public telephoneNo: string,
    public faxNo: string,
    public access: string,
    public parkingInformation: string,
    public nearestStation: string,
    public hotelImageUrl: string,
    public hotelThumbnailUrl: string,
    public roomImageUrl: string,
    public roomThumbnailUrl: string,
    public hotelMapImageUrl: string,
    public reviewCount: number,
    public reviewAverage: number,
    public userReview: string
  ) {}
}

export class RakutenTravelHotelRatingInfo
  implements RakutenTravelHotelRatingInfoInterface
{
  constructor(
    public serviceAverage: number,
    public locationAverage: number,
    public roomAverage: number,
    public equipmentAverage: number,
    public bathAverage: number,
    public mealAverage: number
  ) {}
}

export class RakutenTravelHotelDetailInfo
  implements RakutenTravelHotelDetailInfoInterface
{
  constructor(
    public reserveTelephoneNo: string,
    public middleClassCode: string,
    public smallClassCode: string,
    public areaName: string,
    public hotelClassCode: string,
    public checkinTime: string,
    public checkoutTime: string,
    public lastCheckinTime: string
  ) {}
}

export class RakutenTravelHotelFacilitiesInfo
  implements RakutenTravelHotelFacilitiesInfoInterface
{
  constructor(
    public hotelRoomNum: number,
    public roomFacilities: RakutenTravelItem[],
    public hotelFacilities: RakutenTravelItem[],
    public aboutBath: RakutenTravelBathType[],
    public aboutLeisure: string,
    public handicappedFacilities: RakutenTravelItem[],
    public linguisticLevel: string
  ) {}
}

export class RakutenTravelHotelPolicyInfo
  implements RakutenTravelHotelPolicyInfoInterface
{
  constructor(
    public note: string,
    public cancelPolicy: string,
    public availableCreditCard: RakutenTravelCreditCardItem[],
    public aboutCreditCardNote: string,
    public aboutPointAdd: string,
    public aboutMileageAdd: string
  ) {}
}
