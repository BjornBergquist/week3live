import { GreetUser } from "../../components/greetuser/GreetUser";
import { ErrorButton } from "../../components/errorbutton/ErrorButton";
import { ErrorMessage } from "../../components/errormessage/ErrorMessage";

export const HomeView = () => {
  return (
    <main>
      <section>
        {console.log("Rendering HomeView")}
        <h1>You are in the the Home View</h1>
        <GreetUser name="dotNet20D" age="1" />
        <ErrorButton>
          <h1>Alert!</h1>
          <h2>Element 2</h2>
        </ErrorButton>
        <ErrorMessage message="A dangerous error has occoured on the site." />
      </section>
    </main>
  );
};
