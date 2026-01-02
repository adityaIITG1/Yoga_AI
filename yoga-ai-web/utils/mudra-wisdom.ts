/**
 * Mudra Wisdom Database
 * Scriptural knowledge base for each mudra with Sanskrit origins and benefits
 */

export interface MudraWisdom {
    sanskrit: string;
    meaning: string;
    element: string;
    chakra: string;
    benefits: string[];
    scripture?: string;
}

export const MUDRA_DATABASE: Record<string, MudraWisdom> = {
    "Gyan": {
        sanskrit: "Jnana Mudra",
        meaning: "Symbol of knowledge and concentration",
        element: "Space (Akasha)",
        chakra: "Crown (Sahasrara) & Root (Muladhara)",
        benefits: [
            "Enhances concentration and memory",
            "Calms the mind and reduces stress",
            "Stimulates the brain and nervous system",
            "Promotes wisdom and spiritual awakening"
        ],
        scripture: "The gesture of supreme knowledge, connecting individual consciousness with universal consciousness"
    },

    "Surya": {
        sanskrit: "Surya Mudra",
        meaning: "Symbol of fire and metabolic energy",
        element: "Fire (Agni)",
        chakra: "Solar Plexus (Manipura)",
        benefits: [
            "Boosts metabolism and digestion",
            "Increases body heat and energy",
            "Reduces cholesterol",
            "Enhances willpower and confidence"
        ],
        scripture: "The sun gesture, igniting the inner fire of transformation and vitality"
    },

    "Prana": {
        sanskrit: "Prana Mudra",
        meaning: "Symbol of life force and vital energy",
        element: "Earth (Prithvi)",
        chakra: "Root (Muladhara)",
        benefits: [
            "Activates dormant energy",
            "Improves immunity and vitality",
            "Reduces fatigue and nervousness",
            "Enhances vision and clarity"
        ],
        scripture: "The life force gesture, awakening the primal energy within"
    },

    "Apana": {
        sanskrit: "Apana Mudra",
        meaning: "Symbol of elimination and purification",
        element: "Earth & Fire",
        chakra: "Root (Muladhara)",
        benefits: [
            "Aids in detoxification",
            "Regulates excretory functions",
            "Balances doshas",
            "Promotes mental clarity"
        ],
        scripture: "The purification gesture, releasing toxins from body and mind"
    },

    "Varun": {
        sanskrit: "Varun Mudra",
        meaning: "Symbol of water and emotional balance",
        element: "Water (Jala)",
        chakra: "Sacral (Svadhisthana)",
        benefits: [
            "Balances water element in body",
            "Improves skin health and hydration",
            "Enhances emotional fluidity",
            "Reduces dryness and dehydration"
        ],
        scripture: "The water gesture, flowing with grace and emotional harmony"
    },

    "Namaste": {
        sanskrit: "Anjali Mudra",
        meaning: "Symbol of reverence and unity",
        element: "All Elements",
        chakra: "Heart (Anahata)",
        benefits: [
            "Centers the mind",
            "Opens the heart chakra",
            "Promotes gratitude and humility",
            "Connects left and right brain hemispheres"
        ],
        scripture: "The divine salutation, honoring the light within all beings"
    }
};

/**
 * Get wisdom for a specific mudra
 */
export function getMudraWisdom(mudraNam: string): MudraWisdom | null {
    // Normalize mudra name (remove "Mudra" suffix if present)
    const normalizedName = mudraNam.replace(/\s*Mudra$/i, "").trim();

    // Handle special cases
    if (normalizedName === "Namaste" || normalizedName === "Anjali") {
        return MUDRA_DATABASE["Namaste"];
    }

    return MUDRA_DATABASE[normalizedName] || null;
}

/**
 * Get all available mudras
 */
export function getAllMudras(): string[] {
    return Object.keys(MUDRA_DATABASE);
}
