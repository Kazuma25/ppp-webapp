import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface CardProps {
  title: string;
  description: string;
  redacteur: string;
  dateCreation: string;
  dateUpdate: string;
  link: string;
}

export default function CardTuto({
  title,
  description,
  redacteur,
  dateCreation,
  dateUpdate,
  link,
}: CardProps) {
  return (
    <Card className="w-100 mt-10 ml-5 mr-5 md-5">
      <CardHeader>
        <CardTitle className="text-green-500 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </CardContent>
      <div className="flex flew-row ml-5">
        <p className="text-gray-500 text-xs">
          Rédiger par : {redacteur} le {dateCreation}. <br />
          Dérnière mise a jour le {dateUpdate}.
        </p>
      </div>
      <div className="flex flex-row justify-end mt-3 mr-2">
        <button className="relative flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold overflow-hidden rounded-2xl group">
          <span className="absolute inset-0 bg-yellow-500 w-0 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>

          {/* Contenu au-dessus */}
          <span className="flex items-center gap-2 relative z-10">
            Plus ....
          </span>
        </button>
      </div>
    </Card>
  );
}
