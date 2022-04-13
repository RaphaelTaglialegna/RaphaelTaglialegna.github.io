import tw from "twin.macro";
import Home from "./components/containers/home";
import ProjectsSection from "./components/containers/projects";
import About from "./components/containers/about";
import Contact from "./components/containers/contact";
import './App.scss'


const  AppContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
`;
function App() {
  return (
    <AppContainer>
      <Home />
      <ProjectsSection />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;
