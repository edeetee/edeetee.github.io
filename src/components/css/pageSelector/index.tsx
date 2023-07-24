import styles from './index.module.css'

interface PageSelectorProps<K extends {label: string, url: string}>{
    options: K[],
    selected?: K
}

export const PageSelector = <K extends {label: string, url: string}>({options, selected}: PageSelectorProps<K>) => 
    <div style={{ margin: "16px 0", justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
    {options.map((el, i) => {
        const isSelected = selected == el

        return <a key={i} href={el.url} style={{ marginBottom: 32 }} className={isSelected ? styles.selected : styles.selector}>
            <h2 style={{
                color: 'white',
                fontWeight: isSelected ? "bold" : "inherit", 
                background: isSelected ? 'black' : 'none',
                minWidth: 150,
                display: 'inline',

                borderBottomStyle: 'solid',
                borderWidth: 8,
                borderColor: isSelected ? "white" : "rgba(0,0,0,1)",
                borderRadius: 1,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 8,
                paddingTop: 8,
            }}>
                    
                {el.label}
            </h2>
        </a>
    }
        
    )}
</div>
