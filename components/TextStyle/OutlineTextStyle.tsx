interface OutlineTextProps {
  preText?: string;
  coloredText: string;
  postText?: string;
}

export const OutlineTextStyle: React.FC<OutlineTextProps> = ({
  preText,
  coloredText,
  postText,
}) => {
  return (
    <h1 className='text-5xl font-bold uppercase text-white md:text-6xl'>
      {preText}{' '}
      <span className=' outline-with-shaddow uppercase '>{coloredText}</span>{' '}
      {postText}
    </h1>
  );
};
