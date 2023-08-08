import {
  Button,
  Card,
  Chip,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import busd from "../../assets/icons/svg/busd.svg";
import { IoCopy } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Invoice() {
  return (
    <>
      <Card className="w-full shadow-none bg-transparent border border-dashed my-4">
        <List>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
            <h2 className="font-bold text-gray-400">Buy BUSD</h2>
            <ListItemSuffix>
              <img className="h-8 w-8 rounded-full" src={busd} alt="" />
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
            <span className="text-gray-400 text-sm">Amount</span>
            <ListItemSuffix>
              <h3 className="text_orange font-bold text-xl">496.56 BUSD</h3>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
            <span className="text-gray-400 text-sm">Price</span>
            <ListItemSuffix>
              <span className="text-gray-400 font-bold text-lg">$1.02</span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
            <span className="text-gray-400 text-sm">Total qty</span>
            <ListItemSuffix>
              <span className="text-gray-400 font-bold text-lg">500 USD</span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
            <span className="text-gray-400 text-sm">Fee</span>
            <ListItemSuffix>
              <span className="text-gray-400 font-bold text-lg">0.00</span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
            <span className="text-gray-400 text-sm">Order No</span>
            <ListItemSuffix>
              <span className="flex items-center text-gray-400 font-medium text-lg">
                5524783 &nbsp; <IoCopy size="20px" className="text-gray-500" />
              </span>
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
      <Card className="card_bg border-0 mb-8 p-3 shadow-none shadow-none">
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
        </div>
        <ul className="my-4">
          <li className="flex">
            <VscVerifiedFilled size="20px" className="text-green-700" />
            <span className="text-sm ml-1 text-gray-400">
              The assets of the seller have been locked in smart contract. You
              can make the transaction with confidence.
            </span>
          </li>
          <li className="flex mt-2">
            <VscVerifiedFilled size="20px" className="text-green-700" />
            <span className="text-sm ml-1 text-gray-400">
              The seller has passed the indentify, Email and mobile number
              verification.
            </span>
          </li>
        </ul>
        <div>
          <Link to={`/contactSeller`}>
            <Button
              variant="outlined"
              color="orange"
              className="contact_btn py-0 shadow-none border-0 text-xs float-right"
            >
              Contact to seller
            </Button>
          </Link>
        </div>
      </Card>
      <div className="row mb-5">
        <div className="col-5">
          <Button className="text-gray-400 shadow-none hover:shadow-none text-sm bg-gray-700 rounded w-full py-3">
            Cancel
          </Button>
        </div>
        <div className="col-7">
          <Link to={`/checkout2`}>
            <Button className="text-gray-900 shadow-none hover:shadow-none text-sm orange_btn rounded w-full py-3">
              Pay Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Invoice;
