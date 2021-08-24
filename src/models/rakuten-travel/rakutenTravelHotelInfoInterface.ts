export interface RakutenTravelItem {
  item: string;
}

export interface RakutenTravelBathType {
  bathType: string;
}

export interface RakutenTravelCreditCardItem {
  card: string;
}

export interface RakutenTravelHotelBasicInfoInterface {
  hotelNo: number;
  hotelName: string;
  hotelInformationUrl: string;
  planListUrl: string;
  dpPlanListUrl: string;
  reviewUrl: string;
  hotelKanaName: string;
  hotelSpecial: string;
  hotelMinCharge: number;
  latitude: number;
  longitude: number;
  postalCode: string;
  address1: string;
  address2: string;
  telephoneNo: string;
  faxNo: string;
  access: string;
  parkingInformation: string;
  nearestStation: string;
  hotelImageUrl: string;
  hotelThumbnailUrl: string;
  roomImageUrl: string;
  roomThumbnailUrl: string;
  hotelMapImageUrl: string;
  reviewCount: number;
  reviewAverage: number;
  userReview: string;
}

export interface RakutenTravelHotelRatingInfoInterface {
  serviceAverage: number;
  locationAverage: number;
  roomAverage: number;
  equipmentAverage: number;
  bathAverage: number;
  mealAverage: number;
}

export interface RakutenTravelHotelDetailInfoInterface {
  reserveTelephoneNo: string;
  middleClassCode: string;
  smallClassCode: string;
  areaName: string;
  hotelClassCode: string;
  checkinTime: string;
  checkoutTime: string;
  lastCheckinTime: string;
}

export interface RakutenTravelHotelFacilitiesInfoInterface {
  hotelRoomNum: number;
  roomFacilities: RakutenTravelItem[];
  hotelFacilities: RakutenTravelItem[];
  aboutBath: RakutenTravelBathType[];
  aboutLeisure: string;
  handicappedFacilities: RakutenTravelItem[];
  linguisticLevel: string;
}

export interface RakutenTravelHotelPolicyInfoInterface {
  note: string;
  cancelPolicy: string;
  availableCreditCard: RakutenTravelCreditCardItem[];
  aboutCreditCardNote: string;
  aboutPointAdd: string;
  aboutMileageAdd: string;
}