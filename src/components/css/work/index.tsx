import cv from '@public/cv.pdf'

export const Work: React.FC = () =>
    <>
        <p>
            I am available for a wide range of work related to digital technology and art. Taking a browse through my portfolio will give you an idea of where my interests lie and what work I can create with passion.
        </p>
        <p>
            Here are some of my skills:
        </p>
        <ul>
            <li>Linux (systemd, web servers, maintenance)</li>
            <li>Raspberry pi (remote management, media servers)</li>
            <li>App development (Android, kotlin)</li>
            <li>Web development (React, nextjs, javascript, WebGL)</li>
            <li>Google apps script (Automating google forms, sheets, docs)</li>
            <li>AWS & web servers</li>
            <li>Arduino & embedded computing</li>
            <li>Live data visualization</li>
        </ul>
        <p>
            I'm still in the process of bringing my previous employments into this site, so in the meantime you can see <a href={cv}>my old CV here.</a>
        </p>
    </>