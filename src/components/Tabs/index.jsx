import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import { IoMdSettings } from "react-icons/io";
import Converter from "../converter";
import BestSellers from "../bestsellerlists";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";

function Tabs() {
  const [selectedTab, setSelectedTab] = useTabs([
    "p2p",
    "spot",
    "copyTrading",
    "futures",
  ]);

  return (
    <>
      <div className="container max-w-3xl mx-auto py-5">
        <div className="flex justify-between">
          <div>
            <nav className="flex justify-between border border-gray-900 rounded px-0">
              <TabSelector
                isActive={selectedTab === "spot"}
                onClick={() => setSelectedTab("spot")}
              >
                Spot
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "copyTrading"}
                onClick={() => setSelectedTab("copyTrading")}
              >
                Copy Trading
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "futures"}
                onClick={() => setSelectedTab("futures")}
              >
                Futures
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "p2p"}
                onClick={() => setSelectedTab("p2p")}
              >
                P2P
              </TabSelector>
            </nav>
          </div>
          <div>
            <Menu>
              <MenuHandler>
                <IconButton
                  variant="outlined"
                  className="rounded-full setting_btn"
                >
                  <IoMdSettings
                    className="text-gray-600 float-right"
                    size="25px"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="mt-4">
          <TabPanel hidden={selectedTab !== "spot"}>Spot</TabPanel>
          <TabPanel hidden={selectedTab !== "copyTrading"}>
            Copy Trading
          </TabPanel>
          <TabPanel hidden={selectedTab !== "futures"}>Futures</TabPanel>
          <TabPanel hidden={selectedTab !== "p2p"}>
            <Converter />
            <BestSellers />
          </TabPanel>
        </div>
      </div>
    </>
  );
}

export default Tabs;
