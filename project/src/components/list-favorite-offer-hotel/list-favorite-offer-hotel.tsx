import FavoriteHotelCard from '../favorite-hotel-card/favorite-hotel-card';
import { Offer } from '../../types/offer';

type ListFavoriteOfferHotelProps = {
  offers: Offer[];
}

function ListFavoriteOfferHotel (props: ListFavoriteOfferHotelProps) {
  // console.log(props)

  const {offers} = props;
  return(
    offers.map((offer: Offer) => <FavoriteHotelCard key={offer.id} offer={offer} />)
  );
}

export default ListFavoriteOfferHotel;
