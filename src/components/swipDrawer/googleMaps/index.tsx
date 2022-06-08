import React, {FC} from "react";
import ReactStreetview from 'react-streetview';
import {useAppSelector} from "../../../redux/hooks"
//const AnyReactComponent: FC<any> = () => <div><LocationOnIcon sx={{color: "red"}} fontSize="large"/></div>


const SimpleMap: FC = () => {
    const showTown = useAppSelector((state) => state.country.showTown)

    let lat = Number(showTown.lat)
    let lng = Number(showTown.lng)
    const googleMapsApiKey = 'AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA';
    const streetViewPanoramaOptions = {
        position: {lat, lng},
        pov: {heading: 100, pitch: 0},
        zoom: 1,
        addressControl: true,
        showRoadLabels: false,
    };
    console.log("dsf" + showTown)
    return (
        // Important! Always set the container height explicitly
        <div style={{height: '50vh', width: '100vw'}}>

            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
        </div>

    );
}
export default SimpleMap
