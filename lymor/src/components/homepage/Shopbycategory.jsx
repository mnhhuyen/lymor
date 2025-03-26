import React from 'react'

function ShopByCate() {
    return (
        <div className="text-center pt-24 justify-center min-h-screen bg-white">
            <h1 className="mb-2 category-title">TRANG SỨC</h1>
            <p className="text-gray-600 mb-10">Designs feature the world’s finest diamonds and unparalleled craftsmanship—signatures of the House for almost two centuries.</p>
            <div className="category-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20">
                <div>
                    <img src="https://placehold.co/300x300" alt="Necklace with a pendant" className="w-full" />
                    <p className="mt-2 font-bold">Dây chuyền & Mặt dây chuyền</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Pair of earrings" className="w-full" />
                    <p className="mt-2 font-bold">Khuyên tai</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Set of bracelets" className="w-full" />
                    <p className="mt-2 font-bold">Lắc tay</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Set of rings" className="w-full" />
                    <p className="mt-2 font-bold">Nhẫn</p>
                </div>
            </div>
        </div>
    );
}

export default ShopByCate;