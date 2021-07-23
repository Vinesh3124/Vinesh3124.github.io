import React from 'react'
import styles from "./About.module.css"
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import {imgData} from "../Data/Techlogo"

const About = () => {
    return (
        <Container id="about" maxWidth="xl" className={styles.home}>
            <Box className={styles.mainBox}>
                <Box className={styles.leftBox}>
                    <Box className={styles.infoBox}>
                        <h2>About MySelf</h2>
                        <p>
                            <strong>Hi,</strong> My name is <strong>Vinesh Nair.</strong> I
                            am a <strong>Full Stack Developer</strong> recently graduated from <strong>Masai school</strong> and
                            looking for a career as a <strong>Full Stack Developer</strong>. 
                            I am from <strong>Pune, Maharashtra</strong> and I've completed my <strong>Bachelor's in Computer Application</strong> from <strong>Pune University.</strong> I've 
                            3+ years of working experience in RPO and BPO's.
                        </p>
                        <p>
                            I am interested in creating well designed or pixel-perfect Frontend with functionality and take on new 
                            challenges where I can learn more about web technologies.
                        </p>
                    </Box>
                </Box>
                <Box className={styles.rightBox}>
                    {
                        imgData.map(el => (
                            <Box className={styles.iconBox}>
                                <img className={styles.img} src={el} alt="HTML"/>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Container>
    )
}

export {About}
