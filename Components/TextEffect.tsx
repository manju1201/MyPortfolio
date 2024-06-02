import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        // 'Full Stack Developer',
        // 1000,
        // 'Machine Learning Engineer',
        // 1000,
      ]}
      speed={50}
      className='text-[2rem] md:text-[2rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;