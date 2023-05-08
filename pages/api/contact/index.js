export default function handler(req, res) {
  try {
    console.log("Contact Message Recieved");
    console.log(req.body);
    return res.status(200).json({ message: "Contact Message Recieved" });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error Processing Contact Message" });
  }
}
