import { MainPage } from "./MainPage/MainPage";
import { MainPageEn } from "./MainPage/MainPageEn";
import { Routes, Route } from "react-router-dom";
import { WantHelpPage } from "./WantHelpPage/WantHelpPage";
import { WantHelpPageEn } from "./WantHelpPage/WantHelpPageEn";
import { NeedHelpPage } from "./NeedHelpPage/NeedHelpPage";
import { NeedHelpPageEn } from "./NeedHelpPage/NeedHelpPageEn";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/en" element={<MainPageEn />} />
        <Route path="/need-help" element={<WantHelpPage />} />
        <Route path="/need-helpEn" element={<WantHelpPageEn />} />
        <Route path="/want-help" element={<NeedHelpPage />} />
        <Route path="/want-helpEn" element={<NeedHelpPageEn />} />
      </Routes>
    </div>
  );
};
