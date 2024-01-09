export default function Alert({ message, opacityValue }) {
  return (
    <div className="alert" style={{ opacity: opacityValue }}>
      <p>{message}</p>
    </div>
  );
}
