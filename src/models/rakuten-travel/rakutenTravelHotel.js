export class RakutenTravelHotel {
  constructor(basicInfo, ratingInfo, detailInfo, facilitiesInfo, policyInfo) {
    this.basicInfo = basicInfo;
    this.ratingInfo = ratingInfo;
    this.detailInfo = detailInfo;
    this.facilitiesInfo = facilitiesInfo;
    this.policyInfo = policyInfo;
  }
}

export class RakutenTravelHotelBasicInfo {
  constructor(
    hotelNo,
    hotelName,
    hotelInformationUrl,
    planListUrl,
    dpPlanListUrl,
    reviewUrl,
    hotelKanaName,
    hotelSpecial,
    hotelMinCharge,
    latitude,
    longitude,
    postalCode,
    address1,
    address2,
    telephoneNo,
    faxNo,
    access,
    parkingInformation,
    nearestStation,
    hotelImageUrl,
    hotelThumbnailUrl,
    roomImageUrl,
    roomThumbnailUrl,
    hotelMapImageUrl,
    reviewCount,
    reviewAverage,
    userReview
  ) {
    this.hotelNo = hotelNo;
    this.hotelName = hotelName;
    this.hotelInformationUrl = hotelInformationUrl;
    this.planListUrl = planListUrl;
    this.dpPlanListUrl = dpPlanListUrl;
    this.reviewUrl = reviewUrl;
    this.hotelKanaName = hotelKanaName;
    this.hotelSpecial = hotelSpecial;
    this.hotelMinCharge = hotelMinCharge;
    this.latitude = latitude;
    this.longitude = longitude;
    this.postalCode = postalCode;
    this.address1 = address1;
    this.address2 = address2;
    this.telephoneNo = telephoneNo;
    this.faxNo = faxNo;
    this.access = access;
    this.parkingInformation = parkingInformation;
    this.nearestStation = nearestStation;
    this.hotelImageUrl = hotelImageUrl;
    this.hotelThumbnailUrl = hotelThumbnailUrl;
    this.roomImageUrl = roomImageUrl;
    this.roomThumbnailUrl = roomThumbnailUrl;
    this.hotelMapImageUrl = hotelMapImageUrl;
    this.reviewCount = reviewCount;
    this.reviewAverage = reviewAverage;
    this.userReview = userReview;
  }
}

export class RakutenTravelHotelRatingInfo {
  constructor(
    serviceAverage,
    locationAverage,
    roomAverage,
    equipmentAverage,
    bathAverage,
    mealAverage
  ) {
    this.serviceAverage = serviceAverage;
    this.locationAverage = locationAverage;
    this.roomAverage = roomAverage;
    this.equipmentAverage = equipmentAverage;
    this.bathAverage = bathAverage;
    this.mealAverage = mealAverage;
  }
}

export class RakutenTravelHotelDetailInfo {
  constructor(
    reserveTelephoneNo,
    middleClassCode,
    smallClassCode,
    areaName,
    hotelClassCode,
    checkinTime,
    checkoutTime,
    lastCheckinTime
  ) {
    this.reserveTelephoneNo = reserveTelephoneNo;
    this.middleClassCode = middleClassCode;
    this.smallClassCode = smallClassCode;
    this.areaName = areaName;
    this.hotelClassCode = hotelClassCode;
    this.checkinTime = checkinTime;
    this.checkoutTime = checkoutTime;
    this.lastCheckinTime = lastCheckinTime;
  }
}

export class RakutenTravelHotelFacilitiesInfo {
  constructor(
    hotelRoomNum,
    roomFacilities,
    hotelFacilities,
    aboutBath,
    aboutLeisure,
    handicappedFacilities,
    linguisticLevel
  ) {
    this.hotelRoomNum = hotelRoomNum;
    this.roomFacilities = roomFacilities;
    this.hotelFacilities = hotelFacilities;
    this.aboutBath = aboutBath;
    this.aboutLeisure = aboutLeisure;
    this.handicappedFacilities = handicappedFacilities;
    this.linguisticLevel = linguisticLevel;
  }
}

export class RakutenTravelHotelPolicyInfo {
  constructor(
    note,
    cancelPolicy,
    availableCreditCard,
    aboutCreditCardNote,
    aboutPointAdd,
    aboutMileageAdd
  ) {
    this.note = note;
    this.cancelPolicy = cancelPolicy;
    this.availableCreditCard = availableCreditCard;
    this.aboutCreditCardNote = aboutCreditCardNote;
    this.aboutPointAdd = aboutPointAdd;
    this.aboutMileageAdd = aboutMileageAdd;
  }
}
