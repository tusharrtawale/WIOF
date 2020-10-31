import { FormGroup } from "@angular/forms";
export class EnvDay {
  id: string;
  month: string;
  day: string;
  occasion: string;
  image: string;
  description:string;
  showMoreLink:string;

  constructor(day,month,occasion,image,description,showMoreLink){
    this.day=day;
    this.month=month;
    this.occasion=occasion;
    this.image=image;
    this.description=description;
    this.showMoreLink=showMoreLink;
  }

  static formatImageName(imageName: string) {
    let newImageName = "";
    if (imageName) {
      const imgNameArr = imageName.split("\\");
      newImageName = "_" + imgNameArr[imgNameArr.length - 1];
    }
    return Date.now() + newImageName; // add timestamp to image name to keep it unique
  }
  static getMonth(day) {
    return String(parseInt(day) - 1);
  }
  static createByForm(addOccasionForm: FormGroup) {
    return new EnvDay(
      addOccasionForm.value.day,
      this.getMonth(addOccasionForm.value.month),
      addOccasionForm.value.occasion,
      this.formatImageName(addOccasionForm.value.image),
      addOccasionForm.value.description,
      addOccasionForm.value.showMoreLink      
    );
  }
}
