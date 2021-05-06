import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import "cropperjs/dist/cropper.css";
import "src/components/croppertest/CropperImage.css";

const CropperPreview = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Preview"
      />
      <Divider />
      <CardContent>
        <div>
            <div className="box" style={{ width: "100%" }}>
              <div
                  className="img-preview"
                  style={{ width: "100%", height: "300px" }}
              />
            </div>
            <br />
        </div>
      </CardContent>
    </Card>
  );
};

export default CropperPreview;
