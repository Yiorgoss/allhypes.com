import Link from 'next/link';
import Image from 'next/image';

const TextPortion = ({
    className,
    title,
    content
}: {
    className?: string;
    title?: string;
    content?: string;
}) => {
    return (
        <div className={`flex flex-col justify-start ${className}`}>
            <h3 className="mt-6 mb-10 text-center text-3xl font-medium tracking-wider">
                {title}
            </h3>
            <div className="px-10 text-lg tracking-wide">{content}</div>
        </div>
    );
};

const ImagePortion = ({
    className,
    image
}: {
    className: string;
    image: string;
}) => {
    return (
        <div
            className={`relative order-first h-[400px] overflow-hidden rounded-lg ${className}`}
        >
            <Image src={image} alt="" fill className="object-cover" />
        </div>
    );
};
const ServiceSection = ({
    isLeft,
    title,
    content,
    image,
    className
}: {
    isLeft: boolean;
    title?: string;
    content?: string;
    image: string;
    className?: string;
}) => {
    return (
        <div className={`py-10 ${className}`}>
            <div className="grid min-h-[400px] grid-cols-1 gap-5 overflow-hidden md:grid-cols-2">
                <TextPortion title={title} content={content} />
                <ImagePortion
                    image={image}
                    className={`object-cover ${
                        isLeft ? 'md:order-first' : 'md:order-last'
                    }`}
                />
            </div>
        </div>
    );
};

const DescSection = ({
    data
}: {
    data: { title: string; image: string; content: string }[];
}) => {
    return (
        <>
            <div className="">
                {data.map(({ title, image, content }, index) => (
                    <ServiceSection
                        isLeft={index % 2 == 0}
                        title={title}
                        image={image}
                        content={content}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};
export default DescSection;
