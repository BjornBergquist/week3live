import { GreetUser } from "../../components/greetuser/GreetUser";
import { ErrorButton } from "../../components/errorbutton/ErrorButton";

export const HomeView = () => {
  return (
    <div>
      <h1>You are in the the Home View</h1>
      <GreetUser name="dotNet20D" age="1" />
      <ErrorButton></ErrorButton>
    </div>
  );
};
