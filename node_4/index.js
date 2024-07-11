

// traer datos con una función asincrona

function fetchData(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({data: "hello, world"});
        }, 1000)
    });
}

async function getData(){
    console.log('Obteniendo datos...');
    const result = await fetchData();//Espera a que los datos sean obtenidos
    console.log('Datos optenidos con exito: ', result);
}
getData();

