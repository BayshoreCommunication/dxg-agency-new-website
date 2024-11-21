interface HeaderTextProps {
  preText?: string;
  coloredText: string;
  postText?: string;
  variant?: 'section' | 'caps';
  texAlign?: 'text-center' | 'text-right' | 'text-left';
}
export const HeaderTextStyle: React.FC<HeaderTextProps> = ({
  preText,
  coloredText,
  postText,
  variant = 'section',
  texAlign = 'text-center',
}) => {
  if (variant === 'section')
    return (
      <h1 className={`${texAlign} text-2xl font-bold text-white md:text-4xl`}>
        {preText}{' '}
        <span className='border-b border-b-brand text-brand'>
          {coloredText}
        </span>{' '}
        {postText}
      </h1>
    );
  return (
    <h1
      className={`${texAlign} text-3xl font-bold uppercase text-white md:text-5xl`}
    >
      {preText} <span className='uppercase text-brand'>{coloredText}</span>{' '}
      {postText}
    </h1>
  );
};
