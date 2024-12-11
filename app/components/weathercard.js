export default function WeatherItem({forecast, index}){
    return(
        <div className="flex flex-col bg-slate-400 w-96 rounded-lg p-2 mb-2">
            <h3 className="text-2xl text-slate-900 text-center">{forecast.dates[index]}</h3>
            <div className="text-xl text-slate-700 rounded p-1 flex flex-row justify-center">
                <p className="pr-2">{`High: ${forecast.highs[index]}°C  `}</p>
                <p className="pr-2">{`Low: ${forecast.lows[index]}°C `}</p>
                <p>{`🌧: ${forecast.precip[index]} cm `}</p>
            </div>
        </div>
    );
}