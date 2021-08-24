import { GreetUser } from "./components/greetuser/GreetUser"

function App() {
  let name = ".Net20D"
  return (
    <div>
      <GreetUser name={name} age="32" misc="bla bla"/>
      <GreetUser name={name} age="32" misc="bla bla"/>
      <GreetUser name={name} age="32" misc="bla bla"/>
    </div>
  );
}

export default App;
