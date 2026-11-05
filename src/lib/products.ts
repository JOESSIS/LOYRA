import serum from "@/assets/serum.jpg";
import cream from "@/assets/cream.jpg";

export type Category = "Sérums" | "Crèmes";
export type SkinType = "Sèche" | "Mixte" | "Grasse" | "Sensible";
export type Complexion =
  | "Tous teints"
  | "Teint Noir"
  | "Teint Marron Clair"
  | "Teint Métisse";

export type Product = {
  id: string;
  title: string;
  price: number; // Prix en FCFA par défaut
  priceEUR: number; // Équivalent en Euro
  image: string;
  category: Category;
  note: string;
  skin: SkinType[];
  complexions: Complexion[];
  benefits: string;
  ingredients: string;
  usage: string;
};

export const products: Product[] = [
  {
    id: "s1",
    title: "Sérum Éclat Pur",
    price: 45000, // 45 000 FCFA
    priceEUR: 68,
    image: serum,
    category: "Sérums",
    note: "Vitamine C stabilisée & rose de Damas",
    skin: ["Mixte", "Grasse"],
    complexions: ["Teint Noir", "Teint Marron Clair", "Teint Métisse"],
    benefits:
      "Ravive instantanément l'éclat des peaux pigmentées, atténue visiblement les taches d'hyperpigmentation et prévient le teint terne. La peau retrouve sa lumière naturelle sans effet de brillance grasse.",
    ingredients:
      "Vitamine C stabilisée (10%), eau florale de rose de Damas, extrait de fleur d'hibiscus karkadé, glycérine végétale, aloe vera pur. 98% d'ingrédients d'origine naturelle.",
    usage:
      "3 à 4 gouttes chaque matin sur une peau propre à Abidjan ou sous climat chaud. Masser délicatement du bas vers le haut du visage avant votre crème hydratante.",
  },
  {
    id: "c1",
    title: "Crème Velours",
    price: 48000, // 48 000 FCFA
    priceEUR: 74,
    image: cream,
    category: "Crèmes",
    note: "Beurre de karité sauvage & beurre de mangue",
    skin: ["Sèche", "Sensible"],
    complexions: ["Teint Noir", "Teint Marron Clair", "Tous teints"],
    benefits:
      "Nourrit intensément et apaise les peaux tiraillées par la climatisation ou le soleil. La barrière lipidique est réparée, apportant un toucher velouté et soyeux sans obstruer les pores.",
    ingredients:
      "Beurre de karité brut grand cru d'Afrique de l'Ouest (12%), beurre de mangue sauvage, huile de tournesol bio, vitamine E naturelle. 99% d'ingrédients d'origine naturelle.",
    usage:
      "Appliquer une noisette matin et soir sur le visage et le cou après nettoyage. Presser délicatement la crème avec la paume des mains pour une absorption profonde.",
  },
  {
    id: "s2",
    title: "Sérum Nuit Ambrée",
    price: 54000, // 54 000 FCFA
    priceEUR: 82,
    image: serum,
    category: "Sérums",
    note: "Bakuchiol végétal & squalane",
    skin: ["Sèche", "Mixte", "Sensible"],
    complexions: ["Teint Noir", "Teint Marron Clair", "Teint Métisse"],
    benefits:
      "Régénère les cellules cutanées pendant le sommeil : grain de peau affiné, taches résiduelles estompées et fermeté restaurée. Une alternative naturelle et douce au rétinol, parfaitement tolérée par les peaux riches en mélanine.",
    ingredients:
      "Bakuchiol pur (1%), squalane végétal d'olive, huile d'amande douce pressée à froid, extrait de figue de Barbarie. 97% d'ingrédients d'origine naturelle.",
    usage:
      "4 à 5 gouttes chaque soir sur peau propre. Masser délicatement en insistant sur les zones sujettes aux irrégularités pigmentaires.",
  },
  {
    id: "c2",
    title: "Crème Lumière",
    price: 39000, // 39 000 FCFA
    priceEUR: 59,
    image: cream,
    category: "Crèmes",
    note: "Niacinamide pure & gel d'aloe vera",
    skin: ["Mixte", "Grasse"],
    complexions: ["Teint Métisse", "Teint Marron Clair", "Teint Noir"],
    benefits:
      "Hydrate avec une légèreté absolue, resserre visiblement les pores et matifie durablement la zone médiane. Idéale pour le climat tropical d'Abidjan, laissant un fini frais et non collant.",
    ingredients:
      "Niacinamide (5%), gel pur d'aloe vera barbadensis, acide hyaluronique végétal, zinc PCA purifiant. Texture fluide non comédogène. 96% d'ingrédients naturels.",
    usage:
      "Appliquer matin et soir sur l'ensemble du visage nettoyé. Pénètre instantanément et constitue une base idéale avant tout maquillage.",
  },
  {
    id: "s3",
    title: "Huile Sacrée",
    price: 42000, // 42 000 FCFA
    priceEUR: 64,
    image: serum,
    category: "Sérums",
    note: "Huile de baobab millénaire & jojoba doré",
    skin: ["Sèche"],
    complexions: ["Teint Noir", "Teint Marron Clair", "Tous teints"],
    benefits:
      "Un élixir précieux qui sublime le rayonnement des peaux ébène et caramel. Protège de la déshydratation, apporte souplesse et un fini satiné haute couture sans film gras.",
    ingredients:
      "Huile de baobab sauvage pressée à froid, huile de jojoba doré bio, huile de sésame équitable, essence de géranium rosat. 100% d'ingrédients nobles d'Afrique.",
    usage:
      "Chauffer 3 gouttes entre les paumes et presser doucement sur le visage le soir, ou en touche illuminatrice sur les pommettes le matin.",
  },
  {
    id: "c3",
    title: "Baume Royal",
    price: 58000, // 58 000 FCFA
    priceEUR: 88,
    image: cream,
    category: "Crèmes",
    note: "Miel d'acacia & huile de marula rare",
    skin: ["Sèche", "Sensible"],
    complexions: ["Teint Noir", "Teint Marron Clair", "Teint Métisse"],
    benefits:
      "Le soin de secours souverain pour les peaux très sèches ou réactives. Répare intensément, apaise les sensations d'échauffement et préserve l'homogénéité du teint.",
    ingredients:
      "Miel d'acacia pur, huile précieuse de marula d'Afrique australe, cire d'abeille naturelle, beurre de karité bio, oxyde de zinc protecteur. 98% d'ingrédients d'origine naturelle.",
    usage:
      "En couche fine sur les zones sèches ou fragilisées le soir, ou en masque réparateur nocturne 1 à 2 fois par semaine.",
  },
];

// Helper par défaut formatant en FCFA
export const formatPrice = (n: number) => `${n.toLocaleString("fr-FR")} FCFA`;
