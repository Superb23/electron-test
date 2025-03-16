import { FC, memo } from "react";
import "./index.less";

interface ResultContentProps {
  visible: boolean;
  fileData: Record<string, string>[];
}

export const ResultContent: FC<ResultContentProps> = memo((props) => {
  const { visible, fileData } = props;

  if (!visible) {
    return null;
  }

  return (
    <div className='result-container'>
      {fileData.map((item, index) => {
        return (
          <div key={`${item.toString()}_${index}`}>
            {Object.keys(item).map((key) => {
              return (
                <span key={key}>
                  {key}: {item?.[key]}
                  {"， "}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
