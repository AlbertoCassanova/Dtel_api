export default function FormatearOperador(e){
    if (e.includes("TEL")){
        return "TELEFÓNICA MÓVILES ESPAÑA S.A. UNIPERSONAL"
    }
    else{
        return e.replace('"', "")
    }
}