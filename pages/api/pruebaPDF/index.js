import { jsPDF } from "jspdf";
import btoa from "btoa";

const createPDF = () => {
    const doc = new jsPDF();
    doc.text("miPDF", 10, 10);
    const out = doc.output();

    const base64 = btoa(out);
    return { 
        data: "application/pdf",
        encoding: "base64",
        base64: base64
    }
}

export default function Index(req, res){
    const pdf = createPDF();
    res.status(200).json(pdf);
}