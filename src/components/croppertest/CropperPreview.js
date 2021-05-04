import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "src/components/croppertest/CropperImage.css";

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const CropperPreview = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Preview"
      />
      <Divider />
      <CardContent>
        <div>
          <div>
            <div className="box" style={{ width: "100%" }}>
              <div
                  className="img-preview"
                  style={{ width: "100%", height: "300px" }}
              />
            </div>
          </div>
          <br />
        </div>
      </CardContent>
    </Card>
  );
};

export default CropperPreview;
