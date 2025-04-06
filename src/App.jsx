import AboutMeMain from "./components/AboutMe/AboutMeMain";
import HeroGradient from "./components/Hero/HeroGradient";
import HeroMain from "./components/Hero/HeroMain";
import HeroSlogan from "./components/Hero/HeroSlogan";
import NavbarMain from "./components/Navbar/NavbarMain";

function App() {
	return (
		<main className="font-body overflow-hidden">
			<NavbarMain />
			<HeroMain />
			<HeroGradient />
			<HeroSlogan />
			<AboutMeMain />
		</main>
	);
}

export default App;
