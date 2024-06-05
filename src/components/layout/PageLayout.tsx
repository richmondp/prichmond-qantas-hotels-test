import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from '../header/Header.tsx';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        {children}
      </Container>
    </>
  );
};

export default PageLayout;
