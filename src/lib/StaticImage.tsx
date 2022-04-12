import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export const StaticImage = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => 
    <img {...props} style={{width: '100%', height: '100%', objectFit: "contain"}} />