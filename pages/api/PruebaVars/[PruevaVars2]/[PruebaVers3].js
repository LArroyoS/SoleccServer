export default function PruebaVars(req, res){
    const query = req.query;
    res.status(200).json( { 
        peticion: query
    });
}