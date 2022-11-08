import defaultImg from '../../default.jpg';

export default function Painting({ value, item, onIncrement, onDecrement }) {
  const { url = defaultImg, title, price, author } = item;
  return (
    <div>
      <img src={url} alt={title} width="380" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>
        Author: <a href={author.url}>{author.tag}</a>
      </p>
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <span>{value}</span>
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
}
