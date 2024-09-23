
import { Separator } from 'src/lib/separator'

export const Skills: React.FC = () =>
    <>
        <h1>Skills</h1>
        {/* <div style={{ borderLeft: 'white solid', paddingLeft: 16 }} >
            <p>
                I am available for a wide range of work related to digital technology and art.
                Taking a browse through <a href='https://edt.nz'>my portfolio</a> will give you an idea of where my interests lie and what I can create with passion.
            </p>
            <p>
                I am always developing my skills and learning new things to further what I'm capable of. I'm a fast learner especially when prototyping and with a goal in mind.
            </p>
        </div> */}

        {/* <Separator /> */}

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Rendering & Interaction</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>3D Materials, Modelling & Maths</li>
                    <li>Live data & interaction</li>
                    <li>Projection hardware experience</li>
                    <li>Passion for experimental techniques</li>
                </ul>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Software Development</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>Linux management (systemd, nixos, Raspberry Pi)</li>
                    <li>Backend (AWS, Rust in lambda, Postgres)</li>
                    <li>Apps (Flutter, Android, Web)</li>
                </ul>
            </div>

            < div style={{ width: '30%', minWidth: 200 }} >
                <h3>Team management</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>Leading multiple projects</li>
                    <li>Balancing priorites between clients, developers, deadlines and quality</li>
                    <li>Knowing when to present a learning opportunity and when to step in</li>
                </ul>
            </div>
        </div>

        <h1>Experience</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2020</i> Smart Access</h3>
                Map app
                <ul>
                    <li>Geospatial data and processing</li>
                    <li>Python visualisation and data proessing</li>
                    <li>Reproducible data pipeline</li>
                    <li>Team management</li>
                </ul>
            </div>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2020</i> My Life My Voice</h3>
                Peer support communication app
                <ul>
                    <li>Flutter</li>
                    <li>Accessible apps</li>
                </ul>
            </div>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2020</i> TASKA Prosthetics</h3>
                Mobile Developer for hand management app
                <ul>
                    <li>Working in a larger team</li>
                    <li>Multi platform development</li>
                </ul>
            </div>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2019</i> Victoria University</h3>
                Alexa App and Class Tutor
                <ul>
                    <li>Developing for differently abled people</li>
                    <li>Teaching</li>
                </ul>
            </div>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2019</i> Savesign</h3>
                Display software for Raspberry Pi
                <ul>
                    <li>Java</li>
                    <li>Linux Configuration</li>
                </ul>
            </div>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2017</i> GeneralApps</h3>
                Android app development
                <ul>
                    <li>Client negotiation</li>
                    <li>App development</li>
                </ul>
            </div>
            {/* <div style={{ width: '30%', minWidth: 200 }} >
                <h3><i>2016</i> Jade Software</h3>
                Internship
                <ul>
                    <li>Web development</li>
                    <li>Java</li>
                    <li>Working in a team</li>
                </ul>
            </div> */}
        </div>

        <h1>Education</h1>


        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ width: '40%', minWidth: 300 }} >
                <h3><i>2019</i> Victoria University of Wellington</h3>
                <h4>
                    Bachelor of Design Innovation (Media Design)
                </h4>
                Deans Award
            </div>
            <div style={{ width: '40%', minWidth: 300 }} >
                <h3><i>2016</i> Canterbury University</h3>
                <h4>
                    Bachelor of Science (Computer Science)
                </h4>
                Incomplete
            </div>
        </div>


        {/* <h3>Rendering & Interaction</h3>
        As shown in my visual work, I love leveraging the potential of technology to create art that reacts to its environment.
        <ul>
            <li>3D Materials, Modelling & Maths</li>
            <li>Game & Interactive logic</li>
            <li>Texture processing</li>
            <li>Data visualization & experimentation</li>
            <li>Touchdesigner, Blender, Unity</li>
            <li>Performance & render optimisation</li>
        </ul>

        <h3>Linux & Embedded</h3>
        I have general linux systems knowledge from my use of raspberry pi and feel most at home on a linux system
        <ul>
            <li>IoT / Distributed systems</li>
            <li>Raspberry pi</li>
            <li>systemd</li>
            <li>Rust (Low-level, safe, performant programming)</li>
            <li>Arduino</li>
            <li>Web servers</li>
            <li>Maintainance</li>
        </ul>

        <h3>Misc</h3>
        I have a range of skills that allow unique solutions with technology. If something isn't listed here,
        <ul>
            <li>App development (Android, kotlin)</li>
            <li>Web development (React, nextjs, javascript, WebGL)</li>
            <li>Google apps script (Automating google forms, sheets, docs)</li>
            <li>AWS & web servers</li>
        </ul> */}
    </>