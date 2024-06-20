import Room from '../models/roomModel.js';

const roomController = {
  
  getAllRooms: async (req, res) => {
    const rooms = await Room.find();
  
    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: {
        rooms,
      },
    });
  },
}

export default roomController;