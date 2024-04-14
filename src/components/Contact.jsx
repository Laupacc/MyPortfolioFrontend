import styles from "../styles/Contact.module.css";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import Fade from "react-reveal/Fade";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bezxog",
        "template_jmsk313",
        form.current,
        "knwNTK4YU4K30HYMd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };
  return (
    <div>
      <main className={styles.main}>
        <div>
          <Fade bottom>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <TextField
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
                <Box mt={4}>
                  <Button
                    onClick={() => {
                      alert("clicked");
                    }}
                    type="submit"
                    value="Send"
                    variant="contained"
                    color="white"
                    endIcon={<SendIcon />}
                    className={styles.submitBtn}
                  >
                    <span component="span">Send me a message</span>
                  </Button>
                </Box>
              </form>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
}
export default Contact;
