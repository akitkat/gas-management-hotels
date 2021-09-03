export default class SheetFetchedHotelData {
  constructor(
    hotelNo,
    hotelName,
    hotelInformationUrl,
    planListUrl,
    dpPlanListUrl,
    reviewUrl,
    hotelSpecial,
    hotelMinCharge,
    latitude,
    longitude,
    address1,
    address2,
    telephoneNo,
    access,
    parkingInformation,
    nearestStation,
    hotelImageUrl,
    hotelThumbnailUrl,
    roomImageUrl,
    roomThumbnailUrl,
    reviewCount,
    reviewAverage,
    userReview,
    serviceAverage,
    locationAverage,
    roomAverage,
    equipmentAverage,
    bathAverage,
    mealAverage,
    hotelClassCode,
    checkinTime,
    checkoutTime,
    lastCheckinTime,
    hotelRoomNum,
    hasHumidifier,
    hasCrib,
    hasMiniKitchen,
    hasExtensionBed,
    hasBigBath,
    hasMassageService,
    hasOpenAirBath,
    hasCourtesyBus,
    hasSauna,
    hasLounge,
    hasCafe,
    hasKaraokeRoom,
    hasTeaLounge,
    hasTableTennis,
    hasBeautySalon,
    hasGameCorner,
    hasBicycleRental,
    hasBar,
    hasBarLounge,
    hasPoolSummerOnly,
    hasOutdoorPool,
    hasPoolAllYear,
    allowedPets,
    hasBbqGarden,
    hasKaraokeSalon,
    hasConvenienceStore,
    hasSportsGym,
    hasFitnessClub,
    hasSkyLounge,
    hasChildrenAmusementParkFacility,
    hasDrugStore,
    hasFishingPond,
    hasKidsRoom,
    hasHotSpring,
    hasFamilyBath,
    hasNaturalHotSpring,
    hasBedrockBath,
    otherId,
    catchCopy,
    caption
  ) {
    this.hotelNo = hotelNo;
    this.hotelName = hotelName;
    this.hotelInformationUrl = hotelInformationUrl;
    this.planListUrl = planListUrl;
    this.dpPlanListUrl = dpPlanListUrl;
    this.reviewUrl = reviewUrl;
    this.hotelSpecial = hotelSpecial;
    this.hotelMinCharge = hotelMinCharge;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address1 = address1;
    this.address2 = address2;
    this.telephoneNo = telephoneNo;
    this.access = access;
    this.parkingInformation = parkingInformation;
    this.nearestStation = nearestStation;
    this.hotelImageUrl = hotelImageUrl;
    this.hotelThumbnailUrl = hotelThumbnailUrl;
    this.roomImageUrl = roomImageUrl;
    this.roomThumbnailUrl = roomThumbnailUrl;
    this.reviewCount = reviewCount;
    this.reviewAverage = reviewAverage;
    this.userReview = userReview;
    this.serviceAverage = serviceAverage;
    this.locationAverage = locationAverage;
    this.roomAverage = roomAverage;
    this.equipmentAverage = equipmentAverage;
    this.bathAverage = bathAverage;
    this.mealAverage = mealAverage;
    this.hotelClassCode = hotelClassCode;
    this.checkinTime = checkinTime;
    this.checkoutTime = checkoutTime;
    this.lastCheckinTime = lastCheckinTime;
    this.hotelRoomNum = hotelRoomNum;
    this.hasHumidifier = hasHumidifier;
    this.hasCrib = hasCrib;
    this.hasMiniKitchen = hasMiniKitchen;
    this.hasExtensionBed = hasExtensionBed;
    this.hasBigBath = hasBigBath;
    this.hasMassageService = hasMassageService;
    this.hasOpenAirBath = hasOpenAirBath;
    this.hasCourtesyBus = hasCourtesyBus;
    this.hasSauna = hasSauna;
    this.hasLounge = hasLounge;
    this.hasCafe = hasCafe;
    this.hasKaraokeRoom = hasKaraokeRoom;
    this.hasTeaLounge = hasTeaLounge;
    this.hasTableTennis = hasTableTennis;
    this.hasBeautySalon = hasBeautySalon;
    this.hasGameCorner = hasGameCorner;
    this.hasBicycleRental = hasBicycleRental;
    this.hasBar = hasBar;
    this.hasBarLounge = hasBarLounge;
    this.hasPoolSummerOnly = hasPoolSummerOnly;
    this.hasOutdoorPool = hasOutdoorPool;
    this.hasPoolAllYear = hasPoolAllYear;
    this.allowedPets = allowedPets;
    this.hasBbqGarden = hasBbqGarden;
    this.hasKaraokeSalon = hasKaraokeSalon;
    this.hasConvenienceStore = hasConvenienceStore;
    this.hasSportsGym = hasSportsGym;
    this.hasFitnessClub = hasFitnessClub;
    this.hasSkyLounge = hasSkyLounge;
    this.hasChildrenAmusementParkFacility = hasChildrenAmusementParkFacility;
    this.hasDrugStore = hasDrugStore;
    this.hasFishingPond = hasFishingPond;
    this.hasKidsRoom = hasKidsRoom;
    this.hasHotSpring = hasHotSpring;
    this.hasFamilyBath = hasFamilyBath;
    this.hasNaturalHotSpring = hasNaturalHotSpring;
    this.hasBedrockBath = hasBedrockBath;
    this.otherId = otherId;
    this.catchCopy = catchCopy;
    this.caption = caption;
  }

  toArray() {
    return [
      this.hotelNo,
      this.hotelName,
      this.hotelInformationUrl,
      this.planListUrl,
      this.dpPlanListUrl,
      this.reviewUrl,
      this.hotelSpecial,
      this.hotelMinCharge,
      this.latitude,
      this.longitude,
      this.address1,
      this.address2,
      this.telephoneNo,
      this.access,
      this.parkingInformation,
      this.nearestStation,
      this.hotelImageUrl,
      this.hotelThumbnailUrl,
      this.roomImageUrl,
      this.roomThumbnailUrl,
      this.reviewCount,
      this.reviewAverage,
      this.userReview,
      this.serviceAverage,
      this.locationAverage,
      this.roomAverage,
      this.equipmentAverage,
      this.bathAverage,
      this.mealAverage,
      this.hotelClassCode,
      this.checkinTime,
      this.checkoutTime,
      this.lastCheckinTime,
      this.hotelRoomNum,
      this.hasHumidifier,
      this.hasCrib,
      this.hasMiniKitchen,
      this.hasExtensionBed,
      this.hasBigBath,
      this.hasMassageService,
      this.hasOpenAirBath,
      this.hasCourtesyBus,
      this.hasSauna,
      this.hasLounge,
      this.hasCafe,
      this.hasKaraokeRoom,
      this.hasTeaLounge,
      this.hasTableTennis,
      this.hasBeautySalon,
      this.hasGameCorner,
      this.hasBicycleRental,
      this.hasBar,
      this.hasBarLounge,
      this.hasPoolSummerOnly,
      this.hasOutdoorPool,
      this.hasPoolAllYear,
      this.allowedPets,
      this.hasBbqGarden,
      this.hasKaraokeSalon,
      this.hasConvenienceStore,
      this.hasSportsGym,
      this.hasFitnessClub,
      this.hasSkyLounge,
      this.hasChildrenAmusementParkFacility,
      this.hasDrugStore,
      this.hasFishingPond,
      this.hasKidsRoom,
      this.hasHotSpring,
      this.hasFamilyBath,
      this.hasNaturalHotSpring,
      this.hasBedrockBath,
      this.otherId,
      this.catchCopy,
      this.caption,
    ];
  }
}
