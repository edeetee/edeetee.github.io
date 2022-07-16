interface PageSelectorProps<K extends {label: string, url: string}>{
    options: K[],
    selected?: K
}

export const PageSelector = <K extends {label: string, url: string}>({options, selected}: PageSelectorProps<K>) => 
<div>
    {options.map((el, i) => {
        const isSelected = selected == el

        return <a key={i} href={isSelected ? "/#" : el.url} className={isSelected ? "selected" : ""}>
            <h2 style={{
                fontWeight: isSelected ? "bold" : "inherit", 
                borderLeft: "solid",
                borderWidth: 1,
                paddingLeft: 8
            }}>
                    
                {el.label}
            </h2>
        </a>
    }
        
    )}
</div>
