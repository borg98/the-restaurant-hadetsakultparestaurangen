import "../style/checkDateInput.scss";

interface CheckDateInputsProps {
  submitHandler: (e: React.FormEvent) => void;
}

export function CheckDateInputs(props: CheckDateInputsProps) {
  const date = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="form-container">
        <form action="none" className="form-container__form">
          <input
            className="form-container__form__input"
            id="bookingDate"
            type="date"
            defaultValue={date}
          />
          <input
            className="form-container__form__input"
            id="nrOfPeople"
            type="number"
            min={1}
            defaultValue={1}
          />
          <button
            className="form-container__form__button"
            onClick={props.submitHandler}
          >
            Check Date
          </button>
        </form>
      </div>
    </>
  );
}
