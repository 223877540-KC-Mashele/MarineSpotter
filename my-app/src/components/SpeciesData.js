import dolphinImage from '../assets/Dolphin.jpg';
import humpbackImage from '../assets/Humpback.jpg';
import manateeImage from '../assets/Manatee.jpg';
import WhitesharkImage from '../assets/Whiteshark.jpg';
import TigersharkImage from '../assets/Tigershark.jpg';
import AnglerfishImage from '../assets/Anglerfish.jpg';
import BluefinTunaImage from '../assets/BluefinTuna.jpg';
import CrownfishImage from '../assets/Crownfish.jpg';
import redsnapperImage from '../assets/redsnapper.jpg';
import PacificSalmonImage from '../assets/PacificSalmon.jpg';
import PufferfishImage from '../assets/Pufferfish.jpg';
import MorayEelImage from '../assets/MorayEel.jpg';
import SpottedEagleRayImage from '../assets/SpottedEagleRay.jpg';
import MantaRayImage from '../assets/MantaRay.jpg';
import AcroporaImage from '../assets/Acropora.jpg';
import GreenSeaTurtleImage from '../assets/GreenSeaTurtle.jpg';
import LeatherbackseaturtleImage from '../assets/Leatherbackseaturtle.jpg';
import NudibranchImage from '../assets/Nudibranch.jpg';
import OctopusImage from '../assets/Octopus.jpg';
import OtterImage from '../assets/Otter.jpg';

