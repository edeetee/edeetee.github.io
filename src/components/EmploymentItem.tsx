import { ReactNode } from "react"

interface EmploymentPars{
    title: string,
    company: string,
    date: string,
    children?: ReactNode
}

export const EmploymentItem = ({title, company, date, children}: EmploymentPars) => 
<>
        <div style={{ marginTop: 32, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <div>
            <h3>{company}</h3>
            <h4 style={{marginTop: 0}}>{title}</h4>
        </div>
        <h4>{date}</h4>
    </div>
    {children}
</>