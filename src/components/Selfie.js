import photo from '../assets/photo.jpeg';

function Selfie() {

    const styles= {

        div: {
            display: 'flex',
            flexDirection: 'column',
            width: 'auto',
            alignItems: 'center',
            marginTop: '92px',
            marginLeft: '160px',
        },
        image: {
            borderRadius: '50%',
            height: '256px',
            width: '256px',
            display: 'block',
        },
        h2: {
            margin: '0',
            marginTop: '16px',
            fontSize: '44px',
        },
        p: {
            margin: '0',
            marginTop: '16px',
            fontSize: '16px',
        }
    }

    return <div style={styles.div}>
        <img style={styles.image} src={photo} alt='Selfie Ignacio'/>
        <h2 style={styles.h2}>Ignacio Diaz</h2>
        <p style={styles.p}>Full-Stack Web Developer</p>
    </div>
}

export default Selfie;