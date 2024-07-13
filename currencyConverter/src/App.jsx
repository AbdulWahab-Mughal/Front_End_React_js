import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [to, setTo] = useState("inr");
  let [from, setFrom] = useState("usd");

  const currencyInfo = useCurrencyInfo(from);
  let options = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const SwapFunc = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <>
      <div className="main w-full h-screen flex justify-center items-center  bg-blue-800">
        <div className="innerBox w-[50%]  h-[50vh] bg-blue-100 border-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className=" text-center text-3xl my-3 font-bold">
            Currency Converter
          </h1>
          <InputBox
            label="From"
            amount={amount}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyType={options}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div className="swapBtn relative h-0.5 top-[-3.5%]">
            <button
              onClick={SwapFunc}
              className="py-2 px-6 text-white bg-red-300 font-bold text-xl border-0 rounded-lg"
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyType={options}
            amountDisable={true}
          />
          <div className="convetBtn m-3 w-[90%]">
            <button
              onClick={convertCurrency}
              className=" bg-blue-600 py-3 w-full font-bold text-xl text-white rounded-lg "
            >
              Convert{" "}
              <span className=" text-2xl text text-red-400 uppercase">
                {from}
              </span>{" "}
              to{" "}
              <span className=" text-2xl text text-red-400 uppercase">
                {to}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
