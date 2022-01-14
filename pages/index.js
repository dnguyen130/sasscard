import Card from "../components/card";
import Button from "../components/button";
import { useTheme } from "../utils/provider";

export default function SassPage() {

  const { setTheme } = useTheme();

  return (
    <div>
      <Card />
      <Button buttonText="Light Mode" onClick={()=>setTheme('light')} />
      <Button buttonText="Dark Mode" onClick={()=>setTheme('dark')} />
    </div>
  )
}
