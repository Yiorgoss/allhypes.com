import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

const CImage = ({
    url,
    active,
    rotation,
    height,
    width
}: {
    url: string;
    active: boolean;
    rotation: number;
    height: number;
    width: number;
}) => {
    return (
        <div
            className={`absolute h-[60vh] w-[60vw] grayscale transition-transform duration-500 ${
                active ? 'z-20 scale-110 ' + rotation : 'z-10 ' + rotation
            }`}
        >
            <Image
                className="mx-auto object-contain"
                src={url}
                alt="alt"
                fill
            />
        </div>
    );
};
const Title = ({
    title,
    index,
    href,
    setRotation,
    setIndex
}: {
    title: string;
    index: number;
    href: string;
    setRotation: (itemIndex: number) => void;
    setIndex: (index: number) => void;
}) => {
    return (
        <div
            className="w-full pt-6 text-center tracking-wider md:w-fit md:pl-10"
            onMouseEnter={() => setRotation(index)}
            onMouseLeave={() => setIndex(-1)}
        >
            <Link href={href}>
                <h1 className="block border-none text-2xl md:text-[6vw] leading-[1.25] hover:text-secondary ">
                    {title}
                </h1>
            </Link>
        </div>
    );
};
const MainEffect = ({
    effectData
}: {
    effectData: {
        title: string;
        href: string;
        imageData: { url: string; height: number; width: number };
    }[];
}) => {
    const rotationArr = [
        'rotate-2',
        '-rotate-2',
        'rotate-4',
        '-rotate-4',
        'rotate-6',
        '-rotate-6',
        'rotate-8',
        '-rotate-8',
        'rotate-10',
        '-rotate-10'
    ];
    const [activeIndex, setActiveIndex] = useState(-1);
    const [rotation, setRotation] = useState(
        new Array(effectData.length).fill('')
    );

    const handleSetRotation = (itemIndex: number) => {
        const newRotation =
            rotationArr[Math.floor(Math.random() * rotationArr.length)];
        //Math.random() * 7 * Math.round(Math.random() ? 1 : -1);
        const tempState = [...rotation];
        tempState[itemIndex] = newRotation;
        setRotation(tempState);
        setActiveIndex(itemIndex);
    };
    return (
        <div className="z-20 bg-primary pt-[100px]">
            <div className="relative uppercase z-20 block pt-20 md:pt-0 pb-[10vh] text-secondary hover:text-[#bababa]">
                {effectData.map(({ title, href }, i) => (
                    <Title
                        title={title}
                        href={href}
                        index={i}
                        setRotation={handleSetRotation}
                        setIndex={setActiveIndex}
                        key={i}
                    />
                ))}
            </div>
            <div className="fixed top-0 z-10 my-auto hidden h-screen w-full items-center justify-center bg-transparent md:flex">
                {effectData.map(({ imageData }, i) => (
                    <CImage
                        url={imageData.url}
                        active={activeIndex == i}
                        rotation={rotation[i]}
                        key={i}
                        height={imageData.height}
                        width={imageData.width}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainEffect;
