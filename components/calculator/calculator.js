import React, { useState } from 'react';

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [oldResult, setOldResult] = useState(0);
  const [operator, setOperator] = useState();

  function handleNumber(e) {
    let input = e.target.value;
    if (result === 0) {
      setResult(input);
    } else {
      setResult(result + input);
    }
  }

  function clear() {
    setResult(0);
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldResult(result);
    setResult(0);
  }

  function percentage(e) {
    setResult(result / 100);
  }

  function calculate() {
    if (operator === '/') {
      setResult(parseFloat(oldResult) / parseFloat(result));
    } else if (operator === 'x') {
      setResult(parseFloat(oldResult) * parseFloat(result));
    } else if (operator === '-') {
      setResult(parseFloat(oldResult) - parseFloat(result));
    } else if (operator === '+') {
      setResult(parseFloat(oldResult) + parseFloat(result));
    }
  }

  return (
    <div className="bg-slate-900 p-5 text-white rounded-lg">
      <div className="max-w-[240px]">
        <h1 className="py-8 px-4 flex justify-end">{result}</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 justify-center">
            <button
              onClick={clear}
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
            >
              ac
            </button>
            <button className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400">
              +/-
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={percentage}
            >
              %
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-400 text-white uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={operatorHandler}
              value={'/'}
            >
              /
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={7}
              onClick={handleNumber}
            >
              7
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={8}
              onClick={handleNumber}
            >
              8
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={9}
              onClick={handleNumber}
            >
              9
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-400 text-white uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={operatorHandler}
              value={'x'}
            >
              x
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={4}
              onClick={handleNumber}
            >
              4
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={5}
              onClick={handleNumber}
            >
              5
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={6}
              onClick={handleNumber}
            >
              6
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-400 text-white uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={operatorHandler}
              value={'-'}
            >
              -
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={1}
              onClick={handleNumber}
            >
              1
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={2}
              onClick={handleNumber}
            >
              2
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={3}
              onClick={handleNumber}
            >
              3
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-400 text-white uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={operatorHandler}
              value={'+'}
            >
              +
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={0}
              onClick={handleNumber}
            >
              0
            </button>
            <button className="h-10 w-10 rounded-full   text-black uppercase transparent font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"></button>
            <button
              className="h-10 w-10 rounded-full bg-white text-black uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              value={'.'}
            >
              ,
            </button>

            <button
              className="h-10 w-10 rounded-full bg-orange-400 text-white uppercase font-semibold focus:ring-offset-1 focus:ring-1 focus:ring-orange-400"
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
