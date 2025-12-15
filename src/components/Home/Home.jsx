import css from './Home.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading
} from '../../redux/AppRedux/selectors';
import { selectUser } from '../../redux/AuthRedux/selectors';
import { retrieveApiKey, fetchCatPics, fetchDogPics } from '../../redux/AppRedux/operations';
import icon from './list2.svg';
import BrandServices from './BrandServices.png';
import API from './API.png';
import Profile from './Profile.png';
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';




export const Home = () => {
  const myRef = useRef();
  const sectionRef = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const myUser = useSelector(selectUser);
  const [isOneHovered, setIsOneHovered] = useState(false);
  const [isTwoHovered, setIsTwoHovered] = useState(false);
  const [isThreeHovered, setIsThreeHovered] = useState(false);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

   const scrollToSection = () => {
     sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

useEffect(() => {
  dispatch(retrieveApiKey());
  //dispatch(fetchCatPics());
  //dispatch(fetchDogPics());
}, [dispatch]);

  return (
    <div className={css.homeDisplay}>
      <div>
        <div className={css.homeDisplayIntro}>
          <div className={css.homeIconWrapper}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={css.homeIcon}
            >
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#ffb800" />
                  <stop offset="100%" stop-color="#714a13" />
                </linearGradient>
              </defs>

              <path
                d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"
                fill="url(#icon-gradient)"
              />
            </svg>
          </div>
          <span>
            <span className={css.homeDisplayTitle}>
              Welcome,{' '}
              <span className={css.homeDisplayTitlePart}>
                {myUser.firstname}
              </span>
            </span>
            <span className={css.homeDisplaySlogan}>
              <i>
                With AussieBrands, finding brand locations across Australia is
                effortless. From local favourites to international brands, we
                provide accurate location information nationwide—keeping you
                connected to the brands you rely on.
              </i>
            </span>
            <span className={css.homeDisplaySloganMobile}>
              <i>Connecting Brands to Places Nationwide.</i>
            </span>
          </span>
          <div className={css.homeIconWrapper}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={css.homeIcon}
            >
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#ffb800" />
                  <stop offset="100%" stop-color="#714a13" />
                </linearGradient>
              </defs>

              <path
                d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"
                fill="url(#icon-gradient)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={css.hero}>
        <div className={css.offersLabelWrapper}>
          <div className={css.offersLabel}>We offer</div>
        </div>

        <div className={css.offersWrapper}>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsOneHovered(true);
            }}
            onMouseLeave={() => {
              setIsOneHovered(false);
            }}
            style={{
              transform: `
    ${isTwoHovered && isTablet ? 'translateY(105%)' : 'translateY(0)'}
    ${isThreeHovered && isTablet ? 'translateX(-30%)' : 'translateX(0)'}
  `,
              boxShadow: `
              ${
                isOneHovered
                  ? 'inset 0 0 50px 30px #ffb800'
                  : 'inset 0 0 10px 5px  #ffb800'
              }
              `,
            }}
          >
            <div
              key="townMayor"
              className={css.movieItem}
              onClick={() => {
                setIsOneHovered(false);
              }}
            >
              <Link to="/sharedLayout/placesFinder" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.routeImage}
                    srcSet={BrandServices}
                    src={BrandServices} // Fallback
                    alt="PetServices"
                  />
                  <p className={css.catWardDescription}>
                    <span className={css.catWardDescriptionbackground}>
                      Explore Brands by Location, Worldwide..
                    </span>
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Brand Services</span>
                </span>
              </Link>
            </div>
          </div>

          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsTwoHovered(true);
            }}
            onMouseLeave={() => {
              setIsTwoHovered(false);
            }}
            style={{
              transform: `
    ${isOneHovered && isTablet ? 'translateY(105%)' : 'translateY(0)'}
    ${isThreeHovered && isTablet ? 'translateX(30%)' : 'translateX(0)'}
  `,
              boxShadow: `
              ${
                isTwoHovered
                  ? 'inset 0 0 50px 30px #ffb800'
                  : 'inset 0 0 10px 5px  #ffb800'
              }
              `,
            }}
          >
            <div
              key="townLibrarian"
              className={css.movieItem}
              onClick={() => {
                setIsTwoHovered(false);
              }}
            >
              <Link to="/sharedLayout/apiCreator" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.routeImage}
                    srcSet={API}
                    src={API} // Fallback
                    alt="API"
                  />
                  <p className={css.catWardDescription}>
                    <span className={css.catWardDescriptionbackground}>
                      Save your data and share through your custom API.
                    </span>
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Create Your API</span>
                </span>
              </Link>
            </div>
          </div>

          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsThreeHovered(true);
            }}
            onMouseLeave={() => {
              setIsThreeHovered(false);
            }}
            style={{
              transform: `
      ${isOneHovered && isTablet ? 'translateX(-52%)' : 'translateX(0)'}
      ${isTwoHovered && isTablet ? 'translateX(52%)' : 'translateX(0)'}
    `,
              boxShadow: `
              ${
                isThreeHovered
                  ? 'inset 0 0 50px 30px #ffb800'
                  : 'inset 0 0 10px 5px  #ffb800'
              }
              `,
            }}
          >
            <div
              key="townLibrarian"
              className={css.movieItem}
              onClick={() => {
                setIsTwoHovered(false);
              }}
            >
              <Link to="/sharedLayout/profile" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.routeImage}
                    srcSet={Profile}
                    src={Profile} // Fallback
                    alt="Profile"
                  />
                  <p className={css.catWardDescription}>
                    <span className={css.catWardDescriptionbackground}>
                      Get your details at a glance
                    </span>
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>View your Profile</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isLoading && !error && <div>Please wait...</div>}
      {error && <div>There was an error</div>}
    </div>
  );
};
export default Home;