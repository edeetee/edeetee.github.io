import { Separator } from "src/lib/separator"
import { EmploymentItem } from "./EmploymentItem"
import cv from '@public/cv.pdf'
import resume from '@public/resume.pdf'

export const History = () =>
    <>
        <p style={{ fontSize: 32, fontStyle: 'italic' }}>My work and education history.</p>
        <p>
            View <a href={resume}>my current Resume here.</a>
        </p>

        <Separator />

        <h2>Education</h2>
        <h3>BSc Computer Science <i>(incomplete)</i></h3>
        <h4>2014-2016</h4>
        Initially started a Computer Science degree at Canterbury University with a minor in Philosophy, then transferred to
        Victoria University. I did this as I was no longer interested in pure computer science as opposed to using it as a tool. I did however learn coding foundations and would not be where I am today without my time here.
        <h3>BDI Media Design</h3>
        <h4>Victoria University of Wellington</h4>
        <h4>2017</h4>
        <ul>
            <li><b>Deans Award</b></li>
            <li>Design as Inquiry: A</li>
            <li>Creative Coding II: A+</li>
            <li>Mobile Media: A</li>
            <li>Wearable Technology: A-</li>
            <li>Creative Coding III: A-</li>
        </ul>
        <h4>2018</h4>
        <ul>
            <li>Advanced Comp Game Design: B+</li>
            <li>Interaction Design: B+</li>
            <li>Creative Artificial Intelligence: A-</li>
        </ul>
        <h4>2019</h4>
        <ul>
            <li>Independent Study: A</li>
        </ul>

        <Separator />

        <h2>Employment</h2>

        <EmploymentItem
            company="Taska Prosthetics"
            title="Mobile Developer"
            date="November 2019 — November 2020"
        >
            Developed a new app for hand configuration with shared iOS/Android code.
            Learnt a lot about project management including continuous integration, deployment, spreading work across a
            team.
        </EmploymentItem>

        <EmploymentItem
            company="Victoria University"
            title="Media Design Tutor"
            date="July 2019 — September 2019"
        >
            Tutor for Creative Coding (DSDN142) and Wearable Technology (MDDN351).
            Gave me joy to use my technical skills and communication to guide students towards solving problems and gaining knowledge.
        </EmploymentItem>

        <EmploymentItem
            company="Victoria University"
            title="Alexa Summer Scholarship"
            date="December 2018 — March 2019"
        >
            Worked with researcher Gillian McCarthy to design, develop and publish an Alexa skill (app) for the NZ blind
            community.
            <p>
                Used user interviews, user testing, research and experimentation to survey the problem space and come up with a
                technological solution.
            </p>
            <p>
                End product allows users to ask questions like "What jazz gigs are on in wellington next weekend?" and get a logical
                and interactive response, with tutorialisation and information sourced from eventfinda.
            </p>
        </EmploymentItem>

        <EmploymentItem
            company="Savesign"
            title="Linux/Raspberry Pi Developer"
            date="November 2017 — December 2019"
        >
            Developed kiosk software to run on Raspberry Pi. The work covered installation, system customization, wifi management via local hotspot, remote support.
        </EmploymentItem>

        <EmploymentItem
            company="Sunny Side Up"
            title="Web Developer"
            date="2017" />

        <EmploymentItem
            company="GeneralApps "
            title="App Developer"
            date="March 2016 — January 2017" >
            Creating an MVP android app for audio looping, effects and online collaboration
            Learnt how to work with clients, android/Java mobile development, planning tools.
        </EmploymentItem>

        <EmploymentItem
            company="Jade Software Corporation"
            title="Intern"
            date="December 2015 — February 2016" >
            Final of 3 internships with Jade.
        </EmploymentItem>

        <br />
        <p>
            You can view <a href={cv}>my old CV here.</a>
        </p>
    </>