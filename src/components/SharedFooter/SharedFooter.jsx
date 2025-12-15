import { Outlet } from 'react-router-dom';
import css from './SharedFooter.module.css';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
//import { useAuthHook } from '../../customHook/customHook';

export const SharedFooter = () => {
  //const { All } = useAuthHook();
  //console.log(All);
  return (
    <>
      <Suspense
        fallback={
          <div className={css.suspense}>
            {' '}
            <ThreeCircles
              visible={true}
              height="80"
              width="80"
              color="#ffb800"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass={css.loader}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <div className={css.footer}>
        © 2025 - <span className={css.start}>Geo</span>
        <span className={css.end}>
          <i>Brands</i>
        </span>
      </div>
    </>
  );
};

export default SharedFooter;
