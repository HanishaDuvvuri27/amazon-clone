export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#131921",
      color: "white",
      padding: "10px 16px",
      borderRadius: "6px",
      zIndex: 999
    }}>
      {message}
    </div>
  );
}
