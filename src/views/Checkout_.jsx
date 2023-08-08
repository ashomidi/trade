import { useState, useRef } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import PaymnetCountDown from "../components/paymentCountdown";
import {
  Badge,
  Button,
  Card,
  IconButton,
  List,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { BiSolidConversation } from "react-icons/bi";
import PAYMENTS from "../dummy/payments";
import CopyableListItem from "../components/copyableListItem";
import { Link } from "react-router-dom";

function Checkout_() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const listItemSuffixRef = useRef(null);

  const paymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Function to copy the text to clipboard
  const copyToClipboard = () => {
    const textToCopy = listItemSuffixRef.current.textContent.trim();
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard:", textToCopy);
        // You can add a notification or any other UI feedback here if needed
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
        // Handle the error if clipboard write fails
      });
  };

  return (
    <div className="container max-w-3xl mx-auto pt-5">
      <div className="flex justify-between items-center">
        <div className="float-left w-full">
          <IoArrowBackSharp className="text-gray-600" size="30px" />
        </div>
        <div className="float-right">
          <Menu>
            <Badge className="right-3" content="3">
              <MenuHandler>
                <IconButton
                  variant="outlined"
                  className="rounded-full convers_btn"
                >
                  <BiSolidConversation
                    style={{ color: "#b4b4b4" }}
                    size="30px"
                  />
                </IconButton>
              </MenuHandler>
            </Badge>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <PaymnetCountDown />
      <Card className="bg-yellow-100 p-3 rounded">
        <Typography variant="small" className="text-black">
          Make sure not to remark sesitive words such as
          <b className="font-bold"> "BTC/USDT Purchase"</b> when transferring
          fiat. Otherwise the transaction may fail
        </Typography>
      </Card>
      <div className="my-4">
        <Typography variant="h6" className="font-medium text-gray-500 mb-2">
          Select Payment Method
        </Typography>

        <ul className="flex overflow-x-auto">
          {PAYMENTS.map((item, index) => (
            <li
              className="mb-3"
              value={item.title}
              onClick={paymentMethodHandler}
              key={index}
            >
              <input
                type="radio"
                id={item.title}
                name="payment"
                value={item.title}
                className="hidden peer"
                required
              />
              <label
                htmlFor={item.title}
                className="inline-flex items-center justify-between
                 w-max ml-3 px-2 py-1 text-sm text-gray-500 bg_darkgrey border-2 border-transparent
                  rounded-lg cursor-pointer peer-checked:bg-white peer-checked:text-gray-900"
              >
                <div className="flex items-center">
                  <img src={item.img} width="30" />
                  <span className="font-bold ml-2">{item.title}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-5">
        <Card className="bg_darkergrey shadow-none">
          <Typography
            variant="paragraph"
            className="text-gray-400 mb-3 px-4 py-3 border-b border-gray-800"
          >
            Transfer <span className="text_orange font-bold">500 USD </span>
            from your
            <span className="text-white">
              {paymentMethod ? ` ${paymentMethod} ` : " choosen method "}
            </span>
            to seller bank account and click on
            <span className="text-white"> "Payment Completed"</span> button
          </Typography>
          <List className="items-center">
            <CopyableListItem label="Name" data="Soroush Tech" />
            <CopyableListItem
              label="IBAN Number"
              data="US67300009360001137664920001"
            />
            <CopyableListItem label="Bank Name" data="Western Union" />
          </List>
        </Card>
        {paymentMethod && (
          <Link to={`/successful`}>
            <Button className="text-gray-900 shadow-none hover:shadow-none text-sm orange_btn rounded w-full py-3 mt-5">
              Payment Completed
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Checkout_;
