export const SearchResult = (props: {title: string, image: string, timeUntilAiring: number | null, nextEpisode: number | null, lastEpisodeYear: number, lastEpisodeMonth: number, airingTime: number | null}) => {
    const nextEpisodeConfirmed = props.timeUntilAiring == null ? false : true
    let nextAirDateYear = 0;
    let nextAirDateMonth = 0;
    let nextairDateDay = 0;
    let airingDate: Date;
    if (props.timeUntilAiring != null && props.airingTime != null) {    
        nextAirDateYear = Math.floor(props.timeUntilAiring / 31536000);
        nextAirDateMonth = Math.floor((props.timeUntilAiring % 31536000) / 2628000);
        nextairDateDay = Math.floor(((props.timeUntilAiring % 31536000) % 2628000) / 86400)
        airingDate = new Date(props.airingTime * 1000);
    }
    return (
    <div className="flex bg-white p-6 shadow-lg outline outline-black/5">
        <div className="flex h-[250px] w-[250px]">
            <img src={props.image} className="flex object-contain"/>
        </div>
        <div>
            <p className="text-lg font-bold">{props.title}</p>
            {nextEpisodeConfirmed == true ? 
            <div>
                <p className="text-green-600 text-bold">Next episode is confirmed!</p>
                <p className="text-lg">Episode <strong>{props.nextEpisode}</strong> will air in
                <span className="flex text-2xl bg-white p-6 shadow-lg text-gray-700">
                    {nextAirDateYear != 0 ? {nextAirDateYear} + "years," : ""} 
                    {nextAirDateMonth != 0 ? {nextAirDateMonth} + "months, and" : ""} 
                    {nextairDateDay} days, 
                    on {airingDate.toLocaleDateString()} at {airingDate.toLocaleTimeString()}
                </span> 
                </p>
            </div>
            : <div><p className="text-red-400">Next episode has not been confirmed.</p></div>}
        </div>
    </div>
    )
}   