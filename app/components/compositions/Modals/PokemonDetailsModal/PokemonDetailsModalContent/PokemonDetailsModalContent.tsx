'use client';

import ModalHeader from '~/components/components/Modal/ModalHeader/ModalHeader';
import Typography from '~/components/components/Typography/Typography';
import { ModalTypes } from '~/constants/modal-provider';
import { closeModal } from '~/store/modals';
import classes from './PokemonDetailsModalContent.module.scss';

type PokemonDetailsModalContentProps = {
  name: string;
};

/**
 * Stub content — the real version will fetch and render the Pokemon's
 * details. Left empty for now since that data layer isn't wired up yet.
 */
const PokemonDetailsModalContent = ({
  name,
}: PokemonDetailsModalContentProps) => {
  return (
    <>
      <ModalHeader onClose={() => closeModal(ModalTypes.POKEMON_DETAILS)} />
      <div className={classes.container}>
        <Typography as="h2" type="card-title" className={classes.name}>
          {name}
        </Typography>
      </div>
    </>
  );
};

export default PokemonDetailsModalContent;
