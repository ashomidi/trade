import { useRef } from "react";
import { IoCopy } from "react-icons/io5";
import { ListItem, ListItemSuffix } from "@material-tailwind/react";
import { Tooltip } from "flowbite-react";
import { Toaster, toast } from "react-hot-toast";

const CopyableListItem = ({ label, data }) => {
  const listItemSuffixRef = useRef(null);

  // Function to copy the text to clipboard
  const copyToClipboard = () => {
    const textToCopy = listItemSuffixRef.current.textContent.trim();
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Copied", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <ListItem className="hover:bg-transparent focus:bg-transparent active:bg-transparent py-1">
        <span className="text-gray-500 text-sm">{label}</span>
        <ListItemSuffix className="flex cursor-pointer">
          <span
            ref={listItemSuffixRef}
            className="flex items-center text-gray-300 font-medium text-lg"
          >
            {data} &nbsp;
          </span>
          <Tooltip content="Copy" placement="bottom-start">
            <IoCopy
              onClick={copyToClipboard}
              size="20px"
              className="text-gray-500"
            />
          </Tooltip>
        </ListItemSuffix>
      </ListItem>
    </>
  );
};

export default CopyableListItem;
