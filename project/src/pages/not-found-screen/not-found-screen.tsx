import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

function NotFoundScreen (): JSX.Element {
  return(
    <section>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <Link to="/">
        <img className="" src="img/221_original.jpg" width="600" height="500" alt="Place image" />
      </Link>
      <h1>Not found</h1>
      <p>Кликни на картинку, что бы вернуться на главную страницу</p>
    </section>
  );
}

export default NotFoundScreen;


