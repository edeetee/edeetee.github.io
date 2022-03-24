interface PageSelectorProps<K extends {label: string}>{
    options: K[],
    selected?: K,
    onSelected: (item: K) => void
}


export const PageSelector = <K extends {label: string}>({options, selected, onSelected}: PageSelectorProps<K>) => 
<div>
    {options.map((el, i) => {
        const isSelected = selected == el

        return <a key={i} onClick={() => onSelected(el)} className={isSelected ? "selected" : ""}>
            <h2 style={{fontWeight: isSelected ? "bold" : "inherit"}}>| {el.label}</h2>
        </a>
    }
        
    )}
</div>
