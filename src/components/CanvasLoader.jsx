import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          marginTop: 40,
          color: "#f1f1f1",
          fontWeight: 800,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : null}
      </p>
    </Html>
  );
};

export default CanvasLoader;
