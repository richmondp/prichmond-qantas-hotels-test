import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from '../Header.tsx';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </>
  );
};

export default PageLayout;
