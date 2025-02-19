import { toast } from 'sonner';

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  actionLabel?: string;
  onActionClick?: () => void;
}

export const showToast = ({
    message,
    type = 'info',
    duration = 4000,
    actionLabel,
    onActionClick,
  }: ToastOptions) => {
    const isMobile = window.innerWidth <= 768;
    const position = isMobile ? 'bottom-center' : 'top-right';
  
    toast[type](message, {
      position,
      duration,
      action: actionLabel && onActionClick
        ? {
            label: actionLabel,
            onClick: () => onActionClick(),
          }
        : undefined,
    });
  };
  
