import fs from "fs/promises";
import path from "path";
export default async function handler(req, res) {
  try {
    const dataString = await fs.readFile(
      path.join(process.cwd(), "dummydata/products.json"),
      "utf-8"
    );
    const dataObject = JSON.parse(dataString);
    return res.status(200).json(dataObject);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
