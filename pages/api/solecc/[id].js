

export default async (req, res) => {
    res.status(400).json({ success: true });
    /*
    const { method, body, query } = req;
    const tabla = query["id"];
    res.status(400).json({ tabla: tabla });
    
    const Obj = objeto(tabla);
    const visualizar = toString(tabla,body);
    const cuerpo = {...body, toString: visualizar};
    switch (method) {
        case "GET":
            const find = await Obj.find({});
            res.status(200).json({ success: true, data: find });
            break;
        case "POST":
            const create = await Obj.create(cuerpo);
            res.status(200).json({ success: true, data: create });
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
    */
}