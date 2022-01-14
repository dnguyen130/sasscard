import { useTheme } from "../../utils/provider";

const Card = ({

}) => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className={`card-${theme}`}>
      <h1>Sass card</h1>
      <img src="https://placekitten.com/150/150" />
      <p>This is a card made with Sass</p>
    </div>
  )

}

export default Card;