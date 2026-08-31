import UserCard from "./components/UserCard";
import "./app.css";
import heroimg from "./assets/hero.png";
import reactimg from "./assets/react.svg";
import viteimg from "./assets/vite.svg";
import Count from "./components/Count";

function App() {
  return (
    <div id="rect-app">
      <UserCard
        name="Hero"
        image={heroimg}
        decription="this is a hero section image"
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="React"
        image={reactimg}
        decription="this is a react section image"
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="Vite"
        image={viteimg}
        decription="this is a vite section image"
        style={{ "border-radius": "10px" }}
      />
      <Count id="vount1" />
    </div>
  );
}
export default App;
