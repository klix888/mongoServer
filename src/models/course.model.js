import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    courseName: String,
    coursePoints: Number
});

export default mongoose.model('Course', CourseSchema);