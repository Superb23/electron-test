import "./index.less";
import { FC, memo, useState } from "react";
import { Upload, Button, UploadProps, GetProp, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ResultContent } from "./result-content";
import { RcFile } from "antd/es/upload";
import * as XLSX from "xlsx";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const Home: FC = memo(() => {
  const [fileList, setFileList] = useState<UploadFile<RcFile>[]>([]);
  const [uploading, setUploading] = useState(false);
  const [curData, setCurData] = useState<Record<string, string>[]>([]);
  const [resultVisible, setResultVisible] = useState(false);

  const props: UploadProps = {
    onRemove: (file) => {
      setFileList([]);
      setCurData([]);
      setResultVisible(false);
    },
    beforeUpload: (file) => {
      // 单文件上传
      setFileList([file]);
      // 读取excel
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const file = e.target?.result;
        const workBook = XLSX.read(file, { type: "binary" });
        const fileName = workBook.SheetNames[0];
        const fileData = XLSX.utils.sheet_to_json(
          workBook.Sheets[fileName]
        ) as Record<string, string>[];
        console.log(fileData);
        setCurData(fileData);
      };

      fileReader.readAsArrayBuffer(file);

      return false;
    },
    fileList,
    showUploadList: {
      extra: ({ size = 0 }) => (
        <span style={{ color: "#cccccc" }}>
          ({(size / 1024 / 1024).toFixed(2)}MB)
        </span>
      ),
    },
  };

  return (
    <div className='home-container'>
      <Upload {...props}>
        <div className='upload-btns'>
          <Button icon={<UploadOutlined />}>上传文件</Button>
          <Button
            type={uploading ? "default" : "primary"}
            onClick={(e) => {
              e.stopPropagation();
              setResultVisible(true);
            }}
            disabled={fileList.length === 0}
            loading={uploading}
          >
            {uploading ? "计算中" : "开始计算"}
          </Button>
        </div>
      </Upload>
      <ResultContent visible={resultVisible} fileData={curData} />
    </div>
  );
});

export default Home;
