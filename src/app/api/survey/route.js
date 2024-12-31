import db from "@/config/mySql";

export async function POST(req, res) {
  try {
    const surveyData = await req.json();
    const query = "INSERT INTO responses SET ?";
    const [result] = await db.query(query, surveyData);

    return new Response({
      status: 200,
      message: "true",
      result: result,
    });
  } catch (error) {
    console.log(error);

    return new Response({
      status: 500,
      message: error,
    });
  }
}
