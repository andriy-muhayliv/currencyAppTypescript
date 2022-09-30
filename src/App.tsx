import "./App.css";
import Select from "./components/select/Select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstSelect,
  setSecondSelect,
  firstInputCalculate,
  secondInputCalculate,
  fetchCurrencyData,
} from "./redux/reducer";
import { InitState } from "./interfaces";
import Input from "./components/input/Input";
import MainWrapper from "./components/main-wrapper/MainWrapper";

function App() {
  const dispatch = useDispatch();
  const { firstSelect, firstInput, secondSelect, secondInput, currencyData } =
    useSelector((state: any): InitState => state.store);

  useEffect(() => {
    dispatch(firstInputCalculate(firstInput));
  }, [firstSelect, secondSelect]);

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, []);

  return (
    <>
      {currencyData.length ? (
        <MainWrapper currencyData={currencyData}>
          <div>
            <Select data={currencyData} setSelect={setFirstSelect} />
            <Input dispatchOnchange={firstInputCalculate} value={firstInput} />
          </div>
          <div>
            <Select data={currencyData} setSelect={setSecondSelect} />
            <Input
              dispatchOnchange={secondInputCalculate}
              value={secondInput}
            />
          </div>
        </MainWrapper>
      ) : (
        <div className="w-full">
          <p className="text-center text-red-500">loading</p>
        </div>
      )}
    </>
  );
}

export default App;
