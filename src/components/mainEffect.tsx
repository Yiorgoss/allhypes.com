import Image from 'next/image';
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
            className={`absolute mt-[-30vh] h-[60vh] w-[60vw] grayscale transition-transform duration-500 ${
                active ? 'z-20 scale-110 ' + rotation : 'z-10 ' + rotation
            }`}
        >
            <Image
                className="mx-auto "
                src={url}
                alt="alt"
                height={height}
                width={width}
            />
        </div>
    );
};
const Title = ({
    title,
    index,
    setRotation,
    setIndex
}: {
    title: string;
    index: number;
    setRotation: (itemIndex: number) => void;
    setIndex: (index: number) => void;
}) => {
    return (
        <div
            className="md:w-fit w-full text-center"
            onMouseEnter={() => setRotation(index)}
            onMouseLeave={() => setIndex(-1)}
        >
            <h1 className="block border-none text-[10vw] leading-[1.25] hover:text-secondary ">
                {title}
            </h1>
        </div>
    );
};
const MainEffect = ({
    data
}: {
    data: { title: string; url: string; height: number; width: number }[];
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
    const [rotation, setRotation] = useState(new Array(data.length).fill(''));

    const handleSetRotation = (itemIndex: number) => {
        const newRotation =
            rotationArr[Math.floor(Math.random() * rotationArr.length)];
        //Math.random() * 7 * Math.round(Math.random() ? 1 : -1);
        console.log(newRotation);
        const tempState = [...rotation];
        tempState[itemIndex] = newRotation;
        setRotation(tempState);
        setActiveIndex(itemIndex);
    };
    return (
        <div className="z-20 my-[6.597vw]">
            <div className="relative z-20 block pb-[10vh] text-secondary hover:text-[#bababa]">
                {data.map(({ title }, i) => (
                    <Title
                        title={title}
                        index={i}
                        setRotation={handleSetRotation}
                        setIndex={setActiveIndex}
                        key={i}
                    />
                ))}
            </div>
            <div className="fixed top-[100px] z-10 my-auto hidden md:flex h-screen w-full items-center justify-center bg-transparent">
                {data.map(({ url, height, width }, i) => (
                    <CImage
                        url={url}
                        active={activeIndex == i}
                        rotation={rotation[i]}
                        key={i}
                        height={height}
                        width={width}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainEffect;
