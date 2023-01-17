import { useEffect, useState } from 'react';
import './MovieRating.scss'

export default function MovieRating({ score, deg }) {   
    const [primary, setPrimary] = useState('#21d07a')
    const [secondary, setSecondary] = useState('#204529')
    let x = 86

    useEffect(() => {
        score < 75 && score >= 50
            ? (setPrimary('#e4e401'), setSecondary('#9b9b21'))
            : score < 50 && score >= 25
                ? (setPrimary('#e85416'), setSecondary('#825014'))
                : score < 25 && score >= 0
                    ? (setPrimary('#f00606'), setSecondary('#7d0404'))
                    : <></>
    }, [score])

   

    // console.log(score);
    // console.log(primary);
    // console.log(secondary);

    return (
        <div className="MovieRating" style={{background: `conic-gradient( ${primary} ${deg}deg, ${secondary} 0deg)`}}>
            <div className="rating">
                {score}
                <p>%</p>
            </div>
        </div>
    )
}