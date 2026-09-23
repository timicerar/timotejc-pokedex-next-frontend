import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonGenerationOptionProps } from '~/components/compositions/SelectPokemonGeneration/PokemonGenerationOption/PokemonGenerationOption.interface';
import classes from './PokemonGenerationOption.module.scss';

const PokemonGenerationOption = ({
  option,
  selected,
}: PokemonGenerationOptionProps) => {
  return (
    <span
      className={classNames(classes.option, { [classes.selected]: selected })}
    >
      <span className={classes.check}>
        {selected && <FontAwesomeIcon icon={faCheck} />}
      </span>
      <Typography as="span" type="body-sm">
        {option.label}
      </Typography>
    </span>
  );
};

export default PokemonGenerationOption;
