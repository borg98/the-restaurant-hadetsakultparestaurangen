import "../style/logInForm.scss";

interface LogInFormProps {
  handleLogIn: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function LogInForm(props: LogInFormProps) {
  return (
    <>
      <div className="form-wrapper">
        <form
          className="form-wrapper__form"
          action="submit"
          onSubmit={props.handleLogIn}
        >
          <label className="form-wrapper__form__label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-wrapper__form__input"
            type="password"
            id="password"
            name="password"
            required
          />
          <button className="form-wrapper__form__button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
