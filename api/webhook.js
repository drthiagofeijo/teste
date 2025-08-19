// api/webhook.js - Versão simplificada para teste
export default function handler(req, res) {
  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Resposta de teste simples
  res.status(200).json({
    success: true,
    message: "API funcionando!",
    response: "Olá! Sou um bot de seguros médicos. Em breve estarei totalmente operacional.",
    timestamp: new Date().toISOString()
  });
}