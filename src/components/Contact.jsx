import styles from "../styles/Contact.module.css";
import { TextField } from "@material-ui/core";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your email",
            showConfirmButton: false,
            timer: 2500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "There was an error submitting your message",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
          <Fade right>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <TextField
                  required
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="normal"
                  variant="filled"
                  name="name"
                  margin="dense"
                  className={styles.formfield}
                />
                <TextField
                  required
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  size="normal"
                  variant="filled"
                  name="email"
                  margin="dense"
                  className={styles.formfield}
                />
                <TextField
                  required
                  id="outlined-text-input"
                  label="Message"
                  type="textarea"
                  size="normal"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  margin="dense"
                  className={styles.formfield}
                />
                <button type="submit" value="Send" className={styles.submitBtn}>
                  <span component="span">Send me a message</span>
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
}
export default Contact;
