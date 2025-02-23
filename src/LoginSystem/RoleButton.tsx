import React from 'react'; 
import { UserCog, ChartLine } from 'lucide-react'; 
interface RoleButtonProps {
  role: 'ผู้ดูแลระบบ' | 'ผู้ค้าตราสารหนี้'; 
  isSelected: boolean; 
  onClick: () => void; 
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, isSelected, onClick }) => {
  const Icon = role === 'ผู้ดูแลระบบ' ? UserCog : ChartLine;
  const color = role === 'ผู้ดูแลระบบ' ? 'gray' : 'yellow';

  return (
    <button
      className={`role-button text-${color}-500 border-2 border-${color}-500 rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 ${
        
        isSelected ? `bg-${color}-500 text-white shadow-lg` : `hover:bg-${color}-100`
      }`}
      
      onClick={onClick}
    >
     
      <Icon className="h-16 w-16 mb-2" />
     
      <span className="text-sm font-semibold">{role}</span>
    </button>
  );
};

export default RoleButton; // ส่งออก component RoleButton เพื่อใช้ในไฟล์อื่น
