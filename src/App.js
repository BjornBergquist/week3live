import { Routes } from "./routes/Routes";
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/provider/UserProvider";
import { SignInView } from "./views/signinview/SignInView";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
  );
}

export default App;
