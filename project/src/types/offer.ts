export type OfferPhoto = {
  src: string;
};

export type ListItems = {
  item: string;
}

export type OfferOwner = {
  avatar: string;
  name: string;
  pro: boolean;
};

export type Offer = {
  id: number;
  photo: OfferPhoto[];
  title: string;
  description: string;
  premium: boolean;
  typeOfHousing: string;
  rating: number;
  number_of_bedrooms: string;
  number_of_guests: string;
  rent_per_night: number;
  items: ListItems[];
  owner: OfferOwner;
};
