import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ExampleProduct() {
    return (
        <div className="flex h-screen">
            {/* Left half for the 3D model */}
            <div className="flex flex-col items-center justify-center w-1/2">
                <model-viewer
                    src="/media/3dModels/jewelry_product_placement.glb"
                    alt="A 3D model of a ring"
                    // auto-rotate
                    camera-controls
                    ar
                    style={{ width: '100%', height: '500px' }}
                >
                </model-viewer>
            </div>
            
        </div>
    );
}

export default ExampleProduct;
