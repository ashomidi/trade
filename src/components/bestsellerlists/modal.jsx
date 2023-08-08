import { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import PAYMENTS from "../../dummy/payments";
import { Button } from "flowbite-react";
import { LiaAngleDownSolid } from "react-icons/lia";
import "./styles.css";

function Modal({ sendData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [payMethod, setPayMethod] = useState("");

  const sendDataToParent = () => {
    sendData(payMethod);
    setOpen((prev) => !prev);
    setSearchTerm("");
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const filtered = PAYMENTS.filter((items) => {
    return items.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {/* Modal btn */}
      <Button
        onClick={() => handleOpen("xxl")}
        size="sm"
        variant="outlined"
        color="gray"
        className="modal_btn flex font-light items-center gap-3 overflow-hidden bg-gray-900 text-gray-500"
      >
        {payMethod ? payMethod : "Payment Method"}
        <LiaAngleDownSolid
          size="20px"
          className="float-right text-gray-500 ml-2"
        />
      </Button>
      {/* End modal btn */}

      <Dialog
        style={{ backgroundColor: "#101010" }}
        size="xs"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" className="text-gray-200">
            Choose Payment Method
          </Typography>
          <IoMdClose
            size="20px"
            className="text-gray-200"
            onClick={() => setOpen(false)}
          />
        </DialogHeader>
        <DialogBody className="overflow-hidden pr-2">
          <div className="container max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSearch size="25px" className="text-gray-600" />
              </div>
              <input
                type="text"
                className="bg-gray-900 text-gray-300 placeholder-gray-600 text-sm rounded-lg block w-full py-2.5 pl-12"
                placeholder="Payment Methods"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mt-4">
              {!searchTerm
                ? PAYMENTS.map((item, index) => (
                    <ul className="mt-1 -ml-2 flex flex-col gap-1" key={index}>
                      <MenuItem
                        onClick={(e) => {
                          setPayMethod(e.currentTarget.value);
                          console.log(payMethod);
                        }}
                        className="flex items-center gap-3 pay_method_btn"
                        value={item.title}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-7 w-7 rounded-md"
                        />
                        <Typography className="text-gray-500" variant="h6">
                          {item.title}
                        </Typography>
                      </MenuItem>
                    </ul>
                  ))
                : filtered.map((item, index) => (
                    <ul className="mt-1 -ml-2 flex flex-col gap-1" key={index}>
                      <MenuItem
                        onClick={(e) => {
                          setPayMethod(e.currentTarget.value);
                        }}
                        className="flex items-center gap-3 pay_method_btn"
                        value={item.title}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-7 w-7 rounded-md"
                        />
                        <Typography color="gray" variant="h6">
                          {item.title}
                        </Typography>
                      </MenuItem>
                    </ul>
                  ))}
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2 border-t border-gray-900">
          <Typography variant="small" color="gray" className="font-normal">
            New to Ethereum wallets?
          </Typography>
          <Button onClick={sendDataToParent} variant="text" size="sm">
            proceed
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Modal;
