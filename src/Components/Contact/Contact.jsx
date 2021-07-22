import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import styles from "../Contact/Contact.module.css";
import emailjs from 'emailjs-com';
import Resume from "../Data/Vinesh's Resume.pdf"
import {USER_ID, TEMPLATE_ID, SERVICE_ID} from "./emailkey"

const Contact = () => {

    const newTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
              alert("Message sent. Thank you :)");
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <Container maxWidth="xl" className={styles.main}>
            <Box className={styles.title}>
                <span>Contact Me</span>
            </Box>
            <Box className={styles.infoContainer}>
                <Box className={styles.linksBox}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={< LinkedInIcon/>}
                        onClick={()=>newTab("https://www.linkedin.com/in/vinesh-nair3124/")}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={< GitHubIcon/>}
                        onClick={()=>newTab("https://github.com/Vinesh3124")}
                    >
                        GitHub
                    </Button>   
                    <a href="mailto:vinesh.nair31@gmail.com" className={styles.dTag} download>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={< EmailIcon/>}
                        >
                            Gmail
                        </Button> 
                    </a>
                    <a href={Resume} className={styles.dTag} download>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={< FileCopyIcon/>}
                        >
                            Download My Resume
                        </Button>  
                    </a>               
                </Box>
                <Box className={styles.inputBox}>
                    <form onSubmit={handleSubmit}>
                        <Box className={styles.nameBox}>
                            <TextField name="senderName" required={true} id="outlined-basic" label="Name" variant="outlined" fullWidth={true}/>
                        </Box>
                        <Box className={styles.emailBox}>
                            <TextField name="email" required={true} className={styles.inputColor} id="outlined-basic" label="Email" variant="outlined" fullWidth={true}/>
                        </Box>
                        <Box className={styles.descBox}>
                            <TextareaAutosize name="desc" required={true} className={styles.descrip} label="desc" aria-label="minimum height" minRows={6} placeholder="Description" fullWidth={true}/>
                        </Box>
                        <Box className={styles.submitBox}>
                            <input type="submit" value="Send"/>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    )
}

export {Contact}