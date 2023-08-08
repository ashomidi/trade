import { IconButton, Textarea, Typography } from "@material-tailwind/react";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import soroush from "../assets/icons/png/avatars/Soroush.png";
import { Avatar } from "flowbite-react";

function Ticket() {
  return (
    <div className="container max-w-3xl mx-auto my-5">
      <div className="flex justify-around items-center mb-5">
        <div>
          <IoArrowBackSharp className="text-gray-600" size="30px" />
        </div>
        <div className="text-center w-full">
          <Typography
            variant="lead"
            className="text-gray-300 font-bold text-xl"
          >
            Chat
          </Typography>
          <Typography variant="lead" className="text-gray-400 text-sm">
            Seller Name
          </Typography>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
          <div className="flex-shrink-0 text-center">
            <Avatar alt="soroush" img={soroush} rounded size="md" />
            <Typography variant="small" className="text-green-400 text-xs mt-1">
              online
            </Typography>
          </div>
          <div>
            <div className="bg-blue-600 text-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-sm">
                Hello I got you Order please send the receipt Then let me know
                to release the Crypto
              </p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              2 min ago
            </span>
          </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div className="bg-gray-300 text-gray-900 p-3 rounded-l-lg rounded-br-lg">
              <p className="text-sm">Yes, No problem. I will send you ASAP</p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              2 min ago
            </span>
          </div>
          <div className="flex-shrink-0 text-center">
            <Avatar placeholderInitials="ME" rounded />
          </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div className="bg-gray-300 text-gray-900 p-3 rounded-l-lg rounded-br-lg">
              <p className="text-sm">Just let me know pls</p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              2 min ago
            </span>
          </div>
          <div className="flex-shrink-0 text-center">
            <Avatar placeholderInitials="ME" rounded />
          </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
          <div className="flex-shrink-0 text-center">
            <Avatar alt="soroush" img={soroush} rounded size="md" />
            <Typography variant="small" className="text-green-400 text-xs mt-1">
              online
            </Typography>
          </div>
          <div>
            <div className="bg-blue-600 text-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-sm">
                Thanks for your payment, I got the money and Released the
                crypto. Thanks
              </p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              2 min ago
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-center gap-2 mt-5 rounded-[99px] border border-blue-gray-500/20 bg-gray-500/10 p-1">
        <Textarea
          rows={1}
          placeholder="Your Message"
          className="min-h-full !border-0 focus:border-transparent text-gray-300"
          containerProps={{
            className: "grid h-full",
          }}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <div>
          <IconButton variant="text" className="rounded-full chatsend_btn">
            <MdSend size="25px" className="text-gray-500" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
