import HotelCard from '../hotel-card/hotel-card';
import { Offer } from '../../types/offer';

type ListOfferHotelProps = {
  offers: Offer[];
}

function ListOfferHotel (props: ListOfferHotelProps) {

  const {offers} = props;
  return(
    offers.map((offer: Offer) => <HotelCard key={offer.id} offer={offer} />)
  );
}

export default ListOfferHotel;
