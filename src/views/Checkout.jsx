import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BiSolidConversation } from "react-icons/bi";
import {
  Badge,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Texts from "../components/invoice/texts";
import Invoice from "../components/invoice/invoice";
import PaymnetCountDown from "../components/paymentCountdown";
import { payment_notice } from "../components/texts";

function Checkout() {
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
      <Texts />
      <Invoice />
    </div>
  );
}

export default Checkout;
