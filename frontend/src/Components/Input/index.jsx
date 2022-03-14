import { motion } from "framer-motion";
import "./style.css";

const Input = ({ onChange, label, ...rest }) => {
  return (
    <motion.div>
      <label>{label}</label>
      <input onChange={onChange} className="input-main" {...rest} />
    </motion.div>
  );
};

export default Input;
