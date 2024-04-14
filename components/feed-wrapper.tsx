type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
};

export const FeedWrapper = ({ children }: Props) => {
  return <div className="relative top-0 flex-1 pb-10">{children}</div>;
};
