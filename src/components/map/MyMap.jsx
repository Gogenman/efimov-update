import GoogleMapReact from 'google-map-react'
import style from './MyMap.module.scss'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MyMap = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    }

    return (
        <div className={style.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    )
}

export default MyMap