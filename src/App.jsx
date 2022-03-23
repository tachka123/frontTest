import OuterContainer from "./components/OuterContainer";
import FormWrapper from "./components/FormWrapper";
import Router from "./components/Router";
import Header from "./components/Header";

import "./css/normalize.css";

function App() {
  return (
    <OuterContainer>
      <FormWrapper>
        <Header />
        <Router />
      </FormWrapper>
    </OuterContainer>
  );
}

export default App;
