import "./Modal.scss";

export const Modal = ({ children, isOpen }) => {
  return (
    <section className={`my-modal ${isOpen && "my-modal--show"}`}>
      <div className="my-modal__dialog">
        <div className="my-modal__content">{children}</div>
      </div>
    </section>
  );
};
