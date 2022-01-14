import { useTheme } from "../../utils/provider";

const Button = ({

  buttonText = "default",
  onClick = ()=>{}

}) => {

  const { theme } = useTheme();

  return (
    <button className={`button-${theme}`} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button;