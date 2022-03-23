

export const PageSelector = <K extends {label: string}>({options, onClick}: {options: K[], onClick: (key: K) => void}) => 
<>
    {options.map((el, i) => 
        <a key={i} onClick={() => onClick(el)}>
            <h2>{el.label}</h2>
        </a>
    )}
</>