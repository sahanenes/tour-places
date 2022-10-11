import "./main.scss";
import { data } from "../../helper/data";
import Card from "./Card";
const Main = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
export default Main;
