type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex size-full flex-col">{children}</div>
    </div>
  );
};

export default LessonLayout;
