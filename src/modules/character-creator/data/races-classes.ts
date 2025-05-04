import { Race, Class } from "@/lib/types";

export const races: Race[] = [
  {
    id: "human",
    name: "Humanos",
    description: "Como en muchas historias de fantasía, los humanos suelen ser una raza común en el género isekai."
  },
  {
    id: "elf",
    name: "Elfos",
    description: "Seres de vida larga y famosos por su belleza y habilidades en la magia y el arco."
  },
  {
    id: "dwarf",
    name: "Enanos",
    description: "Son conocidos por su habilidad en la forja y su resistencia."
  },
  {
    id: "hobbit",
    name: "Hobbits/Halflings",
    description: "Raza pequeña y resistente, conocida por su habilidad para pasar desapercibida."
  },
  {
    id: "orc",
    name: "Orcos",
    description: "Usualmente son una raza salvaje y belicosa."
  },
  {
    id: "goblin",
    name: "Goblins",
    description: "Criaturas pequeñas y a menudo malvadas que son comunes en las historias de fantasía."
  },
  {
    id: "dragon",
    name: "Dragones",
    description: "En algunas historias, los dragones pueden adoptar forma humana y son una raza por sí mismos."
  },
  {
    id: "fairy",
    name: "Hadas/Pixies",
    description: "Seres mágicos de pequeño tamaño."
  },
  {
    id: "mermaid",
    name: "Sirenas",
    description: "Criaturas acuáticas con el torso de un humano y la cola de un pez."
  },
  {
    id: "vampire",
    name: "Vampiros",
    description: "Seres inmortales que se alimentan de sangre."
  },
  {
    id: "werewolf",
    name: "Licántropos",
    description: "Criaturas que pueden cambiar entre forma humana y de lobo."
  },
  {
    id: "neko",
    name: "Nekos",
    description: "Personas con rasgos de gato, comunes en los isekai japoneses."
  },
  {
    id: "demon",
    name: "Demonios/Diablos",
    description: "Seres de gran poder a menudo asociados con el mal."
  },
  {
    id: "angel",
    name: "Ángeles",
    description: "Contrapartida divina de los demonios."
  },
  {
    id: "undead",
    name: "Undead/No-muertos",
    description: "Entidades que han sido reanimadas después de la muerte."
  },
  {
    id: "lizardman",
    name: "Lizardmen/Hombres Lagarto",
    description: "Híbridos entre humanos y reptiles."
  },
  {
    id: "golem",
    name: "Golem",
    description: "Criaturas formadas de materia inanimada."
  },
  {
    id: "doppelganger",
    name: "Doppelgangers",
    description: "Criaturas que pueden tomar la forma de otras."
  },
  {
    id: "kitsune",
    name: "Kitsune",
    description: "Criaturas míticas japonesas que pueden cambiar de forma entre humano y zorro."
  },
  {
    id: "slime",
    name: "Slime",
    description: "Criaturas a base de gelatina a menudo con la capacidad de absorber y replicar habilidades."
  },
  {
    id: "centaur",
    name: "Centauros",
    description: "Criaturas mitad humano, mitad caballo."
  },
  {
    id: "merman",
    name: "Sirenos",
    description: "Contraparte masculina de las sirenas."
  },
  {
    id: "treant",
    name: "Treants/Ents",
    description: "Criaturas con aspecto de árbol."
  },
  {
    id: "troll",
    name: "Trolls",
    description: "Criaturas grandes y a menudo brutales."
  },
  {
    id: "birdman",
    name: "Hombres Pájaro",
    description: "Humanoides con características de aves."
  },
  {
    id: "succubus",
    name: "Súcubos/Íncubos",
    description: "Demonios que seducen a los hombres/mujeres."
  },
  {
    id: "gnoll",
    name: "Gnolls",
    description: "Criaturas humanoides con características de hiena."
  },
  {
    id: "triton",
    name: "Tritones",
    description: "Criaturas humanoides marinas."
  },
  {
    id: "minotaur",
    name: "Minotauros",
    description: "Criaturas mitad hombre, mitad toro."
  },
  {
    id: "giant",
    name: "Gigantes",
    description: "Seres de gran tamaño y fuerza."
  },
  {
    id: "gnome",
    name: "Duendes",
    description: "Criaturas pequeñas a menudo asociadas con la travesura."
  },
  {
    id: "spirit",
    name: "Espíritus",
    description: "Entidades incorpóreas."
  },
  {
    id: "elemental",
    name: "Elementales",
    description: "Entidades compuestas de uno de los elementos clásicos (tierra, aire, fuego, agua)."
  },
  {
    id: "beastman",
    name: "Hombres Bestia",
    description: "Humanoides con características de varios animales diferentes."
  },
  {
    id: "arachne",
    name: "Arachne",
    description: "Mujeres con el torso humano y el cuerpo de una araña."
  },
  {
    id: "chimera",
    name: "Quimeras",
    description: "Criaturas compuestas por partes de diferentes animales."
  },
  {
    id: "nymph",
    name: "Ninfas",
    description: "Espíritus de la naturaleza a menudo asociados con un lugar o fenómeno natural específico."
  },
  {
    id: "ghost",
    name: "Fantasmas/Espectros",
    description: "Espíritus de los muertos que a menudo no pueden encontrar la paz."
  },
  {
    id: "gorgon",
    name: "Gorgonas",
    description: "Seres femeninos que pueden convertir a las personas en piedra con su mirada."
  },
  {
    id: "homunculus",
    name: "Homúnculos",
    description: "Seres creados artificialmente, a menudo a través de la alquimia."
  },
  {
    id: "satyr",
    name: "Sátiros",
    description: "Criaturas mitad humano, mitad cabra."
  },
  {
    id: "banshee",
    name: "Banshees",
    description: "Espíritus femeninos que presagian la muerte con sus gritos."
  },
  {
    id: "dryad",
    name: "Dryads/Dríades",
    description: "Ninfas de los árboles o bosques."
  },
  {
    id: "djinn",
    name: "Djinn",
    description: "Criaturas mágicas a menudo asociadas con la concesión de deseos."
  },
  {
    id: "oni",
    name: "Oni",
    description: "Demonios de la mitología japonesa."
  },
  {
    id: "cyclops",
    name: "Ciclopes",
    description: "Gigantes con un solo ojo en la frente."
  },
  {
    id: "darkfairy",
    name: "Hadas Oscuras",
    description: "Una versión más oscura y a menudo malvada de las hadas."
  },
  {
    id: "harpy",
    name: "Harpías",
    description: "Mujeres con alas de pájaro."
  },
  {
    id: "lamia",
    name: "Lamias",
    description: "Mujeres con la parte inferior del cuerpo de una serpiente."
  }
];

