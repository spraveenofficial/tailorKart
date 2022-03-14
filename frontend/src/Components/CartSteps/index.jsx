import { useState } from "react";
import Carts from "../../Pages/Cart";
const Steps = {
  1: Carts,
  //   2: Address,
  //   3: Payment,
  //   4: Review,
  //   5: Invoice,
};

const Cart = () => {
  const [step, setStep] = useState(1);
  const Step = Steps[step];
  return <Step onNext={() => setStep((prev) => prev + 1)} />;
};

export default Cart;
