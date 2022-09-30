import { InitState } from "../../interfaces";
import Header from "../header/Header";

const MainWrapper = ({
  children,
  currencyData,
}: {
  children: any;
  currencyData: InitState | [];
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mx-6">
        <Header data={currencyData} />
        <div className="grid justify-items-center">
          <div className="flex gap-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
