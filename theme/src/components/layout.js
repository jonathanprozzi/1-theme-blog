/** @jsx jsx */
import {
  jsx,
  Layout as DefaultLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled,
} from 'theme-ui';
import PostList from './post-list';
import { Global } from '@emotion/core';

const Layout = ({ children }) => (
  <DefaultLayout
    sx={{ fontFamily: 'body', backgroundColor: 'background', color: 'text' }}
  >
    <Global styles={{ body: { margin: 0 } }} />
    <Header>
      <span>header exists!</span>
    </Header>
    <Main>
      <Container>
        <Styled.h1>Hello!</Styled.h1>
        {children}
        <PostList></PostList>
      </Container>
    </Main>
    <Footer>
      <span>footer exists!</span>
    </Footer>
  </DefaultLayout>
);

export default Layout;
