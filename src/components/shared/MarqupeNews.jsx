import Marquee from "react-fast-marquee";

export default function MarqupeNews() {
  const news = [
  {
    id: 1,
    data: "Tech Industry Sees Major AI Breakthrough"
  },
  {
    id: 2,
    data: "Global Markets Rally Amid Economic Recovery"
  },
  {
    id: 3,
    data: "New Discoveries in Space Exploration"
  }
];
  return (
    <div className="flex justify-between gap-5">
      <button className="btn bg-red-600 px-10 text-white">Pause</button>
      <Marquee pauseOnHover={true} speed={100} className="bg-gray-200" >
        {news.map((item) => (
          <span  key={item.id} className="mx-5">
            {item.data}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
