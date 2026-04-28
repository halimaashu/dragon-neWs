import LeftSide from "@/components/homepage/LeftSide";
import MidCard from "@/components/homepage/MidCard";
import RightSide from "@/components/homepage/RightSide";
import { getCategories, getCategoryWiseNews } from "@/lib/data";



export default async function Home ({ params }) {
  const { id } =await params;
  const categories = await getCategories();
  const categoryWiseNews = await getCategoryWiseNews(id);
  console.log(categoryWiseNews,"categoryWiseNews")
  
  return (
  <div className="container mx-auto grid grid-cols-12 gap-4 my-20">
    <div className=" col-span-3 bg-base-200 p-5 rounded-md space-y-5">
    <LeftSide categories={categories} isActiveId={id}/>
    </div>
    <div className=" col-span-6">
      <h1>All news </h1>
      <div className="">
        {
          categoryWiseNews.map(news=> <MidCard key={news._id} className="border p-3" news={news} />)
        }
      </div>
      
      </div>
    <div className=" col-span-3">
     <RightSide/>
    </div>
  </div>
  );
}