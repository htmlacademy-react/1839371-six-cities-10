import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout/layout';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';


type AppScreenProps = {
  placesCount: number;
  offers: Offers;
}

function App({placesCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen placesCount={placesCount}/>} />
          <Route path={AppRoute.Room} element={<RoomScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
