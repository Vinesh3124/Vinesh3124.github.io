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

    const [email, setEmail] = React.useState(false)
    const [load, setLoad] = React.useState(false)
    const [err, setErr] = React.useState(false)

    const newTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            setEmail(true);
          }, (error) => {
            setErr(true);
        });
        e.target.reset()
    }

    return (
        <Container id="contact" maxWidth="xl" className={styles.main}>
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
                    <Button                     
                        variant="contained"
                        color="secondary"
                        startIcon={< EmailIcon/>}
                    >
                        <a href="mailto:vinesh.nair31@gmail.com" className={styles.dTag} download>
                            Email
                        </a>
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={< FileCopyIcon/>}
                    >
                        <a href={Resume} className={styles.dTag} download>
                            My Resume  
                        </a>      
                    </Button>             
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
                            <button className={styles.submitButton}>{!email && load ? "Sending..." : "Send"}</button>
                        </Box>
                    </form>
                    {email && <p className={styles.submitBox}>Email sent successfully !!!</p>}
                    {err && <p className={styles.submitBox}>Something went wrong, Please try again.</p>}
                </Box>
            </Box>
        </Container>
    )
}

export {Contact}