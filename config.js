
// ============================================
// ⚙️ CONFIGURACIÓN DE LA PLANTILLA
// ============================================
// 
// 📝 INSTRUCCIONES:
// Este archivo controla TODO el contenido de tu sitio web de aniversario.
// Solo necesitas editar los textos, fechas y rutas de archivos aquí.
// NO necesitas tocar ningún otro archivo del proyecto.
//
// 💡 CONSEJOS:
// - Los textos entre comillas ("") pueden contener emojis
// - Las fechas deben estar en formato: "YYYY-MM-DD" (Año-Mes-Día)
// - Las rutas de archivos deben apuntar a la carpeta assets/
// - Puedes usar <br> para saltos de línea en los textos
// ============================================

const config = {
    // ============================================
    // 1️⃣ CONFIGURACIÓN GENERAL
    // ============================================
    // Este título aparecerá en la pestaña del navegador
    pageTitle: "Nuestro Medio Año Juntos ❤️",
    // Icono que aparece en la pestaña (puede ser .svg, .png, .ico)
    // Asegúrate de poner el archivo en la carpeta assets/
    favicon: "assets/favicon.svg",

    // ============================================
    // 2️⃣ MÚSICA DE FONDO
    // ============================================
    music: {
        // Ruta de tu canción favorita (debe estar en la carpeta assets/)
        // Formatos soportados: .mp3, .wav, .ogg
        path: "assets/cancion2.mp3", // 🔇 Déjalo vacío si no tienes música aún

        // Volumen de la música (0.0 = silencio, 1.0 = máximo)
        volume: 0.9,

        // ¿Reproducir automáticamente? (true = sí, false = no)
        autoPlay: true
    },

    // ============================================
    // 3️⃣ PANTALLA DE CARGA
    // ============================================
    loading: {
        // Mensaje que aparece en la pantalla de inicio
        message: "Algo especial te espera mi vida...",

        // Texto del botón para comenzar
        buttonText: "Comenzar ✨",

        // Texto de ayuda que aparece arriba del botón
        clickHint: "Haz clic para comenzar mi amor"
    },

    // ============================================
    // 4️⃣ SECCIÓN HERO (PANTALLA PRINCIPAL)
    // ============================================
    hero: {
        // Título principal que aparece al inicio
        title: "Nuestra historia de amor...",

        // ⚠️ IMPORTANTE: Fecha de inicio de tu relación (YYYY-MM-DD)
        // El contador calculará automáticamente el tiempo transcurrido
        // Ejemplo: "2024-09-13" para el 19 de agosto de 2026
        startDate: "2025-08-21",

        // Texto que aparece después del contador
        finalText: "¡Y seguimos escribiendo nuestra historia juntos!",

        // Texto del indicador de scroll
        scrollText: "Desliza para continuar"
    },

    // ============================================
    // 5️⃣ LÍNEA DE TIEMPO (TU HISTORIA)
    // ============================================
    // Aquí cuentas tu historia en eventos cronológicos
    // Puedes agregar o eliminar eventos según necesites
    timeline: [
        // ========== EVENTO 1 ==========
        {
            // Título del evento (puedes usar emojis)
            title: "💬 La primera conversación",

            // Descripción del evento (puedes usar HTML como <br> para saltos de línea)
            content: `Todo comenzó por publicidad de un video que promocionaba una app para conocer gente a nivel mundial. La descargué por curiosidad, creé mi perfil y esperé, pero nadie contestaba. Poco a poco descubrí que muchas personas buscaban cosas feas y desagradables, decidí eliminarla, pero justo antes, me llegó un mensaje de una chica hermosa, preciosa y simpatica, entre a su perfil y me parecio muy atractiva, desde que te hable cambiaria todo mi mundo...<br><br>Desde ese momento, nuestras vidas se entrelazaron para algo mágico en mas adelante que no sabremos hasta donde llegaremos, pero si es a tu lado, es más que un si a todo...`,

            // Imágenes del evento (opcional)
            // Puedes agregar varias imágenes separadas por comas
            images: [
                "assets/El_primer_encuentro.JPG",
                "assets/El_primer_encuentro2.JPG"
            ],

            // Videos del evento (opcional)
            // Descomenta la siguiente línea si quieres agregar videos
            // videos: ["assets/video1.mp4"],

            // Pie de foto o comentario adicional
            footer: "Ese día cambió todo en nuestras vidas..."
        },

        // ========== EVENTO 2 ==========
        {
            title: "🌟 El primer encuentro",
            content: `El día tan esperado, donde tú venías a verme por primera vez, yo sentado con ansias por verte llegar y bajar del bus, ver cómo estabas perdida, mirabas a un lado y a otro...<br> Y cuando por fin entraste, verte llegar a mis brazos, abrazarte con todas mis fuerzas, entre risas y nervios de punta, esos ojitos, esa sonrisa, tu cabello y en la forma que memirabas, que no podrias verme la cara...<br> Sabiendo que por fin nos podríamos ver cara a cara, besarte, tocarte, abrazarte, quererte, que me hubiera gustado haber hecho más cosas, me senti tan feliz, pues como dicen, mariposas en el estomago, gracias por ese momento...<br> Eres una gran chica y la mejor impresión que me distes de la persona que tanto esperé a mi vida.<br><br>`,
            images: ["assets/La_primera_conversación.JPG"],
            footer: "Desde ese momento, no dejamos de hablar...."
        },

        // ========== EVENTO 3 ==========
        {
            title: "🎉 Oficialmente juntos",
            content: "Un 14 de Agosto del 2026, ya no era más que una sensación de cuando tendríamos que esperar para vernos, como seria ese día, ya no eras para mí verte, tenerte ese dia, en esas pocas horas que te tendría, tenia que aprovecharla, caminar juntos, agarrados de las manos como dos pequeños adolescentes conociendo el amor por primera vez, comer, gustar de la comida e pesar que no fue de tu agrado, verte como te reías de mis ocurrencias, me daba mucho gusto y satisfacción. <br><br>Pasar tiempo contigo ese día es y seguirá siendo especial para mi, porque pude conocerte, pude estar a tu lado asi sea por un par de horas, no quería que se termine ese dia, a pesar de todo lo malo o bueno, no dudes que de mi amor por ti, no sabes lo very feliz que estaba contigo en ese momento. <br><br>Eres y seguiras siendo especial para mi, y que no podamos estar juntos, no signifique por la razón y el motivo en el cual estamos, todavía me acuerdo de esta foto, es mi favorita, mi niña hermosa, divina, fantástica y que me quedo sin palabras en como describirte.<br><br>",
            videos: ["assets/Oficialmente_juntos2.mp4"],
            footer: "Nervios, risas y mariposas en el estómago"
        },

        // ========== EVENTO 4 ==========
        {
            title: "❤️ Nuestra conexión",
            content: `Desde el día que decidimos a darnos una nueva oportunidad, nos prometimos muchas cosas como pareja, para ser mejores tanto para nosotros como para nuestras familias. Tú eres una mujer que me iluminas, la mujer que me levanta cada mañana.¿Cómo amaneció? ¿Se encuentra bien? ¿Habrá comido?". Me hago muchas preguntas e incógnitas, ¿y sabes por qué? Porque te amo y me preocupo por ti; a pesar de que estamos lejos, nada me impide estar pendiente de tu bienestar. Tal vez no soy tu primera pareja, ni tu primer beso, ni el primero que te dijo "amor", ni el primero que te robó el corazón...Pero lo que sí soy para ti es ese amor tan grande e inmenso por mi, un amor único. Por el cual sientes algo de verdad No estoy más que agradecido con Dios por darme a la gran mujer que me ha dado.<br><br>
            Asimismo, amor, tenemos días buenos y malos, como todos. Se que estamos pasando un momento difícil, por error mio y que te hecho pensar muchas cosas, tal vez creas que no te ame y que no estoy siendo el enamorado que tu esperabas al principio y lo se, cometido errores y no hecho nada para mejorarlos, pero déjame ver que no es así y que el amor que tengo por ti es de verdad, te ayudare y mejorare para ser el mejor chico para ambos, estaré aquí para apoyarte a superar y cumplir todas tus metas, de verdad te amo con todo mi corazón, déjame mostrarte por la razón elegí que tu seas la mujer quiero estar el resto de mi vida <br><br>`,
            videos: ["assets/Nuestra_conexiOn.mp4"],
            // Campo "extra" para agregar más contenido al final del evento
            footer: "Y desde entonces, cada día es una nueva aventura juntos."
        },

        // 💡 CONSEJO: Puedes copiar y pegar este bloque para agregar más eventos:
        /*
        {
            title: "🎈 Título del evento",
            content: `Descripción del evento...`,
            images: ["assets/placeholder.svg"],
            footer: "Comentario adicional"
        },
        */
    ],

    // ============================================
    // 6️⃣ GALERÍA DE FOTOS
    // ============================================
    gallery: {
        // Título de la sección de galería
        title: "Nuestras fotos favoritas ",

        // Lista de fotos para la galería
        // Agrega tantas como quieras, separadas por comas
        images: [
            { url: "assets/Imagen1.JPG", caption: "Regia, divina, fabolusa, con ese oufit para deslumbrar en cada escenario😍" },
            { url: "assets/Imagen2.JPG", caption: "Mi cara de serio, pero por dentro estoy feliz de tenerte a mi lado ❤️" },
            { url: "assets/Imagen3.JPG", caption: "Hermosa, linda, preciosa con esos lentes 💓" },
            { url: "assets/Imagen4.JPG", caption: "Mi mami, con su pequeño niño, lindos como siempre 💓" },
            { url: "assets/Imagen5.JPG", caption: "Esa sonrisa que me derrite cada vez que la veo 😊" },
            { url: "assets/Imagen6.JPG", caption: "Mi cara de enamorado, por hambre de un chocolatito como tú 🍫" },
            { url: "assets/Imagen7.JPG", caption: "Besame mi amor, que tengo hambre de tu boca 😘" },
            { url: "assets/Imagen8.JPG", caption: "Probar tus labios, que no quisiera desprenderme💖" },
            { url: "assets/Imagen9.JPG", caption: "Mi modelo y actriz favorita, aunque no lo sepa me vuelves loco 😎" },
            { url: "assets/Imagen10.JPG", caption: "Me gusta tu sonrisa que me opaca, pero quien por tremenda chica que tengo" },
            { url: "assets/Imagen11.JPG", caption: "Cada foto contigo es un recuerdo inolvidable😍" },
            { url: "assets/Imagen12.JPG", caption: "Sentir tu aroma, junto a la brisa del mar, es lo mas bonito que puedo sentir en ese momento💖" }
        ]
            // Agrega más fotos aquí...
    },

    // ============================================
    // 7️⃣ MENSAJE FINAL
    // ============================================
    finalMessage: {
        // Mensaje de cierre (puedes usar <br> para saltos de línea)
        content: "Gracias por ser parte de mi vida ❤️<br>Te amo desmasiado, mucho más de lo que podrias imaginar..."
    }
};

// ============================================
// ✅ ¡LISTO!
// ============================================
// Guarda este archivo y recarga tu navegador para ver los cambios.
// Recuerda colocar tus fotos, videos y música en la carpeta assets/
// ============================================
