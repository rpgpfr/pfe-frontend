import { Aladin } from 'next/font/google';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

export default function CampaignCreator() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-serif">
      <section className="mb-16">
        <h1 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${aladin.variable} ${aladin.className}`}>
          Créez votre campagne
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 aspect-square bg-[url('/placeholder.svg?height=400&width=400')] bg-center bg-cover"></div>
          <div className="w-full md:w-1/2">
            <p className="mb-4 text-sm text-green-800">
              Plongez dans l'aventure en commençant par créer votre propre campagne
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Définissez l'histoire de votre campagne</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Choisissez le type et l'ambiance du monde</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Écrivez la quête principale de la campagne ou choisissez-en une parmi notre sélection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Attribuez une carte et des personnages et équipez-les !</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${aladin.variable} ${aladin.className}`}>
          Construisez votre monde
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] group">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-center bg-cover"></div>
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white text-center text-sm">
                Créez vos personnages : Personnalisez leur histoire, apparence et caractéristiques !
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] group">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-center bg-cover"></div>
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white text-center text-sm">
                Personnalisez la carte du monde : Importez votre carte ou choisissez parmi une sélection par défaut et
                ajoutez-y des marqueurs !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

