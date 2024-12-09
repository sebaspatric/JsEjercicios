// Plugin para formatear texto a formato de título
const TextFormatter = (() => {
    /**
     * Formatea un texto a "Formato Título".
     * @param {string} text - Texto a formatear.
     * @returns {string} Texto formateado.
     */
    function toTitleCase(text) {
        if (!text || typeof text !== "string") return text;

        return text
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    return {
        toTitleCase
    };
})();
