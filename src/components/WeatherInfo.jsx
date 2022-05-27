import React from 'react';

const WeatherInfo = ({city, country, descp,temp,humidity,press, visible, setVisible}) => {
    const rootClasses = ['wBack']
    if(visible) {
        rootClasses.push('active')
    }
    console.log(visible)
    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className='wmain' onClick={(e)=> e.stopPropagation()}>
                <div className="winfo">
                    Информация о погоде для города   <span className='span spanLast'> {city}</span>
                </div>

                <div className="Weath">
                    <div className="welement">
                        <span className='span'>Старна</span> :  {country}
                    </div>
                    <div className="welement">
                       <span className='span'>Погода</span>  : {descp}
                    </div>
                    <div className="welement">
                        <span className='span'>Температура</span> : {temp.toFixed(2)} &#8451;
                    </div>
                    <div className="welement">
                        <span className='span'>Влажность</span> :{humidity} %
                    </div>
                    <div className="welement">
                        <span className='span'>Давление</span> :  {press} mb
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;

