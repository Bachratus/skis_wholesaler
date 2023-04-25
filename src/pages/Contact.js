import classes from "./Contact.module.css";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Textarea from "../components/UI/Textarea";

const ContactPage = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={classes.container}>
        <section className={classes.contact}>
          <h1>contact us</h1>
          <section className={classes.open_hours}>
            <h2>Hours open</h2>
            <ul>
              <li>Monday 8:00 - 16:00</li>
              <li>Tuesday 8:00 - 16:00</li>
              <li>Wednesday 8:00 - 16:00</li>
              <li>Thursday 8:00 - 16:00</li>
              <li>Friday 8:00 - 16:00</li>
              <li>Saturday 9:00 - 13:00</li>
              <li>Sunday closed</li>
            </ul>
          </section>
          <section className={classes.data}>
            <h2>Company data</h2>
            <span>SKIS POLAND S.A.</span>
            <span>ul. Magnolii</span>
            <span>44 - 200 Racibórz</span>
            <span>info@skrzynka.skispoland.pl</span>
            <h3>ING Bank Śląski</h3>
            <span>Account number: 10 1010 1010 1010 1010 1010 1010</span>
          </section>
        </section>
        <section className={classes.ask}>
          <h1>...or just ask us</h1>
          <form onSubmit={submitHandler}>
            <Input
              title="Name"
              isInputValid={true}
              changeHandler={() => {}}
              enteredValue=""
              blurHandler={() => {}}
              warningText="Please enter valid name!"
            />
            <Input
              title="Surname"
              isInputValid={true}
              changeHandler={() => {}}
              enteredValue=""
              blurHandler={() => {}}
              warningText="Please enter valid surname!"
            />
            <Input
              title="Email"
              isInputValid={true}
              changeHandler={() => {}}
              enteredValue=""
              blurHandler={() => {}}
              warningText="Please enter valid email!"
            />
            <Textarea 
              rows={5}
              title="Question"
              isAreaValid={true}
              changeHandler={() => {}}
              enteredValue=""
              blurHandler={() => {}}
              warningText="Please enter valid content!"/>
            {/*<textarea type="text" rows='5'/>*/}
            <div className={classes.actions}>
              <Button type="submit" isValid={false} text="Send" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default ContactPage;
