
export const StatBar = ({ stat }) => {

    return(
        <div className="mb-3">
            <div className="d-flex justify-content-between">
                <span>{stat.name}</span>
                <span>{stat.base_stat}</span>
            </div>
            <div className="progress" style={{ height: '10px' }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(stat.base_stat / 200) * 100}%` }}
                    aria-valuenow={stat.base_stat}
                    aria-valuemin="0"
                    aria-valuemax="200"
                >
                </div>
            </div>  
        </div>
    );
};