import "./App.css";
import tw from "twin.macro";
import TopSection from "./containers/topSection";
import ProjectsSection from "./containers/projects";
import About from "./containers/about";
import Contact from "./containers/contact";

const  AppContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
`;
function App() {
  return (
    <AppContainer>
      <TopSection />
      <ProjectsSection />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;
