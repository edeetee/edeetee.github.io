import cv from '@public/cv.pdf'

export const Work: React.FC = () =>
    <>
        <p>
            I am available for a wide range of work related to digital technology and art. Taking a browse through my portfolio will give you an idea of where my interests lie and what I can create with passion.
        </p>
        <p>
            Here are some of my skills:
        </p>

        <h3>Rendering & Interaction</h3>
        <ul>
            <li>3D Materials & Modelling</li>
            <li>Game & Interactive logic</li>
            <li>2D image processing</li>
            <li>3D Maths (Matrix, Vector etc)</li>
            <li>Data visualization & experimentation</li>
        </ul>

        <h3>Linux</h3>
        <ul>
            <li>Web servers</li>
            <li>Maintainance</li>
            <li>Raspberry pi</li>
            <li>systemd</li>
        </ul>

        <h3>Misc</h3>
        <ul>
            <li>App development (Android, kotlin)</li>
            <li>Web development (React, nextjs, javascript, WebGL)</li>
            <li>Google apps script (Automating google forms, sheets, docs)</li>
            <li>AWS & web servers</li>
            <li>Arduino & embedded computing</li>
        </ul>
        <p>
            I'm still in the process of bringing my previous employments into this site, so in the meantime you can see <a href={cv}>my old CV here.</a>
        </p>
    </>