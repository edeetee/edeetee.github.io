import { Separator } from 'src/lib/separator'

export const Skills: React.FC = () =>
    <>

        <a style={{ textAlign: 'end', display: 'block' }} className='not-print' href='cv.pdf'>Download PDF</a>

        <h1>Skills</h1>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Software Development</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>Backend (AWS, Rust in lambda, Postgres)</li>
                    <li>Apps (Flutter, Android, iOS, Web)</li>
                    <li>Linux (systemd, nixos, Raspberry Pi)</li>
                    <li>C#, Go, Dart, Javascript, Kotlin, Python</li>
                </ul>
            </div>

            < div style={{ width: '30%', minWidth: 200 }} >
                <h3>Team management</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>Leading multiple projects</li>
                    <li>Issues & project management</li>
                    <li>Balancing priorities between clients, developers, deadlines and quality</li>
                    <li>Knowing when to present a learning opportunity and when to step in</li>
                </ul>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Rendering & Interaction</h3>
                <ul style={{ paddingLeft: 16 }}>
                    <li>3D Materials, Modelling & Maths</li>
                    <li>Live data & interaction</li>
                    <li>Projection hardware experience</li>
                    <li>Passion for experimental techniques</li>
                </ul>
            </div>
        </div>

        <h1>Experience</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Smart Access<i style={{ fontSize: 12, display: 'block' }}>Mar 2023 - Today</i></h3>
                <i>Accessibility mapping platform</i>
                <li>Geospatial data visualisation and processing</li>
                <li>Accessible flutter apps</li>
                <li>Team management</li>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>My Life My Voice<i style={{ fontSize: 12, display: 'block' }}>Feb 2023 - Today</i></h3>
                <i>Peer support communication platform</i>
                <li>Live connection flutter app</li>
                <li>Accessible apps</li>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>TASKA Prosthetics<i style={{ fontSize: 12, display: 'block' }}>Nov 2019 - Nov 2020</i></h3>
                <i>Mobile Developer for hand management app</i>
                <li>Integrating with a larger team</li>
                <li>Multi platform development</li>
                <li>Legacy software migration</li>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Victoria University<i style={{ fontSize: 12, display: 'block' }}>Nov 2018 - Oct 2019</i></h3>
                <i>Alexa App and Class Tutor</i>
                <li>Accessibility technology</li>
                <li>Alternate UX systems</li>
                <li>Supportive teaching</li>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>Savesign<i style={{ fontSize: 12, display: 'block' }}>Nov 2017 - Dec 2019</i></h3>
                <i>Display CMS for Raspberry Pi</i>
                <li>Java</li>
                <li>Linux Configuration</li>
            </div>

            <div style={{ width: '30%', minWidth: 200 }} >
                <h3>GeneralApps<i style={{ fontSize: 12, display: 'block' }}>Apr 2016 - Jan 2017</i></h3>
                <i>Android app development</i>
                <li>Client negotiation</li>
                <li>App development</li>
                <li>Live audio programming</li>
            </div>
        </div>

        <h1>Education</h1>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ width: '40%', minWidth: 300 }} >
                <h3>Victoria University of Wellington <i style={{ fontSize: 14, display: 'block' }}>2017 - 2019</i></h3>
                <h4>
                    Bachelor of Design Innovation (Media Design)
                </h4>
                <li>Deans Award</li>
                <li>7.32 GPA</li>
                <a href='https://edt.nz/transcript.pdf'>Download Transcript</a> <br />
            </div>
            <div style={{ width: '40%', minWidth: 300 }} >
                <h3>Canterbury University <i style={{ fontSize: 14, display: 'block' }}>2014 - 2016</i></h3>
                <h4>
                    Bachelor of Science (Computer Science) [Incomplete]
                </h4>
                First year completed with average of A-<br />
                Dropped out second year to pursue applied skills
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