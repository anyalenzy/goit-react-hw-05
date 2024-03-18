import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";
export default function Loader() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#7e847f"
      ariaLabel="infinity-spin-loading"
    />
  );
}
