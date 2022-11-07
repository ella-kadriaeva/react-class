import Painting from './Painting';

export default function PaintingsList({ items }) {
  return (
    <div>
      {items.map(item => (
        <Painting key={item.id} item={item} />
      ))}
    </div>
  );
}
