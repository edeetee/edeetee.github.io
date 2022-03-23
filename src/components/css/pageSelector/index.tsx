export const PageSelector = <K extends {label: string}>({options, selected, onSelected}: {options: K[], selected?: K, onSelected: (key: K) => void}) => {

    return <div>
        {options.map((el, i) => 
            <a key={i} onClick={() => onSelected(el)}>
                <h2 style={{fontWeight: selected == el ? "bold" : "inherit"}}>{el.label}</h2>
            </a>
        )}
    </div>
}