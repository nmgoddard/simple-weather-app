export default function WeatherCard({forecast}){
    return(
        <div className="flex flex-col bg-slate-400 w-96 rounded-lg p-4 mb-4">
            <h2 className="text-3xl text-slate-900 text-center mb-2">Today</h2>
            <div className="text-xl text-slate-700 bg-slate-300 rounded p-2">
                <p>{`High: ${forecast.highs[0]}°C`}</p>
                <p>{`Low: ${forecast.lows[0]}°C`}</p>
                <p>{`🌧: ${forecast.precip[0]} cm`}</p>
            </div>
        </div>
    );
}