import styles from "../styles/Resume.module.css";
import Link from "next/link";
import { FcNews, FcDocument } from "react-icons/fc";
import { IoDocumentText } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { makeStyles } from "@material-ui/core/styles";

function Resume() {
  const ResumePDF = "/laurapaccanariCVEng.pdf";

  const actions = [
    { icon: <IoDocumentText size={40} />, name: "My Resume", url: ResumePDF },
    {
      icon: <FaLinkedin size={40} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/laura-paccanari-63b24574/?originalSubdomain=ca",
    },
    {
      icon: <FaGithub size={40} />,
      name: "Github",
      url: "https://github.com/Laupacc",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    iconColor: {
      color: "#3765C0",
      width: "3rem",
      height: "3rem",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className={styles.container}>
        <Box>
          <SpeedDial
            className={styles.speedDial}
            ariaLabel="SpeedDial"
            direction="up"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                className={classes.iconColor}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="inherit"
              />
            ))}
          </SpeedDial>
        </Box>

        {/* <Link
          className={styles.link}
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <FcNews className={styles.icon} />
          <span className={styles.text}>My Resume</span>
        </Link>
        <Link
          className={styles.linkedin}
          href="https://www.linkedin.com/in/laura-paccanari-63b24574/?originalSubdomain=ca"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <FaLinkedin className={styles.icon} />
          <span className={styles.text}>LinkedIn</span>
        </Link>
        <Link
          className={styles.github}
          href="https://github.com/Laupacc"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <FaGithub className={styles.icon} />
          <span className={styles.text}>GitHub</span>
        </Link> */}
      </div>
    </>
  );
}

export default Resume;
