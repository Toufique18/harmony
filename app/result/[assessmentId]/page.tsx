import ResultPageClient from "@/app/features/ResultPageClint/ResultPageClient";

export default async function ResultPage({
  params,
}: {
  params: { assessmentId: string };
}) {
  const { assessmentId } = await params;
  console.log(assessmentId);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_DEV}/assessments/${assessmentId}/result`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    },
  );

  const data = await res.json();
  return <ResultPageClient results={data?.data} />;
}
