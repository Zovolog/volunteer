import { MainPage } from "./MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { WantHelpPage } from "./WantHelpPage/WantHelpPage";
import { NeedHelpPage } from "./NeedHelpPage/NeedHelpPage";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/need-help" element={<WantHelpPage />} />
        <Route path="/want-help" element={<NeedHelpPage />} />
      </Routes>
    </div>
  );
};
