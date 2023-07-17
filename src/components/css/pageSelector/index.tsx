import styles from './index.module.css'

interface PageSelectorProps<K extends {label: string, url: string}>{
    options: K[],
    selected?: K
}

export const PageSelector = <K extends {label: string, url: string}>({options, selected}: PageSelectorProps<K>) => 
<div style={{margin: "16px 0"}}>
    {options.map((el, i) => {
        const isSelected = selected == el

        return <a key={i} href={isSelected ? "/#" : el.url} className={isSelected ? styles.selected : ""}>
            <h2 style={{
                color: 'rgb(88, 88, 88)',
                fontWeight: isSelected ? "bold" : "inherit", 
                minWidth: 150,
                borderLeft: "solid",
                // borderBottom: "solid",
                borderBottomWidth: 1,
                borderLeftWidth: isSelected ? 2 : 2,
                borderColor: "rgba(0,0,0,0.1)",
                borderLeftColor: isSelected ? "white" : "rgba(0,0,0,1)",
                borderRadius: 1,
                paddingLeft: 8,
                paddingRight: 8,
                textDecoration: isSelected ? "none" : "underline",
                // paddingTop: 4,
                // paddingBottom: 4,
                // background: isSelected ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.04)",
            }}>
                    
                {el.label}
            </h2>
        </a>
    }
        
    )}
</div>
