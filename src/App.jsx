import { Route, Routes } from "react-router-dom";
import { CountDuration } from "./pages/countDuration";
import { Home } from "./pages/home";
import { CurrencyConvert } from "./pages/currencyConvert";
import { MobileLegend } from "./pages/mobileLegend";
import { TicTacTo } from "./pages/ticTacToe";
import { MatchingCard } from "./pages/matchingCard";
import { SalaryCalculating } from "./pages/salaryCalculating";
import { WordScramb } from "./pages/wordScramb";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countDuration" element={<CountDuration />} />
        <Route path="/currencyConvert" element={<CurrencyConvert />} />
        <Route path="/mobileLegend" element={<MobileLegend />} />
        <Route path="/tictacto" element={<TicTacTo />} />
        <Route path="/matchingCard" element={<MatchingCard />} />
        <Route path="/salaryCalculating" element={<SalaryCalculating />} />
        <Route path="/wordScramb" element={<WordScramb />} />
      </Routes>
    </>
  );
}

export default App;
