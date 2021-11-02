import { BrowserRouter, Route,Switch } from "react-router-dom";
import styled from "styled-components";

import { Home } from 'components/pages/Home';
import { About } from 'components/pages/About';
import { Contact } from 'components/pages/Contact';
import { Error404 } from 'components/pages/Error404';
import { Header } from 'components/layout/Header';
import { Posts } from 'components/pages/Posts';
import { Post } from 'components/pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />

        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
      </Container>

    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width:800px;
  padding:8px;
  box-shadow: 0 0 8px #ccc;
  min-height:80vh;
`