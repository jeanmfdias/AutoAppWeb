export function CarItem({ car }) {
  return (
    <tr>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.factory_year}/{car.model_year}</td>
    </tr>
  );
}