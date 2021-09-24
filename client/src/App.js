import { Route } from "react-router";

/* COMPONENTS */
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DogsTable from "./components/DogsTable/DogsTable";
import DogInfo from "./components/DogInfo/DogInfo";
import CreateDog from "./components/CreateDog/CreateDog";
import Landing from "./components/Landing/Landing";
/* STYLES */
import "./App.css";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/dogs">
        <div id="container">
          <Route
            path="/dogs"
            render={({ location }) => <Nav location={location} />}
          />
          <Route
            exact
            path="/dogs"
            render={({ location }) => <DogsTable location={location} />}
          />
          <Route
            className="dog-info"
            exact
            path={`/dogs/breed/:BreedId`}
            render={({ match }) => <DogInfo match={match} />}
          />
          <Route
            className="dog"
            exact
            path="/dogs/newdog"
            render={() => <CreateDog />}
          />
          <Footer />
        </div>
      </Route>
    </>
  );
}

export default App;
