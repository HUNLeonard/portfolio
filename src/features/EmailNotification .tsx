import { Check, X, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from "../utils/cn";

export type NotificationType = 'success' | 'error' | null;

interface EmailNotificationProps {
  type: NotificationType;
  message: string;
  visible: boolean;
  onClose: () => void;
}

const EmailNotification = ({ type, message, visible, onClose }: EmailNotificationProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
          onClose();
        }, 300);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  const bgColorClass = type === 'success'
    ? 'bg-gradient-to-r from-green-500 to-green-700'
    : 'bg-gradient-to-r from-red-500 to-red-700';

  const Icon = type === 'success' ? Check : AlertCircle;

  return (
    <div
      className={cn(
        "fixed top-4 inset-x-4 sm:top-6 sm:right-6 sm:left-auto sm:max-w-md z-50 transition-all duration-300 transform",
        isExiting ? "translate-y-[-100%] sm:translate-y-0 sm:translate-x-full opacity-0" : "translate-y-0 sm:translate-x-0 opacity-100"
      )}
    >
      <div className="relative">
        <div className={`absolute -inset-1 ${bgColorClass} rounded-lg blur opacity-30`} />
        <div className="relative p-3 sm:p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-lg">
          <div className="flex items-start">
            <div className={cn(
              "flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center",
              type === 'success' ? "bg-green-500 bg-opacity-20" : "bg-red-500 bg-opacity-20"
            )}>
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm sm:text-base font-medium text-gray-200 truncate">
                {type === 'success' ? 'Success!' : 'Error'}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-400 break-words">
                {message}
              </p>
            </div>
            <button
              onClick={() => {
                setIsExiting(true);
                setTimeout(() => {
                  setIsExiting(false);
                  onClose();
                }, 300);
              }}
              className="ml-2 sm:ml-4 flex-shrink-0 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotification;