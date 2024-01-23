type TitleLabelProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

const TitleLabel = ({
  text,
  backgroundColor = "#041C3780",
  textColor = "text-white",
  borderColor = "#FFDA56",
}: TitleLabelProps) => {
  return (
    <div
      style={{
        backgroundColor,
        borderLeft: `2px solid ${borderColor}`,
      }}
      className={`label w-fit p-1 ${textColor}`}>
      <p className="font-rubik text-sm font-normal">{text}</p>
    </div>
  );
};

export default TitleLabel;
