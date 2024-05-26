// import Document, { DocumentContext, DocumentInitialProps } from "next/document";

// class CustomDocument extends Document {
//     static async getInitialProps(
//         ctx: DocumentContext,
//     ): Promise<DocumentInitialProps> {
//         const initialProps = await Document.getInitialProps(ctx);

//         return initialProps;
//     }
// }

// export default CustomDocument;

import { Html, Head, Main, NextScript } from 'next/document'

export default function CustomDocument() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}