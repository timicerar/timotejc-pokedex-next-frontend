import Container from '~/components/components/Container/Container';
import NotFound from '~/components/compositions/NotFound/NotFound';
import { NotFoundTypes } from '~/constants/not-found';

const NotFoundPage = () => {
  return (
    <Container center fullHeight>
      <NotFound type={NotFoundTypes.GENERIC} />
    </Container>
  );
};

export default NotFoundPage;
