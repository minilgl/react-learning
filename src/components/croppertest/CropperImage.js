import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "src/components/croppertest/CropperImage.css";

const defaultSrc = "/static/images/sample.jpg";

const CropperImage = (props) => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Labeling"
      />
      <Divider />
      <CardContent style={{ padding:"0px" }}>
        <div>
          <div style={{ width: "100%" }}>
            <input type="file" onChange={onChange} style={{ display:"none" }} />
            <button style={{ display:"none" }}>Use default img</button>
            <br />
            <Cropper
                style={{ height: "100%", width: "100%" }}
                zoomTo={0}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                guides={true}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
            />
          </div>
          <div style={{display : "none"}}>
            <div
                className="box"
                style={{ width: "50%", float: "right", height: "300px" }}
            >
              <h1>
                <span>Crop</span>
                <button style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
              </h1>
              <img style={{ width: "100%" }} src={cropData} alt="cropped" />
            </div>
          </div>
          <br style={{ clear: "both" }} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CropperImage;
