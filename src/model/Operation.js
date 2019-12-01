export default class Operation {

    constructor(id, type, amt) {
        this.id   = id;
        this.type = type;
        // Hack dégueux pour éviter les erreur des floats mais en laissant l'utilisateur taper des chiffres à virgules
        this.amt  = parseFloat((parseFloat(amt) * 100).toFixed(2));
    }

    toString(){
        let str = ""

        switch (this.type) {
            case 0:
                str = "Reçu par cash ("
                break;

            case 1:
                str = "Reçu par Lydia ("
                break;

            case 2:
                str = "Remboursé par cash ("
                break;

            case 3:
                str = "Remboursé par Lydia ("
                break;
            
            default:
                str = "Unknown operation ("
                break
        }

        str += (this.amt/100).toFixed(2) + "€)"

        return str
    }
}