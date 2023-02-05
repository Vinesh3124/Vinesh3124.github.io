import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./Experience.module.css";
import experienceData from "../Data/ExperienceData.json";
import CircleIcon from '@material-ui/icons/ArrowRight';

const Experience = () => {
  return (
    <Container id="experience" maxWidth="xl" className={styles.main}>
      <Box className={styles.title}>
        <span>Experience</span>
      </Box>
      <Box className={styles.listContainer}>
        {experienceData.map((el) => (
          <Box className={styles.expCard}>
            <Box className={styles.logoImgBox}>
              <img className={styles.img} src={el.logo} alt="nobroker logo" />
            </Box>
            <Box className={styles.infoBox}>
              <Box className={styles.infoBoxTitle}>
                <h2>{el.name}</h2>
                <h4>{el.designation}</h4>
                <h4>{el.exp_years}</h4>
                <h5>{el.address}</h5>
              </Box>
              <Box>
                {
                    el.description.map((el) => (
                        <Box style={{display: 'flex'}}><CircleIcon /><Box>{el}</Box></Box>
                    ))    
                }
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export { Experience };
