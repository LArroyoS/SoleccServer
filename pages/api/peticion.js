const GET = (req,res) => {
  const query = req.query;
  res.status(200).json(query);
}

const POST = (req,res) => {
  const body = req.body;
  res.status(200).json(body);
}
const PUT = (req,res) => {
  const query = req.query;
  const body = req.body;
  res.status(200).json({ query: query, body: body});
}

const DELETE = (req,res) => {
  const query = req.query;
  res.status(200).json(query);
}

const DEFAULT = (req,res) => {
  res.status(405).json({ peticion: "nulo" });
}

export default function Formulario(req, res){
  switch(req.method){
    case "GET":
      GET(req,res);
    break;
    case "POST":
      POST(req,res); 
    break;
    case "PUT":
      PUT(req,res); 
    break;
    case "DELETE":
      DELETE(req,res); 
    break;
    default:
      DEFAULT(req,res); 
    break;
  }
}