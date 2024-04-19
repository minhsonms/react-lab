import { ProgressSpinner } from "primereact/progressspinner";

const LoadingComponent = () => {  return (
    <div className="overlay">
      <ProgressSpinner />
    </div>
  );
};

export default LoadingComponent;
