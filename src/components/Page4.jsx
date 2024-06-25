
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeVa3inQQjxYQg8c_oEg-XyOTJJdh8Wqfk6wH6PMiIk5XoPsw/viewform?usp=sf_link';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/MALE%20Y%20NICO%20(BODA)-04.jpg?alt=media&token=7b174012-df64-44c6-84c7-7f66db199098" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonConfirmar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4