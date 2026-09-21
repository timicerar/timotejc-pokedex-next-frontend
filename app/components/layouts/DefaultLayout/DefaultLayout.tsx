import classNames from 'classnames';
import { Suspense } from 'react';
import NavBar from '~/components/compositions/NavBar/NavBar';
import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import type { DefaultLayoutProps } from '~/components/layouts/DefaultLayout/DefaultLayout.interface';
import { ElementIds } from '~/constants/element-ids';
import classes from './DefaultLayout.module.scss';

const DefaultLayout = ({ hideFilters, children }: DefaultLayoutProps) => {
  return (
    <div
      id={ElementIds.MAIN_CONTENT}
      className={classNames(classes.layout, {
        [classes.noFilters]: hideFilters,
      })}
    >
      <NavBar />
      {!hideFilters && (
        <div className={classes.filters}>
          <Suspense fallback={null}>
            <PokemonFilters />
          </Suspense>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
