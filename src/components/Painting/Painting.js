import defaultImg from '../../default.jpg';
export default function Painting({ item }) {
  const { url = defaultImg, title, price, author, quantity } = item;
  return (
    <div>
      <img src={url} alt={title} width="640" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>
        Author: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}
