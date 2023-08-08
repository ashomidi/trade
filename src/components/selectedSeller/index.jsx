import { Avatar, Card, Label } from "flowbite-react";
import usa from "../../assets/flags/unitedstates.png";
import busd from "../../assets/icons/svg/busd.svg";
import visacard from "../../assets/icons/png/visa.png";
import mastercard from "../../assets/icons/png/mastercard.png";
import paypal from "../../assets/icons/png/paypal_curve.png";
import { Button, Checkbox } from "@material-tailwind/react";
import "./styles.css";
import { Link } from "react-router-dom";

function SelectedSeller() {
  return (
    <div className="my-5">
      <Card className="card_bg border-0 mb-4 shadow-none shadow-none">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center space-x-4">
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-blue-800">
                <span className="font-medium text-gray-100">SX</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-gray-100 font-bold">SoroushX</h3>
                <div className="text-xs text-gray-600 mt-0">
                  Competition 100.00%
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <img src={mastercard} className="w-8 h-8" alt="mastercard" />
            <img src={paypal} className="w-8 h-8" alt="paypal" />
            <img src={visacard} className="w-8 h-8" alt="visacard" />
          </div>
        </div>
        <span className="mt-1">
          <small className="text-gray-700">Price</small>
          <small className="text-gray-100 ml-2 text-xs">$1.02</small>
        </span>

        <span>
          <small className="text-gray-700">Balance</small>
          <small className="text-gray-100 ml-2 text-xs font-medium">
            700.53 BUSD
          </small>
        </span>

        <span>
          <small className="text-gray-700">Limit:</small>
          <small className="text-gray-100 ml-2 text-xs font-medium">
            50-700 BUSD
          </small>
        </span>
        <Link to={`/contactSeller`}>
          <Button
            variant="outlined"
            color="orange"
            className="contact_btn py-0 shadow-none border-0 my-2 text-xs"
          >
            Contact to seller
          </Button>
        </Link>

        <p className="text-gray-600 text-xs">
          If you have any any question you can call us on whatsapp
          <br />
          +9126239508 or telegram @soroushx
          <b className="text-gray-400 ml-1">More...</b>
        </p>
      </Card>
      <div className="my-5">
        <p className="text-gray-600 text-xs">
          How many <b className="text-sm text-gray-400">BUSD</b> do you want to
          buy?
        </p>
        <Card className="card_bg border-0 mt-1 shadow-none">
          <div className="flex justify-between items-center">
            <Avatar img={usa} rounded>
              <div className="font-bold">
                <h3 className="text-gray-400 text-md">500.00</h3>
              </div>
            </Avatar>
            <div>
              <h3 className="text-gray-400 text-sm font-bold">USD</h3>
            </div>
          </div>
        </Card>
        <Card className="card_bg border-0 mt-2.5 shadow-none">
          <div className="flex justify-between items-center">
            <Avatar img={busd} rounded>
              <div className="font-bold">
                <h3 className="text-gray-400 text-md">496.56</h3>
              </div>
            </Avatar>
            <div>
              <h3 className="text-gray-400 text-sm font-bold">BUSD</h3>
            </div>
          </div>
        </Card>
        <p className="text-xs font-light mt-2" style={{ color: "#8e846c" }}>
          Soroosh's available balance today: 10500.00 BUSD
        </p>
        <div className="flex items-center mt-12 gap-2">
          <Checkbox ripple={false} label="I agree with the" />
          <a
            style={{ color: "#d88051" }}
            className="hover:underline text-sm mt-0.5"
          >
            <p>&nbsp; Soroush's terms of use(P2P)</p>
          </a>
        </div>
        <Link to={`/checkout`}>
          <Button
            fullWidth
            className="buy_btn_2 shadow-none hover:shadow-none mt-3 text-sm py-0"
          >
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectedSeller;
