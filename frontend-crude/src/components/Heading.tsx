interface HeadingProps {
  title: string;
  subtitle?: string;
  hasButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Heading({
  title,
  subtitle,
  hasButton,
  buttonText,
  onButtonClick,
}: HeadingProps) {
  return (
    <div className="flex justify-between gap-4 items-start mb-4 flex-col md:flex-row">
      <div className="gap-2 flex flex-col">
        <h1 className="text-3xl font-bold ">{title}</h1>
        {subtitle && <span className="-">{subtitle}</span>}
      </div>
      {hasButton && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
