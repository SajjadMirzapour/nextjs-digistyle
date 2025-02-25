const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function BackgroundImageSkeleton() {
    return (
        <div
            className={`${shimmer} w-full h-screen relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
        </div>
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-6">
            <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm md:h-[300px] h-[250px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 md:h-[200px] h-[150px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div>
            <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm md:h-[300px] h-[250px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 md:h-[200px] h-[150px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div><div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm md:h-[300px] h-[250px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 md:h-[200px] h-[150px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div><div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm md:h-[300px] h-[250px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 md:h-[200px] h-[150px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export function CategoryCardSkeleton() {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-[300px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 h-[200px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div> <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-[300px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 h-[200px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div> <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-[300px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 h-[200px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div> <div
                className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-[300px]`}
            >
                <div className="flex items-center p-4">
                    <div className="h-6 w-6 ml-2 rounded-md bg-gray-200" />
                    <div className="ml-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium" />
                </div>
                <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 h-[200px]">
                    <div className="h-7 w-20 rounded-md bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export function UserInfoSkeleton() {
    return (
    <div
        className={`${shimmer} relative overflow-hidden rounded-full bg-gray-100 p-2 shadow-lg w-[30px] h-[30px]`}
    >
    </div>
    )
}