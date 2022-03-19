
const fetchPokemon = () =>{
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./img/pokeball.gif")
            tipos(0,"Not found","Not found",0,0,0,0,0,0,0,0,"","");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if(data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //console.log(pokeImg);
            let tipo = data.types[0].type.name;
            if(data.types[1]){
                tipo += "\n" +data.types[1].type.name;
            }
            tipo = tipo.toUpperCase();
            //console.log(tipo);
            
            let id = data.id;
            let name = data.name;
            name = name.toUpperCase();
            let altura = data.height;
            let peso = data.weight;
            let hp = data.stats[0].base_stat;
            let atk = data.stats[1].base_stat;
            let def = data.stats[2].base_stat;
            let spatk = data.stats[3].base_stat;
            let spdef = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            let mov1 = data.moves[0].move.name;
            let mov2 = data.moves[1].move.name;

            tipos(id,name,tipo, altura, peso, hp, atk, def, spatk, spdef, speed,mov1, mov2);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const tipos = (id,name,tip, alts, pes, hp, atk, defs, spatk, spdef, speed, mov1,mov2) => {
    const num = document.getElementById("numero").innerHTML = id;
    const nombre = document.getElementById("nombre").innerHTML = name;
    const tipos = document.getElementById("tipo").innerHTML = tip;
    const alto = document.getElementById("stat1").innerHTML = alts;
    const peso = document.getElementById("stat2").innerHTML = pes;
    const points = document.getElementById("stat3").innerHTML = hp;
    const att = document.getElementById("stat4").innerHTML = atk;
    const def = document.getElementById("stat5").innerHTML = defs;
    const spa = document.getElementById("stat6").innerHTML = spatk;
    const spd = document.getElementById("stat7").innerHTML = spdef;
    const vel = document.getElementById("stat8").innerHTML = speed;
    const movi = document.getElementById("mov1").innerHTML = mov1;
    const movi2 = document.getElementById("mov2").innerHTML = mov2;

    num.src = id;
    nombre.src = name;
    tipos.src = url;
    alto.src = alts;
    peso.src = pes;
    points.src = hp;
    att.src = atk;
    def.src = defs;
    spa.src = spatk;
    spd.src = spdef;
    vel.src = speed;
    movi.src = mov1;
    movi2.src = mov2;
}

/*
const altura = (url) => {

    const alto = document.getElementById("info1").innerHTML = url;
    alto.src = url;
}*/
