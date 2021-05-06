import { v4 as uuid } from 'uuid';

export default {
  id: uuid(),
  file_name: "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg",
  image_height: 720,
  image_width: 1280,
  ml_result: [
      {
        "px":679,
        "py":439,
        "pw":51,
        "ph":44,
        "class_id":0,
        "class_name":"car",
        "color":"#f44336"
      },
      {
        "px":553,
        "py":335,
        "pw":126.66666666666669,
        "ph":91.66666666666669,
        "class_id":0,
        "class_name":"car",
        "color":"#f44336"
      }
  ],
  obj_count: 2
};
