// import { FormEvent, useState } from "react";
// import Button from "./components/ui/Button";
import { FieldValues, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit } from "./components/reusableForm";
import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";

function App() {
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("clicked");
  // };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      {/* <div className=" h-screen w-full flex justify-center items-center">
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
      </div> */}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input className="" type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
