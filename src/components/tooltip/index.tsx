import React, { useEffect } from 'react';

interface TooltipProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
            {message}
        </div>
    );
};

export default Tooltip;
