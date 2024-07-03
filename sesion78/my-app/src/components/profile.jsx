
function Profile ({ name,img,telephone,address='por definir',age}){
console.log(name)

    return (
        <>
            <img
                src={img}
                alt={name}
            />
            
            <div>
                <p>{name}</p>
                <p>Telefono: {telephone}</p>
                <p>Dirección: {address}</p>
                 <p>edad: {age}</p>
            </div>
        </>
    );
}
export default Profile


