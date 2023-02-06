import styles from "@/styles/addform.module.scss";
import pluscircle from "@/assets/plus-circle.svg";

export const Form: React.FC<{ inputRef: React.RefObject<HTMLInputElement>; CreateTodo: React.FormEventHandler }> = (props) => {
  return (
    <section className="container">
      <form onSubmit={props.CreateTodo} className={`${styles.form}`}>
        <input type="text" placeholder="Add your new todo" ref={props.inputRef} />
        <button type="submit">
          Create <img src={pluscircle} alt="pluscircle" />
        </button>
      </form>
    </section>
  );
};
