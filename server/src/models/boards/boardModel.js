import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const BoardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isClosed: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  isStarredBoard: {
    type: Boolean, 
    default: false
  }
});

export default mongoose.model('Board', BoardSchema);