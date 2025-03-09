import "./index.less";
import { FC, memo, useState } from "react";
import { Upload, Button, UploadProps, GetProp, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const Home: FC = memo(() => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    // fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setFileList([]);
    //     message.success("upload successfully.");
    //   })
    //   .catch(() => {
    //     message.error("upload failed.");
    //   })
    //   .finally(() => {
    //     setUploading(false);
    //   });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <div className='home-container'>
      <div>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>上传文件</Button>
        </Upload>
      </div>

      <Button
        type={uploading ? "default" : "primary" }
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
      >
        {uploading ? "计算中" : "开始计算"}
      </Button>
    </div>
  );
});

export default Home;