export const classes: Class[] = [
  {
    id: "wizard",
    name: "Mago",
    description: "Expertos en la magia elemental."
  },
  {
    id: "warrior",
    name: "Guerrero",
    description: "Combatientes físicos con gran resistencia."
  },
  {
    id: "cleric",
    name: "Clérigo",
    description: "Sanadores y combatientes que suelen canalizar energías divinas."
  },
  {
    id: "thief",
    name: "Ladrón",
    description: "Expertos en sigilo, robo y trampas."
  },
  {
    id: "bard",
    name: "Bardo",
    description: "Músicos mágicos que pueden inspirar a sus aliados."
  },
  {
    id: "druid",
    name: "Druida",
    description: "Casters que sacan su poder de la naturaleza."
  },
  {
    id: "paladin",
    name: "Paladín",
    description: "Guerreros santos que luchan por la justicia y la virtud."
  },
  {
    id: "hunter",
    name: "Cazador",
    description: "Expertos en rastreo, supervivencia y a menudo luchan con animales compañeros."
  },
  {
    id: "monk",
    name: "Monje",
    description: "Combatientes cuerpo a cuerpo que utilizan su energía interna."
  },
  {
    id: "necromancer",
    name: "Nigromante",
    description: "Magos que se especializan en la magia de los muertos vivientes."
  },
  {
    id: "assassin",
    name: "Asesino",
    description: "Asesinos sigilosos y mortales."
  },
  {
    id: "shaman",
    name: "Chamán",
    description: "Casters que suelen comunicarse con los espíritus."
  },
  {
    id: "sorcerer",
    name: "Hechicero",
    description: "Casters con un talento innato para la magia."
  },
  {
    id: "warlock",
    name: "Brujo",
    description: "Casters que obtienen su poder de pactos con entidades poderosas."
  },
  {
    id: "ranger",
    name: "Explorador/Ranger",
    description: "Expertos en la supervivencia en la naturaleza."
  },
  {
    id: "barbarian",
    name: "Bárbaro",
    description: "Combatientes salvajes y furiosos."
  },
  {
    id: "alchemist",
    name: "Alquimista",
    description: "Expertos en la creación de pociones y explosivos."
  },
  {
    id: "summoner",
    name: "Invocador",
    description: "Magos que convocan criaturas para ayudarles en la batalla."
  },
  {
    id: "demonhunter",
    name: "Cazador de demonios",
    description: "Combatientes especializados en cazar entidades malignas."
  },
  {
    id: "psychic",
    name: "Psíquico",
    description: "Personajes con poderes mentales."
  },
  {
    id: "knight",
    name: "Caballero",
    description: "Guerreros nobles y armados."
  },
  {
    id: "pirate",
    name: "Pirata",
    description: "Personajes que suelen estar asociados con los mares y la vida de forajido."
  },
  {
    id: "artificer",
    name: "Artificiero",
    description: "Creadores de artefactos mágicos."
  },
  {
    id: "archer",
    name: "Arquero",
    description: "Expertos en el combate a distancia."
  },
  {
    id: "samurai",
    name: "Samurai",
    description: "Guerreros de un código de honor estricto."
  },
  {
    id: "ninja",
    name: "Ninja",
    description: "Espías y asesinos sigilosos."
  },
  {
    id: "priest",
    name: "Sacerdote",
    description: "Sanadores y guías espirituales."
  },
  {
    id: "mystic",
    name: "Místico",
    description: "Personajes con habilidades sobrenaturales."
  },
  {
    id: "judge",
    name: "Juez",
    description: "Ejecutores de la ley."
  },
  {
    id: "swordsman",
    name: "Espadachín",
    description: "Expertos en el combate con espadas."
  },
  {
    id: "deathbard",
    name: "Bardos de la muerte",
    description: "Bardos que han dominado el arte de la música mortuoria."
  },
  {
    id: "seer",
    name: "Vidente",
    description: "Personajes que pueden prever el futuro."
  },
  {
    id: "illusionist",
    name: "Ilusionista",
    description: "Magos que se especializan en la magia de la ilusión."
  },
  {
    id: "gladiator",
    name: "Gladiador",
    description: "Combatientes que luchan por el entretenimiento."
  },
  {
    id: "berserker",
    name: "Berserker",
    description: "Guerreros que luchan con una rabia incontrolable."
  },
  {
    id: "elementalist",
    name: "Elementalista",
    description: "Magos que controlan los elementos."
  },
  {
    id: "runeforger",
    name: "Forjador de runas",
    description: "Magos que utilizan runas mágicas."
  },
  {
    id: "templar",
    name: "Templario",
    description: "Guerreros religiosos."
  },
  {
    id: "battlemedic",
    name: "Médico de batalla",
    description: "Sanadores que pueden luchar."
  },
  {
    id: "vampirehunter",
    name: "Cazador de vampiros",
    description: "Especializados en cazar criaturas de la noche."
  },
  {
    id: "martialartist",
    name: "Artista marcial",
    description: "Expertos en varias formas de combate cuerpo a cuerpo."
  },
  {
    id: "mercenary",
    name: "Mercenario",
    description: "Combatientes que luchan por dinero."
  },
  {
    id: "forestguard",
    name: "Guardabosques",
    description: "Protectores de la naturaleza."
  },
  {
    id: "diviner",
    name: "Adivino",
    description: "Personajes que pueden prever el futuro y descifrar misterios."
  },
  {
    id: "deathknight",
    name: "Caballero de la muerte",
    description: "Guerreros que han abrazado el poder de la muerte."
  },
  {
    id: "mysticmonk",
    name: "Monje místico",
    description: "Monjes que utilizan la magia."
  },
  {
    id: "dragonslayer",
    name: "Asesino de dragones",
    description: "Guerreros especializados en matar dragones."
  },
  {
    id: "arcanist",
    name: "Arcanista",
    description: "Magos que buscan el conocimiento mágico."
  },
  {
    id: "magicknight",
    name: "Caballero mágico",
    description: "Guerreros que combinan magia y armas en el combate."
  },
  {
    id: "magicsmith",
    name: "Herrero mágico",
    description: "Forjan armas mágicas y armaduras."
  },
  {
    id: "shapeshifter",
    name: "Cambiaformas",
    description: "Personajes que pueden cambiar su forma física, a menudo asociados con razas como los licántropos."
  },
  {
    id: "protector",
    name: "Protector/a",
    description: "Defensores y guardianes, a menudo asociados con razas de larga vida como los elfos."
  },
  {
    id: "beastrider",
    name: "Jinetes de bestias",
    description: "Personajes que pueden domar y montar criaturas, asociados con razas que viven en estrecha relación con la naturaleza, como los centauros."
  },
  {
    id: "spiritsummoner",
    name: "Convocadores de espíritus",
    description: "Los que pueden convocar y controlar espíritus, a menudo asociados con razas místicas como los djinn."
  },
  {
    id: "dwarfsmith",
    name: "Herreros enanos",
    description: "Los enanos son conocidos por su habilidad en la forja."
  },
  {
    id: "runemaster",
    name: "Maestros de runas",
    description: "A menudo asociados con los enanos y sus habilidades de escritura rúnica."
  },
  {
    id: "elfarcher",
    name: "Arqueros elfos",
    description: "Los elfos son conocidos por su habilidad con el arco."
  },
  {
    id: "moondruid",
    name: "Druidas de la luna",
    description: "Los cambiantes y otros seres relacionados con la luna a menudo se convierten en druidas de la luna."
  },
  {
    id: "shadowninja",
    name: "Ninjas de las sombras",
    description: "Asociados con razas subterráneas o nocturnas, como los drow."
  },
  {
    id: "orcwarlord",
    name: "Señores de la guerra orcos",
    description: "Los orcos son conocidos por su fuerza y capacidad para liderar ejércitos."
  },
  {
    id: "dragonknight",
    name: "Caballeros dragon",
    description: "A menudo asociados con razas de dragones o aquellos que los veneran."
  },
  {
    id: "sirensinger",
    name: "Sirenas cantoras",
    description: "Las sirenas son conocidas por su canto encantador."
  },
  {
    id: "fairydruid",
    name: "Druidas de las hadas",
    description: "Los druidas de las hadas son conocidos por su conexión con la naturaleza y el reino de las hadas."
  },
  {
    id: "gorgonhunter",
    name: "Cazadores de gorgonas",
    description: "Especializados en cazar a las peligrosas gorgonas."
  },
  {
    id: "spectralsummoner",
    name: "Invocadores de espectros",
    description: "Capaces de convocar y controlar espectros."
  }
];
