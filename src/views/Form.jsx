import { IoArrowBackSharp } from "react-icons/io5";
import SelectedSeller from "../components/selectedSeller";
function Form() {
  return (
    <div className="container max-w-3xl mx-auto pt-5">
      <div className="flex justify-around items-center">
        <div>
          <IoArrowBackSharp className="text-gray-600" size="30px" />
        </div>
        <div className="text-center w-full">
          <h1 className="text-gray-300 font-bold text-xl">BUY BUSD</h1>
        </div>
      </div>
      <SelectedSeller />
    </div>
  );
}

export default Form;
