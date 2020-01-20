import AppContainer from "../../components/AppContainer";
import ContentArea from "../../components/ContentArea";
import Button from "../../components/Button";

function HomePage() {
  return (
    <AppContainer>
      <ContentArea>
        <div>Welcome to Next.js!</div>
        <p>
          <Button>Primary</Button>
          <Button disabled="disabled">Disabled</Button>
        </p>
        <p>
          <Button size="large">Large</Button>
          <Button>Normal</Button>
          <Button size="small">Small</Button>
          <Button size="foobar">missing size</Button>
        </p>
      </ContentArea>
    </AppContainer>
  );
}

export default HomePage;
