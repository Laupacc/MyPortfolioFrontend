import styles from "../styles/Projects.module.css";
import { Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

// Array of objects representing information for each card
const projectsData = [
  {
    id: 1,
    title: "What is Git ?",
    subtitle:
      "Git is a distributed version control system. Every dev has a working copy of the code and...",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png",
    demoLink: "https://example.com/demo1",
  },
  {
    id: 1,
    title: "What is Git ?",
    subtitle:
      "Git is a distributed version control system. Every dev has a working copy of the code and...",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png",
    demoLink: "https://example.com/demo1",
  },
  {
    id: 1,
    title: "What is Git ?",
    subtitle:
      "Git is a distributed version control system. Every dev has a working copy of the code and...",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png",
    demoLink: "https://example.com/demo1",
  },
];

function Projects() {
  return (
    <div>
      <main className={styles.main}>
        {projectsData.map((project) => (
          <Fade bottom key={project.id}>
            <Card className={styles.card}>
              <CardMedia
                className={styles.cardMedia}
                image={project.imageUrl}
              />
              <CardContent>
                <div className={styles.info}>
                  <div className={styles.title}>{project.title}</div>
                  <div className={styles.subtitle}>{project.subtitle}</div>
                </div>
                <Button
                  className={styles.button}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </main>
    </div>
  );
}
export default Projects;
