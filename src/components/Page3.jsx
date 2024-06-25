

const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/J7dK1AnULB91aQBT7";
    return (
        <div className="contenedor">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/MALE%20Y%20NICO%20(BODA)-03.jpg?alt=media&token=002fe831-af9c-46f3-bb9e-778afd3861bb" 
                alt="" 
                style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
            <a
                style={{ position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)' }}
                href={locationUrl2}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="botonLlegar">Cómo llegar?</button>
            </a>
        </div>
    );
}

export default Page3;
