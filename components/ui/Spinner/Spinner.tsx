import { SpinnerIcon } from '@chakra-ui/icons';
import s from './LoadingDots.module.css';

const Spinner = () => {
  return (
    <SpinnerIcon
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  );
};

export default Spinner;
