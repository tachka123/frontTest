import OuterContainer from "./OuterContainer";
import FormWrapper from "./FormWrapper";
import Router from "./Router";
import Header from "./Header";

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
