export interface TitledItem {
    title: string
    content: JSX.Element,
    url?: string
}

export const TitledItems = (items: TitledItem[]) => 
    <>
        {items.map((item, i) => 
            <div key={i}> 

                {item.url != null ? 
                    <a href={item.url}><h3>{item.title}</h3></a> : 
                    <h3>{item.title}</h3>}

                {item.content}
            </div>
        )}
    </>