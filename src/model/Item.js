export default class Item {

    constructor(id, name, icon, price) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.price = price;
    }

    static Cast(apiResp) {
        let itm = new Item()

        itm.id    = apiResp.id
        itm.name  = apiResp.name
        itm.icon  = apiResp.icon
        itm.price = apiResp.price

        return itm
    }

}