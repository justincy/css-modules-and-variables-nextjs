import AppContainer from "../../components/AppContainer";
import ContentArea from "../../components/ContentArea";
import Button from "../../components/Button";

function HomePage() {
  return (
    <AppContainer>
      <ContentArea>
        <p>
          This is a simple demo showing how to use CSS Modules and CSS Variables
          in Next.js as a replacement for CSS-in-JS libraries.
        </p>
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
        <p>
          <a
            href="https://github.com/justincy/css-modules-and-variables-nextjs"
            target="gitsource"
          >
            Source code
          </a>
        </p>
      </ContentArea>
    </AppContainer>
  );
}

export default HomePage;
