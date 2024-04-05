import { useNavigate } from "react-router-dom";
import { LogInForm } from "./logInForm";

export function AdminPageValidation() {
  const navigate = useNavigate();

  function handleLogIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    if (password.value === "admin") {
      navigate("/admin");
      console.log("Logged in");
    } else {
      alert("Wrong password");
    }
  }
  return (
    <>
      <LogInForm handleLogIn={handleLogIn} />
    </>
  );
}
