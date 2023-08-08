import { Button, Typography } from "@material-tailwind/react";
import checkmark from "../assets/icons/png/complete.png";
import { Link } from "react-router-dom";

function PaymentSuccessful() {
  return (
    <center className="container max-w-3xl mx-auto centerize">
      <img width="70" src={checkmark} alt="nature image" />
      <Typography variant="h3" className="text-white font-normal text-lg mt-3">
        Transaction Submitted
      </Typography>
      <Typography
        variant="paragraph"
        className="text-gray-400 text-sm mt-4 w-96"
      >
        Your Transaction has been submitted successfully. It will be completed
        after 2 - 5 minutes and the crypto will be deposited in your connected
        wallet
      </Typography>
      <Link to={`/`}>
        <Button className="mt-5 underline font-normal" variant="text">
          Back to dashboard
        </Button>
      </Link>
    </center>
  );
}

export default PaymentSuccessful;
