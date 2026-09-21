'use client';

import Button from '~/components/components/Button/Button';
import { ModalTypes } from '~/constants/modal-provider';
import { openModal } from '~/store/modals';

const PokedexPage = () => {
  return (
    <>
      Pokedex Page
      <Button
        onClick={() =>
          openModal({
            type: ModalTypes.POKEMON_DETAILS,
            data: { name: 'pikachu' },
          })
        }
      >
        Open Pokemon Details Modal
      </Button>
      <Button
        onClick={() =>
          openModal({ type: ModalTypes.POKEMON_DETAILS, data: { name: '' } })
        }
      >
        Open Empty Pokemon Details Modal
      </Button>
      <Button
        onClick={() =>
          openModal({
            type: ModalTypes.CONFIRMATION,
            data: { onConfirm: () => console.log('confirmed') },
          })
        }
      >
        Open Confirmation Modal
      </Button>
    </>
  );
};

export default PokedexPage;
