//1. Import Area
import React, { useEffect, useState } from 'react'
//2. Definition Area
export default function Home() {
    //2.1 Hooks Area

    const [businessCategory, setBusinessCategory] = useState([]);
    //useEffect(cbfn , arr);
    useEffect(() => {
        fetch(`http://localhost:1337/api/business-categories?populate=*`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setBusinessCategory(data.data);
            })
            .catch(() => {

            });
    }, []);

    //2.2 Function Definition Area

    //2.3 Return Statement
    return (
        <>
            <h1>Home Page</h1>
            <ul className='nav'>
                {
                    businessCategory.map((cv, idx, arr) => {
                        return <li key={idx} className="me-3">
                            <a href="#top">
                                <img src={'http://localhost:1337' + cv.attributes.image.data.attributes.url} alt='img' /><br />
                                {cv.attributes.name}
                            </a>
                        </li>
                    })
                }
            </ul>
        </>
    )
}
//3. Export Area
//3.1 Default Export
//3.2 Named Export