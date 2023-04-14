export function szures(lista,kulcs,szuresFelt){

    const SZURTLISTA = lista.filter(function(a){
        return a[kulcs].includes(szuresFelt);
    });
    return SZURTLISTA;
}