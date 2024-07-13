import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyType = [],
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInput = useId();
  return (
    <div className="main border-2 w-[94%] rounded-lg h-[25%] mt-2 flex justify-between">
      <div className="leftbox flex flex-col justify-around items-start w-[60%] bg-white ">
        <label htmlFor={amountInput} className="ml-3 font-bold">
          {label}
        </label>
        <input
          type="Number"
          placeholder="0"
          id={amountInput}
          className="rounded ml-3 w-[25%] outline-none font-semibold"
          value={amount}
          disabled={amountDisable}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) //type is number so we have to wrape e.target.value in Number
          }
        />
      </div>
      <div className="rightbox flex flex-col justify-around items-end  w-[40%] bg-white ">
        <label className="mr-3 font-bold">Currency Type</label>
        <select
          className="mr-3 rounded text-center w-[30%] outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyType.map((currency) => (
            <option key={currency} className="font-semibold" value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
