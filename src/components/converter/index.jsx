import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import "react-dropdown/style.css";
import "./styles.css";

function Converter() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="border border-gray-900 rounded p-4">
      <div className="row items-center">
        <div className="col-10">
          <div className="flex justify-start">
            <div>
              <label className="top-2 relative text-gray-600 text-sm font-medium">
                From
              </label>
            </div>

            <Dropdown
              options={options}
              onChange={(e) => {
                setFrom(e.value);
              }}
              value={from}
              placeholder="From"
              className="pl-7 w-full"
            />
          </div>
          <hr className="w-full h-0.5 my-4 bg-gray-900 border-0" />
          <div className="flex justify-start">
            <div>
              <label className="top-2 relative text-gray-600 text-sm mr-4 font-medium">
                To
              </label>
            </div>
            <Dropdown
              options={options}
              onChange={(e) => {
                setTo(e.value);
              }}
              value={to}
              placeholder="To"
              className="pl-7 w-full"
            />
          </div>
        </div>

        <div className="col-2">
          <HiOutlineSwitchVertical
            className="text-gray-600 float-right"
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Converter;
