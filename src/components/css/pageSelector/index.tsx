import styles from './index.module.css'

interface PageSelectorProps<K extends {label: string, url: string}>{
    options: K[],
    selected?: K
}

export const PageSelector = <K extends {label: string, url: string}>({options, selected}: PageSelectorProps<K>) => 
    <div style={{ margin: "16px 0", justifyContent: 'center', display: 'flex' }}>
    {options.map((el, i) => {
        const isSelected = selected == el

        return <a key={i} href={isSelected ? "/#" : el.url} className={isSelected ? styles.selected : ""}>
            <h2 style={{
                color: 'rgb(200,200,200)',
                fontWeight: isSelected ? "bold" : "inherit", 
                minWidth: 150,
                // borderRight: "solid",
                // borderBottom: "solid",
                display: 'inline',

                borderBottomStyle: 'solid',
                borderWidth: 8,
                // borderColor: "rgba(0,0,0,0.1)",
                borderColor: isSelected ? "white" : "rgba(0,0,0,1)",
                borderRadius: 1,

                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 8,
                // textDecoration: isSelected ? "none" : "underline",
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
