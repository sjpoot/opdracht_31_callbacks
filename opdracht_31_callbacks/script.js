function huiswerkMaken(vak, callback) {
    console.log(`OK, ok, ik ga nu mijn ${vak} huiswerk maken!`);
    setTimeout(function() {
        callback();
    }, 2000)
}

function klaarMetHuiswerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);