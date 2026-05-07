import SurveyPageClient from "../features/SurveyPageClient/SurveyPageClint";

export const metadata = {
  title: "Survey | Brand Assessment Tool",
  description: "Brand Assessment Tool",
};

export default async function SurveyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEV}/questions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const data = await res.json();
  console.log(data);
  return <SurveyPageClient questions={data?.data} />;
}
