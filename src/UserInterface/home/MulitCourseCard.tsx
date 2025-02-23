import React from 'react';

interface Course {
  _id: string;
  title: string;
  description: string;
  duration_hours: number;
  start_date: string;
  thumbnail: string;
}

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={`http://localhost:3000/uploads/${course.thumbnail}`}
        alt="Course Thumbnail"
        style={{ width: '100%', height: '170px', objectFit: 'cover' }}
        onError={(e) => {
          console.error('Error loading image:', e);
          (e.target as HTMLImageElement).src = '/path/to/fallback/image.jpg';
        }}
      />
      <div className="p-4">
        <h3 className="text-[18px] font-semibold mb-2">
          {truncateText(course.title, 30)}
        </h3>
        <p className="text-gray-600 mb-2">
          {truncateText(course.description, 30)}
        </p>
        <p className="text-sm text-gray-500">
          ระยะเวลา: {course.duration_hours} ชั่วโมง
        </p>
        <p className="text-sm text-gray-500">
          วันที่เริ่ม: {new Date(course.start_date).toLocaleDateString('th-TH')}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
