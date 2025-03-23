import { ChevronRight } from "lucide-react"

interface Activite {
  titre: string
  date: string
}

interface DernieresActivitesProps {
  activites: Activite[]
}

export default function DernieresActivites({ activites = [] }: DernieresActivitesProps) {
  // Si aucune activité n'est fournie, utiliser des données d'exemple
  const activitesAffichees =
    activites.length > 0
      ? activites
      : [
          { titre: "Intitulé de l'activité", date: "22/07/2000" },
          { titre: "Intitulé de l'activité", date: "22/07/2000" },
          { titre: "Intitulé de l'activité", date: "22/07/2000" },
          { titre: "Intitulé de l'activité", date: "22/07/2000" },
        ]

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <h2 className="font-serif text-xl font-bold p-4 border-b border-gray-300">Dernières activités</h2>
      <ul>
        {activitesAffichees.map((activite, index) => (
          <li key={index} className={`flex items-center justify-between p-4 ${index % 2 === 1 ? "bg-gray-100" : ""}`}>
            <div className="flex items-center">
              <span className="mr-2 text-lg">•</span>
              <span>{activite.titre}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-gray-600">{activite.date}</span>
              <ChevronRight className="text-gray-400" size={18} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

