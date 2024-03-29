import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/Profile_5.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img className={styles.coverImg} alt="Vinesh Nair" src={profilepic}/>
            </div>
            <Box className={styles.name}>
                <h2>Vinesh Nair</h2>
            </Box>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            strings: ["Frontend Web Developer"],
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.name}>
                <p>Front End Web Developer with a passion for development and excited to be at the deployment phase of my 
                    career as a web developer. Proficient in Frontend technology as well as in backend technology.
                </p>
            </Box>
        </Container>
        </>
    )
}

export {Portfolio}
