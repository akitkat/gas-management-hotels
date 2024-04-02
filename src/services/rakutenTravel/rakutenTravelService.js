import SheetFetchedHotelData from '../../models/spreadsheet/fetchedHotelData';
import SheetPublishedHotelList from '../../models/spreadsheet/publishedHotelList';

export const convertToSheetFetchedHotelData = (rakutenTravelHotel) => {
  const roomFacilities = rakutenTravelHotel.facilitiesInfo?.roomFacilities.map(
    (e) => e.item
  );

  const hotelFacilities = rakutenTravelHotel.facilitiesInfo?.hotelFacilities.map(
    (e) => e.item
  );

  const bathAbouts = rakutenTravelHotel.facilitiesInfo?.aboutBath
    .filter((e) => e?.bathType)
    .map((e) => e.bathType);

  return new SheetFetchedHotelData(
    rakutenTravelHotel.basicInfo?.hotelNo,
    rakutenTravelHotel.basicInfo?.hotelName,
    rakutenTravelHotel.basicInfo?.hotelInformationUrl,
    rakutenTravelHotel.basicInfo?.planListUrl,
    rakutenTravelHotel.basicInfo?.dpPlanListUrl,
    rakutenTravelHotel.basicInfo?.reviewUrl,
    rakutenTravelHotel.basicInfo?.hotelSpecial,
    rakutenTravelHotel.basicInfo?.hotelMinCharge,
    rakutenTravelHotel.basicInfo?.latitude,
    rakutenTravelHotel.basicInfo?.longitude,
    rakutenTravelHotel.basicInfo?.address1,
    rakutenTravelHotel.basicInfo?.address2,
    rakutenTravelHotel.basicInfo?.telephoneNo,
    rakutenTravelHotel.basicInfo?.access,
    rakutenTravelHotel.basicInfo?.parkingInformation,
    rakutenTravelHotel.basicInfo?.nearestStation,
    rakutenTravelHotel.basicInfo?.hotelImageUrl,
    rakutenTravelHotel.basicInfo?.hotelThumbnailUrl,
    rakutenTravelHotel.basicInfo?.roomImageUrl,
    rakutenTravelHotel.basicInfo?.roomThumbnailUrl,
    rakutenTravelHotel.basicInfo?.reviewCount,
    rakutenTravelHotel.basicInfo?.reviewAverage,
    rakutenTravelHotel.basicInfo?.userReview,
    rakutenTravelHotel.ratingInfo?.serviceAverage,
    rakutenTravelHotel.ratingInfo?.locationAverage,
    rakutenTravelHotel.ratingInfo?.roomAverage,
    rakutenTravelHotel.ratingInfo?.equipmentAverage,
    rakutenTravelHotel.ratingInfo?.bathAverage,
    rakutenTravelHotel.ratingInfo?.mealAverage,
    rakutenTravelHotel.detailInfo?.hotelClassCode,
    rakutenTravelHotel.detailInfo?.checkinTime,
    rakutenTravelHotel.detailInfo?.checkoutTime,
    rakutenTravelHotel.detailInfo?.lastCheckinTime,
    rakutenTravelHotel.facilitiesInfo?.hotelRoomNum,
    roomFacilities?.includes('加湿器'),
    roomFacilities?.includes('ベビーベッド'),
    roomFacilities?.includes('ミニキッチン（一部・要予約）'),
    roomFacilities?.includes('エクステンションベッド'),
    hotelFacilities?.includes('大浴場'),
    hotelFacilities?.includes('マッサージサービス'),
    hotelFacilities?.includes('露天風呂'),
    hotelFacilities?.includes('送迎バス'),
    hotelFacilities?.includes('サウナ'),
    hotelFacilities?.includes('ラウンジ'),
    hotelFacilities?.includes('喫茶'),
    hotelFacilities?.includes('カラオケルーム'),
    hotelFacilities?.includes('ティーラウンジ'),
    hotelFacilities?.includes('卓球'),
    hotelFacilities?.includes('エステサロン'),
    hotelFacilities?.includes('ゲームコーナー'),
    hotelFacilities?.includes('貸自転車'),
    hotelFacilities?.includes('バー'),
    hotelFacilities?.includes('バーラウンジ'),
    hotelFacilities?.includes('プール(夏期のみ)'),
    hotelFacilities?.includes('屋外プール'),
    hotelFacilities?.includes('プール(通年)'),
    hotelFacilities?.includes('ペット同宿可'),
    hotelFacilities?.includes('バーベキューガーデン'),
    hotelFacilities?.includes('カラオケサロン'),
    hotelFacilities?.includes('コンビニエンスストア'),
    hotelFacilities?.includes('スポーツジム'),
    hotelFacilities?.includes('フィットネスクラブ'),
    hotelFacilities?.includes('スカイラウンジ'),
    hotelFacilities?.includes('児童遊園施設'),
    hotelFacilities?.includes('ドラッグストア'),
    hotelFacilities?.includes('釣り堀'),
    hotelFacilities?.includes('キッズルーム'),
    bathAbouts?.includes('温泉'),
    bathAbouts?.includes('家族風呂'),
    bathAbouts?.includes('天然温泉'),
    bathAbouts?.includes('岩盤浴'),
    '=iferror(VLOOKUP(INDIRECT("A"&ROW()),idMap!$A$2:C,3,false),"")',
    '',
    ''
  );
};

export const convertToSheetPublishedHotelList = (rakutenTravelHotel) => {
  return new SheetPublishedHotelList(
    rakutenTravelHotel.basicInfo?.hotelNo,
    rakutenTravelHotel.basicInfo?.hotelName,
    rakutenTravelHotel.basicInfo?.hotelMinCharge ? rakutenTravelHotel.basicInfo.hotelMinCharge : '-',
    rakutenTravelHotel.basicInfo?.telephoneNo,
    rakutenTravelHotel.basicInfo?.address1 + rakutenTravelHotel.basicInfo?.address2,
    rakutenTravelHotel.basicInfo?.access,
    rakutenTravelHotel.basicInfo?.hotelImageUrl,
    rakutenTravelHotel.basicInfo?.userReview,
    `https://hb.afl.rakuten.co.jp/hgc/g0190dd6.uc73i72f.g0190dd6.uc73jb24/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${rakutenTravelHotel.basicInfo?.hotelNo}`,
    '',
    '',
    '',
  );
};
