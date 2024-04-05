import { Link } from "react-router-dom";
import "../style/hiddenAdminButton.scss";

interface HiddenAdminButtonProps {
  pos?: "absolute" | "relative" | "fixed" | "static" | "sticky";
}

export function HiddenAdminButton(props: HiddenAdminButtonProps) {
  const pos = props.pos || "absolute";
  return (
    <Link
      to="/login"
      className="hidden-admin-link"
      style={{
        position: pos,
      }}
    ></Link>
  );
}
