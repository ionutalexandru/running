// lib/faqData.ts

// Tipos (no cambian, pero ahora 'answer' contendrá HTML)
export type FaqItem = {
  question: string;
  answer: string;
  imageUrl?: string;
};

export type FaqContent = {
  title: string;
  faqs: FaqItem[];
};

export type FaqData = {
  es: FaqContent;
  en: FaqContent;
};

// Datos actualizados con información oficial y enlaces
export const faqData: FaqData = {
  es: {
    title: "FAQ - Maratón de Múnich 2025",
    faqs: [
      {
        question: "¿Dónde y cuándo empieza la carrera?",
        answer: `La salida principal está en el <strong>Olympiapark (Parque Olímpico)</strong>. Mi hora de salida 09:15, bloque D.`
      },
      {
        question: "¿Dónde está la meta?",
        answer: "La meta para todas las distancias se encuentra cerca de la Olympiaturm."
      },
      {
        question: "¿Cuáles son los puntos más destacados del recorrido?",
        answer: `El recorrido de 2025 es un nuevo circuito de una sola vuelta que pasa por lugares icónicos. Además del <strong>Englischer Garten</strong>, <strong>Odeonsplatz</strong> y <strong>Marienplatz</strong>, el nuevo trazado incluye por primera vez el paso por <strong>Sendlinger Tor</strong> y el moderno barrio de <strong>Werksviertel</strong>, que promete un gran ambiente. Puedes ver todos los detalles en la <a href="https://marathonmuenchen.org/en/the-marathon-one-lap-course-through-munich/" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">página oficial del recorrido</a>.`,
        imageUrl: "/250303-map-marathon.png.webp"
      },
      {
        question: "¿Cómo me identificas?",
        answer: `<ul>
          <li><strong>Nombre:</strong> Ionut Alexandru</li>
          <li><strong>Número de Dorsal (Bib):</strong> 4836</li>
          <li><strong>Iré vestido/a con:</strong> Gafas naranjas, camiseta azul-blanca y pantalones negros-naranjas.</li>
        </ul>`
      },
      {
        question: "¿A qué hora pasaré por los puntos clave? (Estimación)",
        answer: `Mi objetivo es terminar en unas <strong>3 horas y 40-45 minutos</strong>. Esto es solo una estimación, ¡la carrera puede ser impredecible! Usa la app para los tiempos reales.<br><br>
        <table style="width:100%; border-collapse: collapse; text-align: center;">
          <thead style="background-color:#f2f2f2;">
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd;">Mi Objetivo</th>
              <th style="padding: 8px; border: 1px solid #ddd;">10km</th>
              <th style="padding: 8px; border: 1px solid #ddd;">21km</th>
              <th style="padding: 8px; border: 1px solid #ddd;">30km</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Meta</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>~3h 40min</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>~10:07</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>~11:05</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>~11:52</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>~12:55</strong></td></tr>
          </tbody>
        </table>
        <small><em>(Horas calculadas para la salida de la maratón a las 09:15)</em></small>`
      },
      {
        question: "¿Cuál es el mejor lugar para animar y vivir el ambiente de la carrera?",
        answer: `Habrá muchos puntos con música y DJs a lo largo del recorrido, pero se espera que la fiesta principal esté en <strong>Odeonsplatz</strong>. Este es el "Hot Spot" oficial de la carrera, ideal para animar a los corredores. Puedes encontrar más detalles sobre todas las zonas de animación <a href="https://marathonmuenchen.org/en/come-to-the-course-and-join-in-the-celebrations-music-atmosphere-cheering-zones/" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">aquí</a>.`
      },
      {
        question: "¿Dónde está la información oficial completa?",
        answer: `La <a href="https://marathonmuenchen.org/" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">página oficial</a> tiene todos los detalles que puedas necesitar.`
      }
    ]
  },
  en: {
    title: "FAQ - Munich Marathon 2025",
    faqs: [
      {
        "question": "Where and when does the race start?",
        "answer": "The main start is at the <strong>Olympiapark (Olympic Park)</strong>. My start time is 09:15 AM, Block D."
      },
      {
        "question": "Where is the finish line?",
        "answer": "The finish line for all distances is located near the Olympiaturm (Olympic Tower)."
      },
      {
        "question": "What are the highlights of the course?",
        "answer": "The 2025 course is a new one-lap circuit that passes by iconic landmarks. In addition to the <strong>Englischer Garten</strong>, <strong>Odeonsplatz</strong>, and <strong>Marienplatz</strong>, the new route includes for the first time the <strong>Sendlinger Tor</strong> and the modern <strong>Werksviertel</strong> district, which promises a great atmosphere. You can see all the details on the <a href='https://marathonmuenchen.org/en/the-marathon-one-lap-course-through-munich/' target='_blank' rel='noopener noreferrer' style='color: #007bff; text-decoration: underline;'>official course page</a>."
      },
      {
        "question": "How can you spot me?",
        "answer": "<ul><li><strong>Name:</strong> Ionut Alexandru</li><li><strong>Bib Number:</strong> 4836</li><li><strong>I will be wearing:</strong> Orange glasses, a blue-and-white t-shirt, and black-and-orange shorts.</li></ul>"
      },
      {
        "question": "What time will I pass the key points? (Estimate)",
        "answer": "My goal is to finish in about <strong>3 hours and 40-45 minutes</strong>. This is just an estimate—the race can be unpredictable! Use the app for real-time tracking.<br><br><table style='width:100%; border-collapse: collapse; text-align: center;'><thead style='background-color:#f2f2f2;'><tr><th style='padding: 8px; border: 1px solid #ddd;'>My Goal</th><th style='padding: 8px; border: 1px solid #ddd;'>10K</th><th style='padding: 8px; border: 1px solid #ddd;'>21K</th><th style='padding: 8px; border: 1px solid #ddd;'>30K</th><th style='padding: 8px; border: 1px solid #ddd;'>Finish</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #ddd;'><strong>~3h 40min</strong></td><td style='padding: 8px; border: 1px solid #ddd;'><strong>~10:07 AM</strong></td><td style='padding: 8px; border: 1px solid #ddd;'><strong>~11:05 AM</strong></td><td style='padding: 8px; border: 1px solid #ddd;'><strong>~11:52 AM</strong></td><td style='padding: 8px; border: 1px solid #ddd;'><strong>~12:55 PM</strong></td></tr></tbody></table><small><em>(Times calculated for the 09:15 AM marathon start)</em></small>"
      },
      {
        "question": "What's the best place to cheer and experience the race atmosphere?",
        "answer": "There will be many spots with music and DJs along the course, but the main party is expected to be at <strong>Odeonsplatz</strong>. This is the official 'Hot Spot' of the race, perfect for cheering on the runners. You can find more details about all the cheering zones <a href='https://marathonmuenchen.org/en/come-to-the-course-and-join-in-the-celebrations-music-atmosphere-cheering-zones/' target='_blank' rel='noopener noreferrer' style='color: #007bff; text-decoration: underline;'>here</a>."
      },
      {
        "question": "Where is the complete official information?",
        "answer": "The <a href='https://marathonmuenchen.org/' target='_blank' rel='noopener noreferrer' style='color: #007bff; text-decoration: underline;'>official page</a> has all the details you might need."
      }
]
  }
};