function Preview(){

    const styles= {
        div: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            alignItems: 'center',
            marginTop: '80px',
            marginRight: '32px',
        },
        h2: {
            margin: '16px 0',
            fontSize: '36px',
            display: 'inline-block',
        },
        p: {
            margin: '0',
            textAlign: 'center',
            fontSize: '16px',
        },
        p2: {
            margin: '0',
            fontSize: '16px',
            width: '150px',
            float: 'left',
        },
        pDiv: {
            width: '400px',
        }
    }

    return <div style={styles.div}>
        <h2 style={styles.h2}>Career Goals</h2>
        <p style={styles.p}>As Full-Stack Developer. I would like to grow in tech industry, building from new websites, to full applications running in the browser.
            As well as that, looking for new challenges, experiences and coworkers who can teach me all little pieces I still need to learn.
        </p>
        <h2 style={styles.h2}>Information</h2>
        <div style={styles.pDiv}>
            <div><span style={styles.p2}>Date of birth:</span><span> 12 January 1999</span></div>
            <div><span style={styles.p2}>Phone:</span><span>+61448712130</span></div>
            <div><span style={styles.p2}>Github:</span><span><b>imIgnacio</b></span></div>
            <div><span style={styles.p2}>Email:</span><span><b>ignacio.diaz1299@gmail.com</b></span></div>
        </div>
    </div>
}

export default Preview;