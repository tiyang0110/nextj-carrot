interface LiveItemProps{
  title: string;
  key: number;
}

export default function LiveItem({title, key}:LiveItemProps){
  return (
    <div className="pt-4 px-4" key={key}>
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <h3 className="text-gray-700 text-lg mt-2">{title}</h3>
    </div>
  );
}