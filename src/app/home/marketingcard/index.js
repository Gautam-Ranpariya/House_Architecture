import React from 'react';
import './marketingcard.scss';
import CardLeftAngleBraketButton from '../../../shared/components/button';

export default function MarketingCard() {
    const arr = [
        { id : "01",
          name : "Schematic Design",
          data : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
          classname : "card item1",
          fontcolor : "var(--theme-card-color-white)",
          bg : "var(--theme-card-bg-orange)"
        },
        { id : "02",
          name : "Documents",
          data : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
          classname : "card item2",
          fontcolor : "var(--theme-card-color-white)",
          bg : "var(--theme-card-bg-lightgreen)"
        }, 
        {
          id : "03",
          name : "Construction",
          data : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
          classname : "card item3",
          fontcolor : "var(--theme-card-color-white)",
          bg : "var(--theme-card-bg-purpul)"
        }, 
        { id : "04",
          name :"Build Construction",
          data : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
          classname : "card item4",
          fontcolor : "var(--theme-card-color-white)",
          bg : "var(--theme-card-bg-lightblue)"
        }
      ];
  return (
    <div className='mainMarketingCards'>
        <div className="container">
            <div className="innerMarketingCards">
                {
                    arr.map((item) =>
                    {
                        return <div key={item.id} className={item.classname} style={{backgroundColor : item.bg , color : item.fontcolor}} >
                            <h2>{item.id}</h2>
                            <h3>{item.name}</h3>
                            <p>{item.data}</p>
                            <CardLeftAngleBraketButton />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
