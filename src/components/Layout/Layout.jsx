import React from 'react';

function MyLayout({ children }) {
    return (
        <main>
            <div>{children}</div>
        </main>
    );
}

export default MyLayout;
