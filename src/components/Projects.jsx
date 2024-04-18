import styles from "../styles/Projects.module.css";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import projectsData from "../data/projectsData.json";

function Projects() {
  return (
    <>
      <p className={styles.scrollText}>Scroll ⇨ for more projects</p>
      <main className={styles.main}>
        <Fade right>
          <div className={styles.cardContainer}>
            {projectsData.map((project) => (
              <Card
                key={project.id}
                sx={(theme) => ({
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  width: 400,
                  height: 300,
                  marginLeft: theme.spacing(6),
                  marginRight: theme.spacing(6),
                  marginBottom: theme.spacing(4),
                  marginTop: theme.spacing(4),
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                })}
              >
                <CardMedia
                  image={project.imageUrl}
                  sx={(theme) => ({
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: theme.spacing(-3),
                    height: 0,
                    paddingBottom: "48%",
                    borderRadius: theme.spacing(2),
                    position: "relative",
                    [theme.breakpoints.up("md")]: {
                      width: "100%",
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      transform: "translateX(-8px)",
                    },
                  })}
                />
                <CardContent>
                  <Box>
                    <Box
                      component="h2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: "0.35em",
                      }}
                    >
                      {project.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "0.8rem",
                        marginBottom: "0.35em",
                      }}
                    >
                      {project.subtitle}
                    </Box>
                    <Button
                      href={project.demoLink}
                      target="_blank"
                      sx={{
                        backgroundImage:
                          "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                        boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
                        borderRadius: 100,
                        paddingLeft: 3,
                        paddingRight: 3,
                        color: "#ffffff",
                      }}
                    >
                      Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </Fade>
      </main>
    </>
  );
}

export default Projects;
