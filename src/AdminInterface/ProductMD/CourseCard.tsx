import React, { useState, useCallback } from 'react';
import './CourseCard.css';
import EditCourseModal from './EditCourseModal';
import DeletedPopup from './DeleteConfirmationModal';

interface CourseData {
  _id: string;
  title: string;
  description: string;
  details: string;
  duration_hours: number;
  max_seats: number;
  start_date: string;
  thumbnail: string | File;
  video: string;
  trainingLocation: string;
  qr_code: string;
}


interface CourseCardProps {
  course: CourseData;
  onEdit: (updatedCourse: CourseData) => void;
  onDelete: (courseId: string) => Promise<void>;
  jwtToken: string | null;
}


const CourseCard: React.FC<CourseCardProps> = ({ course, onEdit, onDelete, jwtToken }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = useCallback(() => {
    setShowEditModal(true);
  }, []);

  const handleDelete = useCallback(() => {
    setShowDeleteModal(true);
  }, []);

  const handleEditSubmit = useCallback(
    async (updatedCourse: CourseData) => {
      await onEdit(updatedCourse);
      setShowEditModal(false);
    },
    [onEdit]
  );
  
  const handleDeleteConfirm = useCallback(async () => {
    await onDelete(course._id);
    setShowDeleteModal(false);
  }, [course._id, onDelete]);

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };
  return (
    <div className="course-card h-[400px] p-4 flex flex-col justify-between">
      <div>
        <img
          src={`http://localhost:3000/uploads/${course.thumbnail}`}
          alt="Course Thumbnail"
          style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          onError={(e) => {
            console.error('Error loading image:', e);
            (e.target as HTMLImageElement).src = '/path/to/fallback/image.jpg';
          }}
        />
        <h3>{truncateText(course.title, 35)}</h3>
        <p>{truncateText(course.description, 60)}</p>
        <p>จำนวนที่นั่ง: {course.max_seats}</p>
        <p>วันที่เริ่ม: {new Date(course.start_date).toLocaleDateString('th-TH')}</p>
      </div>
      
      <div className="mt-auto flex gap-2 justify-end">
        <button className="edit-btn" onClick={handleEdit}>
          แก้ไข
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          ลบ
        </button>
      </div>
      
      {showEditModal && (
        <EditCourseModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditSubmit}
          course={course}
        />
      )}
      
      {showDeleteModal && (
        <DeletedPopup
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteConfirm}
          courseTitle={course.title}
          jwtToken={jwtToken || undefined}
        />
      )}
    </div>
  );
  
};

export default CourseCard;
