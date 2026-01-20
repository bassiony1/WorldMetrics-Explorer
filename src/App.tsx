import { useState } from "react";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";

export type PageName = "main" | "detail";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<PageName>("main");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMode, setSelectedMode] = useState<"dark" | "light">("dark");
  
  return (
    <div className="space-y-10">
      <NavBar
        mode={selectedMode}
        changeMode={() => {
          setSelectedMode((prev) => (prev === "dark" ? "light" : "dark"));
          window.document.documentElement.classList.toggle("dark");
        }}
      />
      <div className="container">
        {selectedPage == "main" ? (
          <MainPage
            onPageSelect={(name: PageName, countryName: string) => {
              setSelectedPage(name);
              setSelectedCountry(countryName);
            }}
          />
        ) : (
          <DetailPage
            country_name={selectedCountry}
            onPageSelect={(name: PageName, countryName: string) => {
              setSelectedPage(name);
              setSelectedCountry(countryName);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
