import React, { useState } from "react";
import { Progress } from "reactstrap";

function Test(props) {
  let { id, label, uploadUrl } = props;
  const [isUploding, setUploding] = useState(false);
  const [uploadedImgs, setUplodedImgs] = useState([]);
  const [uploadProgress, setProgress] = useState(0);

  const handleChange = async (e) => {
    let { files } = e.target;

    // let formData = new FormData();
    // _.forEach(files, (file) => {
    //   formData.append("files", file);
    // });

    // setUploding(true);
    // let { data } = await API.post(uploadUrl, formData, {
    //   onUploadProgress: ({ loaded, total }) => {
    //     let progress = ((loaded / total) * 100).toFixed(2);
    //     setProgress(progress);
    //   },
    // });
    // setUplodedImgs(data);
    // setUploding(false);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor={id} className="text-primary font-weight-bold">
          {label}
        </label>
        <div className="d-flex">
          <div className="d-flex">
            <div className="file-uploader-mask d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-primary">Primary</button>
            </div>
            <input
              multiple
              className="file-input"
              type="file"
              id={id}
              onChange={handleChange}
            />
          </div>
          {isUploding ? (
            <div className="flex-grow-1 px-2">
              <div className="text-center">{uploadProgress}%</div>
              <Progress value={uploadProgress} />
            </div>
          ) : null}
        </div>
        <div className="d-flex flex-wrap mt-4">
          {uploadedImgs && !isUploding
            ? uploadedImgs.map((uploadedImg) => (
                <img
                  src={uploadedImg}
                  key={uploadedImg}
                  alt="UploadedImage"
                  className="img-thumbnail img-fluid uploaded-img mr-2"
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Test;
