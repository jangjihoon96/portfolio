import { connectDB } from "@/util/database";
export default async function handler(req, res) {
  if (req.method === "POST") {
    if (
      req.body.id &&
      req.body.img &&
      req.body.alt &&
      req.body.title &&
      req.body.desc &&
      req.body.github &&
      req.body.cartagorize
    ) {
      const db = (await connectDB).db("portfolio");
      let result = await db.collection("works").insertOne(req.body);
      return res.redirect(302, "/");
    } else {
      return res.status(200).json("정보를 모두 입력해주세요.(Demo 주소 제외)");
    }
  }
}