const marineSpecies = [
  {
    name: 'Common Bottlenose Dolphin',
    category: 'Mammal', // Added for filtering purposes
    description: 'Intelligent marine mammal known for its playful behavior.',
    imageUrl: dolphinImage,
    status: 'least concern',
    geography: 'Found in warm and temperate seas worldwide. Common in coastal regions and the open ocean.',
    facts: 'Dolphins are highly intelligent and social animals. They communicate with a complex system of clicks and whistles and are known for their acrobatic skills.',
    comments: [
        {
            user: 'MarineLover123',
            text: 'I saw one while on a boat tour! It was amazing to watch them jump out of the water.',
            date: '2024-11-08'
        },
        {
            user: 'OceanExplorer99',
            text: 'Did you know that dolphins can use echolocation to navigate?',
            date: '2024-11-07'
        }
    ]
  },

  {
    name: 'Green Sea Turtle',
    category: 'Reptile',
    description:
      'A large sea turtle that is a herbivore and known for its long migrations.',
    imageUrl: GreenSeaTurtleImage,
    status: 'endangered',
    geography: 'Found in tropical and subtropical seas around the world. Common in coastal areas with seagrass beds.',
    facts: 'Green sea turtles can live up to 80 years. They are named for the green color of their body fat.',
    comments: [],
  },
  {
    name: 'Clownfish',
    category: 'Fish',
    description:
      'Brightly colored fish known for its symbiotic relationship with sea anemones.',
    imageUrl: CrownfishImage,
    status: 'least concern',
    geography: 'Found in the warm seas of the Pacific and Indian Oceans, typically in coral reefs.',
    facts: 'Clownfish are immune to the sting of sea anemones, which provide them protection.',
    comments: [],
  },
  {
    name: 'Great White Shark',
    category: 'Fish',
    description:
      'Apex predator known for its size and powerful hunting skills.',
    imageUrl: WhitesharkImage,
    status: 'vulnerable',
    geography: 'Found in coastal surface waters in temperate and tropical oceans around the world.',
    facts: 'Great white sharks can grow up to 20 feet in length and can swim at speeds up to 25 miles per hour.',
  },
  {
    name: 'Humpback Whale',
    category: 'Mammal',
    description: 'Known for its spectacular breaching and complex songs.',
    imageUrl: humpbackImage,
    status: 'least concern',
    geography: 'Found in oceans around the world. They migrate from polar waters to tropical or subtropical waters to breed.',
    facts: 'Humpback whales are known for their long migrations, which can exceed 16,000 miles annually.',
    comments: [],
  },
  {
    name: 'Tiger Shark',
    category: 'Fish',
    description:
      'A large shark known for its distinctive stripes and diverse diet.',
    imageUrl: TigersharkImage,
    status: 'near threatened',
    geography: 'Found in tropical and subtropical waters worldwide, often near coastlines.',
    facts: 'Tiger sharks are opportunistic feeders and are known to eat a wide variety of prey, including fish, seals, and even garbage.',
    comments: [],
  },
  {
    name: 'Coral (Acropora species)',
    category: 'Coral',
    description: 'Essential marine organisms that form coral reefs.',
    imageUrl: AcroporaImage,
    status: 'critically endangered',
    geography: 'Found in shallow tropical oceans, typically forming reefs in warm waters.',
    facts: 'Corals are sensitive to temperature changes, and climate change poses a major threat to coral reefs.',
    comments: [],
  },
  {
    name: 'Manatee',
    category: 'Mammal',
    description:
      'Large, gentle herbivorous marine mammals often found in shallow waters.',
    imageUrl: manateeImage,
  status: 'vulnerable',
    geography: 'Found in warm coastal waters of the Atlantic Ocean, the Caribbean Sea, and the Gulf of Mexico.',
    facts: 'Manatees can live to be up to 60 years old and typically eat seagrass, algae, and other aquatic vegetation.',
    comments: [],
  },
  {
    name: 'Bluefin Tuna',
    category: 'Fish',
    description: 'Highly sought-after fish known for its size and speed.',
    imageUrl: BluefinTunaImage,
    status: 'critically endangered',
    geography: 'Found in the North Atlantic Ocean and parts of the Mediterranean Sea.',
    facts: 'Bluefin tuna are among the fastest fish in the ocean, reaching speeds up to 75 km/h (46 mph).',
    comments: [],
  },
  {
    name: 'Leatherback Sea Turtle',
    category: 'Reptile',
    description: 'The largest of all sea turtles, known for its unique shell.',
    imageUrl: LeatherbackseaturtleImage,
    status: 'vulnerable',
    geography: 'Found in oceans worldwide, from the Arctic to the Antarctic, but they nest on tropical beaches.',
    facts: 'Leatherback turtles can dive to depths of over 1,200 meters and are the only sea turtles that do not have a hard shell.',
    comments: [],
  },
  {
    name: 'Manta Ray',
    category: 'Fish',
    description: 'Large, graceful rays known for their acrobatic swimming.',
    imageUrl: MantaRayImage,
    status: 'vulnerable',
    geography: 'Found in tropical and subtropical waters around the world.',
    facts: 'Manta rays are filter feeders, using their gill rakers to sieve plankton and small fish from the water.',
    comments: [],
  },
  {
    name: 'Common Octopus',
    category: 'Invertebrates',
    description:
      'Highly intelligent cephalopod known for its problem-solving abilities.',
    imageUrl: OctopusImage,
    status: 'least concern',
    geography: 'Found in temperate and tropical oceans around the world, typically on the seafloor.',
    facts: 'Octopuses have three hearts and blue blood, and can change their color and texture to blend into their environment.',
    comments: [],
  },
  {
    name: 'Anglerfish',
    category: 'Fish',
    description:
      'Deep-sea fish known for its bioluminescent lure to attract prey.',
    imageUrl: AnglerfishImage,
    status: 'least concern',
    geography: 'Found in temperate and tropical oceans around the world, typically on the seafloor.',
    facts: 'Octopuses have three hearts and blue blood, and can change their color and texture to blend into their environment.',
    comments: [],
  },
  {
    name: 'Sea Otter',
    category: 'Mammal',
    description: 'Marine mammal known for using tools to crack open shellfish.',
    imageUrl: OtterImage,
    status: 'endangered',
    geography: 'Found in coastal areas of the North Pacific Ocean.',
    facts: 'Sea otters use rocks to break open clams, oysters, and other shellfish, often floating on their backs while eating.',
    comments: [],
  },
  {
    name: 'Spotted Eagle Ray',
    category: 'Fish',
    description: 'A ray known for its distinctive spots and graceful swimming.',
    imageUrl: SpottedEagleRayImage,
    status: 'near threatened',
    geography: 'Found in warm coastal waters, especially in the Caribbean and parts of the Indian Ocean.',
    facts: 'Spotted eagle rays can leap out of the water and glide through the air when startled.',
    comments: [],
  },
  {
    name: 'Nudibranch',
    category: 'Invertebrates',
    description: 'Colorful sea slugs known for their striking appearances.',
    imageUrl: NudibranchImage,
    status: 'least concern',
    geography: 'Found in oceans worldwide, particularly in temperate and tropical waters.',
    facts: 'Nudibranchs are often brightly colored and are known for their ability to store toxins from their food for protection.',
    comments: [],
  },
  {
    name: 'Red Snapper',
    category: 'Fish',
    description:
      'A popular fish known for its delicious taste and vibrant color.',
    imageUrl: redsnapperImage,
    status: 'vulnerable',
    geography: 'Found in the Gulf of Mexico, the Atlantic Ocean, and the Caribbean Sea.',
    facts: 'Red snapper are considered a delicacy in many regions, known for their firm texture and sweet flavor.',
    comments: [],
  },
  {
    name: 'Pacific Salmon',
    category: 'Fish',
    description: 'Important species for commercial fisheries and ecosystems.',
    imageUrl: PacificSalmonImage,
    status: 'varies by species (some endangered)',
    geography: 'Found in the North Pacific Ocean, migrating to freshwater rivers to spawn.',
    facts: 'Pacific salmon are known for their long migration journey, traveling hundreds of miles upstream to spawn.',
    comments: [],
  },
  {
    name: 'Pufferfish',
    category: 'Fish',
    description: 'Known for its ability to inflate as a defense mechanism.',
    imageUrl: PufferfishImage,
    status: 'least concern',
    geography: 'Found in tropical and subtropical waters worldwide, often near coral reefs.',
    facts: 'Pufferfish inflate by swallowing water or air when threatened, making them appear larger and deterring predators.',
    comments: [],
  },
  {
    name: 'Moray Eel',
    category: 'Fish',
    description: 'Long, snake-like fish often found in coral reefs.',
    imageUrl: MorayEelImage,
    status: 'least concern',
    geography: 'Found in tropical and subtropical waters worldwide, often hiding in crevices on the seafloor.',
    facts: 'Moray eels have sharp teeth and are known to be aggressive when threatened, but they typically do not attack humans.',
    comments: [],
  },
];

function MarineSpeciesList() {
  return (
    <div>
      {marineSpecies.map((species, index) => (
        <div key={index}>
          <h2>{species.name}</h2>
          <p>{species.description}</p>
          <img
            src={species.imageUrl}
            alt={species.name}
            className="styledImage"
          />
          <p>Status: {species.status}</p>
        </div>
      ))}
    </div>
  );
}
export default marineSpecies;
