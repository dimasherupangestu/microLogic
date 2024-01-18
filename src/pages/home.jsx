import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mx-auto mt-40 ">
      <div className="flex flex-wrap bg-slate-100 shadow-lg w-full gap-5 justify-center rounded-lg p-7 ">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">Challange on Task</h1>
        </div>
        <div className="flex gap-6">
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/countDuration"}>Count Duration</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/currencyConvert"}>Currency Convert</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/mobileLegend"}>Mobile Legend</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/ticTacTo"}>Tic Tac Toe</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/matchingCard"}>Matching Card</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/salaryCalculating"}>Salary Calculating</Link>
          </div>
          <div className="min-w-md h-20 flex justify-center items-center text-white py-4 px-6 rounded-lg shadow-lg bg-blue-600">
            <Link to={"/wordScramb"}>Word Scramb</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
