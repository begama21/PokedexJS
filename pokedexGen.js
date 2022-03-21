
//document.body.onload = addElements;  /*Carga los elementos al principio

function addElements(i,fin){
    /*Prueba para crear contenido de html e insertarlo
    const nuevoDiv = document.createElement('div');

    const contenido = document.createTextNode("esto se escribe solo");

    nuevoDiv.appendChild(contenido);

    const currentDiv = document.querySelector('#div1');
    currentDiv.parentNode.insertBefore(nuevoDiv,currentDiv);*/  
    $('#div1').prevAll().remove();

    for(i; i <= fin; i++){

        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url).then((res) => {
            if(res.status != "200") {
                //console.log(res);
                //pokeImage("./img/pokeball.gif")
                //tipos(0,"Not found","Not found",0,0,0,0,0,0,0,0,"","");
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if(data) {
                //console.log(data);
                let name = data.name;
                name = name.toUpperCase();
                let pokeImg = data.sprites.front_default;
                console.log(data.id, name);
                let tipo = data.types[0].type.name;
                if(data.types[1]){
                tipo += "\n" +data.types[1].type.name;
            }

                const nuevoDiv = document.createElement('div');
                const img = document.createElement('img');
                img.src = pokeImg;
                nuevoDiv.className = "list-group-item list-group-item-action action"
                nuevoDiv.id = "list"+data.id;
                const contenido = document.createTextNode(`${data.id} ${name} \n ${tipo} \n`);
                
               // document.body.appendChild(img);    
                nuevoDiv.appendChild(contenido);
                nuevoDiv.appendChild(img);
            
        
            const currentDiv =document.querySelector('#div1');
            currentDiv.parentNode.insertBefore(nuevoDiv,currentDiv);

           // document.body.insertBefore(nuevoDiv,currentDiv);
            }
        });
    

 
    }
}
