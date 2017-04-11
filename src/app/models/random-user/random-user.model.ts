import { Address } from './properties/address.model';
import { Name } from './properties/name.model'
import { Image } from './properties/image.model'
import { Gender } from './properties/gender.model'

export class RandomUser {
  firstname: Name;
  lastname: Name;
  image: Image;
  gender: Gender;
  email: string;
  address: Address;
  phoneNumber: string;
}