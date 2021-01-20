export default class ImageModel {
  full: String;
  medium: String;
  low_medium: String;
  thumb: String;
  public_id?: String;

  constructor(data?: any) {

    if (data === 'avatar') {
      this.full = "https://res.cloudinary.com/dyigive9u/image/upload/v1610015867/default-user-icon_xuqjw7.jpg";
      this.medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1610015867/default-user-icon_xuqjw7.jpg";
      this.low_medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_low_medium/v1610015867/default-user-icon_xuqjw7.jpg";
      this.thumb = "https://res.cloudinary.com/dyigive9u/image/upload/t_thumb/v1610015867/default-user-icon_xuqjw7.jpg";
      this.public_id = '';

    }else if (data === 0) {
      this.full = "https://res.cloudinary.com/dyigive9u/image/upload/v1609233274/ojty0jq09f6z8ttshbrx_eepnts.jpg";
      this.medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1609233274/ojty0jq09f6z8ttshbrx_eepnts.jpg";
      this.low_medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_low_medium/v1609233274/ojty0jq09f6z8ttshbrx_eepnts.jpg";
      this.thumb = "https://res.cloudinary.com/dyigive9u/image/upload/t_thumb/v1609233274/ojty0jq09f6z8ttshbrx_eepnts.jpg";
      this.public_id = '';

    } else if (data === 1){
      this.full = "https://res.cloudinary.com/dyigive9u/image/upload/v1609233677/eco_tsuyut.jpg";
      this.medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1609233677/eco_tsuyut.jpg";
      this.low_medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_low_medium/v1609233677/eco_tsuyut.jpg";
      this.thumb = "https://res.cloudinary.com/dyigive9u/image/upload/t_thumb/v1609233677/eco_tsuyut.jpg";
      this.public_id = '';

    } else if (data) {
      this.full = data.full;
      this.medium = data.medium;
      this.low_medium = data.low_medium;
      this.thumb = data.thumb;
      this.public_id = data.public_id;

    }else{
      this.full = "https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png";
      this.medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1611173096/default_image_01_scb2id.png";
      this.low_medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_low_medium/v1611173096/default_image_01_scb2id.png";
      this.thumb = "https://res.cloudinary.com/dyigive9u/image/upload/t_thumb/v1611173096/default_image_01_scb2id.png";
      this.public_id = '';
    }

  }
}
