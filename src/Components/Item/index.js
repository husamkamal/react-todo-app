import Button from "../Button";
import "./style.css";
const Item = (props) => {
  const { item, deleteItem, editItem } = props;
  const items = item.map((item) => {
    return (
      <li className="listItem flex" key={item.id}>
        <span>{item.title}♪</span>
        <div>
          <Button onClick={() => deleteItem(item.id)}>Delete</Button>
          <Button onClick={() => editItem(item.id)}>Edit</Button>
        </div>
      </li>
    );
  });
  return <ul className="list flex">{items}</ul>;
};

export default Item;
