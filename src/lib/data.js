export async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data=await res.json();
  // console.log(data ,"data from may home page js")
  return data.data.news_category;
}


export async function getCategoryWiseNews(id){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);


  const data=await res.json();
  // console.log(data ,"data from may home page js")
  return data.data;
}
export async function getDetails(news_id){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);


  const data=await res.json();
  // console.log(data ,"data from may home page js")
  return data.data[0];
}