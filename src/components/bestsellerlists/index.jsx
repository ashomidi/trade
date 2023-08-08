import { Card } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import BEST_SELLERS from "../../dummy/bestSellers";
import Modal from "./modal";
import { Link } from "react-router-dom";

function BestSellers() {
  const handleData = () => {
    return;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-gray-500 font-medium">Best USDT sellers</h2>
        <Modal sendData={handleData} />
      </div>
      <div className="mt-4">
        {BEST_SELLERS.map((seller, index) => (
          <Card className="card_bg border-0 mb-4 shadow-none" key={index}>
            <div className="flex justify-between">
              <div>
                <div className="flex items-center space-x-4">
                  <div
                    className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full"
                    style={{ backgroundColor: seller.color }}
                  >
                    <span className="font-medium text-gray-100">
                      {seller.nickName}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-gray-100 font-medium">
                      {seller.username}
                    </h3>
                    <div className="text-xs text-gray-600 mt-0">
                      Competition {seller.competition}%
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`form`}>
                  <Button className="buy_btn py-2 shadow-none hover:shadow-none">
                    Buy
                  </Button>
                </Link>
              </div>
            </div>
            <span className="mt-1">
              <small className="text-gray-700">Price</small>
              <small className="text-gray-100 ml-2 text-lg">
                ${seller.price}
              </small>
            </span>
            <span>
              <small className="text-gray-700">Qty</small>
              <small className="text-gray-100 ml-2 text-xs font-medium">
                {seller.qty} BUSD
              </small>

              <small className="text-gray-700 ml-7">Limit:</small>
              <small className="text-gray-700 ml-2 text-xs">
                {seller.limit}
              </small>
            </span>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BestSellers;
