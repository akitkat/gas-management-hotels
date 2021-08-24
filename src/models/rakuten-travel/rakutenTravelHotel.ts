import { RakutenTravelHotelBasicInfoInterface } from './rakutenTravelHotelInterface';

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
