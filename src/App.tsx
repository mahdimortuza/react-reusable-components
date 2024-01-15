import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <Container>
      <div className=" h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>open modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>this is a modal header</h1>
            <Modal.CloseButton />
          </Modal.Header>
          <form onClick={handleSubmit}>
            <input type="text" />
            <input type="submit" />
          </form>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
