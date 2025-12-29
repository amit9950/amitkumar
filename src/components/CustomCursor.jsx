import { useState, useEffect } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Mouse move event handler
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener on mount
        window.addEventListener('mousemove', moveHandler);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('mousemove', moveHandler);
        };
    }, []); // Empty dependency array to run only on mount/unmount

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 [z-9999]"
            style={{
                transform: `translate(${position.x - 40}px, ${position.y - 40}px)`, // Adjusting cursor position
            }}
        >
            {/* Custom cursor element */}
            <div className="w-20 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
        </div>
    );
}

