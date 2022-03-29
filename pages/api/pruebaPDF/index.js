import { jsPDF } from "jspdf";

const createPDF = () => {
    const doc = new jsPDF();
    doc.text("miPDF", 10, 10);
    const out = doc.output();

    return "PDF";
    const base64PDF = 'data:application/pdf;base64,'+btoa(out);
    return base64PDF;
}

export default function Index(req, res){
    const pdf = createPDF();
    res.status(200).json({ 
        PDF: pdf
    });
}