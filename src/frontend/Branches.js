import { ListGroup } from 'react-bootstrap';
import map from '../Image/map.webp'
import location from '../Image/location-1.png'
import { useNavigate } from 'react-router-dom';

export default function Branches() {
    const branches = [{
        a: "Perundurai Branch - Accessible Branch",
        b: "40,41 Kunnathur road",
        c: "02-6730794",
        d: "054-7840873",
        e: "Opening Hours:",
        f: "Sunday-Thursday - 09:30-21:00, Fridays and holiday eves - 09:00-14:00",
        h: 'https://www.google.com/maps/place/GaneshaStore/@11.2782759,77.5584353,14.8z/data=!4m6!3m5!1s0x3ba96d423a074295:0xb92306846c8a5a9a!8m2!3d11.2778481!4d77.5827207!16s%2Fg%2F11g8g0ph8n?entry=ttu'
    },
    /*{
        a: "Perundurai Branch",
        b: "Kunnathur road 40,41",
        c: "02-6234248",
        d: "054-7840872",
        e: "Opening Hours:",
        f: "Sunday-Thursday - 08:00-20:00",
        g: "Friday and holiday eves - 08:00-13:00",
        h: 'https://www.google.com/maps/place/GaneshaStore/@11.2782759,77.5584353,14.8z/data=!4m6!3m5!1s0x3ba96d423a074295:0xb92306846c8a5a9a!8m2!3d11.2778481!4d77.5827207!16s%2Fg%2F11g8g0ph8n?entry=ttu'
    },*/
    // More branches...
    ];

    const navigate = useNavigate();

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <>
            <br /><br /><br />
            {branches.map((item, index) => (
                <div key={index}>
                    <ListGroup horizontal >
                        <ListGroup.Item
                            style={{ width: '10%', marginLeft: '14%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6', textAlign: 'center', cursor: 'pointer' }}
                            onClick={() => { handleClick(`${item.h}`) }}
                        >
                            Directions<br />Get Here<br /><br />
                            <img src={location} alt="Location"></img>
                        </ListGroup.Item>

                        <ListGroup.Item
                            style={{ width: '2%', backgroundColor: 'white', borderColor: 'white', textAlign: 'center' }}>
                        </ListGroup.Item>

                        <ListGroup.Item dir='rtl'
                            style={{ width: '40%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6' }}>
                            <b>{item.e}</b><br />
                            {item.f}<br />
                            {item.g}<br />
                        </ListGroup.Item>

                        <ListGroup.Item dir='rtl'
                            style={{ width: '20%', backgroundColor: '#f6f6f6', borderColor: '#f6f6f6' }}>
                            <b>{item.a}</b><br />
                            {item.b}<br />
                            {item.c}<br />
                            {item.d}
                        </ListGroup.Item>
                    </ListGroup>
                    <br />
                </div>
            ))}

            <br></br>
            <img src={map} alt="Map" style={{ width: '100%' }}></img>
        </>
    );
}
