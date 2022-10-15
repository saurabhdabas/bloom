import roomModel from '../models/room.js';
const getAllRooms = async (req,res) => {
  try {
    const rooms = await roomModel.find();
    console.log("rooms:",rooms);
    res.status(200).json(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export default getAllRooms;