import Image from 'next/image';

const BannerHeader = ({
    title,
    image,
    className
}: {
    title: string;
    image: string;
    className?: string;
}) => {
    return (
        <div className="md:mt-[100px]">
            <div className="relative z-10 h-[300px]">
                <Image className="object-cover" alt="" src={image} fill />
                <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default BannerHeader;
